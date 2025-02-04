<script setup lang="ts">

import Dating from "~/pages/archive/dating.vue";

useSeoMeta({
  title: 'archive',
  description: 'awesome julian projects now archived at your convenience!',
  ogTitle: 'archive',
  ogDescription: 'awesome julian projects now archived at your convenience!',
  ogImage: '[og:image]',
  ogUrl: 'julianshuster.com/archive',
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
      type: 'image/gif',
      href: '/icons/folder.gif'
    }
  ]
})
</script>

<template>

  <div class="background" id="background"></div>

  <div id="container">
    <div id="explorer" class="border">
      <div id="topBar" class="topBar">

        <div id="archive">
          <img src="/icons/folder.gif" alt="folder">
          <h2>archive</h2>
        </div>

        <div id="buttons">
          <button class="button">—</button>
          <button class="button">🗖</button>
          <button class="button">✖</button>
        </div>
      </div>

      <div id="info">
        <div id="infoText">
          <h1>welcome to the archive!</h1>
          <img src="~/assets/archive/folderopen.gif" alt="folder">
          <h2>this is just a place to hold old web page projects to make room for newer and cooler projects!</h2>
          <img src="~/assets/archive/wombat.gif" alt="wombat">
          <h2>have fun browsing!</h2>
        </div>


        <img src="~/assets/archive/aquarium.gif" alt="fishie tank" style="position: absolute; bottom: 0; width: 100%">
      </div>

      <div id="items">
<!--        <ArchiveItem title="dating" description="hello this was my dating site lol">-->
<!--          <img src="~/assets/dating/floating_heart.gif" alt="floating heart">-->
<!--        </ArchiveItem>-->

        <ArchiveItem title="dating" description="this was my dating page :P">
          <img class="desktop" src="~/assets/archive/screengrabs/datingdesktop.gif" alt="dating desktop"/>

        </ArchiveItem>

      </div>


    </div>
  </div>


</template>

<style scoped>
#container {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
}

#explorer {
  display: grid;
  max-width: 80vw;
  max-height: 80vh;

  width: 100%;
  height: 100%;
  background-color: #b5b5b5;

  grid-template-areas:
      "topbar topbar"
      "info items";

  grid-template-columns: 30% auto;
  grid-template-rows: 6% auto;
  border: 6px ridge #b5b5b5;
}

#info {
  grid-area: info;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  max-height: 100%;
  max-width: 100%;

  background-image: url("~/assets/archive/clouds2.gif");
  background-repeat: no-repeat;
  background-size: cover;
}

#infoText {
  text-align: center;
  padding: 2rem;
}

#infoText > * {
  color: black;
  margin: 0;
}

#items {
  display: flex;
  padding: 1rem;

  max-height: 100%;
  max-width: 100%;

  height: 100%;
  width: 100%;

  box-sizing: border-box;
}

#topBar {
  grid-area: topbar;
  display: flex;
  align-items: center;
  max-width: 100%;
  max-height: 100%;

  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  background-image: linear-gradient(to right, #0140cc, #245ecd);
  border-bottom: 6px ridge #b5b5b5;
  position: relative;
}

#archive {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 0.75rem;
}

#buttons {
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: 1fr 1fr 1fr;
  max-height: 80%;
  height: 100%;

  margin-left: auto;
  margin-right: 0.75rem;
  box-sizing: border-box;
}

.button {
  height: 100%;
  max-height: 100%;
  background-color: #b5b5b5;
  aspect-ratio: 1;
  border: 3px outset #b5b5b5;
}

.button:active {
  border: 3px inset #b5b5b5;
}

#background {
  background-image: url("~/assets/archive/glacial.gif")
}

</style>