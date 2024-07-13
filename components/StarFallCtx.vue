<script setup lang="ts">
import {ref} from "vue";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function constrain (n: number, low: number, high: number) {
  return Math.max(Math.min(n, high), low);
}

function map(n: number, start1: number, stop1: number, start2: number, stop2: number, withinBounds?: boolean) {
  const newVal = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newVal;
  }
  if (start2 < stop2) {
    return constrain(newVal, start2, stop2);
  } else {
    return constrain(newVal, stop2, start2);
  }
}

const starArr: Star[] = []

const minScale = 1
const maxScale = 5
const minRadius = 5
const maxRadius = 25

const baseSpeed = 2.5
const baseRotation = 1.5

class Star {
  ctx: CanvasRenderingContext2D
  radius: number
  x: number
  y: number
  points: number

  alpha = 0
  rotation = random(0, Math.PI * 2)
  scale = random(minScale, maxScale)

  fadeSpeed: number
  rotSpeed: number
  moveSpeed: number

  constructor(ctx: CanvasRenderingContext2D, radius?: number, x?: number, y?: number, points = 5) {
    this.ctx = ctx
    this.radius = radius ?? random(minRadius, maxRadius)
    this.x = x ?? random(0, ctx.canvas.width)
    this.y = y ?? random(0, ctx.canvas.height * 0.75)
    this.points = points

    this.fadeSpeed = (1 / (this.size)) * 0.5
    this.rotSpeed = (1 / this.size) * baseRotation
    this.moveSpeed = baseSpeed
  }

  get size() {
    return this.scale * this.radius
  }

  draw() {
    this.ctx.setTransform(this.scale, 0,0, this.scale, this.x, this.y);
    this.ctx.rotate(this.rotation);
    this.ctx.globalAlpha = this.alpha

    this.ctx.beginPath()
    this.ctx.moveTo(this.radius, 0);

    for(let i = 1; i <= this.points * 2; i++) {
      let x: number
      let y: number
      const theta = i * (Math.PI * 2) / (this.points * 2);

      if(i % 2 == 0){
        x = (this.radius * Math.cos(theta));
        y = (this.radius * Math.sin(theta));
      } else {
        x = ((this.radius / 2) * Math.cos(theta));
        y = ((this.radius / 2) * Math.sin(theta));
      }

      this.ctx.lineTo(x ,y);
    }
    this.ctx.closePath();
    // this.ctx.shadowColor = "green"
    // this.ctx.shadowBlur = 20
    this.ctx.fill()
    this.ctx.resetTransform()
  }

  fall() {
    if(this.alpha < 1 - this.fadeSpeed)
      this.alpha += this.fadeSpeed

    if(this.alpha >= 1)
      this.alpha = 1
    else if(this.alpha <= 0)
      this.alpha = 0

    if(this.y > this.ctx.canvas.height + this.size)
      this.regen()

    this.y += this.moveSpeed
    this.rotation += this.rotSpeed
    this.draw()
  }

  regen() {
    const index = starArr.indexOf(this)
    starArr.splice(index, 1)
    starArr.push(new Star(this.ctx))
  }
}


let canvas = ref<HTMLCanvasElement>()
const container = ref<HTMLDivElement>()

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick();
  const ctx = canvas.value!.getContext('2d') as CanvasRenderingContext2D

  const width = canvas.value!.width = container.value!.clientWidth
  const height = canvas.value!.height = container.value!.clientHeight
  ctx.fillStyle = "green"

  initStars(100)

  function initStars(wanted: number) {
    for (let i = 0; i < wanted; i++) {
      const star = new Star(ctx)
      starArr.push(star)
    }

    console.log(starArr)

    animate()
  }


  function animate() {
    ctx.resetTransform()
    ctx.clearRect(0, 0, width, height)

    for (const star of starArr) {
      star.fall()
    }

    requestAnimationFrame(animate)

  }

});

</script>

<style scoped>

#canvas {
  z-index: -1;
  position: absolute;
  //background-color: #1a1a1a;
}

</style>

<template>
  <div id="background" ref="container">
    <canvas id="canvas" ref="canvas"></canvas>
    <slot></slot>
  </div>
</template>