<template>
  <div id="sponsers" class="sponsers">
    <Title text="#  ORGANIZERS" class="sponsers__title" id="organizer" />
    <div class="sponsers__section sponsers__space-around">
      <div class="sponsers__section--image">
        <lazy-component>
          <img
            alt="台科設計"
            src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_1.png"
            style="height: 100%"
          />
        </lazy-component>
      </div>
      <div class="sponsers__section--image">
        <img
          alt="北科互動"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_2.png"
          style="height: 100%"
        />
      </div>
      <div class="sponsers__section--image">
        <lazy-component>
          <img
            alt="政大數位內容"
            src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_3.png"
            style="height: 100%"
          />
        </lazy-component>
      </div>
    </div>

    <Title text="#  CO-ORGANIZERS" class="sponsers__title" />
    <div class="sponsers__section">
      <lazy-component>
        <img
          alt="iot"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer_1.png"
          style="height: 100%"
        />
      </lazy-component>
    </div>

    <Title text="#  SPONSERS" class="sponsers__title" />
    <div class="sponsers__section sponsers__space-around">
      <div class="sponsers__section--image">
        <lazy-component>
          <img
            alt="progress-bar"
            src="https://storage.googleapis.com/openhci2021-storage/home-page/sponser_1.png"
            style="height: 100%"
          />
        </lazy-component>
      </div>
      <div class="sponsers__section--image">
        <lazy-component>
          <img
            alt="遊石設計"
            src="https://storage.googleapis.com/openhci2021-storage/home-page/sponser_2.png"
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
  padding: 0 10%;

  &__title {
    margin-bottom: 72px;
  }

  &__section {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 130px;

    &--image {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 110px;
      margin-bottom: 72px;
    }
  }
}
</style>
