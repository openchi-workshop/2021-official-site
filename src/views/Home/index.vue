<template>
  <div class="home">
    <Header />
    <go-to-top-button />
    <About />
    <Program />
    <Keynote />
    <Blog />
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
import Blog from "./Blog";
import Sponsers from "./Sponsers";

import Header from "@/components/layout/Header";
import GoToTopButton from "@/components/ui/GoToTopButton";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

export default {
  name: "Home",
  components: {
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
