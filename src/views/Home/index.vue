<template>
  <div class="home">
    <app-header />
    <go-to-top-button />

    <banner />
    <mobius />
    <introduction />
    <program />
    <keynote />
    <taichi />
    <sponsor />

    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import GoToTopButton from "@/components/ui/GoToTopButton";

import Banner from "./Banner";
import Mobius from "./Mobius";
import Introduction from "./Introduction";
import Program from "./Program";
import Keynote from "./Keynote";
import Sponsor from "./Sponsor";
import Taichi from "./Taichi";

export default {
  components: {
    AppHeader,
    AppFooter,
    GoToTopButton,
    Banner,
    Mobius,
    Introduction,
    Program,
    Keynote,
    Sponsor,
    Taichi,
  },
  metaInfo() {
    return {
      title: "OpenHCI 2021 | Home",
    };
  },
};
</script>
