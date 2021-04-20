<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.title {
  font-family: "Arvo", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
</style>
