<script setup lang="ts">
import ArchiveItem from "~/components/julianOS/archive/ArchiveItem.vue";
</script>

<template>
  <div id="items">
    <ArchiveItem title="dating" path="/archive/dating" description="this page is too powerful. look at your own risk!">
      <template #desktop>
        <img src="~/assets/julianOS/screengrabs/datingdesktop.gif" alt="dating desktop"/>
      </template>

      <template #mobile>
        <img src="~/assets/julianOS/screengrabs/datingmobile.gif" alt="dating mobile"/>
      </template>

      <template #background>
        <img src="~/assets/dating/heartbg.gif" alt="dating background"/>
      </template>
    </ArchiveItem>

    <ArchiveItem title="old home" path="/archive/home" description="the OG julian awesome website home page!">
      <template #desktop>
        <img src="~/assets/julianOS/screengrabs/homedesktop.gif" alt="home desktop"/>
      </template>

      <template #mobile>
        <img src="~/assets/julianOS/screengrabs/homemobile.gif" alt="home mobile"/>
      </template>

      <template #background>
        <img src="~/assets/stars/slowdark.gif" alt="home background"/>
      </template>
    </ArchiveItem>
  </div>
</template>

<style scoped>
#items {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: row;
  gap: 2rem;

  height: 100%;
  width: 100%;
}

@media only screen and (max-width: 640px) {
  #items {
    align-items: center;
    padding: 1rem;
  }
}
</style>