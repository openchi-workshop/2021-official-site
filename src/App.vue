<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style>
#app {
  font-family: "Arvo", serif;
  background: #1c1c24;
  overflow-x: hidden;
}
</style>
