<template>
  <div class="about">
    <div class="about__banner" v-lazy-container="{ selector: 'img' }">
      <img
        data-src="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_720w.png"
        data-srcset="
          https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_1440w.png 1440w,
          https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_960w.png  1080w,
        "
        sizes="(max-width: 768px) 600px, 100vw"
        data-loading="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_loading.png"
        alt="OpneHCI 2021 Home Page"
        class="about__banner--large-image"
      />
      <img
        data-src="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_640w.png"
        alt="OpenHCI 2021 Home Page"
        class="about__banner--small-image"
      />
    </div>
    <Mobius />
    <OpenHci />
  </div>
</template>

<script>
// @ is an alias to /src
import Mobius from "./Mobius";
import OpenHci from "./OpenHci";

export default {
  name: "About",
  components: {
    Mobius,
    OpenHci,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;

.about {
  &__banner {
    position: relative;
    padding-top: 57%;
    margin-bottom: 174px;

    @media (max-width: 768px) {
      margin-bottom: 128px;
    }

    @media (max-width: 576px) {
      padding-top: 177%;
      margin-bottom: 64px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    &--large-image {
      @media (max-width: 576px) {
        display: none;
      }
    }

    &--small-image {
      display: none;

      @media (max-width: 576px) {
        display: block;
      }
    }
  }
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
