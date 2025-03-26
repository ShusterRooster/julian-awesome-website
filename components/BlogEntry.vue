<script setup lang="ts">
import {useAsyncData, useRoute} from "nuxt/app";

const props = defineProps<{
  title: string,
  description: string,
  date: string,
  path: string,
}>()

const entry = ref()

const emit = defineEmits<{
  (e: 'load', data: any, entry: any): void
}>()

const {data} = await useAsyncData(props.title, () => {
  return queryCollection('blogs').path(props.path).first()
})

</script>

<template>
  <div id="entry" ref="entry" class="box" @click="$emit('load', data, entry)">
    <h1 class="mb-0">{{ props.title }}</h1>
    <p>{{ props.date }}</p>
    <h3>{{ props.description }}</h3>
  </div>

</template>

<style scoped>

#entry {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  width: 90%;
  transform: skew(-5deg) translateX(20%);
  padding: 2rem 20% 2rem 2rem;

  transition: all 0.5s ease-in-out;
}

@media only screen and (max-width: 640px) {
  #entry {
    transform: skew(-5deg) translateX(12%);
    width: 95%;

  }
}

#entry:hover {
  transform: scale(1.2) translateX(10%);
  width: 100%;
  animation: border-angle-rotate 2s infinite ease-in-out;
  border: 0.5rem solid transparent;
}

.box {
  --bg: rgba(12, 12, 12);
  --border-angle: 0deg;
  box-shadow: 0 2px 4px hsl(0 0% 0% / 25%);
  position: relative;

  background: linear-gradient(var(--bg), var(--bg)) padding-box,
  conic-gradient(
      from var(--border-angle),
      var(--bg) 50%,
      #950688FF
  ) border-box;
}

@keyframes border-angle-rotate {
  from {
    --border-angle: 0deg;
  }
  to {
    --border-angle: 360deg;
  }
}

@property --border-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

</style>