<template>
  <div id="about" class="about">
    <div class="about__banner">
      <picture>
        <source
          media="(min-width: 992px)"
          srcset="
            https://storage.googleapis.com/openhci2021-storage/home-page/banner_1440w.png
          "
        />
        <v-lazy-image
          src="https://storage.googleapis.com/openhci2021-storage/home-page/banner_576w.png"
          src-placeholder="https://storage.googleapis.com/openhci2021-storage/home-page/banner_small_size.png"
          class="about__banner--image"
          alt="Chris standing up holding his daughter Elva"
        />
      </picture>
    </div>
    <Mobius />
    <OpenHci />
  </div>
</template>

<script>
// @ is an alias to /src
import Mobius from "./Mobius";
import OpenHci from "./OpenHci";
import VLazyImage from "v-lazy-image";

export default {
  name: "About",
  components: {
    Mobius,
    OpenHci,
    VLazyImage,
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

    &--image {
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
