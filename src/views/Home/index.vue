<template>
  <div id="home">
    <div class="banner">
      <img alt="banner" src="@/assets/banner.png" />
    </div>
    <About />
    <Program />
    <Keynote />
    <Blog />
    <Sponsers />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "./About";
import Program from "./Program";
import Keynote from "./Keynote";
import Blog from "./Blog";
import Sponsers from "./Sponsers";

export default {
  name: "Home",
  components: {
    About,
    Program,
    Keynote,
    Blog,
    Sponsers,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.home {
  background: #1c1c24;
}
.banner {
  background: #0000ff;
  height: 100vh;
  padding-top: 80px;
  img {
    width: 100%;
  }
}
</style>
