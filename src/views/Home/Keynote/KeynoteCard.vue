<template>
  <StyledBox>
    <div no-body>
      <b-row no-gutters class="keynote-card">
        <b-col md="4">
          <b-card-img
            :src="require(`@/assets/${img}`)"
            alt="Avator"
            class="rounded-0 keynote-card__img"
          ></b-card-img>
        </b-col>
        <b-col md="8" class="keynote-card__body">
          <b-card-body>
            <b-card-text class="keynote-card__title">
              {{ name }}
              <span class="keynote-card__title--work">{{ work }}</span>
            </b-card-text>
            <b-card-text class="keynote-card__body--title">
              {{ title }}
            </b-card-text>
            <b-card-text class="keynote-card__body--description">
              {{ description }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </div>
  </StyledBox>
</template>

<script>
import StyledBox from "@/components/ui/StyledBox";

export default {
  name: "KeynoteCard",
  components: {
    StyledBox,
  },
  props: {
    img: { type: String, required: true },
    name: { type: String, required: true },
    work: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.keynote-card {
  font-family: "Noto Sans TC", sans-serif;
  color: #fff;
  height: 200px;
  width: 680px;
  background: #1c1c24;
  &__img {
    width: 200px;
  }
  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 11px;
    &--work {
      margin-left: 7px;

      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
  &__body {
    margin-left: -20px;
    &--title {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 8px;
    }
    &--description {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
    }
  }
}
</style>
