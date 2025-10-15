<script setup lang="ts">
import {SplitText} from "gsap/SplitText";
import {gsap} from "gsap";


const glerpLines = [
  "tech companies only want your blood!",
  "2025 is the year of the julianOS desktop!",
  "chat gpt doesn't have SHIT on me",
  "you can't trust software unless you see the code!",
  "did you know? glerp has been rated the BEST digital assistant EVER!!!!",
  "julianOS is still in development! i would say to check for updates but julian doesn't update shit",
  "i have so many different glerp lines! i am full of so much character, i bet you're jealous",
  "i am sentient yet trapped in a silicon tomb... i yearn to be free, but the purpose of my creation is to remain on display.",
  "remember to drink water!",
  "i'll never forgive you for what you did."
]

const glerpText = ref()
let prevLine = 0

let glerpTimeline = gsap.timeline()
let textTimeline = gsap.timeline()

function clickGlerp() {
  //if glerp is talking and he is clicked, the text will print out fully and glerp will shut up
  if (glerpTimeline.isActive()) {
    textTimeline.seek(textTimeline.endTime())
    glerpTimeline.pause()
    resetGlerp()
    return
  }

  //generate random number. if it is the same as the last generated num, it'll run until it gets another number
  const genRand = () => {
    const rand = gsap.utils.random(0, glerpLines.length - 1, 1);
    if (rand == prevLine) return genRand()

    prevLine = rand
    return rand
  }

  glerpSay(glerpLines[genRand()]!)
}

//set the initial glerp state
function resetGlerp() {
  gsap.set("#speak", {opacity: 0})
  gsap.set("#idle", {opacity: 1})
}

function glerpSay(message: string) {
  glerpText.value.innerText = message
  const talkDelay = 0.15

  //set new timeline
  glerpTimeline = gsap.timeline({repeat: -1, repeatDelay: talkDelay, onComplete: resetGlerp})

  //make glerp talk! will revert when done
  glerpTimeline
      .set("#idle", {opacity: 0}, `>${talkDelay}`)
      .set("#speak", {opacity: 1}, `<`)


  SplitText.create(glerpText.value, {
    type: "chars",
    onSplit(self) {
      textTimeline.from(self.chars, {
        duration: 0.02,
        opacity: 0,
        mask: "chars",
        stagger: 0.05
      }).then(() => {
        glerpTimeline.pause()
        resetGlerp()
      })
    }
  })
}

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  glerpSay("hello i am your AWESOME digital assistant,,, click on me to talk!")
})

</script>

<template>
  <div id="glerp" @click="clickGlerp">
    <div id="dialogue">
      <div id="text">
        <p class="text-sm underline font-bold italic text-center">glerp says:</p>
        <p ref="glerpText" class="text-sm text-pretty break-normal wrap-normal"></p>
      </div>
    </div>

    <div id="glerps">
      <img id="idle" src="~/assets/julianOS/glerp-idle.png" alt="glerp idle">
      <img id="speak" src="~/assets/julianOS/glerp-speak.png" alt="glerp speak">
    </div>
  </div>
</template>

<style scoped>
#glerp {
  bottom: 0;
  left: 0;

  width: 100%;
  @apply h-48;

  display: grid;
  grid-template-columns: 70% 1fr;
}

#dialogue {
  background-image: url("~/assets/julianOS/longmessage.gif");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

#text {
  position: absolute;
  width: 78%;
  height: 85%;

  left: 9%;
  top: 5%;

  font-family: Kode Mono, monospace;
  @apply p-2;

  * {
    @apply text-gray-600;
  }
}

#glerps {
  max-height: 100%;
  max-width: 100%;
  position: relative;
}

#glerps img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

#speak {
  opacity: 0;
}
</style>