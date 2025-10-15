<script setup lang="ts">
import IconLink from "~/components/navigation/IconLink.vue";
import {OnClickOutside, vOnClickOutside} from '@vueuse/components'
import {gsap} from "gsap"

import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";

gsap.registerPlugin(CustomEase, CustomBounce);

const leaning = ref()
const screaming = ref()
const nav = ref()

let navUp = false
onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  if (window.matchMedia("(pointer: coarse)").matches) {
    launchNav()
  }
})

const navLaunchDuration = 1.25
const opacityChangeDuration = 0.15
const jumpDelay = 0.25
const jumpDuration = 1
const screamDurationPercent = 0.9
const jumpYPercent = -105

function launchNav() {
  const opacityChange = (opacity: number) => {
    return {duration: opacityChangeDuration, opacity: opacity}
  }

  if(navUp) {
    gsap.timeline()
        .to(leaning.value, opacityChange(0))
        .to(screaming.value, opacityChange(1), "<")
        .to(screaming.value, opacityChange(0), "+=0.25")
        .to(leaning.value, opacityChange(1), "<")

    return
  }

  CustomBounce.create("julianBounce", {
    strength: 0.5,
    endAtStart: true,
    squash: 3,
    squashID: "julianBounce-squash"
  })

  document.body.style.marginBottom = "12vh"

  gsap.timeline()
      .to(nav.value, {yPercent: -92, duration: navLaunchDuration, ease: 'bounce.out'})

      //make leaning and scream launch same way
      .to(leaning.value, {duration: jumpDuration, yPercent: jumpYPercent, delay: jumpDelay,  ease: "julianBounce"}, `<`) //offset by jumpDelay
      .to(screaming.value, {duration: jumpDuration, yPercent: jumpYPercent,  ease: "julianBounce"}, "<")

      //show screaming while leaning is going up and hide leaning
      .to(screaming.value, {duration: opacityChangeDuration, opacity: 1}, `-=${jumpDuration * screamDurationPercent}`)
      .to(leaning.value, {duration: opacityChangeDuration, opacity: 0}, "<")

      //once done, reset to normal
      .to(screaming.value, {duration: opacityChangeDuration, opacity: 0, delay: jumpDelay})
      .to(leaning.value, {duration: opacityChangeDuration, opacity: 1}, "<")

  navUp = true
}

function retractNav() {
  gsap.to(nav.value, {yPercent: 0, duration: navLaunchDuration, ease: 'bounce.out'})
      .then(() => {
        document.body.style.marginBottom = "0"
      })

  navUp = false
}

</script>

<template>

  <OnClickOutside @trigger="retractNav">
    <div id="nav" ref="nav">
      <div id="links">
        <IconLink name="home" to="/">
          <img src="~/assets/home/fishie.gif" alt="home icon"/>
        </IconLink>

        <IconLink name="contact" to="/contact">
          <img src="~/assets/contact/flamingo.gif" alt="contact icon"/>
        </IconLink>

        <IconLink name="julianOS" to="/julianOS">
          <img src="~/assets/julianOS/icon.gif" alt="julianOS icon"/>
        </IconLink>

<!--        <IconLink name="blogs" to="/blogs">-->
<!--          <img src="~/assets/blogs/purple.gif" alt="blogs icon"/>-->
<!--        </IconLink>-->

        <!--        <IconLink name="about" to="/about">-->
        <!--          <img src="~/assets/misc/3dbonehead.gif" alt="about icon"/>-->
        <!--        </IconLink>-->
      </div>

      <img class="starBorder" src="~/assets/stars/stargoldc-rotate.gif" alt="star border"/>
      <img id="star" src="~/assets/stars/bigstar.gif" alt="big star"/>
      <img id="screaming" ref="screaming" src="~/assets/julian/screaming-lowres.png" alt="julian screaming"/>
      <img id="leaning" ref="leaning" src="~/assets/julian/leaning-lowres.png" alt="julian leaning" @click="launchNav" />
    </div>
  </OnClickOutside>

</template>

<style scoped>
#nav {
  position: fixed;
  left: -1%;
  bottom: 0;

  max-width: 40vw;
  max-height: 8rem;
  width: 100%;
  height: 100%;

  padding-bottom: 0.5rem;
  background-image: url('~/assets/stars/animatedstars.gif');

  border-style: solid;
  border-width: 1.25rem 0 0 0; /* adjust the width to match your image */
  border-image-source: url('~/assets/stars/stargoldc.gif');
  border-image-slice: 100% 0 0 0; /* adjust the slice to match your image */
  border-image-repeat: round;
  border-image-outset: 0.75rem 0 0 0; /* adjust the outset to match your image */

  transform: skew(-5deg);
  z-index: 1000;
}

#links {
  position: relative;
  display: grid;

  grid-auto-rows: 100%;
  grid-auto-columns: min-content;
  grid-auto-flow: column;

  justify-content: space-evenly;
  justify-items: center;
  scrollbar-width: none;

  max-height: 100%;
  width: 100%;
  height: 100%;

  overflow-x: scroll;
  overflow-y: hidden;
}

#leaning, #screaming {
  display: none;
}

@media only screen and (max-width: 640px) {
  #nav {
    max-width: 100vw;
    max-height: 12vh;
    left: 0;
    transform: skew(0) translateY(92%);
  }

  #links {
    padding: 0 1rem 0 1rem;
    column-gap: 2rem;
    justify-content: space-between;
  }

  #star {
    transform: scale(0.50);
  }

  .starBorder {
    display: none;
  }

  #leaning, #screaming {
    position: absolute;
    display: block;
    right: 0;
    top: 0;
    transform: translate(-5%, -150%) scale(1.5);
  }

  #leaning {
    opacity: 1;
  }

  #screaming {
    opacity: 0;
  }
}

.starBorder {
  position: absolute;
  right: 0;
  transform: translate(50%, -50%);
}

#star {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(45%, -55%) scale(0.30);
}
</style>