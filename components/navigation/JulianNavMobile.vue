<script setup lang="ts">
import NavLinks from "~/components/navigation/NavLinks.vue";

defineProps<{
  top?: String,
  bottom?: String
  left?: String,
  right?: String,
}>()

const posed = ref()
const standing = ref()
const popout = ref()
const links = ref()

let showing = false

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  if(window.matchMedia("(pointer: coarse)").matches) {
    hide()
  }

  posed.value.ontouchend = () => {
    hide()
  }

  standing.value.ontouchend = () => {
    show()
  }

  links.value.ontouchend = () => {
    hide()
  }
})

function hide() {
  showing = false
  standing.value.style.display = "inherit"
  posed.value.style.display = "none"
  popout.value.style.left = `${window.innerWidth + popout.value.clientWidth}px`
}

function show() {
  showing = true
  standing.value.style.display = "none"
  posed.value.style.display = "block"
  popout.value.style.left = `${0}px`
}

onClickOutside(posed => {
  if(showing)
    hide()
})

</script>

<template>
  <img class="julian" id="posed" ref="posed"
       src="~/assets/julian/posed.png" alt="julian nav posed">

  <img class="julian" id="standing" ref="standing"
       src="~/assets/julian/standing.png" alt="julian nav standing">

  <div id="popout" ref="popout">
    <NavLinks ref="links"/>
  </div>

</template>

<style scoped>

#popout {
  position: fixed;
  display: block;

  padding: 20px;
  top: 2vh;

  background-color: rgba(12, 12, 12, 0.95);
  border-radius: 35px;
  width: 65vw;
  height: auto;
  transition: all 0.75s ease-in-out;
  z-index: 98;
}

#popout * {
  font-size: 30px;
}

.julian {
  position: fixed;
  top: v-bind(top);
  bottom: v-bind(bottom);
  left: v-bind(left);
  right: v-bind(right);

  max-width: 15vw;
  height: auto;
  z-index: 99;
}

/* computers */
@media (pointer: fine) {
  .julian, #popout {
    display: none;
  }
}

</style>