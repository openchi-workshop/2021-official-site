<template>
  <b-container fluid>
    <b-row id="apply_form">
      <b-col sm="10" md="7" lg="6" class="info">
        <Title class="info__title" text="# HOW TO APPLY" />
        <StyledSubtitle class="info__subtitle" text="報名表單" />
        <div class="info__text">
          報名表單包含「資料填寫」和「IDCard 製作」兩部份：
        </div>
        <div class="info__highlight">資料填寫</div>
        <div class="info__text">包含個人基本資料、相關經歷等內容。</div>
        <div class="info__highlight">IDCard 製作</div>
        <div class="info__text">
          內容包含 「個人簡歷」 、「作品集」與「問題回答」，
          請將檔案附件於表單最後的「檔案上傳」欄位。
        </div>
        <StyledSubtitle class="info__subtitle" text="IDCard 格式規定" />
        <ol class="info__text">
          <li>
            IDCard
            檔案請依製作內容說明自行製作與編排，並輸出一份三頁之A4橫式PDF檔。
          </li>
          <li>IDCard 檔名格式： IDCard_姓名 (範例：IDCard_王小明)。</li>
          <li>若檔案格式或檔名格式不符，造成漏檔，報名者請自行負責。</li>
        </ol>
        <StyledSubtitle class="info__subtitle" text="IDCard 製作內容說明" />
        <div class="info__highlight">第一頁｜個人簡歷</div>
        <div class="info__text">請放個人簡歷，表達格式不限。</div>
        <div class="info__highlight">第二頁｜作品集</div>
        <div class="info__text">
          請放上個人最滿意的作品（研究、專題、設計皆可），可透過文字、圖片或另附影片表達。
        </div>
        <div class="info__highlight">第三頁｜問題回答</div>
        <div class="info__text">
          請從你的經驗中去發想並回答以下兩問題，可透過文字、圖片或另附影片表達，數量、格式均不限。
        </div>

        <StyledBox class="info__box">
          <div class="info__box--title">第一題 團隊題</div>
          <div class="info__box--text">
            請簡單描述在你過去的團隊合作經驗中，曾經遇過什麼樣的挫折？（可說明你在之中扮演的角色、如何解決、從中的學習等。）
          </div>
        </StyledBox>

        <StyledBox class="info__box">
          <div class="info__box--title">第二題（下方擇一）</div>
          <div class="info__box--subtitle">2-1</div>
          <div class="info__box--text">
            參考首頁的主題詮釋，請提出一個生活中跟「舊物再設計」相關的案例，並分析你的案例與主題的關聯、舊物的價值轉變過程、該案例鎖定的使用者輪廓和需求，以及為什麼你選擇此案例。
          </div>
          <div class="info__box--text">
            （注意：「舊物」不一定是實體物件，也可以是被遺忘或現代不被重視的情感、記憶、思想、另類價值等抽象事物。）
          </div>
          <div class="info__box--subtitle">2-2</div>
          <div class="info__box--text">
            針對以下兩個人機互動案例擇一，利用 5W1H
            的框架分析現有設計所涵蓋的議題、目標對象、使用範圍等，並請你推測未來的一種可能發展。（你可以搜尋更多補充資料，請記得附上參考來源）
          </div>

          <StyledBox class="info__smallbox">
            <div class="info__smallbox--title">＜ 案例 1: Yahoo 知識 + ＞</div>
            <div class="info__smallbox--text">
              記錄了過往網路內容量尚未爆炸、搜尋精準度不如當今的一段時光。而知識+的關閉，也呈現出搜尋引擎、Ai
              導入、網路社群及使用者習慣、數位內容生成方式等不同面向的轉變。
            </div>
          </StyledBox>
          <StyledBox class="info__smallbox">
            <div class="info__smallbox--title">＜ 案例 2: 自駕車 ＞</div>
            <div>
              自駕車技術的出現期望提升交通安全，然而在自駕系統、車身載體、城市規劃、資安隱私等設計上都面臨許多挑戰，離正式商業化上線仍有一段距離。
            </div>
          </StyledBox>
        </StyledBox>
      </b-col>
      <b-col sm="6" md="4" lg="6" order="last" class="info_img">
        <img
          src="@/assets/registration/howtoapply_pc.png"
          alt="howtoapply_pc"
          class="howtoapply_pc"
        />
        <img
          src="@/assets/registration/howtoapply_md1.png"
          alt="howtoapply_md1"
          class="howtoapply_md"
        />
        <img
          src="@/assets/registration/howtoapply_md2.png"
          alt="howtoapply_md2"
          class="howtoapply_md"
        />
      </b-col>
      <img
        src="@/assets/registration/howtoapply_sm.png"
        alt="howtoapply_sm"
        class="howtoapply_sm"
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
  name: "ApplyForm",
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
#apply_form {
  position: relative;
  color: #fff;
  background: #1c1c24;
  margin-bottom: 100px;

  @media (max-width: $sm) {
    padding: 0 2.5%;
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

  &__subtitle {
    margin-bottom: 16px;
  }

  &__text {
    font-size: 12px;
    line-height: 32px;
    margin-bottom: 40px;
  }

  &__highlight {
    font-size: 12px;
    line-height: 32px;
    color: #00ff00;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 5% 5% 5%;
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
      font-size: 12px;
      line-height: 32px;

      margin-bottom: 30px;
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
      font-size: 12px;
    }
  }
}

.right {
  display: block;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.down {
  display: none;
  @media (max-width: $md) {
    display: block;
  }
  @media (max-width: $sm) {
    display: block;
  }
}
.box_title {
  color: #00ff00;
  &__inbox {
    width: 25%;
    margin-bottom: 16px;
    height: auto;
    float: left;
    font-size: 16px;
    line-height: 160%;
    align-items: center;
    text-align: -webkit-center;
    text-align: justify;
    @media (max-width: $md) {
      width: 100%;
      margin-left: 0px;
      text-align: center;
    }
    @media (max-width: $sm) {
      width: 100%;
      margin-left: 0px;
      text-align: center;
    }
  }
  &__inbox br {
    @media (max-width: $md) {
      display: none;
    }
    @media (max-width: $sm) {
      display: none;
    }
  }
}
.box_content {
  width: 75%;
  left: calc(50% - 361px / 2 + 59px);
  top: calc(50% - 72px / 2 - 1px);
  float: right;
  line-height: 160%;
  align-items: center;
  text-align: justify;
  @media (max-width: $md) {
    width: 100%;
    left: 45px;
    right: 45px;
    clear: both;
  }
  @media (max-width: $sm) {
    width: 100%;
    left: 45px;
    right: 45px;
    clear: both;
  }
}
.info_img {
  width: 100%;
  padding-left: 10%;
  @media (max-width: $md) {
    top: 109px;
    padding-left: 70px;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.howtoapply_pc {
  width: 289px;
  height: 1961px;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.howtoapply_md {
  width: 148px;
  height: 1015px;
  display: none;
  padding-left: 35px;
  @media (max-width: $md) {
    display: block;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.howtoapply_sm {
  position: absolute;
  top: 0px;
  right: -15px;
  width: 81px;
  display: none;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: block;
  }
}
</style>
