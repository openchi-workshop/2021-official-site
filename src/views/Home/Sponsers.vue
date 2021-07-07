<template>
  <div class="sponsors">
    <Title id="organizer" text="# ORGANIZERS" class="sponsors__title" />
    <div class="sponsors__section">
      <lazy-component
        v-for="organizer in organizers"
        :key="organizer.name"
        class="sponsors__imageWrapper"
      >
        <img :alt="organizer.name" :src="organizer.link" />
      </lazy-component>
    </div>

    <Title text="#  CO-ORGANIZERS" class="sponsors__title" />
    <div class="sponsors__section">
      <lazy-component class="sponsors__imageWrapper">
        <img
          alt="iot"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/ntu_csie.png"
        />
      </lazy-component>
      <lazy-component class="sponsors__imageWrapper">
        <img
          alt="iot"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/iot_service_hub.png"
        />
      </lazy-component>
    </div>

    <Title id="sponsors" text="#  SPONSORS" class="sponsors__title" />
    <div class="sponsors__section sponsors__space-around">
      <lazy-component
        class="sponsors__imageWrapper"
        v-for="sponsor in sponsors"
        :key="sponsor.name"
      >
        <img
          :alt="sponsor.name"
          :src="sponsor.link"
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
  name: "sponsors",
  data() {
    return {
      organizers: [
        {
          name: "台科大設計系",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/organizer/ntust.png",
          width: "140px",
          height: "140px",
        },
        {
          name: "臺北科技大學",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/organizer/ntut.png",
          width: "463px",
          height: "114px",
        },
        {
          name: "DCT",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/organizer/dct.png",
          width: "384px",
          height: "114px",
        },
      ],
      sponsors: [
        {
          name: "溫世仁文教基金會",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/talent_nxt.png",
        },
        {
          name: "TISA智慧感知與互動體驗跨校聯盟推動計畫",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/itsa.png",
        },
        {
          name: "遊石設計",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/uxi_design.png",
        },
        {
          name: "AJA",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/aja.png",
        },
        {
          name: "悠識數位",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/userxper.png",
        },
        {
          name: "digital medicine lab",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/digital_medicine_lab.png",
        },
        {
          name: "擴增實境互動技術產學聯盟",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/ar_alliance.png",
        },
        {
          name: "progress bar",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/progress_bar.png",
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
.sponsors {
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, auto));
    grid-column-gap: 72px;
    grid-row-gap: 72px;
    align-items: center;
    justify-items: center;
    margin-bottom: 120px;

    @media (max-width: 968px) {
      justify-items: start;
    }
  }

  &__imageWrapper {
    img {
      max-height: 100%;
    }
  }
}
</style>
