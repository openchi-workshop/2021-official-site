<template>
  <div class="sponsors">
    <app-title id="organizer" class="sponsors__title"># ORGANIZERS</app-title>
    <div class="sponsors__section">
      <lazy-component
        v-for="organizer in organizers"
        :key="organizer.name"
        class="sponsors__imageWrapper"
      >
        <img :alt="organizer.name" :src="organizer.link" />
      </lazy-component>
    </div>

    <app-title class="sponsors__title"># CO-ORGANIZERS</app-title>
    <div class="sponsors__section">
      <lazy-component v-for="co_organizer in co_organizers" class="sponsors__imageWrapper" :key="co_organizer.name" >
        <img
          :alt="co_organizer.name"
          :src="co_organizer.link"
          :width="co_organizer.width"
          :height="co_organizer.height"
        />
      </lazy-component>
    </div>

    <app-title id="sponsors" class="sponsors__title"># SPONSORS</app-title>
    <div class="sponsors__section sponsors__space-around">
      <lazy-component
        class="sponsors__imageWrapper"
        v-for="sponsor in sponsors"
        :key="sponsor.name"
      >
        <img
          :alt="sponsor.name"
          :src="sponsor.link"
        />
      </lazy-component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTitle from "@/components/ui/AppTitle";

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
      co_organizers : [
        {
          name: "台大資訊工程學系暨研究所",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/ntu_csie.png",
        },
        {
          name: "物聯網智造基地",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/iot_service_hub.png",
        },
        {
          name: "臺灣科技大學創新育成中心",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/bic_ntust_2.png",
          width: "261px",
          height: "111px",
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
          name: "台大創創",
          link: "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/ntu_d-school.png",
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
    AppTitle,
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
      grid-template-columns: repeat(auto-fit, minmax(auto, 100vw));
      justify-items: start;
    }
  }

  &__imageWrapper {
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>
