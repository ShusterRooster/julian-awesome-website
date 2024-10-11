<script setup lang="ts">
import {StarFall} from "#components";
</script>

<template>
  <title>julian epic awesome website</title>
  <Link rel="icon" type="image/x-icon" href="/dinosaur.png"></Link>
  <StarFall/>

  <div class="overlay">
    <div id="imgColumnLeft" style="left: 0">
      <img src="~/assets/home/butterflies.gif" alt="butterflies"/>
      <img src="~/assets/home/gnome-toilet.gif" alt="gnome toilet"/>
      <img src="~/assets/home/apple.gif" alt="apple"/>
      <img src="~/assets/home/sharkie.gif" alt="shark!"/>
    </div>

    <!--    <div id="mobileHeader">-->
    <!--      <Marquee class="marquee" height="3vh">-->
    <!--        <img src="~/assets/home/butterflies.gif" alt="butterflies"/>-->
    <!--        <img src="~/assets/home/gnome-toilet.gif" alt="gnome toilet"/>-->
    <!--        <img src="~/assets/home/apple.gif" alt="apple"/>-->
    <!--        <img src="~/assets/home/sharkie.gif" alt="shark!"/>-->
    <!--      </Marquee>-->


    <!--      <Marquee class="marquee" height="3vh">-->
    <!--        <img src="~/assets/home/flying-saucer.gif" alt="flying saucer"/>-->
    <!--        <img src="~/assets/home/fish-graphic.gif" alt="fishies!"/>-->
    <!--        <img src="~/assets/home/lightbulb.gif" alt="lightbulb guy"/>-->
    <!--        <img src="~/assets/home/cactus.gif" alt="cactus"/>-->
    <!--      </Marquee>-->
    <!--    </div>-->

    <div id="centerContent">
      <div id="mobileContainer">
        <img id="julianLogo" src="~/assets/logos/julianlogomobile.gif" alt="julian"
             style="align-self: start"/>

        <img id="awesomeLogo" src="~/assets/logos/awesomelogo.gif" alt="awesome"
             style="align-self: center"/>

        <img id="websiteLogo" src="~/assets/logos/websitelogo.gif" alt="website"
             style="align-self: end"/>
      </div>

      <img id="logo" src="~/assets/logos/julianlogo.gif" alt="julian awesome website logo"/>
      <h2>omg hello welcome to julian awesome epic website!!!!</h2>

      <h2>hello dear visitor! welcome to the current state of the julian awesome website experience! click the little julian at the top of your screen to start exploring!!!</h2>

      <div id="julianPics">
        <img src="~/assets/julian/julianmatrix.png" alt="matrix julian"
             style="grid-area: 1 / 3 / span 2 / span 3"/>

<!--        <img src="~/assets/julian/julianface.png" alt="julian face"-->
<!--             style="grid-area: 3 / 4 / 3 / 4"/>-->

<!--        <img src="~/assets/home/watermelon.png" alt="scary watermelon (he is my friend)"-->
<!--             style="grid-area: 3 / 3 / 3 / 3"/>-->

        <img src="~/assets/julian/julianpants.png" alt="julian w pants"
             style="grid-area: 2 / 1 / span 4 / 2"/>

        <img src="~/assets/julian/julianfairy.png" alt="julian fairy"
             style="grid-area: 1 / 1 / 2 / 2"/>

        <img src="~/assets/julian/le epic face.png" alt="le epic face"
             style="grid-area: 1 / 2 / 2 / 3"/>

        <img src="~/assets/julian/juliancamera.png" alt="julian camera"
             style="grid-area: 2 / 2 / 4 / 3"/>
      </div>

      <h2>this is still a relatively early version of the site so please check back in every so often for updates!</h2>
      <h2>the desktop and mobile versions of the website are markedly different so please check em out!</h2>

      <ChangeLog></ChangeLog>
      <img id="swimmin" src="~/assets/home/swimmin.gif" alt="fish swimming #epic">
      <img id="construction" src="~/assets/home/under-construction.gif" alt="under construction!">

    </div>
    <div id="imgColumnRight" style="right: 0">
      <img src="~/assets/home/flying-saucer.gif" alt="flying saucer"/>
      <img src="~/assets/home/fish-graphic.gif" alt="fishies!"/>
      <img src="~/assets/home/lightbulb.gif" alt="lightbulb guy"/>
      <img src="~/assets/home/cactus.gif" alt="cactus"/>
    </div>

  </div>

</template>

<style scoped>

#logo {
  padding-top: 40px;
  padding-bottom: 20px;
  will-change: filter;
  transition: filter 300ms;
  width: 50vw;
  align-self: center;
}

#logo:hover {
  filter: drop-shadow(0 0 2em #89DD36);
}

#mobileContainer {
  display: none;
}

.overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  max-width: 100vw;
  height: 100%;
}

#centerContent {
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#imgColumnLeft, #imgColumnRight {
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15vw;
  height: inherit;
}

#imgColumnLeft, #imgColumnRight img {
  object-fit: contain;
  max-width: inherit;
  height: auto;
}

p {
  color: white;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px;
}

h2 {
  font-size: 2em;
}

* {
  font-size: 1.15em;
  text-align: center;
  padding: 10px;
}

#swimmin, #construction {
  width: 25vw;
}

/* Small devices such as large phones (640px and up) */
@media only screen and (max-width: 640px) {
  #imgColumnLeft, #imgColumnRight {
    display: none;
  }

  #logo {
    display: none;
  }

  .overlay {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  #mobileHeader {
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
  }

  #mobileContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    will-change: filter;
    transition: filter 300ms;
    width: 80vw;

    padding: 0 0 3vh 0;
    box-sizing: border-box;
    margin-top: 3vh;
    height: 18vh;
  }

  #mobileContainer img {
    overflow: auto;
    height: 100%;
    width: auto;
    object-fit: contain;
  }

  h2 {
    margin-top: 0;
  }

  #swimmin, #construction {
    width: 75vw;
  }

  h2 {
    font-size: 1.15em;
  }

}

/* Medium devices such as tablets (768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices such as laptops (1024px and up) */
@media only screen and (min-width: 1024px) {

}

/* Largest devices such as desktops (1280px and up) */
@media only screen and (min-width: 1280px) {

}

#julianPics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 0.5fr);
  //grid-auto-flow: row dense;
  height: fit-content;
  justify-items: center;
  padding: 20px;
  width: 100%;
}

#julianPics img {
  max-width: 75%; /* Ensures assets fill their containers */
  height: auto;

  object-fit: contain;
}

</style>
