<script setup lang="ts">
import Terminal from "~/components/terminal/Terminal";
const module = useCssModule("terminal")

useSeoMeta({
  title: 'terminal',
  description: 'awesome julian terminal, still WIP! has some fun commands :)',
  ogTitle: 'terminal',
  ogDescription: 'awesome julian terminal, still WIP! has some fun commands :)',
  ogImage: '[og:image]',
  ogUrl: 'julianshuster.com/terminal',
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
      href: '/icons/terminal.gif'
    }
  ]
})


onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  const terminalDiv = document.getElementById("terminal") as HTMLDivElement
  new Terminal(terminalDiv, module)
});


</script>

<template>
  <title>terminal</title>
<!--  <link rel="icon" href="/animated/terminal.gif" type="image/gif">-->
  <link rel="shortcut icon" href="/terminal.png" type="image/png">
  <div id="terminal"/>
</template>

<style module="terminal">

.text {
  white-space: pre;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 16px;
  text-wrap: wrap;
}

.error {
  white-space: pre;
}

.text, .textArea {
  color: #3a9a33;
}

.warning {
  color: #9a8233;
}

.error {
  color: #950e0e;
}

.header {
  margin: 0;
  color: #55a79b;
}

.line {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 75%;
  margin: 0.5rem 0 0.5rem 0;
}

.textArea {
  border: hidden;
  resize: none;
  background-color: rgba(0, 0, 0, 0);
  width: 50%
}

.textArea:focus {
  outline: none;
}

@media only screen and (max-width: 640px) {
  .text {
    font-size: 0.75rem;
  }

  #terminal {
    margin-bottom: 0;
  }
}

</style>

<style scoped>

#terminal {
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;

  background-color: #0c0c0c;
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;

  padding: 20px;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 10vh;
}
</style>