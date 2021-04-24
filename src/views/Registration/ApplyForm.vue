<template>
  <div id="apply_form">
    <div class="info-subtitle">
      <Title text="# HOW TO APPLY" />
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="報名表單" />
      <div class="info-content">
        報名表單包含「資料填寫」和「IDCard 製作」兩部份：
      </div>
      <div class="content-title">
        資料填寫
      </div>
      <div class="info-content has-title">
        包含個人基本資料、相關經歷等內容。
      </div>
      <div class="content-title">
        IDCard 製作
      </div>
      <div class="info-content has-title">
        內容包含 「個人簡歷」 、「作品集」與「問題回答」， 請將檔案附件於表單最後的「檔案上傳」欄位。
      </div>
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="IDCard 格式規定" />
      <ol class="info-content">
        <li>IDCard 檔案請依製作內容說明自行製作與編排，並輸出一份三頁之A4橫式PDF檔。</li>
        <li>IDCard 檔名格式： IDCard_姓名 (範例：IDCard_王小明)。</li>
        <li>若檔案格式或檔名格式不符，造成漏檔，報名者請自行負責。</li>
      </ol>
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="IDCard 製作內容說明" />
      <div class="content-title">
        第一頁｜個人簡歷
      </div>
      <div class="info-content has-title">
        請放個人簡歷，表達格式不限。
      </div>
      <div class="content-title">
        第二頁｜作品集
      </div>
      <div class="info-content has-title">
        請放上個人最滿意的作品（研究、專題、設計皆可），可透過文字、圖片或另附影片表達。
      </div>
      <div class="content-title">
        第三頁｜問題回答
      </div>
      <div class="info-content has-title">
        請從你的經驗中去發想並回答以下兩問題，可透過文字、圖片或另附影片表達，數量、格式均不限。
      </div>
      <StyledBox class="info-content__Box">
        <div class="box_title box_title__inbox" style="left: 54px;">第一題<br>團隊題</div>
        <div class="box_content">
          請簡單描述在你過去的團隊合作經驗中，曾經遇過什麼樣的挫折？（可說明你在之中扮演的角色、如何解決、從中的學習等。）
        </div>
      </StyledBox>
      <StyledBox class="info-content__Box">
        <div class="box_title box_title__inbox">第二題<br>（右側擇一）</div>
        <div class="box_content">
          <div class="highlight-text">2-1 </div><br>
          <div class=" has-title" style="margin-bottom: 32px">
            參考首頁的主題詮釋，請提出一個生活中跟「舊物再設計」相關的案例，並分析你的案例與主題的關聯、舊物的價值轉變過程、該案例鎖定的使用者輪廓和需求，以及為什麼你選擇此案例。（注意：「舊物」不一定是實體物件，也可以是被遺忘或現代不被重視的情感、記憶、思想、另類價值等抽象事物。）
          </div>
          <div class="highlight-text">2-2</div><br>
          <div class="has-title">
            針對以下兩個人機互動案例擇一，利用 5W1H 的框架分析現有設計所涵蓋的議題、目標對象、使用範圍等，並請你推測未來的一種可能發展。（你可以搜尋更多補充資料，請記得附上參考來源）
          </div>
          <StyledBox class="info-content__smallBox">
            <div class="box_title">＜ 案例 1: Yahoo 知識 + ＞</div>
            記錄了過往網路內容量尚未爆炸、搜尋精準度不如當今的一段時光。而知識+的關閉，也呈現出搜尋引擎、Ai 導入、網路社群及使用者習慣、數位內容生成方式等不同面向的轉變。
          </StyledBox>
          <StyledBox class="info-content__smallBox">
            <div class="box_title">＜ 案例 2: 自駕車 ＞</div>
            自駕車技術的出現期望提升交通安全，然而在自駕系統、車身載體、城市規劃、資安隱私等設計上都面臨許多挑戰，離正式商業化上線仍有一段距離。
          </StyledBox>
        </div>
      </StyledBox>
    </div>
  </div>
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
#apply_form {
  color: #fff;
  width: 591px;
  background: #1c1c24;
  margin-left: 122px;
  margin-right: 121px;
  margin-top: 135px;
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
  &__Box {
    display: inline-block !important;    
    padding: 32px 48px;
    margin-top: 32px;
    width: 591px;
    align-items: center;
  }
  &__smallBox {
    padding: 15px 25px;
    margin-top: 32px;
  }
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
.has-title {
  margin-top: 0px;
}
.highlight-text {
  background-color: blue;
  display: inline;
}
.box_title {
  color: #00FF00;
  &__inbox{
    position: absolute;
    width: 96px;
    top: calc(50% - 52px/2 - 1px);
    left: 30px;
    height: auto;
    float: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    display: flex;
    align-items: center;
    text-align: center;
  }
}
.box_content {
  width: 361px;
  left: calc(50% - 361px/2 + 59px);
  top: calc(50% - 72px/2 - 1px);
  height: auto;
  float: right;
  font-weight: 500;
  line-height: 160%;
  align-items: center;
}

</style>
