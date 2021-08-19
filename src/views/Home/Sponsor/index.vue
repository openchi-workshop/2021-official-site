<template>
  <div class="sponsors">
    <app-title id="organizer" class="sponsors__title"># ORGANIZERS</app-title>
    <div class="sponsors__section">
      <lazy-component
        v-for="{ name, link, width, height } in organizers"
        :key="name"
      >
        <img
          :alt="name"
          :src="link"
          :width="width"
          :height="height"
          class="sponsors__section--image"
        />
      </lazy-component>
    </div>

    <app-title class="sponsors__title"># CO-ORGANIZERS</app-title>
    <div class="sponsors__section">
      <lazy-component
        v-for="{ name, link, width, height } in co_organizers"
        :key="name"
      >
        <img
          class="sponsors__section--image"
          :alt="name"
          :src="link"
          :width="width"
          :height="height"
        />
      </lazy-component>
    </div>

    <app-title id="sponsors" class="sponsors__title"># SPONSORS</app-title>
    <div class="sponsors__section">
      <lazy-component
        v-for="{ name, link, width, height } in sponsors"
        :key="name"
      >
        <img
          class="sponsors__section--image"
          :alt="name"
          :src="link"
          :width="width"
          :height="height"
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
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/organizer/ntust.png",
          width: 140,
          height: 140,
        },
        {
          name: "臺北科技大學",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/organizer/ntut.png",
          width: 463,
          height: 114,
        },
        {
          name: "DCT",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/organizer/dct.png",
          width: 384,
          height: 114,
        },
      ],
      co_organizers: [
        {
          name: "台大資訊工程學系暨研究所",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/ntu_csie.png",
          width: 590,
          height: 118,
        },
        {
          name: "物聯網智造基地",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/iot_service_hub.png",
          width: 571,
          height: 143,
        },
        {
          name: "臺灣科技大學創新育成中心",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/bic_ntust_2.png",
          width: 213,
          height: 91,
        },
        {
          name: "台北市文化創意產業扶植計畫",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/co-organizer-TCCICP.webp",
          width: 654,
          height: 125,
        },
        {
          name: "松山文創園區",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/co-organizer-SCCP.webp",
          width: 231,
          height: 122,
        },
        {
          name: "松菸創作者工廠",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/co-organizer-SCH.webp",
          width: 133,
          height: 100,
        },
        {
          name: "美國在台協會",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/co-organizer-AIT.webp",
          width: 265,
          height: 100,
        },
        {
          name: "美國創新中心",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/co-organizer/co-organizer-AIC.webp",
          width: 265,
          height: 100,
        },
      ],
      sponsors: [
        {
          name: "溫世仁文教基金會",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-talent-nxt.webp",
          width: 589,
          height: 109,
        },
        {
          name: "TISA智慧感知與互動體驗跨校聯盟推動計畫",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-itsa.webp",
          width: 760,
          height: 68,
        },
        {
          name: "台大創新設計學院",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-d-school.webp",
          width: 293,
          height: 72,
        },
        {
          name: "遊石設計",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-uxi-design.webp",
          width: 404,
          height: 65,
        },
        {
          name: "AJA",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-aja.webp",
          width: 163,
          height: 110,
        },
        {
          name: "悠識數位",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-userxper.webp",
          width: 438,
          height: 105,
        },
        {
          name: "digital medicine lab",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-digital-medicine-lab.webp",
          width: 192,
          height: 142,
        },
        {
          name: "擴增實境互動技術產學聯盟",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-ar-alliance.webp",
          width: 492,
          height: 97,
        },
        {
          name: "進度條線上課程",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-progress-bar.webp",
          width: 490,
          height: 103,
        },
        {
          name: "台灣互動設計協會",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-IxDA.webp",
          width: 242,
          height: 97,
        },
        {
          name: "趨勢教育基金會",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-TEF.webp",
          width: 416,
          height: 87,
        },
        {
          name: "AWS",
          link:
            "https://storage.googleapis.com/openhci2021-storage/home-page/sponsor/sponsor-AWS.webp",
          width: 619,
          height: 103,
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;

    &--image {
      object-fit: contain;
      max-width: 100%;
      margin-right: 60px;
      margin-bottom: 80px;

      @media (max-width: 768px) {
        margin-right: 30px;
        margin-bottom: 60px;
      }

      @media (max-width: 576px) {
        margin-right: 0;
      }
    }

    &--large {
      grid-column-end: span 2;

      @media (max-width: 768px) {
        grid-column-end: unset;
      }
    }
  }
}
</style>
