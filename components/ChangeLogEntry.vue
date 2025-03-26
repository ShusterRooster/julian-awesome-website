<script setup lang="ts">
const props = defineProps<{
  title: String,
  date: String,
  border?: String
}>()


</script>

<template>

  <div id="text">
    <h1>✰ {{ props.title }}</h1>
    <h4>{{ props.date }}</h4>
    <div id="indent">
      <slot/>
    </div>
  </div>

</template>

<style scoped>
#indent {
  padding-left: 18px;
  margin-top: 0.5rem;
  border-left: 8px solid white;
}

#text {
  text-align: left;
  max-width: 75%;
  padding-left: 18px;
}

@media only screen and (max-width: 640px) {
  #text {
    padding-left: 0;
    max-width: 100%;
  }
}

</style>