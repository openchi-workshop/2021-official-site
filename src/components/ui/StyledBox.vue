<template>
  <div class="styled-box">
    <div class="styled-box__border "></div>
    <div class="styled-box__border "></div>
    <div class="styled-box__border "></div>
    <div class="styled-box__border "></div>
    <div class="styled-box__border "></div>
    <div class="styled-box__border "></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "StyledBox",
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.styled-box {
  border: 1px solid #00ff00;
  position: relative;
  width: fit-content;
  &__border {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #ffffff;
    border: 1px solid #00ff00;
    &:nth-of-type(1) {
      transform: translate(-2.5px, -2.5px);
      top: 0;
      left: 0;
    }
    &:nth-of-type(2) {
      transform: translate(2.5px, -2.5px);
      top: 0;
      right: 50%;
    }
    &:nth-of-type(3) {
      transform: translate(2.5px, -2.5px);
      top: 0;
      right: 0;
    }
    &:nth-of-type(4) {
      transform: translate(-2.5px, 2.5px);
      bottom: 0;
      left: 0;
    }
    &:nth-of-type(5) {
      transform: translate(2.5px, 2.5px);
      bottom: 0;
      right: 50%;
    }
    &:nth-of-type(6) {
      transform: translate(2.5px, 2.5px);
      bottom: 0;
      right: 0;
    }
  }
}
</style>
