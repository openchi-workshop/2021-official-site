<template>
  <b-row id="trainee_list">
    <b-col sm="6" md="4" lg="6" order="1" class="admissionlist_img">
      <img src="@/assets/registration/admissionlist_pc.png" alt="admissionlist_pc" class="admissionlist_pc">
      <img src="@/assets/registration/admissionlist_md.png" alt="admissionlist_md" class="admissionlist_md">
    </b-col>
    <img src="@/assets/registration/admissionlist_sm.png" alt="admissionlist_sm" class="admissionlist_sm">
    <b-col sm="6" md lg="6" order="last" class="admissionlist_context">
      <div class="info-title">
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
    </b-col>
  </b-row>
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
$md: 768px;
$sm: 576px;
#trainee_list {
  width: 100%;
  position: relative;
  color: #fff;
  background: #1c1c24;
  margin-bottom: 100px;
}
.info-title {
  width: 100%;
  margin-bottom: 72px;
  left: 0px;
  @media (max-width: $md) {
    bottom: 64px;
  }
  @media (max-width: $sm) {
    width: 100%;
    bottom: 80px;
  }
}
.admissionlist_context {
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
.info-subtitle {
  margin-top: 32px;
  font-family: Noto Sans CJK TC;
  line-height: 35px;
  max-width: 591px;
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
.content-title {
  margin-top: 32px;
  font-family: Noto Sans CJK TC;
  font-style: normal;
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

.admissionlist_img {
  padding-left: 8%;
  padding-bottom: 4.5%;
  @media (max-width: $md) {
    padding-right: 0px;
    padding-left: 0px;
    margin-top: 152px;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.admissionlist_pc {
  width: 100%;
  max-width: 488px;
  max-height: 639px;
  display: flex;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.admissionlist_md {
  width: 212px;
  height: 567px;
  display: none;
  @media (max-width: $md) {
    display: block;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.admissionlist_sm {
  position: absolute;
  right: -15px;
  width: 108px;
  display: none;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: block;
  }
}
</style>
