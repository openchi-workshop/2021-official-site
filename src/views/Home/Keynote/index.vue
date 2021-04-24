<template>
  <div id="keynote">
    <Title text="# KEYNOTE SPEAKER" class="keynote__title" />
    <div class="keynote__list">
      <b-row>
        <b-col align-self="start" class="keynote__card">
          <KeynoteCard
            img="講者1.jpeg"
            name="< 林蕙如 >"
            work="悠識數位 研究總監"
            title="< 規劃到轉化，如何進行使用者研究 >"
            description="使用者研究怎麼進行，該考量的事情有哪些？這一個小時我們將濃縮幾年的經驗，跟各位聊聊研究在實際上執行的各種狀況以及眉眉角角，從擬定計畫，定義族群，到研究執行，收斂報告，讓大家一窺使用者研究的起承轉合。"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col align-self="start" offset-md="1" class="keynote__card">
          <KeynoteCard
            img="講者2.jpeg"
            name="< 講者B>"
            work=" 講者B工作單位 "
            title="< 講者B演講主題 >"
            description="演講主題簡介 "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col align-self="start" offset-md="2" class="keynote__card">
          <KeynoteCard
            img="講者3.jpeg"
            name="< 陳威帆 >"
            work=" Fourdesire 創辦人兼製作人 "
            title="< 講者C演講主題 >"
            description="演講主題簡介 "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col align-self="start" offset-md="3" class="keynote__card">
          <KeynoteCard
            img="講者4.jpeg"
            name="< 洪燕茹 >"
            work=" 5% Design Action 社會設計平台 共同發起人 "
            title="< 講者D演講主題 >"
            description="演講主題簡介 "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col align-self="start" offset-md="4" class="keynote__card">
          <KeynoteCard
            img="講者5.jpeg"
            name="< 講者E>"
            work=" 講者E工作單位 "
            title="< 講者E演講主題 >"
            description="演講主題簡介 "
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import KeynoteCard from "./KeynoteCard";

export default {
  name: "Keynote",
  components: {
    Title,
    KeynoteCard,
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
