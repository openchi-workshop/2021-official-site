<template>
  <div class="styled-box" v-on:click="goToTop">
    <div class="styled-box__border "></div>
    <div class="styled-box__border "></div>
    <div class="styled-box__border "></div>
    <div class="styled-box__border "></div>
    <div class="gototop-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        version="1.1"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 64 64"
        style="enable-background:new 0 0 512 512"
        xml:space="preserve"
        class=""
      >
        <g>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m32 56c1.104 0 2-.896 2-2v-39.899l14.552 15.278c.393.413.92.621 1.448.621.495 0 .992-.183 1.379-.552.8-.762.831-2.028.069-2.828l-16.619-17.448c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.862 1.207l-16.586 17.414c-.762.8-.731 2.066.069 2.828s2.067.731 2.828-.069l14.551-15.342v39.962c0 1.104.896 2 2 2z"
            fill="#ffffff"
            data-original="#000000"
            style=""
            class=""
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoToTopButton",
  methods: {
    goToTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.styled-box {
  cursor: pointer;
  width: 36px;
  height: 36px;
  border: none;
  position: relative;
  width: fit-content;
  &:hover {
    border: 1px solid #00ff00;
  }
  &__border {
    display: none;
  }
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
}

.styled-box:hover .styled-box__border {
  display: block;
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
    right: 0;
  }
  &:nth-of-type(3) {
    transform: translate(-2.5px, 2.5px);
    bottom: 0;
    left: 0;
  }
  &:nth-of-type(4) {
    transform: translate(2.5px, 2.5px);
    bottom: 0;
    right: 0;
  }
}

.gototop-button {
  width: 36px;
  height: 36px;
  svg {
    width: 36px;
    height: 36px;
  }
}
</style>
