<template>
  <div id="trainee_list">
    <div class="info-subtitle">
      <Title text="# ADMISSION LIST & PAYMENT" />
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="正取名單公佈" />
      <div class="content-title">
        2021 年 5 月 19 日（三）早上 10:00 網路公佈與信件通知
      </div>
      <ul class="info-content has-title">
          <li>正取學員請於 2021 年 5 月 23 日（日）17:00 前繳交 1000 元保證金以及 100 元保險費用，主辦單位確認報名與匯款資料後完成報名。</li>
          <li>未依照指定報名期限內完成報名程序者，視為放棄報名資格，會依據備取順序遞補。</li>
      </ul>
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="遞補備取通知" />
      <div class="content-title">
        2021 年 5 月 20 日（四）個別信件通知
      </div>
      <ul class="info-content has-title">
          <li>經通知錄取的備取學員於 2021 年 5 月 26 日（三）17:00 前繳交 900 元保證金以及 100 元保險費用以完成報名程序。</li>
      </ul>
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="最終正取名單" />
      <div class="content-title">
        辦單位將於 2021 年 5 月 28 日（五） 晚上公佈學員最終正式名單
      </div>
      <div class="info-content has-title">
        關於報名有任何問題，歡迎寄信與主辦單位人事組聯絡：<br>
        human@openhci.com
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import StyledSubtitle from "@/components/ui/StyledSubtitle";

export default {
  name: "TraineeList",
  components: {
    Title,
    StyledSubtitle,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#trainee_list {
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
.content-title {
  margin-top: 32px;
  font-family: Noto Sans CJK TC;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  text-align: justify;
  color: #00FF00;
}
.highlight-text {
  background-color: blue;
  display: inline;
}
.has-title {
  margin-top: 0px;
}
</style>
