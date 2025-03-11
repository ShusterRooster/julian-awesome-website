<script setup lang="ts">
import IconLink from "~/components/navigation/IconLink.vue";
import {OnClickOutside, vOnClickOutside} from '@vueuse/components'

const leaning = ref()
const screaming = ref()
const nav = ref()

let navUp = false
let launching = false

const navStart = 'skew(0) translateY(82%)'

const deadTime = 20
const navTiming = {
  duration: 800 + deadTime,
  easing: 'ease-in',
}

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  if (window.matchMedia("(pointer: coarse)").matches) {
    // hide()
  }

  leaning.value.ontouchend = () => {
    launch()
  }
})


function launch() {
  if(navUp) {
    leaning.value.style.visibility = 'hidden'
    screaming.value.style.visibility = 'visible'

    setTimeout(() => {
      leaning.value.style.visibility = 'visible'
      screaming.value.style.visibility = 'hidden'
    }, 200)

    return
  }
  else if(launching) {
    return;
  }

  const rumbleOffset = 0.2

  const navLaunch = [
    {transform: navStart},
    {transform: navStart + ' translate(1px, 1px) rotate(0deg)', offset: rumbleOffset},
    {transform: navStart + ' translate(-1px, -2px) rotate(-1deg)', offset: rumbleOffset + 0.1},
    {transform: navStart + ' translate(-3px, 0px) rotate(1deg)', offset: rumbleOffset + 0.2},
    {transform: navStart + ' translate(-1px, -3px) rotate(1deg)', offset: rumbleOffset + 0.3},
    {transform: 'skew(0) translateY(0)'},
  ]

  const initNavMove = {transform: navStart}
  const initNavTiming = navTiming.duration / 3

  //for screaming
  const julianLaunch = [
    {visibility: 'visible'},
    {transform: 'translate(2px, -30vh)'},
    {transform: 'translate(2px, -120%)', easing: 'ease-in-out', offset: 0.6},
  ]

  const launchTiming = {
    duration: 1000,
    easing: 'linear',
  };

  nav.value.animate(initNavMove, initNavTiming)
  launching = true

  const jumpDelay = navTiming.duration * 0.95

  //after nav does first move, wait till it ends to do the rest of the animation
  setTimeout(() => {
    nav.value.animate(navLaunch, navTiming)
  }, initNavTiming)

  //hide leaning
  setTimeout(() => {
    leaning.value.style.visibility = 'hidden'
    screaming.value.animate(julianLaunch, launchTiming)

  }, initNavTiming + jumpDelay)


  //sets the final position, animations do not change the vals
  setTimeout(() => {
    nav.value.style.transform = 'skew(0) translateY(0)'
    navUp = true

    document.body.style.marginBottom = '12vh'
  }, initNavTiming + navTiming.duration - deadTime)

  //show leaning again
  setTimeout(() => {
    leaning.value.style.visibility = 'visible'
    launching = false
  }, initNavTiming + jumpDelay + launchTiming.duration - deadTime)
}

function retract() {
  const navRetract = {duration: 400 + deadTime, easing: 'ease-in-out'}

  if (navUp) {
    nav.value.animate({transform: navStart}, navRetract)

    //sets stable settings when done retracting
    setTimeout(() => {
      nav.value.style.transform = navStart
      navUp = false
      document.body.style.marginBottom = '0'
    }, navRetract.duration - deadTime)
  }
}


</script>

<template>

  <OnClickOutside @trigger="retract">
    <div id="nav" ref="nav">
      <div id="links">
        <IconLink name="home" to="/">
          <img src="~/assets/home/fishie.gif" alt="home icon"/>
        </IconLink>

        <IconLink name="contact" to="/contact">
          <img src="~/assets/contact/flamingo.gif" alt="contact icon"/>
        </IconLink>

        <IconLink name="archive" to="/archive">
          <img src="~/assets/archive/christmasstar.gif" alt="archive icon"/>
        </IconLink>

        <IconLink name="blogs" to="/blogs">
          <img src="~/assets/blogs/purple.gif" alt="blogs icon"/>
        </IconLink>

<!--        <IconLink name="about" to="/about">-->
<!--          <img src="~/assets/misc/3dbonehead.gif" alt="about icon"/>-->
<!--        </IconLink>-->

        <IconLink name="terminal" to="/terminal">
          <img src="~/assets/misc/computer_surfing.gif" alt="terminal icon"/>
        </IconLink>
      </div>

      <img class="starBorder" src="~/assets/stars/stargoldc-rotate.gif" alt="star border"/>
      <img id="star" src="~/assets/stars/bigstar.gif" alt="big star"/>
      <img id="screaming" ref="screaming" src="~/assets/julian/screaming-lowres.png" alt="julian screaming"/>
      <img id="leaning" ref="leaning" src="~/assets/julian/leaning-lowres.png" alt="julian leaning"/>
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
    transform: translate(2px, -120%);
  }

  #leaning {
    visibility: visible;
  }

  #screaming {
    visibility: hidden;
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