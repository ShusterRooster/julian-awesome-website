<script setup lang="ts">
import {SpeedInsights} from '@vercel/speed-insights/vue';
import StarryNav from "~/components/navigation/StarryNav.vue";

useSeoMeta({
  ogImage: '/awesomeImage.jpg'
})

useHead({
  titleTemplate: '%s',

  htmlAttrs: {
    lang: 'en'
  },
})

</script>

<template>
  <SpeedInsights/>
  <StarryNav/>
  <NuxtPage/>
</template>

<style lang="postcss">

body {
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;

  overflow: auto;

  margin: 0;
  overflow-x: hidden;
  background-color: #060606;
}

.blog > h1 {
  @apply text-7xl;
  @apply my-7;
}

.blog > h2 {
  @apply text-6xl;
  @apply my-6;
}

.blog > h3 {
  @apply text-5xl;
  @apply my-5;
}

.blog > h4, .blog > p {
  @apply text-4xl;
  @apply my-4;
}

.blog *:first-child {
  margin-top: 0;
}

.blog *:last-child {
  margin-bottom: 0;
}

@media only screen and (max-width: 640px) {
  body {
    transition: margin-bottom 0.4s ease-in-out;
  }

  .blog > h1 {
    @apply text-5xl;
    @apply my-5;
  }

  .blog > h2 {
    @apply text-4xl;
    @apply my-4;
  }

  .blog > h3 {
    @apply text-3xl;
    @apply my-3;
  }

  .blog > h4, .blog > p {
    @apply text-2xl;
    @apply my-2;
  }
}
</style>