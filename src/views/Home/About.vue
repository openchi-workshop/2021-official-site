<template>
  <div id="about">
    <b-row class="mobius">
      <b-col cols="8" class="mobius__body">
        <div class="mobius__body__title">
          <Title title="# OPENHCI 2021" />
          <Title title="MOBIUS" class="mobius__body__title--subtitle" />
        </div>
        <div class="mobius__body__description">
          「在迭代中創造新生。」莫比烏斯帶，是只有一個面與一條邊的立體圖形。無論從何處開始，都能夠持續不斷地前進，因此有著生生不息、無限循環的概念。然而，每一次的迭代，都意味著衰亡與新生。乘載著過往的經驗，我們疊加創新，持續往未來推進。
        </div></b-col
      >
      <b-col cols="4" class="mobius__img">
        <img alt="mobius" src="@/assets/mobius_light.png" />
      </b-col>
    </b-row>
    <b-row class="openhci">
      <b-col cols="4" class="openhci__img"></b-col>
      <b-col cols="8" class="openhci__body">
        <div class="openhci__body__title">
          <Title title="# INTRO & GOALS" />
        </div>
        <div class="openhci__body__description"></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";

export default {
  name: "About",
  components: {
    Title,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#about {
  color: #fff;
  background: #000;
}
.mobius {
  &__body {
    width: 605px;
    padding: 173px 208px 300px 124px;
    &__title {
      &--subtitle {
        margin-top: 10px;
      }
    }
    &__description {
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
</style>
