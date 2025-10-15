<script setup lang="ts">
import {gsap} from "gsap";

const props = defineProps<{
  title: string,
  description: string,
  fullScreen?: boolean,
}>()

const duration = 1.25
const xPercent = 200
const rotation = 192
const showing = ref(false)
const screen = ref()
const window = ref()

//used for sizing apps depending on if they're full screen or not
const screenGridRowTemplate = computed(() => {
  return props.fullScreen ? "100%" : "1fr 3fr"
})

function launchApp() {
  showing.value = true

  //watch screen ref so that when it loads it can animate
  watch(screen, (newValue) => {
    if (newValue != undefined) {
      gsap.timeline()
          .set("#info", {xPercent: xPercent * -1})
          .set("#window", {scale: 0, rotateX: rotation, rotateY: 360})
          .set("#screen", {opacity: 1})

          .to("#info", {duration: duration, xPercent: 0, ease: "expo.out"})
          .to("#window", {duration: duration, scale: 1, rotateX: 0, rotateY: 0, ease: "power2.out"}, "<")
    }
  })
}

function closeApp() {
  gsap.timeline()
      .to("#info", {duration: duration, xPercent: xPercent, ease: "expo.out"})
      .to("#window", {duration: duration, scale: 0, rotateY: rotation, rotateX: 360, ease: "power2.out"}, "<")
      .then((timeline) => {
        timeline.kill()
        showing.value = false
      })
}
</script>

<template>
  <div id="app" @click="launchApp">
    <div id="appIcon">
      <slot name="icon"/>
    </div>
    <p id="title">{{ title }}</p>
  </div>

  <div id="screen" ref="screen" v-if="showing">
    <div id="info" class="text-center" v-show="!fullScreen">
      <div id="icon" class="flex flex-col items-center mb-6">
        <slot name="icon"/>
      </div>
      <p class="text-3xl font-extrabold font-italic">{{ props.title }}</p>
      <p class=" font-bold">{{ props.description }}</p>
    </div>

    <div id="window" ref="window">
      <div id="topBar">

        <div class="flex">
          <h2>{{ props.title }}</h2>
        </div>

        <div id="buttons">
          <button class="button">—</button>
          <button class="button">🗖</button>
          <button class="button bg-red-600" @click="closeApp">✖</button>
        </div>
      </div>

      <slot name="content"></slot>
    </div>
  </div>

</template>

<style scoped>
#icon {
  height: 30%;
  width: auto;
}

#icon * {
  height: 100%;
}

#screen {
  position: fixed;
  display: grid;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  grid-template-rows: v-bind(screenGridRowTemplate);

  font-family: Kode Mono, monospace;
  opacity: 0;
  z-index: 300;
}

#info {
  margin: 2rem;
  padding: 1rem;

  transform: skew(5deg);
  background: rgba(181, 181, 181);
  box-shadow: 12px 12px 0px 9px rgba(40, 40, 40, 0.45);

  font-family: Kode Mono, monospace;
}

#window {
  --barHeight: 3rem;

  margin: auto;
  width: 98%;
  height: 100%;
  background-color: #b5b5b5;
  border: 6px ridge #b5b5b5;
  padding-top: var(--barHeight);

  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
}

#topBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--barHeight);

  display: flex;
  align-items: center;

  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  background-image: linear-gradient(to right, #0140cc, #245ecd);
  background-color: #0140cc;
  border-bottom: 6px ridge #b5b5b5;
}

#buttons {
  --buttonSize: 2rem;
  --buttonGap: 0.5rem;

  position: absolute;
  height: 100%;
  right: 0;

  display: flex;
  place-items: center;

  gap: var(--buttonGap);
  margin-right: var(--buttonGap);
}

.button {
  width: var(--buttonSize);
  height: var(--buttonSize);

  background-color: #b5b5b5;
  border: 3px outset #b5b5b5;
}

/*
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
}*/

.button:active {
  border: 3px inset #b5b5b5;
}

/* app icon stuff */
#app {
  width: 90%;

  background: rgba(12, 12, 12, 0.45);
  aspect-ratio: 1;

  display: grid;
  grid-template-rows: 2fr 1fr;
  place-items: center;

  border-radius: 10px;
  transform: skew(5deg);
}

#appIcon * {
  width: 80%;
  height: 100%;
  place-self: center;
}

#title {
  @apply text-2xl;

  width: 100%;
  font-family: Kode Mono, monospace;
  text-align: center;
  font-style: italic;
}
</style>