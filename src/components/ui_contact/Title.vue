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
    color:#FFFFFF;
    font-style: bold;
    font-size: 18px;
    line-height: 22px;
    align-items: left;
    vertical-align: center;
}
</style>
