<template>
  <b-row id="application">
    <b-col md="5" lg="6" order="1" class="application_img">
      <img src="@/assets/registration/application_pc.png" alt="application_pc" class="application_pc">
      <img src="@/assets/registration/application_md.png" alt="application_md" class="application_md">
    </b-col>
    <img src="@/assets/registration/application_sm.png" alt="application_sm" class="application_sm">
    <b-col sm md="7" lg="6" order="last" class="application_context">
      <div class="info-title">
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
    </b-col>
  </b-row>
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
$md: 768px;
$sm: 576px;
#application {
  width: 100%;
  position: relative;
  color: #fff;
  background: #1c1c24;
  margin-bottom: 100px;
}
.info-title {
  width: 100%;
  bottom: 72px;
  left: 0px;
  @media (max-width: $md) {
    bottom: 64px;
  }
  @media (max-width: $sm) {
    width: 100%;
    bottom: 80px;
  }
}
.application_context {
  padding-right: 120px;
  left: 0px;
  width: 100%;
  @media (max-width: $md) {
    padding-right: 62px;
  }
  @media (max-width: $sm) {
    padding-left: 48px;
    padding-right: 48px;
  }
}
.application_img {
  padding-left: 8%;
  margin-top: 114px;
  @media (max-width: $md) {
    padding-right: 0px;
    padding-left: 0px;
    margin-top: 108px;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.application_pc {
  width: 85%;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.application_md {
  width: 80%;
  display: none;
  @media (max-width: $md) {
    display: block;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.application_sm {
  position: absolute;
  top: 10px;
  right: -15px;
  width: 162px;
  display: none;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: block;
  }
}
.info-subtitle {
  margin-top: 69px;
  font-family: Noto Sans CJK TC;
  line-height: 36px;
  @media (max-width: $md) {
    width: 100%;
  }
  @media (max-width: $sm) {
    width: 100%;
  }
}
.info-content {
  width: 100%;
  margin-top: 32px;
  font-family: Noto Sans CJK TC;
  font-size: 16px;
  line-height: 25.6px;
  @media (max-width: $md) {
    margin-top: 18px;
  }
}
.highlight-text {
  background-color: blue;
  display: inline;
}
</style>
