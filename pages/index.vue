<script setup lang="ts">
import {gsap} from "gsap"

useSeoMeta({
  title: 'julian AWESOME home',
  description: 'welcome to the julian awesome website experience!!!',
  ogTitle: 'julian AWESOME home',
  ogDescription: 'welcome to the julian awesome website experience!!!',
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icons/dinosaur.png'
    }
  ]
})

const {data: page} = await useAsyncData('blogs', () => {
  return queryCollection('blogs').all()
})

const route = useRoute()
if(route.query.chip) {

}



const explosion = ref()
const explosionImg = ref()

function explode() {
  explosion.value.style.backgroundImage = `url("${explosionImg.value.src}")`
  console.log(explosion.value.style.backgroundImage)

  // explosion.value.style.display = 'block'

  setTimeout(() => {
    // explosion.value.style.display = 'none'
    explosion.value.style.backgroundImage = ''
  }, 800)
}

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

   logoFlyIn()
})

function logoFlyIn() {
  const flyInDuration = 2
  const flyDelay = 0.15
  const logoTween = {xPercent: -205, duration: flyInDuration, ease: "elastic.out(1, 0.5)"}
  const mobileLogos = document.querySelectorAll("#mobileContainer *");

  gsap.timeline()
      .to("#mobileContainer", {duration: 0, opacity: 1})
      .from(mobileLogos[0]!, logoTween)
      .from(mobileLogos[1]!, logoTween, `<${flyDelay}`)
      .from(mobileLogos[2]!, logoTween, `<${flyDelay}`)
}



</script>

<template>
  <div class="background" id="back"></div>

  <div class="w-full h-full flex flex-col items-center p-4 overflow-x-hidden text-2xl sm:text-4xl font-display">
    <div id="mobileContainer" @click="logoFlyIn">
      <img src="~/assets/logos/julianlogomobile.gif" alt="julian"
           style="align-self: start"/>

      <img src="~/assets/logos/awesomelogo.gif" alt="awesome"
           style="align-self: center"/>

      <img src="~/assets/logos/websitelogo.gif" alt="website"
           style="align-self: end"/>
    </div>

    <div id="starBorder"></div>
    <img id="logo" src="~/assets/logos/julianlogo.gif" alt="julian awesome website logo"/>

    <div id="mainPanel">
      <div class="unskew">
        <img src="~/assets/home/welcome2.gif" alt="welcome">

        <img src="~/assets/home/fishspinning.gif" alt="fishie!" class="hidden sm:block"
             style="position: absolute; right: 10%; top: 20%;">
      </div>

      <div id="intro" class="sm:my-8">
        <img style="grid-area: big" class="hidden sm:block" src="~/assets/julian/julianstanding.png" alt="standing">

        <div class="ml-6 mt-6 self-start sm:m-0"  style="grid-area: text">
          <p v-if="route.query.chip" class="text-green-600 font-extrabold">
            wow you are special! you got this website from the chip in my hand! how cool is that?
            <br><br>
          </p>

          <p>welcome to the julian awesome website!<br>
            this is my love letter to the internet and my digital oasis. i hope you enjoy!
          </p><br>

          <!--          for mobile-->
<!--          <p class="sm:hidden text-5xl">click on the little leaning julian at the bottom of the screen and start-->
<!--            exploring! you can click anywhere on the screen to close the navbar!</p>-->
          <!--          for desktop-->
          <p class="hidden sm:block">wow! you're one of those rare desktop users! this version of the website is much
            more advanced!! take a ride on the starry navigation system and start exploring! have fun :)</p>
        </div>


        <img src="~/assets/home/world_welcome.gif" alt="world welcome" style="grid-area: img"/>
        <img src="~/assets/borders/alienborder.gif" alt="aliens dancing" style="grid-area: img2"/>

        <div style="position: relative" @click="explode">
          <img src="~/assets/julian/ominous.png" alt="big head ahh" style="grid-area: img3;"
               class="w-sm sm:max-w-auto"/>
          <div ref="explosion" id="explosion"/>
          <img src="~/assets/home/explosion.gif" ref="explosionImg" alt="hidden...." style="display: none">
        </div>
      </div>

      <div id="stuff">
        <div id="monitor">
          <div id="display">

            <div class="items-center">
              <h2>★ hello welcome to the blawgs ★</h2>
              <img src="~/assets/borders/greenarrows.gif" alt="green line" class="my-4">
            </div>

            <div v-for="blog in page.slice().reverse()" :key="blog.path">
              <div class="items-start text-left mb-4">
                <NuxtLink :to="blog.path">
                  <h2 class="mb-0">► {{ blog.title }}</h2>
                  <p>{{ blog.date }}</p>
                  <h3>{{ blog.description }}</h3>
                </NuxtLink>
              </div>
            </div>
          </div>

          <img id="exclamation" src="~/assets/home/exclamation.gif" alt="exclamation"/>
        </div>

        <div id="explain">
          <p>social media websites have robbed us of the beauty, character, and charm of the old internet.
            the internet used to be a trove of amazing, small, and unique websites, now it has been taken over
            entirely by trackers, ads, and general capitalist profit motive.<br><br>

            <strong class="font-bold text-7xl">it's time we take back the web!!!</strong><br><br>

            corporations will not limit our expression any longer.<br>
            if you want to learn how to build a website, please check out
            <NuxtLink to="https://neocities.org/">neocities.org</NuxtLink>
            and
            <NuxtLink to="/contact">contact</NuxtLink>
            me if you have any questions!<br><br>

            <NuxtLink to="https://github.com/ShusterRooster/julian-awesome-website">>>> check out my source code!!!
            </NuxtLink>
          </p>
        </div>

      </div>

      <ChangeLog></ChangeLog>


      <img id="star" src="~/assets/stars/star-eye.gif" alt="star eye lol">
    </div>

    <img src="~/assets/home/skelebones.gif" alt="skelebones">

  </div>

