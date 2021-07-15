<template>
  <div class="not-found">
    <app-header />
    <div class="not-found__content">
      <div class="not-found__content--image">
        <img
          alt="mobuis"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/mobius_light_1.png"
          style="width: 100%"
        />
      </div>
      <div class="not-found__content--title">404 Page Not Found</div>
      <div class="not-found__content--text">
        You did not break the internet, but we cannot find what you're looking
        for
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
.not-found {
  width: 100%;
  height: 90vh;

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &--image {
      max-width: 200px;
      margin-bottom: 40px;
    }

    &--title {
      color: #fff;
      font-family: "Arvo", serif;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 24px;
    }

    &--text {
      max-width: 300px;
      color: #fff;
      text-align: center;
    }
  }
}
</style>