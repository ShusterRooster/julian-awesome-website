<script setup lang="ts">
import {StarFall} from "#components";

// onclick = (event => {
//   console.log(`${event.clientX}.${event.clientY}`
// };

</script>

<template>
  <title>julian epic awesome website</title>
  <StarFall class="overlay">

    <div id="imgColumnLeft">
      <img src="~/assets/home/butterflies.gif" alt="butterflies">
      <img src="~/assets/home/gnome-toilet.gif" alt="gnome toilet">
      <img src="~/assets/home/apple.gif" alt="apple">
      <img src="~/assets/home/sharkie.gif" alt="shark!">
    </div>

    <div id="centerContent">
      <img class="logo" src="~/assets/julianlogo.gif" alt="julian awesome website logo">
      <h2>omg hello welcome to julian awesome epic website!!!!</h2>

      <p>hello dear visitor! this is an early version of my website!
        I plan on adding a lot more so you can fully immerse yourself in the julian experience!</p>

      <div id="julianPics">
        <img id="matrix" src="~/assets/julian-stuff/julianmatrix.png" alt="matrix julian">
        <img id="pants" src="~/assets/julian-stuff/julianpants.png" alt="julian w pants">
        <img id="fairy" src="~/assets/julian-stuff/julianfairy.png" alt="julian fairy">
        <img id="epic" src="~/assets/julian-stuff/le epic face.png" alt="le epic face">
        <img id="camera" src="~/assets/julian-stuff/juliancamera.png" alt="julian camera">
        <!--        <img id="face" dir=julianSrc file="julianface.png">-->
      </div>

<!--      <div id="introText">-->
<!--        <h2 style="display inline-block">hello i am-->

<!--          <img dir=julianSrc file="julian shuster.gif" width="25%">-->
<!--        </h2>-->

<!--      </div>-->
    </div>
    <div id="imgColumnRight">
      <img src="~/assets/home/flying-saucer.gif" alt="flying saucer">
      <img src="~/assets/home/fish-graphic.gif" alt="fishies!">
      <img src="~/assets/home/lightbulb.gif" alt="lightbulb guy">
      <img src="~/assets/home/cactus.gif" alt="cactus">
    </div>

  </StarFall>
</template>

<style scoped>
* {
  font-size: 125%;
  font-family: 'Micro 5';
}

.logo {
  padding-top: 40px;
  padding-bottom: 20px;
  will-change: filter;
  transition: filter 300ms;
  width: fit-content;
  align-self: center;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #89DD36);
}

.overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  background: rgba(0, 0, 0, .75);
  min-width: 100vw;
  min-height: 100vh;
  width: 100vw;
  height: 100%;
}

#julianPics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 0.5fr);
  grid-auto-flow: row dense;
  height: fit-content;
  max-width: 1200px;
  justify-items: center;
  padding: 20px;
}

#julianPics img {
  max-width: 75%; /* Ensures assets fill their containers */
  height: auto;
}

#fairy {
  grid-area: 1 / 1 / 2 / 2;
}

#epic {
  grid-area: 1 / 2 / 2 / 3;
}

#face {
  grid-area: 2 / 1 / 3 / 2;
}

#camera {
  grid-area: 2 / 2 / 4 / 3;
}

#matrix {
  grid-area: 1 / 3 / 4 / span 5;
}

#pants {
  grid-area: 2 / 1 / 4 / 2;
}

#centerContent {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: fit-content;
  height: fit-content;
  justify-content: center;
}

#imgColumnLeft, #imgColumnRight {
  top: 0;
  bottom: 0;
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: fit-content;
  min-width: 300px;
  height: 100%;
}

#imgColumnLeft {
  left: 0;
}

#imgColumnRight {
  right: 0;
}

p {
  color: white;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px;
}

h1, h2 {
  color: white;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
}
</style>
