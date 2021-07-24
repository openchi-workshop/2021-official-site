<template>
  <div id="program" class="program">
    <img src="https://storage.googleapis.com/openhci2021-storage/home-page/program_right.png" class="program__image" />

    <div class="program__banner">
      <app-title class="program__banner--title"> # PROGRAM </app-title>
      <div class="program__banner--image">
        <img src="https://storage.googleapis.com/openhci2021-storage/home-page/program_left.png" style="width: 100%" />
      </div>
    </div>

    <app-slide-in-animation
      class="program__item"
      v-for="({ date, title, schedule }, i) in programs"
      :key="title"
    >
      <program-item :day="i" :date="date" :title="title" :schedule="schedule" />
    </app-slide-in-animation>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTitle from "@/components/ui/AppTitle";
import AppSlideInAnimation from "../../../components/ui/AppSlideInAnimation.vue";

import ProgramItem from "./ProgramItem";
import programs from "./programs.json";

export default {
  name: "Program",
  components: {
    AppTitle,
    ProgramItem,
    AppSlideInAnimation,
  },

  data() {
    return {
      programs: programs,
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$xl: 1200px;
$lg: 992px;
$md: 768px;
$sm: 576px;

.program {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50vw, 1fr));
  grid-row-gap: 88px;
  margin-bottom: 240px;

  @media (max-width: $xl) {
    grid-template-columns: repeat(auto-fit, minmax(100vw, 1fr));
  }

  &__image {
    position: absolute;
    top: 50%;
    right: 0;
    width: 192px;
    height: 219px;

    @media (max-width: 576px) {
      display: none;
    }
  }

  &__banner {
    @media (max-width: $md) {
      min-height: 300px;
    }

    &--title {
      margin-left: 10%;
    }

    &--image {
      width: 80%;
      left: 0;
      margin-top: 100px;

      @media (max-width: $md) {
        width: 60%;
      }
    }
  }

  &__item {
    min-height: 300px;
    padding: 0 10%;
    z-index: 1;

    @media (max-width: $sm) {
      margin-bottom: 100px;
      padding: 0 8%;
    }
  }
}
</style>
