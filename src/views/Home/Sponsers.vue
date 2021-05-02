<template>
  <div id="sponsers" class="sponsers">
    <Title text="# ORGANIZERS" class="sponsers__title" id="organizer" />
    <div class="sponsers__section">
      <lazy-component class="sponsers__section--image">
        <img
          alt="台科設計"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_1.png"
          style="max-width: 100%; max-height: 100%"
        />
      </lazy-component>
      <lazy-component class="sponsers__section--image">
        <img
          alt="北科互動"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_2.png"
          style="max-width: 100%; max-height: 100%"
        />
      </lazy-component>
      <lazy-component class="sponsers__section--image">
        <img
          alt="政大數位內容"
          :src="require('@/assets/homePage/organizer_3.png')"
          style="max-width: 100%; max-height: 100%"
        />
      </lazy-component>
    </div>

    <Title text="#  CO-ORGANIZERS" class="sponsers__title" />
    <lazy-component class="sponsers__section">
      <div>
        <img
          alt="iot"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer_1.png"
          style="width: 100%"
        />
      </div>
    </lazy-component>

    <Title text="#  SPONSERS" class="sponsers__title" />
    <div class="sponsers__section sponsers__space-around">
      <div class="sponsers__section--image">
        <lazy-component>
          <img
            alt="progress-bar"
            src="https://storage.googleapis.com/openhci2021-storage/home-page/sponser_1.png"
            style="width: 100%"
          />
        </lazy-component>
      </div>
      <div class="sponsers__section--image">
        <lazy-component>
          <img
            alt="遊石設計"
            src="https://storage.googleapis.com/openhci2021-storage/home-page/sponser_2.png"
            style="width: 100%"
          />
        </lazy-component>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";

export default {
  name: "Sponsers",
  components: {
    Title,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
.sponsers {
  margin-bottom: 176px;
  padding: 0 5%;

  &__title {
    margin-bottom: 72px;

    @media (max-width: 576px) {
      font-size: 24px;
      margin-bottom: 44px;
    }
  }

  &__section {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 130px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 576px) {
      margin-bottom: 80px;
    }

    &--image {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-bottom: 72px;
      width: 30%;
      min-height: 70px;
      min-width: 500px;

      @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        margin-bottom: 96px;
      }

      @media (max-width: 576px) {
        min-width: unset;
        margin-bottom: 36px;
      }
    }
  }
}
</style>
