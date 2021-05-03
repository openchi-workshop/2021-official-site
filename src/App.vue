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
<style lang="scss">
#app {
  font-family: "Noto Sans TC", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 26px;
  color: #2c3e50;

  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 22px;
  }
}

body {
  overscroll-behavior: none;
  margin: 0;
  padding: 0;
}
</style>
