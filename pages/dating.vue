<script setup lang="ts">
import JulianNav from "~/components/JulianNav.vue";

const rotateSpeed = 1
let rotation = 0
let rotating = false
const standing = ref()

import "../assets/dating/heartbg.gif"

onclick = (event => {
  const left = event.clientX
  const top = event.clientY

  const right = window.innerWidth - left
  const bottom = window.innerHeight - top

  // console.log(`left: ${left}, right: ${right}\ntop: ${top}, bottom: ${bottom}`)
})

function between(n: number, min: number, max: number) {
  return n > min && n < max
}

function rotateY() {
  if (!rotating)
    rotateToDeg(rotation + 180)
}

function rotateToDeg(deg: number) {
  if (!standing.value) return;

  if (between(rotation, deg - rotateSpeed, deg + rotateSpeed)) {
    rotating = false
    return;
  } else {
    rotating = true
    const direction = rotation < deg ? 1 : -1
    rotation += rotateSpeed * direction
    standing.value.style.transform = `rotateY(${rotation}deg)`

    setTimeout(() => {
      rotateToDeg(deg)
    }, 5)
  }
}

</script>

<template>
  <title>dating <3</title>
  <link rel="icon" href="/heart.gif" type="image/gif" >
  <div class="background" id="background"></div>
  <div id="container">

    <img id="standing" ref="standing" @mouseover="rotateY()"
         src="~/assets/julian-stuff/julianstanding.png" alt="julian standing (he's so handsome)"/>

    <img src="~/assets/dating/heart-jumping.gif" alt="heart jumping"
             style="position: absolute; right: 60px; top: 60px"/>

    <img src="~/assets/dating/floating_heart.gif" alt="floating heart"
             style="position: absolute; right: 520px; top: 160px"/>

    <img src="~/assets/dating/arrow2heart.gif" alt="arrow in two hearts"
             style="position: absolute; right: 30px; top: 250px"/>

    <img src="~/assets/dating/smilie.gif" alt="weird asf smilie face"
             style="position: absolute; right: 640px; top: 400px"/>


    <img id="dating-text" src="~/assets/dating/datingtext.gif" alt="dating"/>

    <!--    ideas: user reviews, stats-->
    <div id="textContent">
      <h1>hello ladies!!!</h1>

      <h1>not just browsing the web? are you also browsing for a relationship?!</h1>

      <h2>well look no further! i know it's hard to believe but
        <span style="font-size: 40px"><strong>THE julian shuster,</strong></span>
        the handsome fellow to your right, is single and ready to mingle!!
      </h2>
      <br><br>

      <div style="position: relative">
        <img style="border-radius: 35px" src="~/assets/dating/interestedtext.gif" alt="interested?"/>
        <img class="arrow" style="transform: rotateY(180deg)" src="~/assets/dating/sign-arrows.gif"
                 alt="flashing arrow sign"/>
      </div>

      <h2>just read the reviews!!</h2>
      <Review title="he is so dreamy and handsome" name="definitely NOT julian" stars="3.5"
              message="omg he is so awesome and amazing you should definitely date him #yesss #somuchaura"></Review>

    </div>
  </div>

</template>

<style scoped>
#background {
  background-image: url("~/assets/dating/heartbg.gif")
}

#container {
  padding: 35px;
}

#dating-text {
  width: 15vw;
  margin: 30px;
  border-radius: 35px;
}

#standing {
  position: absolute;
  right: 90px;
  top: 90px;
  width: 35%;
}

h1 {
  font-size: 50px
}

h2 {
  font-size: 35px
}

/*margin: top, right, bottom, left */
#textContent {
  margin: 0 45vw auto 5vw;
  text-align: center;
}

.arrow {
  position: absolute;
  vertical-align: bottom;
  width: 5%;
  bottom: 10px
}
</style>