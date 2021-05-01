<template>
  <div class="home">
    <template v-if="isloaded">
      <Header />
      <go-to-top-button />
      <div class="banner">
        <img
          alt="banner"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/banner.png"
        />
      </div>
      <About />
      <Program />
      <Keynote />
      <Blog />
      <Sponsers />
      <Map />
      <Contact />
    </template>
    <template v-else>
      <loading />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "./About";
import Program from "./Program";
import Keynote from "./Keynote";
import Blog from "./Blog";
import Sponsers from "./Sponsers";

import Loading from "@/components/ui/Loading";
import Header from "@/components/layout/Header";
import GoToTopButton from "@/components/ui/GoToTopButton";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

export default {
  name: "Home",
  data() {
    return {
      isloaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isloaded = true;
      }
    };
  },
  components: {
    Loading,
    Header,
    GoToTopButton,
    About,
    Program,
    Keynote,
    Blog,
    Sponsers,
    Map,
    Contact,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
.home {
  background: #1c1c24;
  overflow: hidden;
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
