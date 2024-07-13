<script setup lang="ts">
  import JulianNav from "~/components/JulianNav.vue";

  const route = useRoute()

  if(route.name == 'index') {
    document.body.style.backgroundColor = '#060606'
  }

</script>

<template>
  <JulianNav top="3vh" right="3vw"></JulianNav>

  <div>
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
  font-family: 'Micro 5';
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