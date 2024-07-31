<script setup lang="ts">
const props = defineProps<{
  title: String,
  date: String,
  border?: String
}>()


</script>

<template>

  <div id="text">
    <h1>{{ props.title }}</h1>
    <p><small>{{ props.date }}</small></p>
    <div id="indent">
      <h2><slot/></h2>
    </div>
  </div>

</template>

<style scoped>


h1 {
  font-size: 2em;
  margin: 0
}

p {
  margin: 0;
}

h2 {
  font-size: 1.25em;
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
}

@media only screen and (max-width: 640px) {
  h1 {
    font-size: 1em;
    margin: 0
  }

  h2 {
    font-size: 0.75em;
  }

  p {
    font-size: 0.75em;
  }

  #text {
    padding-left: 0;
    max-width: 100%;
  }
}

</style>