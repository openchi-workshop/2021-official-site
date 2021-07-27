<template>
  <b-container fluid>
    <b-row>
      <b-col sm md="9" lg="9" xl="8" class="info">
        <img
          src="@/assets/registration/workshopinfo_sm.png"
          alt="workshop_info_sm"
          class="workshop_info_sm"
        />
        <app-title id="info" class="info__title"
          ># WORKSHOP INFORMATION</app-title
        >
        <div class="info__body">
          <app-slide-in-animation>
            <StyledSubtitle class="info__body--subtitle" text="活動時間" />
            <div class="info__body--text">
              活動時間分為兩個階段，包含一天的前置工作坊和四天的正式工作坊，共 5
              天。每日活動開始時間皆為 08:30，結束時間為 21:00 – 21:30 不等。
            </div>
            <div class="info__body--highlight">
              2021年 7 月 18 日（日）： 前置工作坊
            </div>
            <div class="info__body--text">
              人機互動先修班，學習基礎的Arduino使用，以及設計思考的流程，在與組員初步接觸後，開始探索周遭可能的不平凡。
            </div>

            <div class="info__body--highlight">
              2021 年 8 月 19 日（四）- 2021 年 8 月 22 日（日）： 正式工作坊
            </div>
            <div class="info__body--text">
              人機互動實戰班，聆聽相關領域先驅者的演講，認識人機互動的不同面向；與組員攜手合作挖掘出瘋狂而美麗的點子，以及專業顧問的協助指導，並將之轉化為現實；最後一日的成果展示將跟各界人士互動與對話，精益作品以期能到更寬廣的舞台展示。
            </div>
          </app-slide-in-animation>

          <app-slide-in-animation>
            <StyledSubtitle class="info__body--subtitle" text="活動地點" />
            <div class="info__body--row info__body--text">
              <div>國立臺北科技大學</div>
              <div>（10608 台北市大安區忠孝東路三段1號）</div>
            </div>
          </app-slide-in-animation>

          <app-slide-in-animation>
            <StyledSubtitle class="info__body--subtitle" text="活動費用" />
            <div class="info__body--text">
              為推廣HCI學門，本活動僅收保險費，獲得錄取資格之學員，請於指定時間內繳交
              保證金新台幣 1000
              元以及保險費用100元，繳費後方能取得正式資格。為維持學習的完整性，
              學員獲選後需全程參與。為維持學習的完整性，學員獲選後需全程參與，
            </div>
            <div class="info__body--text">
              <div>
                <span class="info__body--highlight">註 1：</span>
                活動中之住宿及早午晚餐，學員需自理及負擔相關費用。
              </div>
              <div>
                <span class="info__body--highlight">註 2：</span>
                如於工作坊期間需要請假，請於表單填寫詳細時間，如未填寫但於工作坊期間缺席，恕不退回保證金。
              </div>
            </div>
          </app-slide-in-animation>

          <app-slide-in-animation>
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
              <li>活動前15日內，北北基出現本土案例連續三天以上不超過五天。</li>
              <li>活動前15日內，台北市政府宣布群聚活動限制。</li>
              <li>
                活動前15日內，非北北基地區每日出現本土案例，且連續五天以上。
              </li>
            </ul>
            <div class="info__body--highlight">停辦</div>
            <ul class="info__body--text">
              <li>活動前15日內，北北基出現本土案例且連續五天以上。</li>
            </ul>
          </app-slide-in-animation>
        </div>
      </b-col>
      <b-col no-gutters md="3" lg="3" xl="4" order="last" class="text-right">
        <div class="info__image">
          <img
            src="@/assets/registration/workshopinfo_pc.png"
            alt="workshop_info_pc"
            class="workshop_info_pc"
          />
          <img
            src="@/assets/registration/workshopinfo_md.png"
            alt="workshop_info_md"
            class="workshop_info_md"
          />
          <img
            src="@/assets/registration/workshopinfo_md.png"
            alt="workshop_info_md"
            class="workshop_info_md"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppTitle from "@/components/ui/AppTitle";
import StyledSubtitle from "@/components/ui/StyledSubtitle";
import AppSlideInAnimation from "@/components/ui/AppSlideInAnimation";

export default {
  name: "Info",
  components: {
    AppTitle,
    StyledSubtitle,
    AppSlideInAnimation,
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
  margin-bottom: 96px;
}

.info {
  padding: 0 10%;
  margin-bottom: 80px;

  @media (max-width: 576px) {
    margin-bottom: 0;
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
    color: #fff;

    &--row {
      display: flex;
      flex-direction: row;

      @media (max-width: $md) {
        flex-direction: column;
      }
    }

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
      margin-bottom: 40px;

      @media (max-width: $md) {
        font-size: 12px;
      }
    }

    &--highlight {
      font-size: 16px;
      color: #00ff00;

      @media (max-width: $md) {
        font-size: 12px;
      }
    }
  }

  &__image {
    position: absolute;
    right: 0;
    padding-right: 0;
  }
}

.workshop_info_pc {
  width: 100%;
  @media (max-width: 1440px) {
    display: none;
  }
}

.workshop_info_md {
  width: 100%;
  display: none;

  @media (max-width: 1440px) {
    display: block;
  }

  @media (max-width: $md) {
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
