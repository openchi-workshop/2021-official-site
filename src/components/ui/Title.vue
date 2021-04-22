<template>
  <div class="title">
    {{ text }}
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
  line-height: 44px;
  display: block;
  color: #ffffff;
}
</style>
