<template>
  <div class="card-box">
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
          <div v-if="blank" style="visibility:hidden;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aliquam rerum impedit pariatur quas in, iure quasi perspiciatis
          </div>
        </div>
      </div>
    </StyledBox>
  </div>
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
    blank: { type: Boolean },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
.card-box {
  @media (max-width: $md) {
    padding: 0 50px;
  }
  @media (max-width: 440px) {
    padding: 0 20px;
  }
}
.keynote-card {
  font-family: "Noto Sans TC", sans-serif;
  color: #fff;
  width: 680px;
  background: #1c1c24;
  display: flex;
  flex-direction: row;
  @media (max-width: $md) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 8px;
    width: unset;
  }

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
    flex-wrap: wrap;
    &--work {
      margin-left: 7px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #00ff00;
    }
    @media (max-width: $md) {
      justify-content: center;
    }
  }

  &__body {
    margin: 8px 24px;
    &--title {
      font-size: 18px;
      line-height: 26.06px;
      margin-bottom: 8px;
      font-weight: 700;
    }
    &--description {
      color: #bdbdbd;
      text-align: justify;
      font-size: 14px;
      line-height: 20.16px;
      font-weight: 700;
    }
  }
}
</style>
