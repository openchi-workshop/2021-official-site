<template>
  <div id="blog">
    <Title text="# BLOG" class="blog__title" />
    <div class="blog__divder"></div>
    <div class="blog__body">
      <div class="blog__body--temp"># 敬請期待</div>
      <div class="blog__body--temp"># 敬請期待</div>
      <div class="blog__body--temp"># 敬請期待</div>
    </div>
    <div class="blog__divder"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";

export default {
  name: "Blog",
  components: {
    Title,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#blog {
  background: #1c1c24;
}
.blog {
  &__title {
    padding: 100px 0 148px 120px;
  }
  &__body {
    color: #fff;
    display: flex;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 64px;
    line-height: 93px;
    justify-content: space-evenly;
    align-items: center;
    height: 160px;
  }
  &__divder {
    width: 100vw;
    height: 16px;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
  }
}
</style>
