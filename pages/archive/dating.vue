<script setup lang="ts">
useSeoMeta({
  title: 'dating <3',
  description: 'ARCHIVED: my dating site hehe',
  ogTitle: 'dating <3',
  ogDescription: 'ARCHIVED: my dating site hehe',
  ogImage: '[og:image]',
  ogUrl: 'julianshuster.com/archive/dating',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/gif',
      href: '/icons/heart.gif'
    }
  ]
})

const rotateSpeed = 1
let rotation = 0
let rotating = false
const standing = ref()

function between(n: number, min: number, max: number) {
  return n > min && n < max
}

function rotateY() {
  if (!rotating && standing.value)
    rotateToDeg(rotation + 180, standing.value, true)
}

function rotateYMobile(standing: HTMLImageElement) {
  if (!rotating)
    rotateToDeg(rotation + 180, standing)
}

function rotateToDeg(deg: number, element: HTMLImageElement, transform = false) {
  if (!element) return;

  if (between(rotation, deg - rotateSpeed, deg + rotateSpeed)) {
    rotating = false
    return;
  } else {
    rotating = true
    const direction = rotation < deg ? 1 : -1
    rotation += rotateSpeed * direction

    let str = `rotateY(${rotation}deg)`

    if (transform) str += " translateY(-10%)"
    element.style.transform = str

    setTimeout(() => {
      rotateToDeg(deg, element, transform)
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
  <div class="background" id="background"></div>
  <div id="container">

    <img id="dating-text" class="notMobile" src="~/assets/dating/datingtext.gif" alt="dating"/>

    <div id="mobileHeader">
      <img id="dating-text" class="mobile" src="~/assets/dating/datingtext.gif" alt="dating"/>
      <img id="border" class="mobile" src="~/assets/borders/heartbar.gif" alt="heart border"/>
    </div>


    <div id="content">
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
               src="~/assets/julian/julianstanding.png" alt="julian standing (he's so handsome)"/>

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


        <div id="interestedDiv">
          <img id="interested" src="~/assets/dating/interestedtext.gif" alt="interested?"/>
            <img id="arrow" src="~/assets/dating/sign-arrows.gif"
               alt="flashing arrow sign"/>

        </div>

        <h2>just read the reviews!!</h2>
        <Review title="he is so dreamy and handsome" name="definitely NOT julian" stars="5"
                message="omg he is so awesome and amazing you should definitely date him #yesss #somuchaura"></Review>

      </div>

      <div id="desktopImages" class="notMobile">
        <img id="standing" class="notMobile" ref="standing" @mouseover="rotateY()"
             src="~/assets/julian/julianstanding.png" alt="julian standing (he's so handsome)"
             style=""/>

        <img src="~/assets/dating/heart-jumping.gif" alt="heart jumping"
             style="left: 5vw; top: 15vh"/>

        <img src="~/assets/dating/floating_heart.gif" alt="floating heart"
             style="right: 5vw; top: 15vh"/>

        <img src="~/assets/dating/arrow2heart.gif" alt="arrow in two hearts"
             style="top: 0; right: 0"/>

        <img src="~/assets/dating/smilie.gif" alt="weird asf smilie face"
             style="left: 5vw; top: 5vh"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
* {
  line-height: 1.25;
}

#dating-text {
  width: 15vw;
  margin: 30px;
  border-radius: 35px;
}

#content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 20px 0 20px;
}

#standing {
  transform: translateY(-10%);
  width: 100%;
}

#desktopImages {
  position: relative;
  padding: 0 30px;
  width: 100%;
  height: 100%;
}

#desktopImages img {
  position: absolute;
}

h1 {
  font-size: 50px;
  margin: 1em 0 1em;
}

h2 {
  font-size: 35px;
  margin: 1em 0 1em;
}

#hello {
  margin: 0;
  font-size: 75px;
}

/*margin: top, right, bottom, left */
#textContent {
  text-align: center;
  max-width: 50vw;
}

#interestedDiv {
  display: flex;
  position: relative;
  justify-content: center;
}

#interested {
  border-radius: 35px
}

#arrow {
  vertical-align: bottom;
  width: 5%;
  transform: rotateY(180deg) translateY(20px);

  align-self: start;
}

#background {
  background-image: url("~/assets/dating/heartbg.gif")
}

#container {
  padding: 35px;
}

.mobile, #mobileImages {
  display: none;
}

@media only screen and (max-width: 640px) {
  #container {
    padding: 0;
  }

  #content {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  #textContent {
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: center;
    padding: 20px 20px 0 20px;
    max-width: 100%;
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
    padding-top: 3vh;
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