<script setup lang="ts">

const rotateSpeed = 1
let rotation = 0
let rotating = false
const standing = ref()

function between(n: number, min: number, max: number) {
  return n > min && n < max
}

function rotateY() {
  if (!rotating && standing.value)
    rotateToDeg(rotation + 180, standing.value)
}

function rotateYMobile(standing: HTMLImageElement) {
  if (!rotating)
    rotateToDeg(rotation + 180, standing)
}

function rotateToDeg(deg: number, element: HTMLImageElement) {
  if (!element) return;

  if (between(rotation, deg - rotateSpeed, deg + rotateSpeed)) {
    rotating = false
    return;
  } else {
    rotating = true
    const direction = rotation < deg ? 1 : -1
    rotation += rotateSpeed * direction
    element.style.transform = `rotateY(${rotation}deg)`

    setTimeout(() => {
      rotateToDeg(deg, element)
    }, 5)
  }
}

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  const standing = document.getElementById("mobileStanding") as HTMLImageElement

  standing.ontouchstart = () => {
    rotateYMobile(standing)
  }
})

</script>

<template>
  <title>dating <3</title>
  <link rel="icon" href="/heart.gif" type="image/gif">
  <div class="background" id="background"></div>
  <div id="container">

    <img id="dating-text" class="notMobile" src="~/assets/dating/datingtext.gif" alt="dating"/>
    <img id="standing" class="notMobile" ref="standing" @mouseover="rotateY()"
         src="~/assets/julian-stuff/julianstanding.png" alt="julian standing (he's so handsome)"/>

    <div id="mobileHeader">
      <img id="dating-text" class="mobile" src="~/assets/dating/datingtext.gif" alt="dating"/>
      <img id="border" class="mobile" src="~/assets/borders/heartbar.gif" alt="heart border"/>
    </div>

    <div class="notMobile">
      <img src="~/assets/dating/heart-jumping.gif" alt="heart jumping"
           style="position: absolute; right: 60px; top: 60px"/>

      <img src="~/assets/dating/floating_heart.gif" alt="floating heart"
           style="position: absolute; right: 520px; top: 160px"/>

      <img src="~/assets/dating/arrow2heart.gif" alt="arrow in two hearts"
           style="position: absolute; right: 30px; top: 250px"/>

      <img src="~/assets/dating/smilie.gif" alt="weird asf smilie face"
           style="position: absolute; right: 640px; top: 400px"/>
    </div>

    <!--    ideas: user reviews, stats-->
    <div id="textContent">

      <h1 id="hello">hello ladies!!!</h1>
      <h1>not just browsing the web? are you also browsing for a relationship?!</h1>

      <div id="mobileImages">
        <img src="~/assets/dating/heart-jumping.gif" alt="heart jumping"
             style="grid-area: 1 / 1 / 1 / 1"/>

        <img src="~/assets/dating/arrow2heart.gif" alt="arrow in two hearts"
             style="grid-area: 2 / 1 / 2 / 1"/>

        <img id="mobileStanding" ref="mobileStanding"
             src="~/assets/julian-stuff/julianstanding.png" alt="julian standing (he's so handsome)"/>

        <img src="~/assets/dating/smilie.gif" alt="weird asf smilie face"
             style="grid-area: 1 / 3 / 1 / 3"/>

        <img src="~/assets/dating/floating_heart.gif" alt="floating heart"
             style="grid-area: 2 / 3 / 2 / 3"/>
      </div>

      <h2>well look no further! i know it's hard to believe but
        <span style="font-size: 40px"><strong>THE julian shuster,</strong></span>
        the handsome fellow on your screen, is single and ready to mingle!!
      </h2>

      <br><br>


      <div style="position: relative">
        <img id="interested" style="border-radius: 35px" src="~/assets/dating/interestedtext.gif" alt="interested?"/>
        <img class="arrow" style="transform: rotateY(180deg)" src="~/assets/dating/sign-arrows.gif"
             alt="flashing arrow sign"/>
      </div>

      <h2>just read the reviews!!</h2>
      <Review title="he is so dreamy and handsome" name="definitely NOT julian" stars="5"
              message="omg he is so awesome and amazing you should definitely date him #yesss #somuchaura"></Review>

    </div>
  </div>

</template>

<style scoped>
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

#hello {
  margin-bottom: 0;
  font-size: 75px;
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

#background {
  background-image: url("~/assets/dating/heartbg.gif")
}

#container {
  padding: 35px;
}

.mobile {
  display: none;
}

#mobileImages {
  display: none;
}

@media only screen and (max-width: 640px) {
  #container {
    padding: 0;
  }

  #textContent {
    display: flex;
    flex-direction: column;
    padding: 0 20px 0 20px;
    margin: 0;
    align-items: center;
  }

  #mobileImages {
    display: grid;
    width: 100%;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  #mobileStanding {
    position: relative;
    max-height: 30vh;
    width: auto;
    object-fit: contain;

    grid-area: 1 / 2 / span 2 / 2;
  }

  #dating-text {
    height: 15vh;
    margin: 0;
    width: auto;
  }

  #mobileHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vh;
    width: 100vw;
  }

  #border {
    position: relative;
    width: 100vw;
    left: 0;
    margin: 0 auto;
  }

  #interested {
    max-width: 75vw;
  }

  .notMobile {
    display: none;
  }

  .mobile {
    display: inherit;
  }

  #hello {
    font-size: 48px;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 1.5em;
  }
}
</style>