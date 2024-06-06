<script setup lang="ts">
import paper from "paper";
import {ref} from "vue";
defineProps<{
  backgroundColor?: String
}>()
function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const minRadius = 15
const maxRadius = 50
const maxSize = maxRadius ** 2
const baseSpeed = 3.5
const baseRotation = 0.75
const starArr: Star[] = []
class Star {
  point: paper.Point
  path: paper.Path
  radius2 = random(minRadius, maxRadius)
  radius1 = this.radius2 / 2
  done = false
  sizeRatio = 1 - ((this.radius1 * this.radius2) / maxSize)
  moveSpeed = this.sizeRatio * baseSpeed
  rotSpeed = this.sizeRatio * baseRotation
  constructor() {
    this.point = new paper.Point({
      x: random(0, paper.view.viewSize.width),
      y: random(0, paper.view.viewSize.height * 0.75)
    })
    this.path = new paper.Path.Star(this.point, 5, this.radius1, this.radius2)
    this.path.fillColor = new paper.Color(0, 1, 0, 0)
    this.path.rotation = random(0, 360)
    // this.path.shadowColor = this.path.fillColor
    // this.path.shadowBlur = ((this.radius1 * this.radius2) / maxSize) * 50
  }
  fall() {
    if (this.path.fillColor!.alpha < 1)
      this.path.fillColor!.alpha += 0.01
    if (this.path.position.y < paper.view.size.height + this.radius2) {
      this.path.rotate(this.rotSpeed)
      this.path.position.y += this.moveSpeed
    } else {
      this.path.remove()
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
    console.log(paper)
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
  background-color: v-bind(backgroundColor);
}
</style>

<template>
  <div id="container" ref="container">
    <canvas id="canvas" ref="canvas"></canvas>
    <slot></slot>
  </div>
</template>