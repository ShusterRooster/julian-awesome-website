<script setup lang="ts">
useSeoMeta({
  title: 'about :)',
  description: 'some info about the GOAT - julian',
  ogTitle: 'about JULIAN (the GOAT)',
  ogDescription: 'some info about the GOAT - julian #cracked',
  ogImage: '[og:image]',
  ogUrl: 'julianshuster.com/about',
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
      href: '/icons/flower.gif'
    }
  ]
})
</script>

<template>
  <div class="background" id="background"></div>

  <div id="container">
    <div id="intro">
      <h1 style="margin-bottom: 0">hello my name is</h1>
      <img src="~/assets/about/fullname.gif" alt="julian aaron shuster">
    </div>

    <img class="divider" src="~/assets/borders/butterflyborder.gif" alt="butterfly border">

    <div id="rotating">
      <img id="central" src="~/assets/julian/armsopen.png" alt="arms open">

      <img class="rotatingImage" style="animation-delay: -1s;" src="~/assets/about/icecreamcat.gif" alt="ice cream cat">
      <img class="rotatingImage" style="animation-delay: -2s;" src="~/assets/about/rosegrowing.gif" alt="rose growing">
      <img class="rotatingImage" style="animation-delay: -3s;" src="~/assets/about/rotating_computer.gif"
           alt="rotating computer">
      <img class="rotatingImage" style="animation-delay: -4s;" src="~/assets/about/brainspin.gif" alt="brain spinning">
      <img class="rotatingImage" style="animation-delay: -5s;" src="~/assets/about/earth07.gif" alt="earth!">
      <img class="rotatingImage" style="animation-delay: -6s;" src="~/assets/about/raise.gif"
           alt="power to the people!">
    </div>

    <div class="info">
      <h2 style="grid-area: header">as a youngin</h2>
      <img style="grid-area: border" class="divider" src="~/assets/borders/faces.gif" alt="faces border">
      <img style="grid-area: image" src="~/assets/julian/youngin/babypaint.png" alt="baby julian painting">
      <img style="grid-area: image2" src="~/assets/julian/youngin/marker.png" alt="baby julian marker stuff">
      <p style="grid-area: text; text-align: left">
        it was apparent something was wrong. my pre-k teachers said i was not able to speak english and I
        was missing my developmental markers.<br><br>

        I was diagnosed with autism and ADHD early on but I was also diagnosed with depression and generalized anxiety
        later on. <br><br>

        thankfully my mother advocated very heavily for me and got me into an early intervention program and other
        special education programs throughout my school years.
      </p>
    </div>
    <h2 style="text-align: center">
      despite my learning disabilities and special needs, I am privileged in that I had supportive parents and had
      access to these services via wealth and location<br><br>
      I also went to private schools from 2nd to 5th grade because the local school district did not have the ability to
      help me in the ways i needed.
    </h2>
    <img class="divider" src="~/assets/borders/squiggly.gif" alt="ufo border">

    <div id="mental">
      <div id="mental-logo">
        <img class="notMobile" src="~/assets/about/bulgebrain.gif" alt="bulge brain">
        <img class="notMobile" src="~/assets/about/skelebrain.gif" alt="skeleton brain">
        <img src="~/assets/about/mentalillness.gif" alt="mental illness!!">
        <img class="notMobile" src="~/assets/about/skelebrain.gif" alt="skeleton brain">
        <img class="notMobile" src="~/assets/about/bulgebrain.gif" alt="bulge brain">
      </div>

      <img class="divider" style="margin-bottom: 0" src="~/assets/borders/allseeing.gif" alt="all seeing border">


      <h3>
        i am mentally ill.<br><br>

        I started therapy in 2nd grade due to extreme anxiety that chucky (the doll) would come and kill me in my sleep.
        I started having suicidal thoughts in 3rd grade and they got worse as I got bullied much more in 4th grade due
        to my autism and being a chubby kid.
        I also started being medicated at 9yrs old for depression and anxiety and also for ADHD.
      </h3>

      <div style="position: relative">
        <img style="border-radius: 60px" src="~/assets/julian/youngin/meandmichaela.jpg" alt="me and my sister!">
        <img style="position: absolute; bottom: 0; left: 0; width: 100%" src="~/assets/misc/nature.gif" alt="nature">
        <img style="position: absolute; top: 0; right: 0;" src="~/assets/misc/Butterfly.gif" alt="butterfly">
      </div>


      <h3>
        With weekly therapy and meds, I was able to remain mostly stable until 2020 hit. In may of 2020, I was
        hospitalized and diagnosed with type 1 diabetes, a chronic autoimmune disease.<br>
        given this and my mother also having chronic health issues, my family stayed Extremely careful during the
        pandemic.
        I did virtual school and I did not see anyone my own age in person for a year and a few months.
        The isolation mixed with how ass online school was, I ended up spiraling into an uncontrollable depression and
        flunked all of my classes.<br><br>
      </h3>

      <img style="width: 35%" src="~/assets/about/caterpillar.gif" alt="caterpillar">

      <h3>
        Even with the school's best efforts, nothing was working. Thankfully we were able to blame my diabetes on this
        and
        I got a medical excuse for the semester.<br><br>

        I started doing better when we moved up to western mass but I never fully recovered from the pandemic. After my
        senior year, I went to the University of Connecticut and did
        well for the first semester but fell into a deep depressive spiral during my spring semester. I spent the next
        year at my local community college taking easy courses and taking the time to
        get my head back on my shoulders, one day at a time.<br><br>
      </h3>


      <div id="dichotomy">
        <img src="~/assets/julian/crying.png" alt="crying julian #sad">
        <img style="width: 20%" src="~/assets/misc/wavy-arrow.gif" alt="wavy arrow #awesome">
        <img src="~/assets/julian/posedup.png" alt="awesome sauce julian">
      </div>

      <h3>
        now i am here! (at SUNY new paltz) but every day is still a struggle and learning how to balance all of my
        different issues is an arduous and isolating task.<br><br>

        I am grateful and privileged to be able to have the support i have, not to mention the privilege to be able to
        be
        depressed without major repercussion.
      </h3>

      <img id="flexing" src="~/assets/julian/flex.gif" alt="flexing">

    </div>

    <img class="divider" src="~/assets/borders/squiggly.gif" alt="ufo border">

    <h2>also long island fucking sucks</h2>
    <div id="longIsland">
      <img src="~/assets/about/hell.gif" alt="hell is real"/>
      <img src="~/assets/about/longisland.png" alt="long island" style="z-index: 10;">
      <img class="hellFire" style="bottom: 0; width: 100%; z-index: 11" src="~/assets/borders/fireborder.gif"
           alt="fire border">
      <img class="hellFire" style="right: 0; bottom: 0; width: 50%; z-index: 12" src="~/assets/about/fire.gif"
           alt="fire"/>
      <img class="hellFire" style="right: 0; bottom: 0; width: 50%; z-index: 12" src="~/assets/about/devil.gif"
           alt="devil"/>
    </div>

    <h2>
      i Hate long island... especially nassau county!!
    </h2>

    <img class="divider" src="~/assets/borders/sparkles.gif" alt="sparkles">

    <h1>now i have a question for you guys!!!</h1>
    <img src="~/assets/borders/alienborder.gif" alt="alien border">
    <h2>what are 3 things that you admire and/or love about yourself? be honest!!!</h2>

    <div>
      <img src="~/assets/about/hikitty.gif" alt="hi kitty!">
      <img src="~/assets/about/hikitty.gif" alt="hi kitty!">
      <img src="~/assets/about/hikitty.gif" alt="hi kitty!">
    </div>


  </div>
