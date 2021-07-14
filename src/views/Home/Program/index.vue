<template>
  <div id="program" class="program">
    <img src="@/assets/homePage/program_small.png" class="program__image" />

    <div class="program__banner">
      <Title text="#  PROGRAM" class="program__banner--title" />
      <div class="program__banner--image">
        <img src="@/assets/homePage/program.png" style="width: 100%" />
      </div>
    </div>

    <div
      class="program__item"
      v-for="({ date, title, schedule }, i) in programs"
      :key="title"
    >
      <ProgramItem :day="i" :date="date" :title="title" :schedule="schedule" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import ProgramItem from "./ProgramItem";
import programs from "./programs.json";

export default {
  name: "Program",
  components: {
    Title,
    ProgramItem,
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
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-row-gap: 88px;
  margin-bottom: 240px;

  &__banner {
    @media (max-width: $md) {
      width: 100%;
      padding-left: 0;
      min-height: 300px;
    }

    @media (max-width: $sm) {
      display: block;
      padding-left: 0;
      text-align: center;
    }

    &--title {
      margin-left: 120px;
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
    width: 100%;
    min-height: 300px;
    padding: 0 10%;
    z-index: 1;

    @media (max-width: $md) {
      width: 100%;
    }

    @media (max-width: $sm) {
      margin-bottom: 100px;
    }
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
}
</style>
