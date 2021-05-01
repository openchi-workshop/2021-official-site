<template>
  <div id="about">
    <div class="mobius">
      <div class="mobius__banner" v-lazy-container="{ selector: 'img' }">
        <img
          data-src="https://storage.googleapis.com/openhci2021-storage/home-page/banner.png"
          data-loading="https://storage.googleapis.com/openhci2021-storage/home-page/banner_small_size.png"
        />
      </div>
      <div class="mobius__body">
        <div class="mobius__body--content">
          <Title text="# OPENHCI 2021" />
          <Title text="MOBIUS" class="mobius__body--subtitle" />
          <div class="mobius__body--highlight">「在迭代中創造新生。」</div>
          莫比烏斯帶，是只有一個面與一條邊的立體圖形。無論從何處開始，都能夠持續不斷地前進，因此有著生生不息、無限循環的概念。然而，每一次的迭代，都意味著衰亡與新生。乘載著過往的經驗，我們疊加創新，持續往未來推進。
          迭代設計時，常會參考過往的經驗，一次又一次修正，慢慢演化出嶄新的做法。時代洪流捲起，卻也有許多事物逐漸被沖淡，甚而那些未能踏上浪尖的事物，只能被遺忘。創新是突破困境不可或缺的要素，如何才能在浪潮中守護經典？如何重新賦予舊事物價值？
        </div>
        <div class="mobius__image">
          <lazy-component>
            <img
              alt="mobuis"
              src="https://storage.googleapis.com/openhci2021-storage/home-page/mobius_light.png"
              style="width: 100%"
            />
          </lazy-component>
        </div>
      </div>
    </div>

    <div class="openhci">
      <div class="openhci__image">
        <img
          alt="banner"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/intro_image.png"
          style="width: 100%"
        />
      </div>
      <div class="openhci__body">
        <Title
          class="openhci__body__title"
          text="# INTRO & GOALS"
          id="intro_goals"
        />

        <StyledBox>
          <div class="openhci__body--subtitle">What is HCI?"</div>
        </StyledBox>
        <div class="openhci__body__description">
          Human-Computer Interaction(HCI)
          為近年來相當活躍的跨領域學門。相較於其他專門領域， HCI
          學門獨特的複合特性，使得其創造過程需要高度的跨領域合作。研究的著眼點不但訴求技術、
          更試圖從以人為本的角度去探討，以創造更佳的使用者經驗。
        </div>

        <StyledBox>
          <div class="openhci__body--subtitle">History of OpenHCI</div>
        </StyledBox>
        <div class="openhci__body__description">
          OpenHCI'21
          是第十一屆由學生自治籌備的人機互動工作坊，旨在推廣人機互動學門與跨領域合作。
          在五天的工作坊期間，來自不同領域的學員會經歷一系列講座與課後實作演練，深入完整
          HCI 設計流程， 透過合作溝通以實踐構想，將無盡的創意展現給世界！
        </div>

        <StyledBox>
          <div class="openhci__body--subtitle">Goals</div>
        </StyledBox>
        <div class="openhci__body__description">
          本活動希望能夠以推廣 HCI
          為主要宗旨，招收工程、設計及跨領域背景的學生，
          共同學習並進行跨領域的合作，探索人類生活空間中與周遭環境、物件或工具的互動模式。
          為期五天的工作坊，期盼參與者能以此概念體察其日常經驗裡的互動缺口或議題，
          實際動手解決問題或創造出新的意義，進而尋思更和諧的人機互動遠景。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import StyledBox from "@/components/ui/StyledBox";

export default {
  name: "About",
  components: {
    Title,
    StyledBox,
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
  overflow: hidden;
}

.mobius {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 68px;

  &__banner {
    background: #0000ff;
    width: 100%;
    margin-bottom: 172px;

    img {
      width: 100%;
      padding-top: 100px;
    }
    @media (max-width: $md) {
      height: unset;
      padding-bottom: 16px;
    }
    @media (max-width: $sm) {
      height: unset;
      padding-bottom: 35px;
    }
  }

  &__body {
    padding: 0 5% 0 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;

    &--content {
      width: 40%;

      @media (max-width: $md) {
        padding: 80px 72px;
        flex: auto;
        order: 2;
      }
      @media (max-width: $sm) {
        padding: 80px 48px;
      }

      &--description {
        font-size: 16px;
        line-height: 25.6px;
        padding-top: 80px;
        font-weight: 500;
        text-align: justify;
        &--highlight {
          color: #00ff00;
        }
      }
    }

    &--subtitle {
      margin-bottom: 80px;

      @media (max-width: $md) {
        padding-top: 140px;
        padding-left: 14px;
      }
      @media (max-width: $sm) {
        padding-top: 120px;
        padding-left: 16px;
      }
      &--subtitle {
        padding-top: 10px;
      }
    }

    &--highlight {
      color: #00ff00;
    }
  }
  &__image {
    width: 20%;

    @media (max-width: $md) {
      padding-top: 128px;
      flex: auto;
      order: 1;
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 164px;

  &__image {
    width: 30%;
  }

  &__body {
    width: 40%;

    @media (max-width: $md) {
      flex: auto;
      padding: 0 91px 0 68px;
    }

    @media (max-width: $sm) {
      padding: 0 48px;
    }

    &__title {
      margin-bottom: 30%;

      @media (max-width: $md) {
        padding-top: 110px;
        padding-left: 14px;
      }

      @media (max-width: $sm) {
        padding-left: 16px;
      }
    }

    &__description {
      font-family: "Noto Sans TC";
      font-size: 16px;
      text-align: justify;
      margin: 16px 0 48px 0;
    }

    &--subtitle {
      font-family: "Arvo";
      font-size: 24px;
    }
  }
}

.gototop-button {
  position: fixed;
  right: 130px;
  bottom: 50px;
  z-index: 10000;
  background: blue;
  @media (max-width: $md) {
    display: none;
  }
}

.hidden {
  display: none;
}
</style>
