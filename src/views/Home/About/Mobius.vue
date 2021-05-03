<template>
  <div class="mobius">
    <div class="mobius__content">
      <div class="mobius__content--title"># OPENHCI 2021</div>
      <div class="mobius__content--subtitle">MOBIUS</div>
      <div class="mobius__content--highlight">「在迭代中創造新生。」</div>
      <div class="mobius__content--text">
        莫比烏斯帶，是只有一個面與一條邊的立體圖形。無論從何處開始，都能夠持續不斷地前進，因此有著生生不息、無限循環的概念。然而，每一次的迭代，都意味著衰亡與新生。乘載著過往的經驗，我們疊加創新，持續往未來推進。
      </div>
      <div class="mobius__content--text">
        迭代設計時，常會參考過往的經驗，一次又一次修正，慢慢演化出嶄新的做法。時代洪流捲起，卻也有許多事物逐漸被沖淡，甚而那些未能踏上浪尖的事物，只能被遺忘。創新是突破困境不可或缺的要素，如何才能在浪潮中守護經典？如何重新賦予舊事物價值？
      </div>
    </div>
    <div class="mobius__image">
      <lazy-component>
        <img
          alt="mobuis"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/mobius_light_1.png"
          style="width: 100%"
        />
      </lazy-component>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mobius {
  padding: 0 5% 0 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10%;
    margin-bottom: 74px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    &--title {
      font-family: "Arvo";
      font-size: 36px;
      margin-bottom: 12px;

      @media (max-width: 576px) {
        font-size: 24px;
      }
    }

    &--subtitle {
      font-size: 36px;
      font-family: "Arvo";
      margin-bottom: 80px;

      @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 64px;
      }
    }

    &--highlight {
      color: #00ff00;
    }

    &--text {
      margin-bottom: 28px;
    }
  }

  &__image {
    width: 20%;

    @media (max-width: 768px) {
      width: 40%;
      align-self: center;
      margin-bottom: 150px;
      order: -1;
    }

    @media (max-width: 576px) {
      width: 50%;
      margin-bottom: 64px;
    }
  }
}
</style>