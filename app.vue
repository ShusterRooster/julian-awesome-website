<script setup lang="ts">
  const route = useRoute()

  if(route.name == 'index') {
    document.body.style.backgroundColor = '#060606'
  }

</script>

<template>
  <div>
    <Link rel="icon" type="image/x-icon" href="/dinosaur.png"></Link>
    <NuxtPage />
  </div>
</template>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}

.index {
  background-color: #060606;
}


</style>