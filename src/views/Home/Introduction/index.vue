<template>
  <div class="openhci">
    <div class="openhci__image">
      <lazy-component>
        <img
          src="https://storage.googleapis.com/openhci2021-storage/home-page/intro_image.png"
          srcset="
            https://storage.googleapis.com/openhci2021-storage/home-page/intro_image_rotate.png 768w,
            https://storage.googleapis.com/openhci2021-storage/home-page/intro_image.png        968w
          "
          sizes="(max-width: 768px) 50vw, 100%"
          alt="intro_image"
          style="width: 100%"
        />
      </lazy-component>
    </div>
    <div id="intro_goals" class="openhci__body">
      <app-title class="openhci__body--title"># INTRO &amp; GOALS</app-title>
      <app-slide-in-animation class="openhci__body--section">
        <StyledBox class="openhci__body--subtitle">What is HCI?"</StyledBox>
        <div class="openhci__body--description">
          Human-Computer
          Interaction(HCI)為近年來相當活躍的跨領域學門。相較於其他專門領域， HCI
          學門獨特的複合特性，使得其創造過程需要高度的跨領域合作。研究的著眼點不但訴求技術、
          更試圖從以人為本的角度去探討，以創造更佳的使用者經驗。
        </div>
      </app-slide-in-animation>

      <app-slide-in-animation class="openhci__body--section">
        <StyledBox class="openhci__body--subtitle"
          >History of OpenHCI</StyledBox
        >
        <div class="openhci__body--description">
          OpenHCI'21
          是第十一屆由學生自治籌備的人機互動工作坊，旨在推廣人機互動學門與跨領域合作。
          在五天的工作坊期間，來自不同領域的學員會經歷一系列講座與課後實作演練，深入完整
          HCI 設計流程， 透過合作溝通以實踐構想，將無盡的創意展現給世界！
        </div>
      </app-slide-in-animation>

      <app-slide-in-animation class="openhci__body--section">
        <StyledBox class="openhci__body--subtitle">Goals </StyledBox>
        <div class="openhci__body--description">
          本活動希望能夠以推廣 HCI
          為主要宗旨，招收工程、設計及跨領域背景的學生，
          共同學習並進行跨領域的合作，探索人類生活空間中與周遭環境、物件或工具的互動模式。
          為期五天的工作坊，期盼參與者能以此概念體察其日常經驗裡的互動缺口或議題，
          實際動手解決問題或創造出新的意義，進而尋思更和諧的人機互動遠景。
        </div>
      </app-slide-in-animation>
    </div>
  </div>
</template>

<script>
import StyledBox from "@/components/ui/StyledBox";
import AppTitle from "@/components/ui/AppTitle";
import AppSlideInAnimation from "@/components/ui/AppSlideInAnimation";

export default {
  components: {
    AppTitle,
    StyledBox,
    AppSlideInAnimation,
  },
};
</script>

<style lang="scss">
$md: 768px;
$sm: 576px;

.openhci {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 164px;
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }

  @media (max-width: 576px) {
    margin-bottom: 100px;
  }

  &__image {
    width: 30%;

    @media (max-width: 768px) {
      width: 80%;
      margin-bottom: 64px;
    }

    @media (max-width: 768px) {
      margin-bottom: 120px;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;
    width: 50%;
    color: #fff;
    padding-top: 20%;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0 10%;
    }

    &--title {
      font-family: Arvo;
      font-size: 36px;
      margin-bottom: 80px;

      @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 84px;
      }

      @media (max-width: 576px) {
        font-size: 24px;
        margin-bottom: 51px;
      }
    }

    &--subtitle {
      margin-top: 50px;
      margin-bottom: 20px;
      font-family: Arvo;

      @media (max-width: 576px) {
        font-size: 18px;
      }
    }

    &--description {
      text-align: justify;

      @media (max-width: 768px) {
        margin-bottom: 54px;
      }
    }
  }
}
</style>