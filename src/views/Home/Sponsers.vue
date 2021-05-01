<template>
  <div id="sponsers" class="sponsers">
    <Title text="#  ORGANIZERS" class="sponsers__title" id="organizer" />
    <div class="sponsers__section sponsers__space-around">
      <div class="sponsers__section--image">
        <lazy-component>
          <img
            alt="台科設計"
            src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_1.png"
          />
        </lazy-component>
      </div>
      <div class="sponsers__section--image">
        <img
          alt="北科互動"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_2.png"
          style="maxwidth: 463px"
        />
      </div>
      <div class="sponsers__section--image">
        <lazy-component>
          <img
            alt="政大數位內容"
            src="https://storage.googleapis.com/openhci2021-storage/home-page/organizer_3.png"
            style="maxwidth: 378px"
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
          style="maxwidth: 571px"
        />
      </lazy-component>
    </div>

    <Title text="#  SPONSERS" class="sponsers__title" />
    <div class="sponsers__section sponsers__space-around">
      <div>
        <lazy-component>
          <img
            alt="progress-bar"
            src="https://storage.googleapis.com/openhci2021-storage/home-page/sponser_1.png"
          />
        </lazy-component>
      </div>
      <div>
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
