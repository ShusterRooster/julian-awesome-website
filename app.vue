<script setup lang="ts">
import JulianNav from "~/components/navigation/JulianNav.vue";
import JulianNavMobile from "~/components/navigation/JulianNavMobile.vue";
import {SpeedInsights} from '@vercel/speed-insights/vue';
import StarryNav from "~/components/navigation/StarryNav.vue";

useHead({
  titleTemplate: '%s'
})

</script>

<template>
  <SpeedInsights/>
  <!--  <JulianNav top="3vh" right="3vw"></JulianNav>-->
  <!--  <JulianNavMobile top="4vh" right="6vw"></JulianNavMobile>-->

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
}

.blog > h2 {
  @apply text-6xl;
}

.blog > h3 {
  @apply text-5xl;
}

.blog > h4, .blog > p {
  @apply text-4xl;
}

@media only screen and (max-width: 640px) {
  body {
    transition: margin-bottom 0.4s ease-in-out;
  }

  .blog > h1 {
    @apply text-5xl;
  }

  .blog > h2 {
    @apply text-4xl;
  }

  .blog > h3 {
    @apply text-3xl;
  }

  .blog > h4, .blog > p {
    @apply text-2xl;
  }

}
</style>