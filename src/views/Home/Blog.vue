<template>
  <div id="blog">
    <Title title="# BLOG" />
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
  background: #000;
}
</style>
