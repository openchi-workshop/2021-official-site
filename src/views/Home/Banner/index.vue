<template>
  <div class="banner" v-lazy-container="{ selector: 'img' }">
    <img
      data-src="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_720w.png"
      data-srcset="
          https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_1440.png 1440w,
          https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_1440.png  960w,
          https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_1440.png  720w
        "
      sizes="(max-width: 768px) 400px, (max-width: 968px) 500px, 100vw"
      data-loading="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_loading.png"
      alt="OpneHCI 2021 Home Page"
      class="banner__large-image"
    />
    <img
      data-src="https://storage.googleapis.com/openhci2021-storage/home-page/home_banner_320.png"
      alt="OpenHCI 2021 Home Page"
      class="banner__small-image"
    />
  </div>
</template>

<style lang="scss">
.banner {
  background-color: #0a09fa;
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

  &__large-image {
    @media (max-width: 576px) {
      display: none;
    }
  }

  &__small-image {
    display: none;

    @media (max-width: 576px) {
      display: block;
    }
  }
}
</style>