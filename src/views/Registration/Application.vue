<template>
  <div id="application">
    <div class="info-subtitle">
      <Title text="# APPLICATION" />
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="報名資格" />
      <div class="info-content">
        全國各大專院校<p class="highlight-text">升大三以上在學生</p>，含學碩博應屆畢業生及新生。
      </div>
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="報名方式" />
      <div class="info-content">
        一律<p class="highlight-text">填寫線上表單</p>報名。本活動以報名資料填寫內容作為錄取參考依據，報名先後順序不列入計分標準。
      </div>
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="線上報名時間" />
      <div class="info-content">
        2021 年 4 月 26 日 ( 一 )  -  2021 年 5 月 14 日 ( 五 ) 23:59'59
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import StyledSubtitle from "@/components/ui/StyledSubtitle";

export default {
  name: "Application",
  components: {
    Title,
    StyledSubtitle,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#application {
  color: #fff;
  width: 591px;
  background: #1c1c24;
  margin-left: 728px;
  margin-right: 121px;
  margin-top: 136px;
}
.info-subtitle {
  margin-top: 69px;
  font-family: Noto Sans CJK TC;
  line-height: 36px;
}
.info-content {
  margin-top: 32px;
  font-family: Noto Sans CJK TC;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  text-align: justify;
}
.highlight-text {
  background-color: blue;
  display: inline;
}
</style>
