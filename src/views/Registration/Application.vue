<template>
  <b-container fluid>
    <b-row id="application">
      <img
        src="@/assets/registration/application_sm.png"
        alt="application_sm"
        class="application_sm"
      />
      <b-col md="5" lg="5" order="1" class="application_img">
        <lazy-component class="application_pc">
          <img
            src="@/assets/registration/application_pc.png"
            alt="application_pc"
            style="width: 100%"
          />
        </lazy-component>
        <lazy-component class="application_md">
          <img
            src="@/assets/registration/application_md.png"
            alt="application_pc"
            style="width: 100%"
          />
        </lazy-component>
      </b-col>
      <b-col md="7" lg="7" order="last" class="info">
        <Title class="info__title" text="# APPLICATION" />
        <div class="info__body">
          <StyledSubtitle class="info__body--subtitle" text="報名資格" />
          <div class="info__body--text">
            全國各大專院校升大三以上在學生，含學碩博應屆畢業生及新生。
          </div>

          <StyledSubtitle class="info__body--subtitle" text="報名方式" />
          <div class="info__body--text">
            一律填寫線上表單報名。本活動以報名資料填寫內容作為錄取參考依據，報名先後順序不列入計分標準。
          </div>
          <StyledSubtitle class="info__body--subtitle" text="線上報名時間" />
          <div class="info__body--text">
            2021 年 4 月 26 日 ( 一 ) - 2021 年 5 月 14 日 ( 五 ) 23:59'59
          </div>
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
  position: relative;
  color: #fff;
  background: #1c1c24;
  margin-bottom: 100px;
  padding: 0 10%;

  @media (max-width: 576px) {
    margin-bottom: 80px;
  }
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

  &__body {
    font-family: "Noto Sans CJK TC", sans-serif;
    color: #fff;

    &--subtitle {
      margin-bottom: 16px;
    }

    &--text {
      font-size: 16px;
      margin-bottom: 40px;

      @media (max-width: $md) {
        font-size: 12px;
      }
    }

    &--highlight {
      font-size: 12px;
      color: #00ff00;
    }
  }
}

.application_img {
  text-align: center;

  @media (max-width: 1200px) {
    padding-left: 0;
  }

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

  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.application_md {
  width: 80%;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }

  @media (max-width: $md) {
    display: none;
  }

  @media (max-width: $sm) {
    display: none;
  }
}
.application_sm {
  position: absolute;
  top: 10px;
  right: 0px;
  width: 30%;
  display: none;
  transform: translateX(20%);

  @media (max-width: $md) {
    display: block;
  }
}
.info-subtitle {
  margin-top: 69px;
  font-family: Noto Sans CJK TC;
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
  @media (max-width: $md) {
    margin-top: 18px;
  }
}
.highlight-text {
  background-color: blue;
  display: inline;
}
</style>
