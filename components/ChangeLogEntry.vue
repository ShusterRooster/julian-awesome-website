<script setup lang="ts">
const props = defineProps<{
  title: String,
  date: String,
  border?: String
}>()


</script>

<template>

  <div id="text">
    <h3>✰ {{ props.title }}</h3>
    <p><small>{{ props.date }}</small></p>
    <div id="indent">
      <slot/>
    </div>
  </div>

</template>

<style scoped>
h1, p {
  margin: 0
}

h2 {
  margin-top: 0;
}

#indent {
  padding-left: 18px;
  border-left: 8px solid white;
}

#text {
  margin: 0;
  text-align: left;
  max-width: 75%;
  padding-left: 18px;
  margin-bottom: 2em;
}

@media only screen and (max-width: 640px) {
  #text {
    padding-left: 0;
    max-width: 100%;
  }
}

</style>