<template>
  <b-container fluid>
    <b-row id="trainee_list">
      <b-col sm="6" md="4" lg="6" order="1" class="admissionlist_img">
        <img
          src="@/assets/registration/admissionlist_pc.png"
          alt="admissionlist_pc"
          class="admissionlist_pc"
        />
      </b-col>
      <img
        src="@/assets/registration/admissionlist_sm.png"
        alt="admissionlist_sm"
        class="admissionlist_sm"
      />
      <b-col md="10" lg="6" order="last" class="info">
        <Title class="info__title" text="# ADMISSION LIST & PAYMENT" />
        <StyledSubtitle class="info__subtitle" text="正取名單公佈" />
        <div class="info__highlight">
          2021 年 5 月 25 日（二）早上 10:00 網路公佈與信件通知
        </div>
        <ul class="info__text">
          <li>
            正取學員請於 2021 年 5 月 28 日（五）12:00 前繳交 1000 元保證金以及
            100 元保險費用，主辦單位確認報名與匯款資料後完成報名。
          </li>
          <li>
            未依照指定報名期限內完成報名程序者，視為放棄報名資格，會依據備取順序遞補。
          </li>
        </ul>
        <StyledSubtitle class="info__subtitle" text="遞補備取通知" />
        <div class="info__highlight">2021 年 5 月 29 日（六）個別信件通知</div>
        <ul class="info__text">
          <li>
            經通知錄取的備取學員於 2021 年 5 月 31 日（一）12:00 前繳交 1000
            元保證金以及 100 元保險費用以完成報名程序。
          </li>
        </ul>
        <StyledSubtitle class="info__subtitle" text="最終正取名單" />
        <div class="info__highlight">
          辦單位將於 2021 年 6 月 6 日（日） 晚上公佈學員最終正式名單
        </div>
        <div class="info__text">
          關於報名有任何問題，歡迎寄信與主辦單位人事組聯絡：<br />
          human@openhci.com
        </div>
      </b-col>
    </b-row>
  </b-container>
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
}

.info {
  padding: 0 10%;

  @media (max-width: 576px) {
    padding: 0 5%;
  }

  &__title {
    font-family: "Arvo";
    line-height: 30px;
    font-size: 36px;
    margin-bottom: 32px;

    @media (max-width: $md) {
      font-size: 24px;
    }
  }

  &__subtitle {
    margin-bottom: 16px;
  }

  &__text {
    font-size: 16px;
    margin-bottom: 40px;

    @media (max-width: 576px) {
      font-size: 12px;
      text-align: justify;
      list-style: none;
      padding-left: 0;
    }
  }

  &__highlight {
    font-size: 16px;
    color: #00ff00;

    @media (max-width: $md) {
      font-size: 12px;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 5% 0 5%;
    margin-bottom: 32px;

    &--title {
      font-size: 18px;
      color: #00ff00;
      font-weight: 700;
      margin-bottom: 16px;
    }

    &--subtitle {
      font-size: 12px;
      align-self: flex-start;
      background-color: #0000ff;
      padding: 1px 8px;
    }

    &--text {
      font-size: 16px;
      line-height: 32px;
      @media (max-width: $md) {
        font-size: 12px;
      }
    }
  }

  &__smallbox {
    padding: 10%;
    margin-bottom: 20px;

    &--title {
      font-size: 16px;
      color: #00ff00;
    }

    &--text {
      font-size: 16px;

      @media (max-width: $md) {
        font-size: 12px;
      }
    }
  }
}

.admissionlist_img {
  padding-left: 8%;
  padding-bottom: 4.5%;
  @media (max-width: $md) {
    display: none;
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

  @media (max-width: 990px) {
    display: none;
  }

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
    display: none;
  }
}
.admissionlist_sm {
  position: absolute;
  display: none;

  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    top: 30px;
    right: 0;
    width: 20%;
    display: block;
    transform: translateX(30%);
  }
}
</style>
