<script setup lang="ts">
import {StarFall} from "#components";
</script>

<template>
  <title>julian epic awesome website</title>
  <Link rel="icon" type="image/x-icon" href="/dinosaur.png"></Link>
  <StarFall/>

  <div class="overlay">
    <div id="imgColumnLeft">
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

      <div id="mobileContainer">
        <img id="julianLogo" src="~/assets/julianlogomobile.gif" alt="julian"/>
        <img id="awesomeLogo" src="~/assets/awesomelogo.gif" alt="awesome"/>
        <img id="websiteLogo" src="~/assets/websitelogo.gif" alt="website"/>
      </div>

<!--      <Marquee class="marquee" height="3vh">-->
<!--        <img src="~/assets/home/flying-saucer.gif" alt="flying saucer"/>-->
<!--        <img src="~/assets/home/fish-graphic.gif" alt="fishies!"/>-->
<!--        <img src="~/assets/home/lightbulb.gif" alt="lightbulb guy"/>-->
<!--        <img src="~/assets/home/cactus.gif" alt="cactus"/>-->
<!--      </Marquee>-->
<!--    </div>-->

    <div id="centerContent">
      <img id="logo" src="~/assets/julianlogo.gif" alt="julian awesome website logo"/>
      <h2>omg hello welcome to julian awesome epic website!!!!</h2>

      <p>hello dear visitor! this is an early version of my website!
        I plan on adding a lot more so you can fully immerse yourself in the julian experience!</p>

      <div id="julianPics">
        <img id="matrix" src="~/assets/julian-stuff/julianmatrix.png" alt="matrix julian"/>
        <img id="pants" src="~/assets/julian-stuff/julianpants.png" alt="julian w pants"/>
        <img id="fairy" src="~/assets/julian-stuff/julianfairy.png" alt="julian fairy"/>
        <img id="epic" src="~/assets/julian-stuff/le epic face.png" alt="le epic face"/>
        <img id="camera" src="~/assets/julian-stuff/juliancamera.png" alt="julian camera"/>
        <!--        <img id="face" dir=julianSrc file="julianface.png">-->
      </div>


      <ChangeLog></ChangeLog>
      <img id="swimmin" src="~/assets/home/swimmin.gif" alt="fish swimming #epic">
      <img id="construction" src="~/assets/home/under-construction.gif" alt="under construction!">

    </div>
    <div id="imgColumnRight">
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

#mobileContainer, .marquee, #mobileHeader {
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
  object-fit: contain;
  align-items: center;
  max-width: 15vw;
  height: inherit;
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

  .marquee {
    display: initial;
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

    padding: 0 5vw 0 5vw;
    box-sizing: border-box;
    margin-top: 3vh;

    /*transform: translateX(-5%);*/

    height: 15vh;
  }

  #mobileContainer img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }

  #julianLogo {
    align-self: start;
  }

  #awesomeLogo {
    align-self: center;
  }

  #websiteLogo {
    align-self: end;
  }

  h2 {
    margin-top: 0;
  }

  #swimmin, #construction {
    width: 75vw;
  }

}

/* Medium devices such as tablets (768px and up) */
@media only screen and (min-width: 768px) {

}

@media only screen and (max-width: 640px) {
  #imgColumnLeft, #imgColumnRight {
    display: none;
  }

  #logo {
    display: none;
  }

  .marquee {
    display: initial;
  }

  .overlay {
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
    width: 90vw;
    box-sizing: border-box;
    margin-top: 3vh;

    /*transform: translateX(-5%);*/

    height: 15vh;
  }

  #mobileContainer img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }

  #julianLogo {
    align-self: start;
  }

  #awesomeLogo {
    align-self: center;
  }

  #websiteLogo {
    align-self: end;
  }

  h2 {
    margin-top: 0;
  }

  #swimmin, #construction {
    width: 75vw;
  }

}

/* Large devices such as laptops (1024px and up) */
@media only screen and (min-width: 1024px) {

}

/* Largest devices such as desktops (1280px and up) */
@media only screen and (min-width: 1280px) {

}

#julianPics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 0.5fr);
  grid-auto-flow: row dense;
  height: fit-content;
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

</style>
