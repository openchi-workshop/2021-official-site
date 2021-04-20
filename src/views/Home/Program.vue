<template>
  <div id="program">
    <Title title="#  PROGRAM" />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";

export default {
  name: "Program",
  components: {
    Title,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#program {
  background: #000;
}
</style>
