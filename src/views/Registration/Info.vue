<template>
  <b-container fluid>
    <b-row>
      <div class="banner_registration">
        <div v-lazy-container="{ source: 'img' }">
          <div class="banner_registration--image-small">
            <img
              data-src="https://storage.googleapis.com/openhci2021-storage/registration/registration_banner_320.png"
              style="width: 100%"
            />
          </div>
          <div class="banner_registration--image-large">
            <img
              data-src="https://storage.googleapis.com/openhci2021-storage/registration/banner_1440w.png"
              data-loading="https://storage.googleapis.com/openhci2021-storage/registration/registration_banner_small.png"
              alt="Chris standing up holding his daughter Elva"
              style="width: 100%"
            />
          </div>

          <StyledBox class="banner_registration--title">
            ＜REGISTRATION＞
          </StyledBox>
        </div>
      </div>
    </b-row>
    <b-row id="info">
      <b-col sm md="7" lg="7" class="info">
        <Title class="info__title" text="# WORKSHOP INFORMATION" />
        <div class="info__body">
          <StyledSubtitle class="info__body--subtitle" text="活動時間" />
          <div class="info__body--text">
            活動時間分為兩個階段，包含一天的前置工作坊和四天的正式工作坊，共 5
            天。每日活動開始時間皆為 08:30，結束時間為 21:00 – 21:30 不等。
          </div>
          <div class="info__body--highlight">前置工作坊</div>
          <div class="info__body--highlight">
            2021年 6 月 06 日（日）前置工作坊
          </div>
          <div class="info__body--text">
            人機互動先修班，學習基礎的Arduino使用，以及設計思考的流程，在與組員初步接觸後，開始探索周遭可能的不平凡。
          </div>

          <div class="info__body--highlight">正式工作坊</div>
          <div class="info__body--highlight">
            2021 年 7 月 1 日（四）- 2021 年 7 月 4 日（日）
          </div>
          <div class="info__body--text">
            人機互動實戰班，聆聽相關領域先驅者的演講，認識人機互動的不同面向；與組員攜手合作挖掘出瘋狂而美麗的點子，以及專業顧問的協助指導，並將之轉化為現實；最後一日的成果展示將跟各界人士互動與對話，精益作品以期能到更寬廣的舞台展示。
          </div>

          <StyledSubtitle class="info__body--subtitle" text="活動地點" />
          <div class="info__body--text">
            國立臺北科技大學（10608 台北市大安區忠孝東路三段1號）
          </div>
          <StyledSubtitle class="info__body--subtitle" text="活動費用" />
          <div class="info__body--text">
            <div>
              為推廣HCI學門，本活動僅收保險費，獲得錄取資格之學員，請於指定時間內繳交
              保證金新台幣 1000 元以及保險費用 100
              元，繳費後方能取得正式資格。為維持學習的完整性，學員獲選後需全程參與。
            </div>
            <div>
              主辦單位將依出席簽到為準，全程參與者，保證金將於工作坊結束後全額退還。
            </div>
            <div class="info__body--text">
              註： 活動中之住宿及早午晚餐，學員需自理及負擔相關費用。
            </div>
          </div>
          <div class="info__body--special-subtitle">
            <StyledSubtitle
              class="info__body--subtitle"
              text="疫情舉辦標準"
              style="margin-right: 12px"
            />
            <div style="color: #bdbdbd">主辦方視疫情狀況更改</div>
          </div>
          <div class="info__body--highlight">正常舉辦</div>
          <ul class="info__body--text">
            <li>活動前15日內，北北基無案例或零星的境外移入案例。</li>
            <li>活動前15日內，台北市政府無宣布群聚活動限制。</li>
          </ul>
          <div class="info__body--highlight">
            線上舉辦：滿足以下任一情況，即改為線上舉辦
          </div>
          <ul class="info__body--text">
            <li>北北基出現本土案例，連續出現不超過五天。</li>
            <li>台北市政府宣布群聚活動限制。</li>
            <li>非北北基地區每日出現本土案例，且連續五天以上。</li>
          </ul>
          <div class="info__body--highlight">停辦</div>
          <ul class="info__body--text">
            <li>活動前15日內，北北基出現本土案例且連續五天以上。</li>
          </ul>
        </div>
      </b-col>
      <b-col md="5" lg="3" order="last" class="info_img">
        <img
          src="@/assets/registration/workshopinfo_pc.png"
          alt="workshop_info_pc"
          class="workshop_info_pc"
        />
        <img
          src="@/assets/registration/workshopinfo_md1.png"
          alt="workshop_info_md1"
          class="workshop_info_md"
        />
        <img
          src="@/assets/registration/workshopinfo_md2.png"
          alt="workshop_info_md2"
          class="workshop_info_md"
        />
      </b-col>
      <img
        src="@/assets/registration/workshopinfo_sm.png"
        alt="workshop_info_sm"
        class="workshop_info_sm"
      />
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import StyledSubtitle from "@/components/ui/StyledSubtitle";
import StyledBox from "@/components/ui/StyledBox";

export default {
  name: "Info",
  components: {
    Title,
    StyledSubtitle,
    StyledBox,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
#info {
  position: relative;
  color: #fff;
  background: #1c1c24;
}

.banner_registration {
  width: 100%;
  position: relative;
  margin-bottom: 90px;

  &--image-small {
    width: 100%;
    display: none;

    @media (max-width: 576px) {
      display: block;
    }
  }

  &--image-large {
    width: 100%;

    @media (max-width: 576px) {
      display: none;
    }
  }

  &--title {
    position: absolute;
    font-size: 48px;
    color: white;
    left: 10%;
    bottom: 10%;
    font-family: Arvo;

    @media (max-width: $sm) {
      display: none;
    }
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
    font-size: 24px;
    margin-bottom: 32px;
  }

  &__body {
    font-family: "Noto Sans CJK TC", sans-serif;
    color: #fff;

    &--subtitle {
      margin-bottom: 16px;
    }

    &--special-subtitle {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &--text {
      font-size: 16px;
      line-height: 32px;
      margin-bottom: 40px;

      @media (max-width: $md) {
        font-size: 12px;
      }
    }

    &--highlight {
      font-size: 16px;
      line-height: 32px;
      color: #00ff00;

      @media (max-width: $md) {
        font-size: 12px;
      }
    }
  }
}

.info_img {
  right: 0px;
  width: 100%;
  @media (max-width: $md) {
    top: 171px;
    right: -80px;
    margin-right: 0px;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.workshop_info_pc {
  height: 90%;
  padding: 0px;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: none;
  }
}

.workshop_info_md {
  height: 45%;
  display: none;
  @media (max-width: $md) {
    display: block;
  }
  @media (max-width: $sm) {
    display: none;
  }
}

.workshop_info_sm {
  z-index: 1;
  position: absolute;
  right: -15px;
  width: 30%;
  display: none;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    top: 50px;
    display: block;
  }
}
.content-title {
  font-family: Noto Sans CJK TC;
  font-size: 16px;
  line-height: 27px;
  color: #00ff00;
}
.has-title {
  top: 0px;
}
.highlight-text {
  background-color: blue;
  display: inline;
}
</style>
