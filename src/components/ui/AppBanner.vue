<template>
  <div class="banner" v-lazy-container="{ selector: 'img' }">
    <img
      :data-src="largeImage"
      :data-loading="loadingImage"
      :alt="placeholder"
      class="banner__large-image"
    />
    <img
      :data-src="smallImage"
      :alt="placeholder"
      class="banner__small-image"
    />
  </div>
</template>

<script>
export default {
  props: {
    largeImage: {
      type: String,
    },
    smallImage: {
      type: String,
    },
    loadingImage: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

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
