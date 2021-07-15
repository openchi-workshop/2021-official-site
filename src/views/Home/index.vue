<template>
  <div class="home">
    <Header />
    <go-to-top-button />
    <About />
    <Program />
    <Keynote />
    <taichi />
    <Sponsers />
    <Map />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "./About";
import Program from "./Program";
import Keynote from "./Keynote";
import Sponsers from "./Sponsers";
import Taichi from "./Taichi.vue";

import Header from "@/components/layout/Header";
import GoToTopButton from "@/components/ui/GoToTopButton";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

export default {
  components: {
    Header,
    GoToTopButton,
    About,
    Program,
    Keynote,
    Sponsers,
    Map,
    Contact,
    Taichi,
  },
  metaInfo() {
    return {
      title: "OpenHCI 2021 | Home",
    };
  },
};
</script>
