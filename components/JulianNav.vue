<script setup lang="ts">
import IconLink from "~/components/IconLink.vue";

const props = defineProps<{
  top: String,
  left?: String,
  right?: String
}>()

const scale = 1 / 10
const pixelOffset = 160
const offset = pixelOffset * scale

let topLoaded = ref(false)
let bottomLoaded = ref(false)

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  const container = document.getElementById("container") as HTMLDivElement
  const top = document.getElementById("top") as HTMLImageElement
  const bottom = document.getElementById("bottom") as HTMLImageElement

  bothLoaded().then(() => {
    const width = top.width =
        bottom.width = top.width * scale
    top.style.top = `${offset}px`

    let initTop = container.getBoundingClientRect().top

    if(initTop < 0 || isNaN(initTop)) {
      initTop += window.scrollY
      container.style.top = `${window.scrollY + initTop}px`
    }

    top.style.visibility = "visible"
    bottom.style.visibility = "visible"

    container.style.maxWidth = `${width}px`

    window.onscroll = (event: Event) => {
      container.style.top = `${window.scrollY + initTop}px`
    }
  })
});

function bothLoaded(): Promise<void> {
  return new Promise((resolve, reject) => {
    if(!topLoaded.value || !bottomLoaded.value) {
      setTimeout(() => {
        bothLoaded().then(resolve).then(reject)
      }, 10)
    }
    else {
      resolve()
    }
  })
}


</script>

<template>

  <div id="container">
    <img id="top" @load="topLoaded=true" style="visibility: hidden"
             src="~/assets/julian-stuff/julianfacetop.png" alt="julian face top"/>
    <div id="links">
      <IconLink name="home" to="/">
        <img src="~/assets/home/fishie.gif" alt="fishie icon"/>
      </IconLink>

      <IconLink name="dating" to="/dating">
        <img src="~/assets/dating/earthhearts.gif" alt="earth hearts icon"/>
      </IconLink>
    </div>
    <img id="bottom" @load="bottomLoaded=true" style="visibility: hidden"
         src="~/assets/julian-stuff/julianfacebottom.png" alt="julian face bottom"/>
  </div>

</template>

<style scoped>

#container {
  position: absolute;
  display: block;
  top: v-bind(top);
  left: v-bind(left);
  right: v-bind(right);
  z-index: 5;
}

#container:hover img {
  filter: drop-shadow(0 0 2em #ae8578);
}

#links {
  visibility: collapse;
  max-height: 0;
  transform: scaleY(0);
  margin: 0;
  transition: all 1s ease-in-out;
}

#container:hover #links {
  visibility: visible;
  margin: 9%;
  max-height: 1000px;
  transform: scaleY(1);
}

img {
  position: relative;
  object-fit: scale-down;
  filter: drop-shadow(1rem 1rem rgba(0, 0, 0, 0.45));

  will-change: filter;
  transition: filter 300ms;
}

</style>