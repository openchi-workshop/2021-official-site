<template>
  <div class="home">
    <Header />
    <go-to-top-button />

    <banner />
    <mobius />
    <introduction />
    <program />
    <keynote />
    <taichi />
    <sponsor />
    <Map />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "./Banner";
import Mobius from "./Mobius";
import Introduction from "./Introduction";
import Program from "./Program";
import Keynote from "./Keynote";
import Sponsor from "./Sponsor";
import Taichi from "./Taichi";

import Header from "@/components/layout/Header";
import GoToTopButton from "@/components/ui/GoToTopButton";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

export default {
  components: {
    Header,
    GoToTopButton,
    Banner,
    Mobius,
    Introduction,
    Program,
    Keynote,
    Sponsor,
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
