<template>
  <div id="about">
    <b-row class="mobius"
      ><b-col cols md="5" order-md="last" class="mobius__img">
        <img alt="mobius" src="@/assets/homePage/mobius_light.png" />
      </b-col>
      <b-col cols md="7" order-md="1" class="mobius__body">
        <div class="mobius__body__title">
          <Title text="# OPENHCI 2021" />
          <Title text="MOBIUS" class="mobius__body__title--subtitle" />
        </div>
        <div class="mobius__body__description">
          <span class="mobius__body__description--highlight">
            「在迭代中創造新生。」
          </span>
          <br />
          莫比烏斯帶，是只有一個面與一條邊的立體圖形。無論從何處開始，都能夠持續不斷地前進，因此有著生生不息、無限循環的概念。然而，每一次的迭代，都意味著衰亡與新生。乘載著過往的經驗，我們疊加創新，持續往未來推進。
          <br />
          <br />
          迭代設計時，常會參考過往的經驗，一次又一次修正，慢慢演化出嶄新的做法。時代洪流捲起，卻也有許多事物逐漸被沖淡，甚而那些未能踏上浪尖的事物，只能被遺忘。創新是突破困境不可或缺的要素，如何才能在浪潮中守護經典？如何重新賦予舊事物價值？
        </div>
      </b-col>
    </b-row>
    <b-row class="openhci">
      <GoToTopButton class="gototop-button" />
      <b-col cols md="4" class="openhci__img">
        <img alt="banner" src="@/assets/homePage/intro_image.png" />
      </b-col>
      <b-col cols md="8" class="openhci__body">
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
import GoToTopButton from "@/components/ui/GoToTopButton";

export default {
  name: "About",
  components: {
    Title,
    StyledSubtitle,
    GoToTopButton,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
#about {
  color: #fff;
  background: #1c1c24;
  position: relative;
}
.mobius {
  &__body {
    padding: 173px 124px;
    &__title {
      &--subtitle {
        margin-top: 10px;
      }
    }
    &__description {
      font-size: 16px;
      line-height: 25.6px;
      padding-top: 80px;
      font-weight: 500;
      text-align: justify;
      &--highlight {
        color: #00ff00;
      }
    }
    @media (max-width: $md) {
      padding: 80px 72px;
    }
    @media (max-width: $sm) {
      padding: 80px 48px;
    }
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: $md) {
      padding-top: 128px;
    }
    @media (max-width: $md) {
      padding-top: 100px;
    }
    img {
      width: 275px;
      @media (max-width: $md) {
        width: 50%;
      }
    }
  }
}

.openhci {
  &__body {
    padding: 173px 124px;
    &__title {
      margin-bottom: 115px;
    }
    &__description {
      font-family: "Noto Sans TC";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: justify;
      padding: 18px 0 55px 0;
    }
    @media (max-width: $md) {
      padding: 0 91px 0 68px;
    }
    @media (max-width: $sm) {
      padding: 0 48px;
    }
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: $md) {
      margin: -100px 0;
    }
    img {
      transform: translateY(-50px);

      @media (max-width: $md) {
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        transform: translateX(100px) rotate(-90deg);
        width: 50%;
      }

      @media (max-width: $sm) {
        width: 40%;
        transform: translateX(50px) rotate(-90deg);
      }
    }
  }
}

.gototop-button {
  top: 100px;
  position: absolute;
  right: 150px;
  top: 750px;
  z-index: 10000;
  @media (max-width: $md) {
    display: none;
  }
}
</style>
