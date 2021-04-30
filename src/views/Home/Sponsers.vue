<template>
  <div id="sponsers" class="sponsers">
    <Title text="#  ORGANIZERS" class="sponsers__title" id="organizer" />
    <div class="sponsers__section sponsers__space-around">
      <div class="sponsers__section--image">
        <v-lazy-image
          alt="台科設計"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_1.png"
        />
      </div>
      <div class="sponsers__section--image">
        <img
          alt="北科互動"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_2.png"
          style="maxwidth: 463px"
        />
      </div>
      <div class="sponsers__section--image">
        <img
          alt="政大數位內容"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_3.png"
          style="maxwidth: 378px"
        />
      </div>
    </div>

    <Title text="#  CO-ORGANIZERS" class="sponsers__title" />
    <div class="sponsers__section">
      <img
        alt="iot"
        src="https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer_1.png"
        style="maxwidth: 571px"
      />
    </div>

    <Title text="#  SPONSERS" class="sponsers__title" />
    <div class="sponsers__section sponsers__space-around">
      <div>
        <img
          alt="progress-bar"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/sponser_1.png"
        />
      </div>
      <div>
        <img
          alt="遊石設計"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/sponser_2.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import VLazyImage from "v-lazy-image";

export default {
  name: "Sponsers",
  components: {
    Title,
    VLazyImage,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
.sponsers {
  margin-bottom: 176px;

  &__title {
    padding: 200px 0 60px 120px;
    @media (max-width: $md) {
      padding-left: 64px;
    }
    @media (max-width: $sm) {
      padding-left: 50px;
    }
  }

  &__section {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 123px;
  }

  &__space-around {
    justify-content: space-around;
  }
}
</style>
