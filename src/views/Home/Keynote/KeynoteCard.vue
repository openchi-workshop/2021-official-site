<template>
  <StyledBox>
    <div no-gutters class="keynote-card">
      <img
        :src="require(`@/assets/${img}`)"
        alt="Avatar"
        class="rounded-0 keynote-card__img"
      />
      <div class="keynote-card__body">
        <div class="keynote-card__title">
          <div class="keynote-card__title--name">&lt; {{ name }} &gt;</div>
          <div class="keynote-card__title--work">{{ work }}</div>
        </div>
        <div class="keynote-card__body--title">&lt; {{ title }} &gt;</div>
        <div class="keynote-card__body--description">
          {{ description }}
        </div>
      </div>
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
  width: 680px;
  background: #1c1c24;
  display: flex;
  flex-direction: row;

  &__img {
    width: 200px;
    height: 200px;
  }

  &__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 11px;

    &--work {
      margin-left: 7px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #00ff00;
    }
  }

  &__body {
    margin: 8px 24px;

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
