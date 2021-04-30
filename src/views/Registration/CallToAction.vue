<template>
  <div class="callToAction">
    <img
      src="@/assets/registration/callToActionBg.png"
      class="callToAction__image"
    />
    <div class="callToAction__btn">APPLY NOW</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.callToAction {
  position: relative;

  &__image {
    width: 100%;
  }

  &__btn {
    font-family: "Arvo";
    border-radius: 5px;
    position: absolute;
    padding: 24px 48px;
    background-color: #00ff00;
    font-size: 36px;
    top: 50%;
    left: 50%;
    color: #0000ff;
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 768px) {
      font-size: 18px;
      padding: 10px 24px;
    }

    @media (max-width: 576px) {
      font-size: 12px;
      padding: 8px 24px;
    }
  }
}
</style>
