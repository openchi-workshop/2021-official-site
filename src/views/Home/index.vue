<template>
  <div class="home">
    <app-header />

    <app-banner
      largeImage="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_1440.png"
      smallImage="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_320.png"
      loadingImage="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_loading.png"
      placeholder="OpenHCI 2021 Home Page"
    />
    <mobius />
    <introduction />
    <program />
    <keynote />
    <taichi />
    <sponsor />

    <app-go-to-top-button />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppBanner from "@/components/ui/AppBanner";
import AppFooter from "@/components/layout/AppFooter";
import AppGoToTopButton from "@/components/ui/AppGoToTopButton";

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
    AppGoToTopButton,
    AppBanner,
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
