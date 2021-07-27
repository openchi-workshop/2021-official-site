<template>
  <div class="title" :data-text="this.$slots.default[0].text">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$sm: 576px;

.title {
  position: relative;
  font-family: "Arvo", serif;
  font-size: 36px;
  display: block;
  color: #ffffff;

  &::before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: white;
    background: black;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim 15s infinite linear alternate-reverse;
  }

  @media (max-width: $sm) {
    font-size: 24px;
  }
}

@keyframes noise-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(0.6/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
  61% {
    clip: rect(0, 900px, 0, 0);
  }
  100% {
    clip: rect(0, 900px, 0, 0);
  }
}
</style>
