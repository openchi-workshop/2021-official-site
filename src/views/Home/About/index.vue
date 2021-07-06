<template>
  <div class="about">
    <div class="about__banner" v-lazy-container="{ source: 'img' }">
      <img
        src="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_720w.png"
        srcset="
          https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_1440w.png 1440w,
          https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_960w.png  1080w,
          https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_640w.png   640w
        "
        sizes="(max-width: 568px) 320px, (max-width: 768px) 600px, 100vw"
        data-loading="https://storage.googleapis.com/openhci2021-storage/home-page/banner_small_size.png"
        alt="OpneHCI 2021 Home Page"
        class="about__banner--image"
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

    &--image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
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
