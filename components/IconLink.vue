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

      <span id="icon" ref="icon">
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
  font-size: 2em;

  margin: 0.15em 0 0.15em 0 ;

  transition: transform 0.5s ease-out;
  transform-origin: top left;
}

a {
  color: white;
  text-decoration: none;
  font-family: "Micro 5";
}

#icon {
  display: inline-block;
  width: 1em;
  height: 1em;
}

#icon > * {
  margin: 0;
  width: inherit;
  height: inherit;
}

/*
  link transitions
 */
a {
  color: white;
  position: relative;
  text-decoration: none;
  font-family: "Micro 5";
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

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}


</style>