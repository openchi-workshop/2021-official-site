<template>
  <div id="keynote">
    <Title text="# KEYNOTE SPEAKER" class="keynote__title" />
    <div class="keynote__list">
      <b-row>
        <b-col align-self="start" class="keynote__card">
          <KeynoteCard
            img="https://i.pravatar.cc/200"
            name="< 講者Ａ>"
            work=" 講者Ａ工作單位 "
            title="< 講者Ａ演講主題 >"
            description="演講主題簡介 "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col align-self="start" offset-md="1" class="keynote__card">
          <KeynoteCard
            img="https://i.pravatar.cc/200"
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
            img="https://i.pravatar.cc/200"
            name="< 講者C>"
            work=" 講者Ａ工作單位 "
            title="< 講者C演講主題 >"
            description="演講主題簡介 "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col align-self="start" offset-md="3" class="keynote__card">
          <KeynoteCard
            img="https://i.pravatar.cc/200"
            name="< 講者D>"
            work=" 講者D工作單位 "
            title="< 講者D演講主題 >"
            description="演講主題簡介 "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col align-self="start" offset-md="4" class="keynote__card">
          <KeynoteCard
            img="https://i.pravatar.cc/200"
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
