<script setup lang="ts">

import paper from "paper";
import {ref} from "vue";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const minScale = 0.15
const maxScale = 5
const baseSpeed = 3.5
const baseRotation = 0.75

const radius1 = 10
const radius2 = 5

const starArr: Star[] = []

class Star {
  static definition = new paper.SymbolDefinition(
      new paper.Path.Star({
        center: [0, 0],
        points: 5,
        radius1: radius1,
        radius2: radius2,
        fillColor: "green"
      }))

  instance: paper.SymbolItem
  scale = random(minScale, maxScale)
  moveSpeed = (1 / this.scale) * baseSpeed
  rotSpeed = (1 / this.scale) * baseRotation
  done = false

  constructor() {
    this.instance = Star.definition.place()

    const spawn = new paper.Point({
      x: random(0, paper.view.viewSize.width),
      y: random(0, paper.view.viewSize.height * 0.75)
    })

    // this.instance.opacity = 0
    this.instance.position = spawn
    this.instance.scale(this.scale)
    this.instance.rotation = random(0, 360)
  }

  fall() {
    if (this.instance.opacity < 1)
      this.instance.opacity += 0.01

    if (this.instance.position.y > paper.view.bounds.height) {
      this.instance.rotate(this.rotSpeed)
      this.instance.position.y += this.moveSpeed
    } else {
      this.instance.remove()
      const index = starArr.indexOf(this)
      starArr.slice(index, 1)
      this.regen()
    }
  }

  regen() {
    if (!this.done)
      starArr.push(new Star())

    this.done = true
  }
}

function initStars(wanted: number) {
  for (let i = 0; i < wanted; i++) {
    const star = new Star()
    starArr.push(star)
  }
}

function runStars() {
  for (const star of starArr) {
    star.fall()
  }
}

let canvas = ref<HTMLCanvasElement>()
const container = ref<HTMLDivElement>()

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick();
  if (canvas.value !== undefined) {
    paper.setup(canvas.value)

    paper.view.viewSize = new paper.Size(container.value!.clientWidth, container.value!.clientHeight)

    initStars(75)

    afterMount()
  }
});

function afterMount() {
  paper.view.onFrame = function () {
    runStars()
  }
}

// paper.view.onResize = function () {
//   canvas!.width = window.innerWidth
//   canvas!.height = window.innerHeight
// }

</script>

<style scoped>

#canvas {
  z-index: -1;
  position: absolute;
  //background-color: #1a1a1a;
}

</style>

<template>
  <div id="container" ref="container">
    <canvas id="canvas" ref="canvas"></canvas>
    <slot></slot>
  </div>
</template>