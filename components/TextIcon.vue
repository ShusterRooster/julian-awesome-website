<script setup lang="ts">

</script>

<template>

  <slot/>

</template>

<style scoped>

::slotted(*) {
  position: relative;
  bottom: 0;
  height: 0.5em;
}

</style>