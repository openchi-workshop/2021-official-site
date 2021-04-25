<template>
  <div id="info">
    <div class="info-subtitle">
      <Title text="# WORKSHOP INFORMATION" />
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="活動時間" />
      <div class="info-content">
        活動時間分為兩個階段，包含一天的前置工作坊和四天的正式工作坊，共 5 天。每日活動開始時間皆為 08:30，結束時間為 21:00 – 21:30 不等。
      </div>
      <div class="content-title">
        2021年 6 月 06 日（日） ：前置工作坊
      </div>
      <div class="info-content has-title">
        人機互動先修班，學習基礎的Arduino使用，以及設計思考的流程，在與組員初步接觸後，開始探索周遭可能的不平凡。
      </div>
      <div class="content-title">
        2021 年 7 月 1 日（四） - 2021 年 7 月 4 日（日） ：正式工作坊
      </div>
      <div class="info-content has-title">
        人機互動實戰班，聆聽相關領域先驅者的演講，認識人機互動的不同面向；與組員攜手合作挖掘出瘋狂而美麗的點子，以及專業顧問的協助指導，並將之轉化為現實；最後一日的成果展示將跟各界人士互動與對話，精益作品以期能到更寬廣的舞台展示。
      </div>
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="活動地點" />
      <div class="info-content">
        國立臺北科技大學（10608 台北市大安區忠孝東路三段1號）
      </div>
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="活動費用" />
      <div class="info-content">
        為推廣 HCI 學門，本活動僅收保險費，獲得錄取資格之學員，請於指定時間內繳交
        <p class="highlight-text">保證金新台幣 1000 元以及保險費用 100 元</p>
        ，繳費後方能取得正式資格。為維持學習的完整性，學員獲選後需全程參與。
        <br><br>
        而將依出席簽到為準，全程參與者，保證金將於工作坊結束後全額退還。
        <br><br>
        <div class="content-title" style="display:inline;">註：</div>活動中之住宿及早午晚餐，學員需自理及負擔相關費用。
      </div>
    </div>
    <div class="info-subtitle">
      <StyledSubtitle text="疫情舉辦標準" />
      <div class="content-title">
        正常舉辦
      </div>
      <div class="info-content has-title">
        北北基無案例或零星的境外移入案例；台北市政府無宣布群聚活動限制。
      </div>
      <div class="content-title">
        線上舉辦：滿足以下任一情況，即改為線上舉辦
      </div>
      <ul class="info-content has-title">
        <li>北北基出現本土案例，連續出現不超過五天。</li>
        <li>台北市政府宣布群聚活動限制。</li>
        <li>非北北基地區每日出現本土案例，且連續五天以上。</li>
      </ul>
      <div class="content-title">
        停辦
      </div>
      <div class="info-content has-title">
        北北基出現本土案例，且連續五天以上。
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import StyledSubtitle from "@/components/ui/StyledSubtitle";

export default {
  name: "Info",
  components: {
    Title,
    StyledSubtitle,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#info {
  color: #fff;
  width: 591px;
  background: #1c1c24;
  margin-left: 122px;
  margin-right: 121px;
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
.has-title {
  margin-top: 0px;
}
.highlight-text {
  background-color: blue;
  display: inline;
}
</style>