</template>

<style scoped>

#monitor {
  display: flex;
  justify-content: center;

  max-width: 100%;
  max-height: 100%;

  object-fit: contain;
  position: relative;
  aspect-ratio: 728 / 824;

  background: url("~/assets/home/newmonitor.png") no-repeat center;
  background-size: contain;
}

#display {
  position: absolute;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  background-color: rgba(12, 12, 12, 0.8);
  text-align: center;
  text-wrap: wrap;

  left: 18.68%;
  top: 9.22%;
  width: 64.01%;
  height: 43.93%;
}

#display * {
  color: green;
}

#exclamation {
  position: absolute;
  top: 5%;
  right: 12%;
  transform: scale(2);
}

#stuff {
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  max-height: 100%;
  margin-bottom: 4rem;
  align-items: center;
}

#explain {
  padding: 0 4rem 0 4rem;
}

#explain a {
  color: greenyellow;
  text-decoration: underline;
}

#intro {
  display: grid;
  grid-template-areas:
    "big text text text"
    "big img img2 img3";
  grid-auto-flow: row dense;

  grid-template-columns: 1fr repeat(3, 1fr);
  grid-template-rows: 2fr;

  place-items: center;

  max-height: 60vh;
}

#intro img {
  object-fit: scale-down;

  overflow: hidden;
  min-width: 0;
  min-height: 0;

  max-width: 100%;
}

#explosion {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  transform: scale(2);
  background-repeat: no-repeat;
  background-size: cover;
}

#mainPanel {
  position: relative;
  width: 80%;
  height: 100%;
  margin-top: 3rem;

  padding: 2rem;
  transform: skew(-3deg);
  box-shadow: 0 0 68px 11px rgba(0, 255, 0, 0.9);
  background-color: rgba(0, 0, 0, 0.85);
  border: 10px outset green;
}

#mobileContainer, #starBorder {
  display: none;
}

.unskew {
  transform: skew(-8deg);
}

#star {
  position: absolute;
  right: 0;
  top: 0;

  transform: translate(50%, -50%) scale(1.5);
}

#back {
  background-image: url('~/assets/stars/slowdark.gif');

  box-shadow: inset 20px 0 40px #265c08, /* right */ inset -20px 0 40px #075007; /* left */
}

@media only screen and (max-width: 640px) {
  #mainPanel {
    max-width: 90vw;
    width: 100%;
    height: 100%;
    margin-top: 0;

    padding: 0.25rem;
    transform: skew(0);

    background-color: transparent;
    border: none;
    box-shadow: none;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #mobileContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    opacity: 0;

    @apply gap-4;
    @apply p-2;
    @apply mt-4;

    width: 80vw;
    height: 15vh;
  }

  #mobileContainer img {
    overflow: auto;
  }

  #starBorder {
    display: block;
    border-image-source: url('~/assets/stars/starrotating.gif');
    border-width: 0 0 1rem 0;
    border-image-slice: 0 0 100% 0;
    border-image-repeat: round;
    width: 100vw;
    margin: 1rem 0 1rem 0;
  }

  #intro {
    grid-template-areas:
    "text img"
    "text img2"
    "img3 img3";

    grid-auto-flow: row;

    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto auto auto;

    margin: 1rem 0 4rem;

    max-height: 100%;
  }

  #exclamation {
    top: 1%;
    right: 12%;
    transform: scale(1.5);
  }

  #monitor {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  #stuff {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    margin-bottom: 4rem;
  }

  #explain {
    padding: 1rem 1rem 0 1rem;
  }

  #logo, #star {
    display: none;
  }

  #back {
    box-shadow: inset 20px 0 40px #265c08, /* right */ inset -20px 0 40px #075007, /* left */ inset 0 0 0 2000px rgba(0, 0, 0, 0.85);

  }

  .unskew {
    transform: skew(0deg);
  }
}
</style>