<template>
  <div ref="content" class="slide-in">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    const element = this.$refs.content;
    const handler = (entries) => {
      if (entries[0].isIntersecting) {
        element.classList.add("show");
      }
    };

    const observer = new IntersectionObserver(handler);
    observer.observe(element);
  },
};
</script>

<style lang="scss">
.slide-in {
  opacity: 0;
  transform: translateX(-10%);
  transition: all 1s ease-out;
}

.show {
  opacity: 1;
  transform: none;
}
</style>