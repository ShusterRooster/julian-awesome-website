<script setup lang="ts">

useSeoMeta({
  title: 'julian AWESOME home',
  description: 'welcome to the julian awesome website experience!!!',
  ogTitle: 'home',
  ogDescription: 'welcome to the julian awesome website experience!!!',
  ogImage: '[og:image]',
  ogUrl: 'julianshuster.com',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
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


const explosion = ref()
const explosionImg = ref()

function explode() {
  explosion.value.style.backgroundImage = `url("${explosionImg.value.src}")`
  console.log(explosion.value.style.backgroundImage)

  // explosion.value.style.display = 'block'

  setTimeout(() => {
    // explosion.value.style.display = 'none'
    explosion.value.style.backgroundImage = ''
  }, 900)
}

</script>

<template>
  <div class="background" id="back"></div>

  <div id="container">
    <div id="mobileContainer">
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

        <img src="~/assets/home/fishspinning.gif" alt="fishie!" class="hidden sm:block" style="position: absolute; right: 10%; top: 20%;">
      </div>

      <div id="intro" class="sm:my-8">
        <img style="grid-area: big" class="hidden sm:block" src="~/assets/julian/julianstanding.png" alt="standing">

        <div id="introText" style="grid-area: text">
          <h1>welcome to the julian awesome website!<br>
            this is my love letter to the internet and my digital oasis. i hope you enjoy!
          </h1><br>

<!--          for mobile-->
          <h1 class="sm:hidden">click on the little leaning julian at the bottom of the screen and start exploring! you can click anywhere on the screen to close the navbar!</h1>
<!--          for desktop-->
          <h1 class="hidden sm:block">wow! you're one of those rare desktop users! this version of the website is much more advanced!! take a ride on the starry navigation system and start exploring! have fun :)</h1>
        </div>


        <img src="~/assets/home/world_welcome.gif" alt="world welcome" style="grid-area: img"/>
        <img src="~/assets/borders/alienborder.gif" alt="aliens dancing" style="grid-area: img2"/>

        <div style="position: relative" @click="explode">
          <img src="~/assets/julian/ominous.png" alt="big head ahh" style="grid-area: img3;" class="w-sm sm:max-w-auto"/>
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
          <h1>social media websites have robbed us of the beauty, character, and charm of the old internet.
            the internet used to be a trove of amazing, small, and unique websites, now it has been taken over
            entirely by trackers, ads, and general capitalist profit motive.<br><br>

            <strong class="font-bold text-7xl">it's time we take back the web!!!</strong><br><br>

            corporations will not limit our expression any longer.<br>
            if you want to learn how to build a website, please check out <NuxtLink to="https://neocities.org/">neocities.org</NuxtLink>
            and <NuxtLink to="/contact">contact</NuxtLink>  me if you have any questions!<br><br>

            <NuxtLink to="https://github.com/ShusterRooster/julian-awesome-website">>>> check out my source code!!!</NuxtLink>
          </h1>
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
  //background: url("~/assets/home/explosion.gif") no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
}

#mainPanel {
  position: relative;
  max-width: 80vw;
  width: 100%;
  height: 100%;
  margin-top: 3rem;

  padding: 2rem;
  transform: skew(-3deg);
  box-shadow: 0 0 68px 11px rgba(0, 255, 0, 0.9);
  background-color: rgba(0, 0, 0, 0.85);
  border: 10px outset green;
}

#container {
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  overflow-x: hidden;
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

    will-change: filter;
    transition: filter 300ms;
    width: 80vw;
    height: 15vh;

    box-sizing: border-box;
    margin-top: 3vh;
  }

  #mobileContainer img {
    overflow: auto;
    height: 100%;
    width: auto;
    object-fit: contain;
    padding: 0.5rem;
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

  #introText {
    padding: 2rem 0 0 2rem;
    align-self: flex-start;
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

  #container {
    padding: 1rem;
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