<script setup lang="ts">
const props = defineProps<{
  title: String,
  description: String
}>()

</script>

<template>
  <div id="item">
    <h1>{{ title }}</h1>
    <slot></slot>
    <h2>{{ description }}</h2>
  </div>
</template>

<style scoped>
#item {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  max-height: 50%;
  max-width: 35%;

  background-color: #5e5e5e;

  border-image: url('~/assets/borders/heartline.gif') 30;
  transform: skew(-8deg);

}
</style>