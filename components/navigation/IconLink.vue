<script setup lang="ts">

const props = defineProps<{
  name: string,
  to: string,
}>()

</script>

<template>
  <div id="link">
    <NuxtLink :to="props.to">
      {{ props.name }}

      <span id="icon">
        <slot></slot>
      </span>
    </NuxtLink>

  </div>

</template>

<style scoped>

#link {
  position: relative;

  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  flex-wrap: nowrap;
  text-align: center;
  justify-content: space-evenly;
  gap: 0.25em;

  margin: 10px 0 10px 0;

  transition: transform 0.5s ease-out;
  transform-origin: top left;

  text-shadow: #0c0c0c 1px 1px;
}

a {
  color: white;
  text-decoration: none;
  font-family: "Micro 5", monospace;
}

#icon {
  display: inline-block;
  max-height: 1em;
  max-width: 1em;
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
a {
  color: white;
  position: relative;
  text-decoration: none;
  font-family: "Micro 5", monospace;
  font-size: 25px;
}

a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

a:hover::before, a:active::before {
  transform-origin: left;
  transform: scaleX(1);
}


</style>