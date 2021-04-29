<template>
  <div id="home">
    <div class="banner">
      <img alt="banner" src="@/assets/homePage/banner.png" />
    </div>
    <About />
    <Program />
    <Keynote />
    <Blog />
    <Sponsers />
    <!-- <Map />
    <Contact /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import About from "./About";
import Program from "./Program";
import Keynote from "./Keynote";
import Blog from "./Blog";
import Sponsers from "./Sponsers";
// import Map from "./Map";
// import Contact from "./Contact";

export default {
  name: "Home",
  components: {
    About,
    Program,
    Keynote,
    Blog,
    Sponsers,
    // Map,
    // Contact,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
.home {
  background: #1c1c24;
}
.banner {
  background: #0000ff;
  height: 100vh;
  img {
    width: 100%;
    padding-top: 100px;
  }
  @media (max-width: $md) {
    height: unset;
    padding-bottom: 16px;
  }
  @media (max-width: $sm) {
    height: unset;
    padding-bottom: 35px;
  }
}
</style>
