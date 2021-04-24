<template>
  <div class="home">
    <img alt="Vue logo" src="https://storage.googleapis.com/openhci2021-storage/pastwork/img1.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
