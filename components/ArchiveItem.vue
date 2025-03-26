<script setup lang="ts">
const props = defineProps<{
  title: String,
  description: String,
  path: String,
}>()

const source = ref()
const background = ref()

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  background.value.style.backgroundImage = `url(${source.value.firstElementChild.src})`
})

</script>

<template>
  <NuxtLink :to="props.path" id="item">
    <div ref="item">
      <div style="display: none" ref="source">
        <slot name="background"></slot>
      </div>

      <div id="content">
        <div id="desktop" class="img">
          <slot name="desktop"></slot>
        </div>

        <div id="mobile" class="img">
          <slot name="mobile"></slot>
        </div>

        <div id="text">
          <h1 id="title">{{ title }}</h1>
          <h2>{{ description }}</h2>
        </div>
      </div>

      <div id="background" ref="background"></div>
    </div>
  </NuxtLink>



</template>

<style scoped>
#item {
  max-width: 80%;
  max-height: 50%;

  width: 100%;
  height: 100%;

  transform: skew(-3deg);
  position: relative;
}

#content {
  display: flex;
  text-align: center;
  align-items: center;
  align-content: center;

  width: 100%;
  height: 100%;

  padding: 2rem;

  z-index: 3;
}

#background {
  position: absolute;

  top: 0;
  filter: blur(10px);

  width: 100%;
  height: 100%;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

#text {
  padding-left: 2rem;
  height: 100%;
  max-width: 40%;
}

#title {
  border-bottom: 4px solid white;
  margin-bottom: 0.25rem;
}

#mobile {
  display: none;
}

@media only screen and (max-width: 640px) {
  #item {
    max-height: 80%;
    max-width: 90%;
  }

  #text {
    max-width: 50%;
    width: 100%;
  }

  #desktop {
    display: none;
  }

  #mobile {
    display: block;
  }
}

.img {
  object-fit: contain;
}


</style>