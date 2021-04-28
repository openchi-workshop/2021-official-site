<template>
  <!-- eslint-disable no-irregular-whitespace-->
  <div id="program">
    <img src="@/assets/program_small.png" class="image-clip" />
    <b-row class="program">
      <b-col cols md="6" class="program__topic">
        <Title text="#  PROGRAM" class="program__title" />
        <img src="@/assets/program.png" />
      </b-col>
      <b-col cols md="6" class="program__item">
        <ProgramItem
          num="0"
          month="6"
          day="6"
          title="前置工作坊"
          schedule="08:30 - 08:50　學員報到
08:50 - 09:00　開場
09:00 - 10:30　Lo-fi Prototyping
10:30 - 10:50　中場休息
10:50 - 11:50　互動技術教學 I
11:50 - 13:00　午餐時間
13:00 - 15:00　互動技術教學 II
15:00 - 16:10　設計思考介紹
16:10 - 19:00　學員討論 & 晚餐
19:00 - 20:00　同理 & 定義
20:00 - 21:00　討論與分享"
        />
      </b-col>
    </b-row>

    <b-row class="program">
      <b-col cols md="6" class="program__item">
        <ProgramItem
          num="1"
          month="7"
          day="1"
          title="發想與共創"
          schedule="08:30 - 09:00　學員報到
09:00 - 09:30　開場及開幕致詞
09:30 - 10:30　演講 I - 林蕙如
10:30 - 10:50　中場休息
10:50 - 12:20 　演講 II - 梁容輝
12:20 - 13:30　午餐時間
13:00 - 15:00　演講 III - 陳威帆
15:00 - 15:10　Coffee Break
15:20 - 18:30　學員討論 ＆ 晚餐
18:30 - 19:00　創意發想
19:00 - 21:00　討論與分享"
        />
      </b-col>
      <b-col cols md="6" class="program__item">
        <ProgramItem
          num="2"
          month="7"
          day="2"
          title="重構與精煉"
          schedule="08:30 - 09:00　學員報到
09:00 - 10:30　演講 IV - 洪燕茹
10:30 - 10:50　中場休息
10:50 - 11:50　演講 Ｖ - 宋恆
11:50 - 13:00　午餐時間
13:00 - 14:00　學員討論
14:00 - 15:20　提案準備
15:20 - 15:40　休息時間
15:40 - 17:30　期中提案
17:30 - 18:30　晚餐時間
18:30 - 21:00　討論與分享"
        />
      </b-col>
    </b-row>

    <b-row class="program">
      <b-col cols md="6" class="program__item">
        <ProgramItem
          num="3"
          month="7"
          day="3"
          title="迭代與實作"
          schedule="08:30 - 09:00　學員報到
09:00 - 10:00　原型與測試規劃
10:30 - 10:50　中場休息
10:20 - 11:50　顧問諮詢與交流
11:50 - 13:00　午餐時間
13:00 - 14:30　學員討論
14:30 - 15:00　Coffee Break
15:00 - 17:30　設計實作
17:30 - 18:30　晚餐時間
18:30 - 21:00　互動原型製作與數位製造"
        />
      </b-col>
      <b-col cols md="6" class="program__item last-item">
        <ProgramItem
          num="4"
          month="7"
          day="4"
          title="發表與展覽"
          schedule="08:30 - 09:00　學員報到
09:00 - 10:00　設計實作
10:30 - 10:50　中場休息
10:20 - 11:50　互動會場佈置
11:50 - 13:00　午餐時間
13:00 - 14:00　互動會場佈置
14:00 - 15:10　互動會場開場
15:10 - 16:30　各組成果發表
16:30 - 17:30　互動成果展示
17:30 - 18:30　頒獎&閉幕式"
        />
      </b-col>
    </b-row>
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
$md: 768px;
$sm: 576px;
#program {
  position: relative;
  background: #1c1c24;
}
.image-clip {
  position: absolute;
  right: 0;
  top: 1020px;
  @media (max-width: $md) {
    top: 1360px;
  }
}
.program {
  &:first-of-type {
    padding-top: 90px;
  }
  &__title {
    margin: 76px 0 0 120px;
    @media (max-width: $md) {
      margin-left: 68px;
    }
    @media (max-width: $sm) {
      margin-left: 51px;
    }
  }

  img {
    margin-top: 89px;
    @media (max-width: $md) {
      width: 80%;
    }
    @media (max-width: $sm) {
      width: 90%;
    }
  }
  &__item {
    padding: 36px 0 96px 0;
    &:nth-of-type(odd) {
      padding-left: 160px;
      @media (max-width: $md) {
        padding-left: 100px;
      }
      @media (max-width: $sm) {
        padding-left: 60px;
      }
    }
    &:nth-of-type(even) {
      padding-left: 60px;
      @media (max-width: $md) {
        padding-left: 100px;
      }
      @media (max-width: $sm) {
        padding-left: 60px;
      }
    }
  }
  .last-item {
    @media (max-width: $md) {
      padding-bottom: 400px;
    }
    @media (max-width: $sm) {
      padding-bottom: 300px;
    }
  }
}
</style>
