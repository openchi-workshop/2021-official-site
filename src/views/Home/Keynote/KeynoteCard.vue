<template>
  <StyledBox class="keynote-card">
    <lazy-component class="keynote-card__avatar">
      <img :src="img" :alt="name" class="keynote-card__avatar--image" />
    </lazy-component>
    <div class="keynote-card__body">
      <div class="keynote-card__title">
        <div class="keynote-card__title--name">&lt; {{ name }} &gt;</div>
        <div class="keynote-card__title--work">{{ work }}</div>
      </div>
      <div class="keynote-card__body--title">&lt; {{ title }} &gt;</div>
      <div class="keynote-card__body--description">
        {{ description }}
      </div>
      <div v-if="blank" style="visibility: hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        aliquam rerum impedit pariatur quas in, iure quasi perspiciatis
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
    blank: { type: Boolean },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
.keynote-card {
  width: 80%;
  color: #fff;
  background: #1c1c24;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;

  @media (max-width: 940px) {
    width: 100%;
    padding: 5% 0;
  }

  @media (max-width: $md) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5%;
  }

  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;

    @media (max-width: 940px) {
      padding-left: 4%;
    }

    @media (max-width: $md) {
      width: 50%;
      margin-bottom: 42px;
    }

    &--image {
      width: 100%;
    }
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

    @media (max-width: $md) {
      justify-content: center;
    }

    @media (max-width: $sm) {
      flex-direction: column;
    }

    &--name {
      font-size: 24px;
    }

    &--work {
      margin-left: 7px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #00ff00;
    }
  }

  &__body {
    width: 70%;
    padding: 10px 24px;

    @media (max-width: $md) {
      width: 100%;
    }

    @media (max-width: $sm) {
      padding: 0;
    }

    &--title {
      font-size: 18px;
      line-height: 26.06px;
      margin-bottom: 8px;
      font-weight: 700;
    }

    &--description {
      color: #bdbdbd;
      text-align: justify;
      font-weight: 700;
    }
  }
}
</style>
