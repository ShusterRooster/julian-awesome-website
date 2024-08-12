<script setup lang="ts">
import

const props = defineProps<{
  fact: string
  gif: string
  caption: string
}>()

const gifURL = new URL(`../../assets/julian/${props.gif}.gif`, import.meta.url).href
const captionURL = new URL(`../../assets/about/${props.caption}.gif`, import.meta.url).href

function getAlt(file: string) {
  return file.substring(0, file.lastIndexOf("."));
}

const gif = ref<HTMLImageElement>
const caption = ref<HTMLInputElement>

watch(gif, async (value) => {
  value = await
})

</script>

<template>
  <div class="row">
    <div class="fact">
      <img src="~/assets/about/funfact.gif" alt="fun fact">
      <p>{{ fact }}</p>
    </div>

    <div id="flex">
      <img ref="gif" :src="gifURL" :alt="getAlt(props.gif)">
      <img ref="caption" :src="captionURL" :alt="getAlt(props.caption)">
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75vh;
}

.row * {
  font-size: 48px;
  font-family: "Jacquard 12", monospace;
  max-height: 100%;
}

.fact {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 30px;

  max-width: 50%;
  border-radius: 30px;
  background-color: #0c0c0c;
}

#flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5%;
  max-height: 100%;
}

#flex img {
  width: auto;
  height: 100%;
  object-fit: scale-down;
}
</style>