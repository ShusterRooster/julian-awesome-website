<script setup lang="ts">
import IconLink from "~/components/navigation/IconLink.vue";

defineProps<{
  fontSize?: String
}>()
</script>

<template>
  <div id="links">
    <IconLink name="home" to="/">
      <img src="~/assets/home/fishie.gif" alt="home icon"/>
    </IconLink>

    <IconLink name="terminal" to="/terminal">
      <img src="~/assets/misc/computer_surfing.gif" alt="terminal icon"/>
    </IconLink>

    <IconLink name="about" to="/about">
      <img src="~/assets/misc/3dbonehead.gif" alt="about icon"/>
    </IconLink>

    <IconLink name="contact" to="/contact">
      <img src="~/assets/contact/flamingo.gif" alt="contact icon"/>
    </IconLink>
  </div>
</template>

<style scoped>

</style>