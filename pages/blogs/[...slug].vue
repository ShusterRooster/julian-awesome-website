<script setup lang="ts">

import Index from "~/pages/blogs/index.vue";

const path = useRoute().path
const { data } = await useAsyncData(path, () => {
  return queryCollection('blogs').path(path).first()
})

</script>

<template>
  <Index :blog="data"></Index>
</template>

<style scoped>

</style>