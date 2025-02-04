<script setup lang="ts">

const props = defineProps<{
  name: string,
  to: string,
}>()

</script>

<template>
  <NuxtLink id="link" :to="props.to" class="text-3xl" style="text-decoration: none;">
    <div id="icon">
      <slot></slot>
    </div>
    {{ props.name }}
  </NuxtLink>

</template>

<style scoped>

#link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  transition: transform 0.5s ease-out;
  transform-origin: top left;

  max-height: 100%;

  color: #e3b73c;
  text-shadow: #0c0c0c 1px 1px;
}

#icon {
  max-height: 2em;
  max-width: 2em;
  object-fit: scale-down;
}

#icon > * {
  margin: 0;
  max-width: inherit;
  max-height: inherit;
}

/*
  link transitions
 */

a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #e3b73c;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .2s ease-in-out;
}

a:hover::before, a:active::before {
  transform-origin: left;
  transform: scaleX(1);
}


</style>