</template>

<style scoped>
#mental {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 80vw;
}

#mental-logo {
  display: flex;
  flex-flow: nowrap;
  max-width: 100%;
  overflow: hidden;
}

#dichotomy {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
}

.info {
  display: grid;
  max-width: 80%;
  grid-template-areas:
      "header header text"
      "border border text"
      "image image2 text";
  justify-items: center;
  align-items: center;
  overflow: scroll;

  border: 5px solid white;
  border-radius: 25px;
  padding: 2rem;
}

.info > img {
  max-height: 100%;
  max-width: 100%;
}

.info > p {
  margin-left: 2rem;
}

#longIsland {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}

img {
  max-width: 100%;
  object-fit: contain;
}

.hellFire {
  position: absolute;

}

#rotating {
  display: grid;
  justify-content: center;
  align-content: center;
  margin: 8vw auto 10vw auto;
}

#rotating > * {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: center;
}

#central {
  width: 400px;
  height: 400px;
  filter: drop-shadow(0 0 20px rgba(228, 139, 10, 0.7));
  z-index: 15;
}

.rotatingImage {
  animation: spinAround 6s linear infinite;
}

@keyframes spinAround {
  from {
    transform: rotate(0deg) translate(15vw);
  }
  to {
    transform: rotate(360deg) translate(15vw);
  }
}

#intro {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  width: 100%;
}

#intro img {
  width: 70%;
  height: auto;
}

.divider {
  width: 80%;
  margin-bottom: 5%;
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 40px 20px 40px;

  overflow-x: hidden;
}

#background {
  background-image: url("~/assets/about/spacebackground.gif")
}

* {
  font-family: "Jacquard 12", monospace;
}

h1 {
  font-size: 5rem;
}

h2 {
  font-size: 4rem;
}

h3 {
  font-size: 3rem;
}

p {
  font-size: 2rem;
}

@media only screen and (max-width: 640px) {
  * {
    font-size: 1.5rem;
    font-family: "Jacquard 12", monospace;
  }

  #flexing {
    width: 50%;
    height: auto;
  }

  #dichotomy {
    width: 100%;
    max-height: 20vh;
  }

  #dichotomy img {
    width: 20%;
    height: auto;
    box-sizing: border-box;
  }

  .info {
    margin-top: 1rem;
    max-height: 100%;
    grid-template-areas:
      "header header"
      "border border"
      "image image2"
      "text text";

    padding: 0.5rem;
  }

  .info > p {
    margin-left: 0;
  }

  .divider {
    width: 100%;
  }

  #intro img {
    width: 100%;
  }

  #central {
    width: 200px;
    height: 200px;
  }

  .rotatingImage {
    max-width: 50px;
  }

  @keyframes spinAround {
    from {
      transform: rotate(0deg) translate(30vw);
    }
    to {
      transform: rotate(360deg) translate(30vw);
    }
  }

  #container {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1rem;
  }

  h3 {
    font-size: 0.5rem;
  }

  p {
    font-size: 0.5rem;
  }

  .notMobile {
    display: none;
  }

}
</style>