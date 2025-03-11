<script setup lang="ts">

import ChangeLogEntry from "~/components/ChangeLogEntry.vue";

const {data: page} = await useAsyncData('changelogs', () => {
  return queryCollection('changelogs').all()
})


onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  const box = document.getElementById("box") as HTMLDivElement
  const div = box.clientWidth / 3;
  const cutoff = 1.5

  function transforms(x: number, y: number, el: HTMLDivElement) {
    const bounds = el.getBoundingClientRect();

    let calcX = -(y - bounds.y - (bounds.height / 2)) / div;
    let calcY = (x - bounds.x - (bounds.width / 2)) / div;

    calcX = constrain(calcX, -cutoff, cutoff)
    calcY = constrain(calcY, -cutoff, cutoff)

    // console.log("x", calcX)
    // console.log("y", calcY)

    return "perspective(100px) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
  }

  function constrain(n: number, low: number, high: number) {
    if (n > high)
      return high
    else if (n < low)
      return low
    else
      return n
  }

  let prevMouse: [number, number]

  function setTransform(e?: MouseEvent | Touch) {
    window.requestAnimationFrame(function () {
      if (e) {
        box.style.transform = transforms(e.clientX, e.clientY, box)
        prevMouse = [e.clientX, e.clientY]
      } else if (prevMouse) {
        box.style.transform = transforms(prevMouse[0], prevMouse[1], box)
      }
    });
  }

  if (!window.matchMedia("(pointer: coarse)").matches) {
    window.onmousemove = (e: MouseEvent) => {
      setTransform(e)
    };

    window.onscroll = (e: Event) => {
      setTransform()
    }
  }
})


</script>

<template>

  <div id="box">
    <div id="header">
      <span><img src="~/assets/misc/cyber_colors.gif" alt="cyber bear"></span>
      <h1>changelog!</h1>
      <span><img src="~/assets/home/wizz.gif" alt="epic wizard"></span>
    </div>
    <img src="~/assets/borders/starsilverborder.gif" alt="#epic star border">
    <div id="entries">

      <div v-for="update in page.slice().reverse()" :key="update.path">
        <ChangeLogEntry :title="update.title!" :date="update.date!">
          <ContentRenderer :value="update" class="blog log">
          </ContentRenderer>

        </ChangeLogEntry>
      </div>
    </div>
  </div>

</template>

<style scoped>
a {
  transition: color 0.3s;
}

a:hover {
  color: green;
}

#entries {
  max-height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1rem;
}

#header {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
}

#header img {
  height: 3rem;
  width: auto;
}

#box {
  display: flex;
  flex-direction: column;

  border-radius: 25px;
  background-image: url("~/assets/stars/nightstars.gif");
  background-position: center;
  background-size: cover;

  border: 2px solid rgba(205, 23, 116, 0.55);
  filter: drop-shadow(0 0 50px rgba(205, 23, 116, 0.55));

  padding: 25px;
}

img {
  width: 100%;
  object-fit: scale-down;
}

/* Small devices such as large phones (640px and up) */
@media only screen and (max-width: 640px) {
  #header img {
    height: 1rem;
    width: auto;
  }

  #entries {
    max-height: 60vh;
  }
}

</style>

<style>
.log *{
  margin: 1.5rem 0 1.5rem 0;
}

.log *:first-child {
  margin-top: 0;
}

log *:last-child {
  margin-bottom: 0;
}
</style>