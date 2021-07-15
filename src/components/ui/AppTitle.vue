<template>
  <div class="title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.title {
  font-family: "Arvo", serif;
  font-size: 36px;
  line-height: 44.46px;
  display: block;
  color: #ffffff;
  font-family: Arvo;
}
</style>
