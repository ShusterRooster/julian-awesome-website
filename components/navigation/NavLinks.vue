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

    <IconLink name="dating" to="/dating">
      <img src="~/assets/dating/earthhearts.gif" alt="dating icon"/>
    </IconLink>

    <IconLink name="terminal" to="/terminal">
      <img src="~/assets/misc/computer_surfing.gif" alt="terminal icon"/>
    </IconLink>

    <IconLink name="contact" to="/contact">
      <img src="~/assets/contact/flamingo.gif" alt="contact icon"/>
    </IconLink>
  </div>
</template>

<style scoped>

</style>