<template>
  <div id="about">
    <b-row class="mobius">
      <b-col cols="8" class="mobius__body">
        <div class="mobius__body__title">
          <Title text="# OPENHCI 2021" />
          <Title text="MOBIUS" class="mobius__body__title--subtitle" />
        </div>
        <div class="mobius__body__description">
          「在迭代中創造新生。」莫比烏斯帶，是只有一個面與一條邊的立體圖形。無論從何處開始，都能夠持續不斷地前進，因此有著生生不息、無限循環的概念。然而，每一次的迭代，都意味著衰亡與新生。乘載著過往的經驗，我們疊加創新，持續往未來推進。
        </div>
      </b-col>
      <b-col cols="4" class="mobius__img">
        <img alt="mobius" src="@/assets/mobius_light.png" />
      </b-col>
    </b-row>
    <b-row class="openhci">
      <b-col cols="4" class="openhci__img">
        <img alt="banner" src="@/assets/intro_image1.png" />
        <img alt="banner" src="@/assets/intro_image2.png" />
        <img alt="banner" src="@/assets/intro_image3.png" />
      </b-col>
      <b-col cols="8" class="openhci__body">
        <Title class="openhci__body__title" text="# INTRO & GOALS" />
        <StyledSubtitle text="What is HCI?" />
        <div class="openhci__body__description">
          Human-Computer Interaction(HCI)
          為近年來相當活躍的跨領域學門。相較於其他專門領域， HCI
          學門獨特的複合特性，使得其創造過程需要高度的跨領域合作。研究的著眼點不但訴求技術、
          更試圖從以人為本的角度去探討，以創造更佳的使用者經驗。
        </div>
        <StyledSubtitle text="History of OpenHCI" />
        <div class="openhci__body__description">
          OpenHCI'21
          是第十一屆由學生自治籌備的人機互動工作坊，旨在推廣人機互動學門與跨領域合作。
          在五天的工作坊期間，來自不同領域的學員會經歷一系列講座與課後實作演練，深入完整
          HCI 設計流程， 透過合作溝通以實踐構想，將無盡的創意展現給世界！
        </div>
        <StyledSubtitle text="Goals" />
        <div class="openhci__body__description">
          本活動希望能夠以推廣 HCI
          為主要宗旨，招收工程、設計及跨領域背景的學生，
          共同學習並進行跨領域的合作，探索人類生活空間中與周遭環境、物件或工具的互動模式。
          為期五天的工作坊，期盼參與者能以此概念體察其日常經驗裡的互動缺口或議題，
          實際動手解決問題或創造出新的意義，進而尋思更和諧的人機互動遠景。
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import StyledSubtitle from "@/components/ui/StyledSubtitle";

export default {
  name: "About",
  components: {
    Title,
    StyledSubtitle,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#about {
  color: #fff;
  background: #1c1c24;
}
.mobius {
  &__body {
    width: 605px;
    padding: 173px 208px 210px 120px;
    &__title {
      &--subtitle {
        margin-top: 10px;
      }
    }
    &__description {
      width: 605px;
      font-size: 18px;
      line-height: 22px;
      margin-top: 80px;
    }
  }
  &__img {
    padding-top: 177px;
    img {
      width: 275px;
    }
  }
}

.openhci {
  &__body {
    padding: 173px 208px 0 124px;
    &__title {
      margin-bottom: 115px;
    }
    &__description {
      width: 609px;
      font-family: "Noto Sans TC", sans-serif;
      font-size: 18px;
      line-height: 26px;
      margin-top: 18px;
      font-weight: 300;
      margin-bottom: 55px;
    }
  }
  &__img {
    position: relative;
    img {
      &:nth-of-type(1) {
        position: absolute;
        top: 0;
        left: 49px;
        width: 238.29px;
      }
      &:nth-of-type(2) {
        position: absolute;
        top: 308px;
        left: 120px;
        width: 213.49px;
      }
      &:nth-of-type(3) {
        position: absolute;
        top: 150px;
        left: 338.49px;
        width: 104.34px;
      }
    }
  }
}
</style>
