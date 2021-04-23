<template>
  <div class="subtitle">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.subtitle {
    color:#FFFFFF;
    font-size: 18px;
    line-height: 22px;
    align-items: left;
    vertical-align: top;
    a:link{color: white;text-decoration: none}
    a:visited{color: white;}
    a:hover{color:white;}
}
</style>
