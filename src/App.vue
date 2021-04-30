<template>
  <div id="app">
    <Loading />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "@/components/ui/Loading.vue";

export default {
  name: "App",
  components: {
    Loading,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
</style>
