<script setup lang="ts">
const sitting = ref<HTMLImageElement>()
const waving = ref<HTMLImageElement>()
const interact = ref<HTMLDivElement>()
const hello = ref<HTMLHeadingElement>()

function waveJulian() {
  if(sitting.value && waving.value) {
    sitting.value.style.display = 'none'
    waving.value.style.display = 'block'

    interact.value.style.opacity = 0

    hello.value.style.display = 'block'
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
<!--  <link rel="icon" href="/animated/dancingsmiley.gif" type="image/gif">-->
  <link rel="shortcut icon" href="/smiley.png" type="image/png">

  <div class="background" id="background"></div>

  <div id="container">

    <img id="threat" src="~/assets/contact/contact.gif" alt="you will contact me">

    <div id="info">
      <div class="half notMobile">
        <img src="../assets/julian/point.gif" alt="pointing julian">
      </div>

      <div class="half" style="gap: 2em">
        <h1 id="howTo">here's how to contact me:</h1>

        <div id="phone">
          <div id="phoneScreen">
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
          <div class="column notMobile">
            <img src="../assets/contact/email/envelopedance1.gif" alt="envelope dance 1">
            <img src="../assets/contact/email/emailclr.gif" alt="email boss lady">
            <img src="../assets/contact/email/cat_mail.gif" alt="cat mail!">
            <img src="../assets/contact/email/emailblock.gif" alt="email block">
          </div>

          <div id="emailCenter">
            <img src="../assets/contact/email/emaillogo.gif" alt="email me..."/>
            <img src="~/assets/borders/frogborder.gif" alt="frog border"/>

            <NuxtLink to="mailto:julianawesomewebsite@proton.me" id="mailLink">
              <img id="cat" src="../assets/contact/email/catlickenvelope.gif"
                   alt="cat licking envelope">

              <h2 style="font-size: 2em; margin-bottom: 0.25em" class="color">click here!</h2>
            </NuxtLink>

            <h2 id="address">julianawesomewebsite@proton.me</h2>
          </div>

          <div class="column notMobile">
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

      <img src="~/assets/julian/sitting.png" class="lilbro" ref="sitting" style="display: block" alt="sitting">
      <img src="~/assets/julian/waving.gif" class="lilbro" style="display: none" ref="waving" alt="waving">
    </div>

  </div>

</template>

<style scoped>

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3% 5% 0 5%;
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
  max-width: 100%;
  max-height: 100%;

  width: 1036px;
  height: 719px;
  object-fit: contain;
  position: relative;

  background: url("~/assets/contact/phone.png") no-repeat center;
  background-size: contain;
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

  left: 16.98%;
  top: 5.84%;
  width: 65.93%;
  height: 52.85%;
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

#mailLink {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em
}

#cat {
  width: 15vw;
}

#hello, #interact {
  transition: all 0.3s ease-in-out;
}

#interact {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 40%;

  margin: 10%;
}

#sittingJulian {
  width: 100%;
}

.lilbro {
  width: 100%;
}

#hello {
  position: absolute;
  opacity: 0;
  font-size: 8em;
  left: 15%;
  bottom: 20%;

  display: none;

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

@media only screen and (max-width: 1920px) {

  #container {
    padding-top: 5%;
  }

  #howTo {
    margin-bottom: 0;
  }

  #email {
    padding: 0;
    background-size: 150% 200%;
    width: 100%;
  }

  #emailCenter {
    padding: 5%;
    box-sizing: border-box;
  }

  #mailLink {
    padding-bottom: 0;
  }

  #address {
    font-size: 0.75em;
  }

  #cat {
    width: 50vw;
  }

  #phone {
    background-image: none;

    width: auto;
    height: auto;
  }

  #phoneScreen {
    position: relative;
    border-radius: 25px;

    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .half {
    padding: 0;
    max-width: 100%;
  }

  #threat {
    width: 90vw;
  }

  #sittingJulian {
    margin-top: 3em;
  }

  #interact {
    margin: 0 0 0 1em;
  }

  #hello {
    font-size: 2.5em;
    left: 10%;
    margin: 0;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1em;
  }

  .notMobile {
    display: none;
  }
}

* {
  font-family: 'Geostar Fill', sans-serif;
}

#background {
  background-image: url("~/assets/contact/future.gif");
}

</style>