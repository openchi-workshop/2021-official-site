<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "App",
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
  overscroll-behavior-y: none;
  margin: 0;
  padding: 0;
}
</style>
