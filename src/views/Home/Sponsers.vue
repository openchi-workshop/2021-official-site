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
      <lazy-component
        class="sponsers__section--image"
        v-for="sponser in sponsers"
        :key="sponser.name"
      >
        <img
          :alt="sponser.name"
          :src="sponser.link"
          style="max-width: 100%; max-height: 100%"
        />
      </lazy-component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";

export default {
  name: "Sponsers",
  data() {
    return {
      sponsers: [
        {
          name: "TISA智慧感知與互動體驗跨校聯盟推動計畫",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponser_itsa.png",
        },
        {
          name: "遊石設計",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponser_uxi_design.png",
        },
        {
          name: "悠識數位",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponser_userxper.png",
        },
        {
          name: "擴增實境互動技術產學聯盟",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponser_ar_alliance.png",
        },
        {
          name: "progress bar",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponser_progress_bar.png",
        },
      ],
    };
  },
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
      margin-right: 50px;
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
