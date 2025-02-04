<script setup lang="ts">
import NavLinks from "~/components/navigation/NavLinks.vue";

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

        <img src="~/assets/home/fishspinning.gif" alt="fishie!" style="position: absolute; right: 10%; top: 20%;">
      </div>

      <div id="intro" class="m-8">
        <img style="grid-area: big" src="~/assets/julian/julianstanding.png" alt="standing">
        <img style="grid-area: big" src="~/assets/julian/julianstanding.png" alt="standing">
        <h1 class="m-4" style="grid-area: text">welcome to the julian awesome website!<br><br>
          this is my digital oasis. i hope you enjoy! to get started, click on the little julian at the top!<br>
          happy exploring!
        </h1>
      </div>

      <div id="monitor">
        <div id="display">
          <div class="items-center">
            <h2>★ hello welcome to the blawgs ★</h2>
            <img src="~/assets/borders/greenarrows.gif" alt="green line" class="my-4">
          </div>

          <ContentList path="/blogs" v-slot="{ list }">
            <div v-for="blog in list" :key="blog._path">
              <div class="items-start text-left">
                <NuxtLink :to="blog._path">
                  <h2 class="mb-0">► {{ blog.title }}</h2>
                  <p>{{ blog.date }}</p>
                  <h3>{{ blog.description }}</h3>
                </NuxtLink>

              </div>
            </div>
          </ContentList>
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

  max-width: 50%;
  max-height: 50%;

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

#intro {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "big text text"
    "big img img2";
  grid-auto-flow: row dense;
}

#intro > img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;

  width: 100%;
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
  background-image: url('~/assets/stars/slowdark.gif')
}

@media only screen and (max-width: 640px) {
  #mainPanel {
    max-width: 90vw;
    width: 100%;
    height: 100%;
    margin-top: 0;

    padding: 0.5rem;
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
    border-width:  0 0 1rem 0;
    border-image-slice: 0 0 100% 0;
    border-image-repeat: round;
    width: 100vw;
    margin: 1rem 0 1rem 0;
  }

  #intro {
    grid-template-areas:
    "big big big"
    "big img img2"
    "text text text";
  }

  #monitor {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  #container {
    padding: 1rem;
  }

  #logo, #star {
    display: none;
  }

  #back {
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.85);
  }

  .unskew {
    transform: skew(0deg);
  }
}
</style>