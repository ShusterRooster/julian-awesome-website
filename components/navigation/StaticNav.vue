<script setup lang="ts">
import IconLink from "~/components/navigation/IconLink.vue";

const leaning = ref()
const screaming = ref()
const nav = ref()
let showScream = false

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
  const navHalf = 'skew(0) translateY(42%)'

  const navLaunch = [
    {transform: 'skew(0) translateY(42%)'},
    {transform: navHalf + ' translate(1px, 1px) rotate(0deg)', offset: 0.5},
    {transform: navHalf + ' translate(-1px, -2px) rotate(-1deg)', offset: 0.6},
    {transform: navHalf + ' translate(-3px, 0px) rotate(1deg)', offset: 0.7},
    {transform: 'skew(0) translateY(0)'},
  ]

  const navTiming = {
    duration: 805,
    easing: 'ease-in',
  }

  //for screaming
  const julianLaunch = [
    {display: 'block'},
    {transform: 'translate(25%, -55vh) scale(0.5)'},
    {transform: 'translate(25%, -90%) scale(0.5)', easing: 'ease-in-out'},
    // {transform: 'translate(25%, -90%) scale(0.5)'},
    {display: 'none'}
  ]

  const launchTiming = {
    duration: 1000,
    delay: navTiming.duration - 200,
    easing: 'linear',
  };

  nav.value.animate(navLaunch, navTiming)

  //sets the final position, animations do not change the vals
  setTimeout(() => {
    nav.value.style.transform = 'skew(0) translateY(0)'
    // nav.value.style.transform = 'skew(0) translateY(52%)'
  }, navTiming.duration - 5)

  //launch upwards
  setTimeout(() => {
    leaning.value.style.display = "none"
  }, 100)


  screaming.value.animate(julianLaunch, launchTiming)


}
</script>

<template>
  <div id="nav" ref="nav">
    <div id="links">
      <IconLink name="home" to="/">
        <img src="~/assets/home/fishie.gif" alt="home icon"/>
      </IconLink>

      <IconLink name="terminal" to="/terminal">
        <img src="~/assets/misc/computer_surfing.gif" alt="terminal icon"/>
      </IconLink>

      <IconLink name="about" to="/about">
        <img src="~/assets/misc/3dbonehead.gif" alt="about icon"/>
      </IconLink>

      <IconLink name="archive" to="/archive">
        <img src="~/assets/archive/christmasstar.gif" alt="archive icon"/>
      </IconLink>

      <IconLink name="contact" to="/contact">
        <img src="~/assets/contact/flamingo.gif" alt="contact icon"/>
      </IconLink>
    </div>

    <img class="starBorder" src="~/assets/stars/stargoldc-rotate.gif" alt="star border"/>
    <img id="star" src="~/assets/stars/bigstar.gif" alt="big star"/>
    <img id="screaming" ref="screaming" src="~/assets/julian/screaming-lowres.png" alt="julian screaming"/>
    <img id="leaning" ref="leaning" src="~/assets/julian/leaning-lowres.png" alt="julian leaning"/>
  </div>


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
  padding: 0 0.5rem 0.5rem 0.5rem;

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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  scrollbar-width: none;

  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}

#leaning, screaming {
  display: none;
}

@media only screen and (max-width: 640px) {
  #nav {
    max-width: 100vw;
    max-height: 12vh;
    padding-left: 1rem;
    left: 0;
    transform: skew(0) translateY(92%);
  }

  #links {
    gap: 1.75rem;
    min-width: 100%;
    justify-content: flex-start;
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
    transform: translate(25%, -90%) scale(0.5);
    filter: drop-shadow(0 0 30px #f1b347);
  }

  #screaming {
    display: block;
    //transition: all 0.2s linear;
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