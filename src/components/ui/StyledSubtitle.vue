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
  color: #ffffff;
  font-family: "Arvo", "Noto Sans CJK TC";
  font-style: normal;
  font-weight: 400;

  @media (max-width: 576px) {
    font-size: 18px;
  }
}
</style>
