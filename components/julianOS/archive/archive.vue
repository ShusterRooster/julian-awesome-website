<script setup lang="ts">
import ArchiveItem from "~/components/julianOS/archive/ArchiveItem.vue";
import JulianApp from "~/components/julianOS/JulianApp.vue";
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
        <img src="../../../assets/dating/heartbg.gif" alt="dating background"/>
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
  #mobileFolder {
    display: block;
    height: 4rem;
    width: 100%;

    border-style: solid;
    border-width: 4rem 0 0 0; /* adjust the width to match your image */
    border-image-source: url('~/assets/archive/folderopen.gif');
    border-image-slice: 100% 0 0 0; /* adjust the slice to match your image */
    border-image-repeat: repeat;
  }

  #fishie {
    display: block;
    margin: auto 0 1rem 0;
    align-self: flex-end;
  }

  #infoText {
    padding: 1rem;
  }

  .desktop {
    display: none;
  }

  #items {
    align-items: center;
    padding: 1rem;
  }
}
</style>