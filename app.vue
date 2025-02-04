<script setup lang="ts">
import JulianNav from "~/components/navigation/JulianNav.vue";
import JulianNavMobile from "~/components/navigation/JulianNavMobile.vue";
import {SpeedInsights} from '@vercel/speed-insights/vue';
import StaticNav from "~/components/navigation/StaticNav.vue";

useHead({
  titleTemplate: '%s'
})

</script>

<template>
  <SpeedInsights/>
  <!--  <JulianNav top="3vh" right="3vw"></JulianNav>-->
  <!--  <JulianNavMobile top="4vh" right="6vw"></JulianNavMobile>-->

  <StaticNav/>
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

@media only screen and (max-width: 640px) {
  body {
    margin-bottom: 12vh;
  }
}


</style>