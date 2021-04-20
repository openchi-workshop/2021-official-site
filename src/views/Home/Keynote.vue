<template>
  <div id="keynote">
    <Title title="# KEYNOTE SPEAKER" />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";

export default {
  name: "Keynote",
  components: {
    Title,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#keynote {
  background: #000;
}
</style>
