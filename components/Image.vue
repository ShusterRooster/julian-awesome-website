<script setup lang="ts">

const props = defineProps<{
  path: string
  alt?: string
}>()


function getAlt(){
  if(props.alt == undefined){
    const path = props.path
    return path.substring(path.lastIndexOf('/') + 1, path.indexOf("."))
  }

  return props.alt
}

</script>

<style scoped>
</style>

<template>
  <img :src="props.path" :alt="getAlt()">
</template>