<script setup lang="ts">

</script>

<template>
  <div class="background" id="background"></div>

  <div id="container">
    <img id="header" src="~/assets/about/answers-about-god.gif" alt="about me"/>

    <FunFact gif="flex" caption="strong" fact="julian is the strongest ever of all time... so big muscles  wow"></FunFact>

    <div class="julianQuiz"></div>
  </div>

</template>

<style scoped>

#header {
  width: 25vw;
  margin-bottom: 3vh;
}

#container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;

  box-sizing: border-box;
  height: 100%;
  width: 100vw;
}

#background {
  background-image: url("~/assets/about/future.gif");
}
</style>