<script setup lang="ts">
import JulianNav from "~/components/navigation/JulianNav.vue";
import JulianNavMobile from "~/components/navigation/JulianNavMobile.vue";
import { SpeedInsights } from '@vercel/speed-insights/vue';

const route = useRoute()

  if(route.name == 'index') {
    document.body.style.backgroundColor = '#060606'
  }

</script>

<template>
  <SpeedInsights/>
  <head>
    <meta property="og:title" content="julian AWESOME epic website!!"/>
<!--    <meta property="og:image" content=""/>-->
<!--    <meta property="og:image:width" content="1200" />-->
<!--    <meta property="og:image:height" content="627"/>-->
    <meta property="og:description" content="super epic awesome"/>
    <meta property="og:url" content="julianshuster.com"/>
    <meta property="og:type" content="website"/>
  </head>

  <JulianNav top="3vh" right="3vw"></JulianNav>
  <JulianNavMobile top="4vh" right="6vw"></JulianNavMobile>

  <div id="app">
    <NuxtPage />
  </div>
</template>

<style>
body {
  margin: 0;
  overflow-x: hidden;
  background-color: #060606;
}

* {
  font-size: 1em;
  color: white;
  font-family: 'Micro 5', sans-serif;
  font-weight: normal;
}

.background {
  width: 100vw;
  height: 100vh;
  min-height: 100%;
  background-position: center;
  position: fixed;
  background-size: cover;
  z-index: -1;
}

</style>