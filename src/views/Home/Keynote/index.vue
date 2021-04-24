<template>
  <div id="keynote">
    <Title text="# KEYNOTE SPEAKER" class="keynote__title" />
    <div class="keynote__list">
      <template v-for="(speaker, i) in speakers">
        <b-row :key="speaker.name">
          <b-col align-self="start" :offset-md="i" class="keynote__card">
            <template v-if="speaker.name">
              <keynote-card v-bind="speaker" />
            </template>
            <template v-else>
              <keynote-blank-card />
            </template>
          </b-col>
        </b-row>
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import KeynoteCard from "./KeynoteCard";
import KeynoteBlankCard from "./KeynoteBlankCard";

export default {
  name: "Keynote",
  components: {
    Title,
    KeynoteCard,
    KeynoteBlankCard,
  },
  data() {
    return {
      speakers: [
        {
          img: "speaker_1.jpeg",
          name: "林蕙如",
          work: "悠識數位 研究總監",
          title: "規劃到轉化，如何進行使用者研究",
          description:
            "使用者研究怎麼進行，該考量的事情有哪些？這一個小時我們將濃縮幾年的經驗，跟各位聊聊研究在實際上執行的各種狀況以及眉眉角角，從擬定計畫，定義族群，到研究執行，收斂報告，讓大家一窺使用者研究的起承轉合。",
        },
        {
          img: "speaker_2.jpeg",
          name: "陳威帆",
          work: "Fourdesire 創辦人兼製作人",
          title: "敬請期待演講主題",
          description:
            "陳威帆是一名軟體開發者、屢獲殊榮的遊戲設計師和製作人。 他創立了 Fourdesire 旨在製作各種有意義且富饒趣味的遊戲產品，為社會帶來積極影響。他的眾多獲獎作品如《植物保姆》、《Walkr》和《記帳城市》使用者已破全球數千萬，並受到華盛頓郵報、商業內幕、IGN、Polygon 等媒體報導。",
        },
        {
          img: "speaker_3.jpeg",
          name: "洪燕茹",
          work: "5% Design Action 社會設計平台 共同發起人",
          title: "敬請期待演講主題",
          description:
            "職游-職涯詢工作室 共同創辦人、GCDF國際生涯發展 諮詢師、台北護理大學 職涯探勘課程 講師、TEDX年會及沙龍 受邀講者、多場國際型跨域創新工作坊 計畫PM，帶領演講與工作坊超過180場。擅長人生設計，社會/服務設計，以及跨領域共創。",
        },
        {},
        {},
      ],
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#keynote {
  background: #1c1c24;
}
.keynote {
  &__title {
    margin: 176px 83px 0 912px;
  }
  &__list {
    margin-left: 120px;
    margin-top: -50px;
  }
  &__card {
    margin-bottom: 82px;
  }
}
</style>
