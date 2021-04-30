<template>
  <div class="goToTopBtn" @click="goToTop" :class="{ isShow: isShow }">
    <font-awesome-icon icon="arrow-up" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBtnPosition: 760,
      isShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    goToTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      this.isShow = currentScrollPosition > this.showBtnPosition;
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.goToTopBtn {
  border: 4px solid transparent;
  position: fixed;
  padding: 10px;
  bottom: 40px;
  right: 40px;
  color: #fff;

  z-index: 1;

  &:hover {
    cursor: pointer;
    border-image: url("../../assets/ui/border_green.png") 3 3 3 3 round;
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
}
</style>
