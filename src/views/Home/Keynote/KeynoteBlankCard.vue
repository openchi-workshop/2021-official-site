<template>
  <StyledBox>
    <div class="card">
      <img
        class="card__img"
        :src="require('@/assets/homePage/blank_speaker_image.png')"
        alt="Speaker image"
      />
      <div class="card__content">
        <div class="card__content--title">&lt; 敬請期待演講者 &gt;</div>
        <div class="card__content--subtitle">&lt; 敬請期待演講主題 &gt;</div>
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
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  font-family: "Noto Sans TC", sans-serif;
  color: #fff;
  height: 200px;
  width: 680px;
  background: #1c1c24;

  &__img {
    width: 200px;
    height: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin: 16px 24px;

    &--title {
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      margin-bottom: 11px;
    }

    &--subtitle {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 8px;
    }
  }
}
</style>
