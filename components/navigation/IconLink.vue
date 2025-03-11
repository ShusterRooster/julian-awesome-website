<script setup lang="ts">

const props = defineProps<{
  name: string,
  to: string,
}>()

</script>

<template>
  <NuxtLink class="link" style="text-decoration: none;" :to="props.to">
      <slot></slot>
    <div id="text">
      {{ props.name }}
    </div>
  </NuxtLink>

</template>

<style scoped>

.link {
  position: relative;
  display: grid;

  grid-auto-columns: 1fr;
  grid-auto-rows: 3fr 1fr;
  text-align: center;
  place-items: center;

  row-gap: 0.5rem;

  width: 100%;
  height: 100%;

  transition: transform 0.5s ease-out;
  transform-origin: top left;
}

#text {
  font-size: 2rem;
  line-height: 1;
  align-self: end;
  color: #e3b73c;
  text-shadow: #0c0c0c 1px 1px;
}

:slotted(img) {
  max-height: 100%;
  height: 100%;

  object-fit: scale-down;
  margin: 0;

  align-self: center;
  min-height: 0;
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