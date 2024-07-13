<script setup lang="ts">

const props = defineProps({
  title: String,
  name: String,
  stars: String,
  message: String
})

const stars = ref()

const star = '/star.svg'
const halfStar = '/half-star.svg'

function determineStars() {
  let arr: string[] = []
  const stars = Number(props.stars)

  for (let i = 1; i <= stars; i++) {
    arr.push(star)
  }

  if (stars % 1 >= 0.5) {
    arr.push(halfStar)
  }

  return arr
}

</script>

<template>
  <div id="container">
    <h1>{{ props.title }}</h1>
    <h2 style="margin-top: 10px">{{ props.name }}</h2>

    <div id="stars" ref="stars">
      <div v-for="star in determineStars()">
        <img :src="require(star)" alt="star">
      </div>
    </div>

    <h2>{{ props.message }}</h2>

  </div>

</template>

<style scoped>
* {
  color: white;
}

h1 {
  margin: 0;
  font-family: 'Jersey 10';
  font-size: 45px;
}

h2 {
  font-family: 'Jersey 10';
  font-size: 25px;
}

#container {
  background-color: #2a2a2a;
  border-radius: 35px;
  padding: 20px;
  text-align: left;
  margin: 20px
}

#stars {
  display: flex;
  align-items: center;
}

#stars img {
  width: 50px
}

</style>