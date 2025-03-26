<script setup lang="ts">

useSeoMeta({
  title: 'archive',
  description: 'awesome julian projects now archived at your convenience!',
  ogTitle: 'archive',
  ogDescription: 'awesome julian projects now archived at your convenience!',
})

useHead({
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
          <div id="mobileFolder"></div>

          <img class="desktop" src="~/assets/archive/folderopen.gif" alt="folder">
          <h2>this is just a place to hold old web page projects to make room for newer and cooler projects!</h2>
          <img class="desktop" src="~/assets/archive/wombat.gif" alt="wombat">
          <h2>have fun browsing!</h2>

        </div>

        <img id="fishie" src="~/assets/archive/fish.gif" alt="fishie">
        <img class="desktop" src="~/assets/archive/aquarium.gif" alt="fishie tank" style="position: absolute; bottom: 0; width: 100%">
      </div>

      <div id="items">
        <ArchiveItem title="dating" path="/archive/dating" description="this page is too powerful. look at your own risk!">
          <template #desktop>
            <img src="~/assets/archive/screengrabs/datingdesktop.gif" alt="dating desktop"/>
          </template>

          <template #mobile>
            <img src="~/assets/archive/screengrabs/datingmobile.gif" alt="dating mobile"/>
          </template>

          <template #background>
            <img src="~/assets/dating/heartbg.gif" alt="dating background"/>
          </template>
        </ArchiveItem>

        <ArchiveItem title="old home" path="/archive/home" description="the OG julian awesome website home page!">
          <template #desktop>
            <img src="~/assets/archive/screengrabs/homedesktop.gif" alt="home desktop"/>
          </template>

          <template #mobile>
            <img src="~/assets/archive/screengrabs/homemobile.gif" alt="home mobile"/>
          </template>

          <template #background>
            <img src="~/assets/stars/slowdark.gif" alt="home background"/>
          </template>
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
  flex-direction: column;
  padding: 3rem;
  gap: 2rem;

  max-height: 100%;
  max-width: 100%;

  height: 100%;
  width: 100%;
  grid-area: items;

  box-sizing: border-box;
  overflow-y: scroll;
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

#mobileFolder, #fishie {
  display: none;
}

@media only screen and (max-width: 640px) {
  #explorer {
    display: grid;
    max-width: 90vw;
    max-height: 65vh;

    align-self: flex-end;
    margin-bottom: 3vh;

    grid-template-areas:
      "topbar topbar"
      "items items";

    grid-template-rows: 8% auto;
  }

  #buttons {
    margin-right: 0;
    grid-gap: 0.75rem;
  }

  #info {
    position: absolute;
    top: 0;
    left: 0;

    max-width: 100vw;
    max-height: 30vh;

    width: 100%;
    height: 100%;

    box-shadow: 0 20px 40px 20px #a7daf6;
  }

  #mobileFolder {
    display: block;
    height: 4rem;
    width: 100%;

    border-style: solid;
    border-width: 4rem 0 0 0; /* adjust the width to match your image */
    border-image-source: url('~/assets/archive/folderopen.gif');
    border-image-slice: 100% 0 0 0; /* adjust the slice to match your image */
    border-image-repeat: repeat;
  }

  #fishie {
    display: block;
    margin: auto 0 1rem 0;
    align-self: flex-end;
  }

  #infoText {
    padding: 1rem;
  }

  .desktop {
    display: none;
  }

  #items {
    align-items: center;
    padding: 1rem;
  }
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