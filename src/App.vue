<template>
  <div id="app">
    <Loading />
    <Header />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
import Loading from "@/views/Loading.vue";

export default {
  name: "App",
  components: {
    Header,
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
  overflow-x: hidden;
}
</style>
