<script setup lang="ts">

const phoneImg = ref<HTMLImageElement>()
const phoneScreen = ref<HTMLDivElement>()

async function onLoad() {

  //screen top left is (175, 40)
  //btm right (860, 422)
  //screen is (685, 382)
  //max width = 66%
  //max height = 53.5%
  if (phoneImg.value) {
    const phoneVal = phoneImg.value
    const scaleX = phoneVal.width / phoneVal.naturalWidth
    const scaleY = phoneVal.height / phoneVal.naturalHeight

    const screen = phoneScreen.value

    screen.style.maxWidth = 66 * scaleX + '%'
    screen.style.maxHeight = 58 * scaleY + '%'

    console.log(scaleX, scaleY)

    screen.style.x = phoneVal.offsetLeft + (175 * scaleX) + "px"
    screen.style.top = phoneVal.offsetTop + (42 * scaleY) + "px"
  }
}

const sitting = ref<HTMLImageElement>()
const waving = ref<HTMLImageElement>()
const interact = ref<HTMLDivElement>()
const hello = ref<HTMLHeadingElement>()

function waveJulian() {
  if(sitting.value && waving.value) {
    sitting.value.style.display = 'none'
    waving.value.style.display = 'block'

    interact.value.style.opacity = 0
    hello.value.style.opacity = 1

    setTimeout(() => {
      waving.value.style.display = 'none'
      sitting.value.style.display = 'block'

      interact.value.style.opacity = 1
      hello.value.style.opacity = 0
    }, 2250)
  }
}


</script>

<template>
  <title>contact</title>
  <link rel="icon" href="/dancingsmiley.gif" type="image/gif">
  <link rel="shortcut icon" href="/dancingsmiley.gif" type="image/gif">

  <div class="background" id="background"></div>

  <div id="container">

    <img id="threat" src="~/assets/contact/contact.gif" alt="you will contact me">

    <div id="info">
      <div class="half">
        <img src="../assets/julian/point.gif" alt="pointing julian">
      </div>

      <div class="half" style="gap: 2em">
        <h1>here's how to contact me:</h1>

        <div id="phone">
          <img src="~/assets/contact/phone.png" ref="phoneImg" id="phoneImg" @load="onLoad" alt="phone">

          <div id="phoneScreen" ref="phoneScreen">
            <img src="~/assets/contact/instantgram.gif" alt="instant gram">
            <img src="~/assets/borders/electric.gif" alt="dragon border">

            <img src="../assets/julian/chips.gif" style="width: 50%" alt="chips!!!">
            <h2>
              main: <NuxtLink class="color" to="https://www.instagram.com/julianshuster_/">@julianshuster_</NuxtLink>
            </h2>


            <img src="~/assets/contact/camera.gif" style="width: 50%" alt="camera">
            <h2>
              photography: <NuxtLink class="color" to="https://www.instagram.com/julianscams/">@julianscams</NuxtLink> (dead lol)
            </h2>
          </div>
        </div>

        <div id="email">
          <div class="column">
            <img src="../assets/contact/email/envelopedance1.gif" alt="envelope dance 1">
            <img src="../assets/contact/email/emailclr.gif" alt="email boss lady">
            <img src="../assets/contact/email/cat_mail.gif" alt="cat mail!">
            <img src="../assets/contact/email/emailblock.gif" alt="email block">

          </div>

          <div id="emailCenter">
            <img src="../assets/contact/email/emaillogo.gif" alt="email me..."/>
            <img src="~/assets/borders/frogborder.gif" alt="frog border"/>

            <NuxtLink to="mailto:julianawesomewebsite@proton.me"
                      style="display: flex; flex-direction: column; align-items: center; padding-bottom: 2em">
              <img src="../assets/contact/email/catlickenvelope.gif"
                   style="width: 15vw;"
                   alt="cat licking envelope">

              <h2 style="font-size: 2em" class="color">click here!</h2>
            </NuxtLink>

            <h2>julianawesomewebsite@proton.me</h2>
          </div>

          <div class="column">
            <img src="../assets/contact/email/envelopedance2.gif" alt="envelope dance 2">
            <img src="../assets/contact/email/Email1.gif" alt="email gif">
            <img src="../assets/contact/email/email-mice.gif" alt="email mice">
            <img src="../assets/contact/email/emailcomp.gif" alt="email computers">
          </div>
        </div>

      </div>

    </div>

    <div id="sittingJulian" @click="waveJulian" style="position: relative; cursor: grab; bottom: 0">
      <div id="interact" ref="interact">
        <h2>or you can contact me right here! (just click!)</h2>
        <img style="width: 50%" src="~/assets/contact/aniarrowr.gif" alt="smiley arrow">
      </div>

      <h2 id="hello" ref="hello">hello!</h2>

      <img src="~/assets/julian/sitting.png" ref="sitting" alt="sitting">
      <img src="~/assets/julian/waving.gif" style="display: none" ref="waving" alt="waving">
    </div>

  </div>

</template>

<style scoped>

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 5% 0 5%;
}

#threat {
  width: 50vw;
}

#info {
  display: flex;
  max-width: 100%;
}

.half {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65%;
  padding: 25px;
  text-shadow: rgba(12, 12, 12, 0.4) 2px 2px;
  gap: 2em;
}

.column {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 10%;
  justify-content: space-around;
}

img {
  object-fit: contain;
  max-width: 100%;
  height: auto;
}

#phone {
  display: flex;
  justify-content: center;
  width: 100%;
  object-fit: contain;
  position: relative;
}

#phoneScreen {
  position: absolute;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 3em 1em 3em;
  box-sizing: border-box;
  background-color: rgba(12, 12, 12, 0.8);
  text-align: center;
  text-wrap: wrap;
}

#email {
  display: flex;
  align-content: center;
  gap: 2em;
  max-width: 100%;
  max-height: 100%;
  padding: 5%;
  border-radius: 30px;

  background-clip: border-box;
  background-repeat: no-repeat;
  background-size: 150% 150%;
  background-position: center;
  background-image: url("~/assets/contact/email/envelope.png");
}

#emailCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  //padding-bottom: 10%;
}

#hello, #interact {
  transition: opacity 0.3s ease-in-out;
}

#interact {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 40%;

  margin: 10%;
}

#hello {
  position: absolute;
  opacity: 0;
  font-size: 8em;
  left: 15%;
  top: 20%;

  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
}

.color {
  background: linear-gradient(270deg, #1a2a6c, #b21f1f, #fdbb2d);
  background-size: 600% 600%;
  background-clip: text;
  color: transparent;
  animation: textGradient 10s ease infinite;
}

a {
  text-decoration: none;
  display: inline-flex;
  transition: transform 0.2s ease-in-out;
}

@keyframes textGradient {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}

a:hover {
  transform: scale(1.25);
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2em;
}

* {
  font-family: 'Geostar Fill', sans-serif;
}

#background {
  background-image: url("~/assets/contact/future.gif");
}

</style>