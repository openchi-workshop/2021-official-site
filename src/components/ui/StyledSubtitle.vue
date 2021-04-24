<template>
  <StyledBox>
    <div class="stlyed-subtitle">
      {{ text }}
    </div>
  </StyledBox>
</template>

<script>
import StyledBox from "@/components/ui/StyledBox";

export default {
  name: "StyledSubtitle",
  props: {
    text: { type: String, required: true },
  },
  components: {
    StyledBox,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.stlyed-subtitle {
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
}
</style>
