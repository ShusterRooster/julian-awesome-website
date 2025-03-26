<script setup lang="ts">

useSeoMeta({
  title: 'blogs!',
  description: 'super epic miscellaneous blogs by julian',
  ogTitle: 'blogs!',
  ogDescription: 'super epic miscellaneous blogs by julian',
  ogImage: '[og:image]',
  ogUrl: 'julianshuster.com/blogs',
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
      href: 'icons/purple_monkey.gif'
    }
  ]
})

const props = defineProps<{
  blog?: any
}>()

const {data: page} = await useAsyncData('blogs', () => {
  return queryCollection('blogs').all()
})

if(props.blog) {
  loadBlog(props.blog)
}

const blogLoaded = ref(false)
const blog = ref({})
const content = ref()
const curtain = ref()
const preview = ref()

const title = ref()
const desc = ref()
const date = ref()

function loadBlog(data: any, entry?: any) {
  if (window.innerWidth <= 640) {
    preview.value.style.visibility = 'visible'
    curtain.value.style.visibility = 'visible'
    preview.value.style.opacity = '1'

    transitionBlog(data, 1000)
  } else if (blogLoaded.value) {
    curtain.value.style.visibility = 'initial'
    curtain.value.style.opacity = '1'

    transitionBlog(data, 1000)
  } else {
    transitionBlog(data, 0)
  }

  blogLoaded.value = true
  entry.value.classList.add('selected')
}

function transitionBlog(data: any, offset: number) {
  setTimeout(() => {
    blog.value = data
    title.value = data.title
    desc.value = data.description
    date.value = data.date

    curtain.value.style.opacity = '0'

    setTimeout(() => {
      curtain.value.style.visibility = 'hidden'
    }, 100)
  }, offset)
}

function mobileHideBlog() {
  curtain.value.style.visibility = 'visible'
  curtain.value.style.opacity = '1'

  setTimeout(() => {
    preview.value.style.opacity = '0'
    preview.value.style.visibility = 'hidden'
    curtain.value.style.visibility = 'hidden'


    setTimeout(() => {
    }, 100)

  }, 1000)
}

</script>

<template>
  <div class="background" id="background"></div>

  <div id="container">

    <div id="about">
      <img id="welcome" src="~/assets/blogs/welcome.gif" alt="welcome">
      <p id="intro">this is my blog area for my website! not much content yet because i just made
        this!!! enjoy :)</p>
      <img id="graphic" src="~/assets/blogs/cyber.gif" alt="cyber graphic"/>

      <img id="mobileGraphic" src="~/assets/blogs/cyber-rotated.gif" alt="cyber rotated"/>
    </div>

    <div id="entries">
      <BlogEntry @load="loadBlog"
                 v-for="blog in page" :key="blog.path"
                 :title="blog.title"
                 :description="blog.description"
                 :date="blog.date"
                 :path="blog.path"/>
    </div>


    <div id="preview" ref="preview">

      <div id="info">
        <img id="back" @click="mobileHideBlog" src="~/assets/blogs/back2.gif" alt="back button">

        <div id="header">
          <h1>{{ title }}</h1>
          <p>{{ date }}</p>
          <h3>{{ desc }}</h3>

          <div id="infoBG"/>
        </div>
      </div>

      <div id="content" ref="content">
        <ContentRenderer v-if="blogLoaded" :value="blog" class="blog"/>
      </div>
      <div id="curtain" ref="curtain"/>

    </div>

  </div>
</template>

<style scoped>
#container {
  display: grid;

  grid-template-areas:
      "about content"
      "entries content";

  grid-template-columns: 35vw auto;
  grid-template-rows: 30vh auto;

  width: 100vw;
  height: 100vh;

  padding: 0 6rem 4rem 0;
  overflow: hidden;
}

#graphic {
  bottom: 0;
  width: 60%;
  place-self: end center;
}

#mobileGraphic, #back {
  display: none;
}

#intro {
  border: dotted white;
  border-width: 0 0 0 10px;
  padding-left: 1rem;
  margin: 1.5rem 0 1.5rem;
  @apply text-4xl;
}

#about {
  grid-area: about;
  background-color: rgba(37, 4, 68, 0.55);
  height: 30vh;
  width: 45vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;

  transform: skew(-5deg) translateX(-5%);
  padding: 1rem 8vw 1rem 10%;
}

#entries {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 100%;

  gap: 3rem;
  transform: skew(-5deg);
  align-self: start;

  padding: 2rem 0 6rem 3rem;

  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
}

#preview {
  display: flex;
  grid-area: content;
  flex-direction: column;

  width: 100%;
  height: 92%;
  margin-top: auto;

  transform: skew(-5deg);
  box-sizing: content-box;
  box-shadow: 0 0 60px 30px rgb(149, 6, 136);
  overflow: hidden;
}

#content {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: rgba(12, 12, 12);
  margin-top: auto;

  font-size: 2rem;
}

#curtain {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transition: all 1s ease-in-out;
  filter: blur(30px) brightness(50%);
  background: rgba(12, 12, 12) url('~/assets/blogs/energy.gif') no-repeat;
  background-size: cover;
  transform: scale(1.2);
}

#info {
  position: relative;
  box-sizing: border-box;

  padding: 2rem 2rem 2rem 4rem;

  max-height: 20%;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

#infoBG {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;
  background: url("~/assets/blogs/energy.gif") no-repeat rgba(12, 12, 12);
  transform: scale(1.2);
  background-size: cover;
  filter: blur(10px) brightness(50%);
}

#header {
  grid-area: header;
  flex-direction: column;
  justify-content: center;
}

.blog {
  box-sizing: border-box;
  padding: 2rem 3rem 3rem 3rem;
}

@media only screen and (max-width: 640px) {
  #container {
    grid-template-areas:
        "about"
        "entries";

    grid-template-rows: 30vh auto;
    grid-template-columns: 1fr;
    padding: 0;
  }

  #entries {
    transform: skew(0);
    padding-left: 0;
    padding-bottom: 3rem;
  }

  #about {
    height: 100%;
    width: 95%;
    grid-template-columns: auto 10%;
    grid-template-rows: 1fr 3fr;

    grid-template-areas:
    "welcome graphic"
    "intro graphic";

    transform: skew(-8deg) translateX(-5%);
    padding: 1rem 8vw 1rem 10%;
  }

  #preview {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: skew(0);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  #info {
    display: flex;
    flex-direction: row;

    padding: 1rem;
    max-height: 15vh;

    justify-content: flex-start;
    align-items: center;
  }

  #header {
    margin-left: 2rem;
  }

  #content {
    height: 100%;

    padding: 0;
    font-size: 2rem;

    box-shadow: 0 0 60px 30px rgb(149, 6, 136);
  }

  .blog {
    box-sizing: border-box;
    padding: 2rem;
  }

  #about img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  #intro {
    @apply text-3xl;
    margin: 0.5rem;
    grid-area: intro;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #graphic {
    display: none;
  }

  #back {
    display: block;
  }

  #mobileGraphic {
    display: block;
    grid-area: graphic;

    margin: auto 0 auto;
  }

  #welcome {
    grid-area: welcome;
  }
}

.selected {
  color: purple;
}

.selected * {
  color: purple;
}

#background {
  filter: blur(5px);
  background-image: url('~/assets/blogs/galaxy.gif');
}
</style>