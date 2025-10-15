<script setup lang="ts">
import JulianApp from "~/components/julianOS/JulianApp.vue";
import Archive from "~/components/julianOS/archive/archive.vue";
import JulianTerminal from "~/components/julianOS/terminal/JulianTerminal.vue";

import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import Glerp from "~/components/julianOS/Glerp.vue";

gsap.registerPlugin(SplitText);


useSeoMeta({
  title: 'julianOS',
  description: 'the new and improved julian Operating System!',
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

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  SplitText.create("#welcome", {
    type: "chars",
    onSplit(self) {
      gsap.from(self.chars, {
        duration: 1,
        opacity: 0,
        x: -200,
        rotate: -35,
        mask: "chars",
        stagger: 0.05
      })
    }
  })
})


</script>

<template>

  <div class="background" id="background"></div>

  <div class="w-screen h-screen flex flex-col overflow-x-hidden">

    <div id="intro">
      <img id="infoBG" src="~/assets/julianOS/water2.gif" alt="water background">
      <p id="welcome">welcome to julianOS!</p>
    </div>

    <div id="apps">
      <JulianApp title="archive"
                 description="this is just a place to hold old web page projects to make room for newer and cooler projects!">
        <template #icon>
          <img src="../assets/julianOS/folderopen.gif" alt="folder">
        </template>

        <template #content>
          <Archive/>
        </template>

      </JulianApp>


      <JulianApp title="terminal" description="poo" :full-screen="true">
        <template #icon>
          <img src="~/assets/julianOS/sillycomputer.gif" alt="terminal">
        </template>

        <template #content>
          <JulianTerminal/>
        </template>
      </JulianApp>
    </div>

    <Glerp/>

  </div>
</template>

<style scoped>
#intro {
  position: relative;
  width: 100%;
  max-height: 20%;
  @apply p-4;
  @apply mb-4;
  box-sizing: border-box;
}

#infoBG {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  opacity: 0.7;
  filter: brightness(0.9) blur(5px);
  z-index: -1;
}

#welcome {
  font-family: Kode Mono, monospace;
  font-weight: bold;
  font-style: italic;
  @apply text-3xl;
}

#apps {
  display: grid;
  place-items: center;
  grid-auto-flow: row;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
}

#background {
  background-image: url("~/assets/julianOS/glacial.gif")
}

</style>