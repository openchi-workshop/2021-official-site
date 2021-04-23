<template>
  <div class="pastwork">
    <div class="pastwork__title">{{ title }}</div>
    <div class="pastwork__subtitle">{{ subtitle }}</div>
    <div class="pastwork__content">{{ content }}</div>
    <a class="pastwork__link" :href="link">MORE</a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    content: String,
    link: String,
  },
};
</script>

<style lang="scss" scoped>
.pastwork {
  position: absolute;
  text-align: left;
  bottom: 15%;
  left: 10%;
  color: white;

  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  &__subtitle {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  &__content {
    font-size: 18px;
    max-width: 400px;
    margin-bottom: 24px;
  }

  &__link {
    border: white 2px solid;
    color: white;
    display: inline-block;
    text-decoration: none;
    padding: 12px 54px;
    font-size: 14px;
    font-weight: 700;
  }
}
</style>