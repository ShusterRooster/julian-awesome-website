<script setup lang="ts">
import NavLinks from "~/components/navigation/NavLinks.vue";

defineProps<{
  top: String,
  left?: String,
  right?: String,
}>()

let scale = 1 / 10
let pixelOffset = 210

const offset = pixelOffset * scale

let topLoaded = ref(false)
let bottomLoaded = ref(false)

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  const nav = document.getElementById("nav") as HTMLDivElement
  const top = document.getElementById("top") as HTMLImageElement
  const bottom = document.getElementById("bottom") as HTMLImageElement


  bothLoaded().then(() => {
    const width = top.width =
        bottom.width = top.width * scale
    top.style.top = `${offset}px`

    top.style.visibility = "visible"
    bottom.style.visibility = "visible"
    nav.style.maxWidth = `${width}px`
  })
});

function bothLoaded(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!topLoaded.value || !bottomLoaded.value) {
      setTimeout(() => {
        bothLoaded().then(resolve).then(reject)
      }, 10)
    } else {
      resolve()
    }
  })
}


</script>

<template>

  <div id="nav">
    <img id="top" @load="topLoaded=true" style="visibility: hidden"
         src="../../assets/julian-stuff/julianfacetop.png" alt="julian face top"/>
    <NavLinks id="links"></NavLinks>
    <img id="bottom" @load="bottomLoaded=true" style="visibility: hidden"
         src="../../assets/julian-stuff/julianfacebottom.png" alt="julian face bottom"/>
  </div>

</template>

<style scoped>

#nav {
  position: fixed;
  display: block;
  top: v-bind(top);
  left: v-bind(left);
  right: v-bind(right);
  z-index: 5;
}

#nav:hover img {
  filter: drop-shadow(0 0 2em #ae8578);
}

#links {
  max-height: 0;
  transform: scaleY(0);
  margin: 0;
  transition: all 1s ease-in-out;
  border-radius: 10px;
}

#nav:hover #links {
  margin: 9%;
  max-height: 1000px;
  transform: scaleY(1);
  background-color: rgba(0,0,0,0.5);
}

img {
  position: relative;
  object-fit: scale-down;

  will-change: filter;
  transition: filter 300ms;
}

/* touchscreens n stuff */
@media (pointer:coarse) {
  #nav {
    display: none;
  }
}
</style>