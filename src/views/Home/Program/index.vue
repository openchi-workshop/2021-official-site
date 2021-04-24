<template>
  <div id="program">
    <b-row class="program">
      <b-col cols="6">
        <Title text="#  PROGRAM" class="program__title" />
      </b-col>
      <b-col cols="6" class="program__item">
        <ProgramItem
          num="0"
          month="6"
          day="6"
          title="前置工作坊"
          schedule="08:30 - 09:00 學員報到
                    09:00 - 09:30 開場
                    09:30 - 10:30 Lo-fi Prototyping
                    10:30 - 10:40 中場休息
                    10:40 - 11:40 互動技術教學 I
                    11:40 - 13:00 午餐時間
                    13:00 - 14:30 互動技術教學 II
                    14:30 - 14:40 中場休息
                    14:40 - 16:30 設計思考流程
                    16:30 - 18:00 討論"
        />
      </b-col>
    </b-row>
    <div class="program__divder"></div>
    <b-row class="program">
      <b-col cols="6" class="program__item">
        <ProgramItem
          num="1"
          month="7"
          day="1"
          title="行為與觀察"
          schedule="08:30 - 09:00 學員報到
                    09:00 - 09:30 開場及開幕致詞
                    09:30 - 10:30 演講 I - 〇 〇 〇
                    10:30 - 10:40 中場休息
                    10:40 - 11:40 演講 II - 〇 〇 〇
                    11:40 - 12:30 午餐時間
                    12:30 - 16:00 UX in the Jungle Workshop
                    16:00 - 17:00 定義問題
                    17:00 - 18:00 晚餐時間
                    18:00 - 20:00 創意發想
                    20:00 - 20:15 討論與分享"
        />
      </b-col>
      <b-col cols="6" class="program__item">
        <ProgramItem
          num="2"
          month="7"
          day="2"
          title="實作與媒材 I"
          schedule="08:30 - 09:00 學員報到
                    09:00 - 09:30 前情提要與分享
                    09:30 - 10:30 演講 III - 〇 〇 〇
                    10:30 - 10:50 中場休息
                    10:50 - 11:50 演講 IV - 〇 〇 〇
                    11:50 - 13:00 午餐時間
                    13:00 - 15:30 設計實作
                    15:30 - 16:00 中場休息
                    16:00 - 17:30 期中提案
                    17:30 - 17:50 評審總評
                    17:50 - 18:30 綜合討論"
        />
      </b-col>
    </b-row>
    <div class="program__divder"></div>
    <b-row class="program">
      <b-col cols="6" class="program__item">
        <ProgramItem
          num="3"
          month="7"
          day="3"
          title="實作與媒材 II"
          schedule="08:30 - 09:00 報到
                    09:00 - 09:30 前情提要與分享
                    09:30 - 10:30 演講 Ｖ - 〇 〇 〇
                    10:30 - 10:50 中場休息
                    10:50 - 11:50 演講 VI - 〇 〇 〇
                    11:50 - 13:00 午餐時間
                    13:00 - 17:00 設計實作
                    17:00 - 18:00 數位製造與互動原型製作"
        />
      </b-col>
      <b-col cols="6" class="program__item">
        <ProgramItem
          num="4"
          month="7"
          day="4"
          title="行為與觀察"
          schedule="08:30 - 09:00 報到
                    09:00 - 10:30 實作時間
                    10:30 - 10:40 各組展場報到
                    10:40 - 12:00 佈置互動會場
                    12:00 - 13:00 午餐時間
                    13:00 - 13:10 互動會場開場
                    13:10 - 15:30 各組成果發表
                    15:30 - 17:30 互動成果展示
                    17:30 - 18:30 頒獎&閉幕式
                    18:30 - 19:00 場復"
        />
      </b-col>
    </b-row>
    <div class="program__divder"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import ProgramItem from "./ProgramItem";

export default {
  name: "Program",
  components: {
    Title,
    ProgramItem,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#program {
  background: #1c1c24;
}
.program {
  &:first-of-type {
    padding-top: 30px;
  }
  &__title {
    margin: 100px 0 0 120px;
  }

  &__item {
    padding: 32px 0;
    &:nth-of-type(odd) {
      padding-left: 160px;
    }
    &:nth-of-type(even) {
      padding-left: 60px;
    }
  }
  &__divder {
    width: 100vw;
    height: 8px;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    &:last-of-type {
      border-bottom: none;
    }
  }
}
</style>
