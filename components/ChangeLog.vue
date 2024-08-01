<script setup lang="ts">

import ChangeLogEntry from "~/components/ChangeLogEntry.vue";

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  const box = document.getElementById("box") as HTMLDivElement
  const div = box.clientWidth / 3;
  const cutoff = 5

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
      <span><img src="~/assets/home/stars/star-eye.gif" alt="green star eye"></span>
      <h1>changelog!</h1>
      <span><img src="~/assets/home/wizz.gif" alt="epic wizard"></span>
    </div>
    <img src="~/assets/borders/starsilverborder.gif" style="margin-bottom: 15px" alt="#epic star border">
    <div id="entries">
      <ChangeLogEntry title="major update!" date="july 30, 2024">
        hello julian awesome website fans! I come to you with news of a massive update I have been working on!<br><br>

        I have now made the existing pages friendly for mobile and have added a custom julian navigation menu for mobile
        devices!<br>

        unfortunately, the layout for tablets has not yet been optimized so please don't look at this website on there
        LOL<br><br>

        in this update I have also added the
        <NuxtLink to="/terminal">terminal</NuxtLink>
        where you can type in commands and some other Epic stuff!<br><br>

        thanks for reading and stay tuned for future awesome updates!!! :)
      </ChangeLogEntry>

      <ChangeLogEntry title="changelog added" date="july 24, 2024">
        fuck yeah!! welcome to the changelog! I will be putting website updates here as
        I add them so check back in every so often!
      </ChangeLogEntry>
    </div>
  </div>

</template>

<style scoped>
h1 {
  font-size: 3em;
  margin: 0;
}

a {
  transition: color 0.3s;
}

a:hover {
  color: green;
}

#entries {
  max-height: 400px;
  overflow-y: scroll;
}

#header {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
}

#header img {
  height: 3em;
  width: auto;
}

#box {
  display: flex;
  flex-direction: column;

  border-radius: 25px;
  background-image: url("~/assets/home/stars/nightstars.gif");
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
    height: 1em;
    width: auto;
  }

  h1 {
    font-size: 1.5em;
    margin: 0;
  }
}

</style>