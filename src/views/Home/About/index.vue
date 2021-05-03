<template>
  <div id="about" class="about">
    <div class="about__banner" v-lazy-container="{ source: 'img' }">
      <div class="about__banner--image-small">
        <img
          data-src="https://storage.googleapis.com/openhci2021-storage/home-page/banner_320.png"
          style="width: 100%"
        />
      </div>
      <div class="about__banner--image-large">
        <img
          data-src="https://storage.googleapis.com/openhci2021-storage/home-page/banner_1440.png"
          data-loading="https://storage.googleapis.com/openhci2021-storage/home-page/banner_small_size.png"
          alt="Chris standing up holding his daughter Elva"
          style="width: 100%"
        />
      </div>
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
    width: 100%;
    margin-bottom: 174px;

    @media (max-width: 768px) {
      margin-bottom: 128px;
    }

    @media (max-width: 576px) {
      margin-bottom: 64px;
    }

    &--image-small {
      width: 100%;
      display: none;

      @media (max-width: 576px) {
        display: block;
      }
    }

    &--image-large {
      width: 100%;

      @media (max-width: 576px) {
        display: none;
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
