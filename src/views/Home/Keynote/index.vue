<template>
  <div id="keynote" class="keynote">
    <div class="keynote__sidebar">
      <Title text="# KEYNOTE SPEAKER" />
      <lazy-component>
        <img
          alt="mobius"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/keynote__banner.png"
          class="keynote__sidebar--image"
        />
      </lazy-component>
    </div>
    <div class="keynote__list">
      <template v-for="speaker in speakers">
        <keynote-card :key="speaker.key" v-bind="speaker" />
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import KeynoteCard from "./KeynoteCard";

export default {
  components: {
    Title,
    KeynoteCard,
  },
  data() {
    return {
      speakers: [
        {
          key: "林蕙如",
          img: "speaker_1.png",
          name: "林蕙如",
          work: "悠識數位 研究總監",
          title: "規劃到轉化，如何進行使用者研究",
          description:
            "使用者研究怎麼進行，該考量的事情有哪些？這一個小時我們將濃縮幾年的經驗，跟各位聊聊研究在實際上執行的各種狀況以及眉眉角角，從擬定計畫，定義族群，到研究執行，收斂報告，讓大家一窺使用者研究的起承轉合。",
        },
        {
          key: "梁容輝",
          img: "speaker_2.png",
          name: "梁容輝",
          work: "台灣科技大學設計系副教授",
          title: "我相信但是沒感覺: 纏結人機互動設計之經驗轉向",
          description:
            "人機互動設計經歷了三大派典後，湧現的推測設計、設計虛構、論述設計被稱為纏結的人機互動派典(entanglement HCI)，結合行動者網絡理論(ANT)、物件導向本體論(OOO)、後現象學、與能動實在論(agential realism)。然而，人的經驗如何在纏結學派中找到定位?停止懷疑 (suspension of disbelief)是否足以創造親身經驗 (felt experience)?從現象學的存在於世界(being-in-the-world)如何朝向存在於可能世界(being-in-the-possible-world)?相信等於經驗嗎?",
        },
        {
          key: "陳威帆",
          img: "speaker_3.png",
          name: "陳威帆",
          work: "Fourdesire 創辦人兼製作人",
          title: "演講主題：玩心設計工具箱",
          description:
            "「好用還不夠，好玩才是真理！」在眾多的互動設計形式中，「玩」是最容易讓人印象深刻的一種互動方式。只有出於「玩心」所產生的行為、製造的產品、付出的服務，才會令人愛不釋手，不因時間而減損其價值。透過設計出《植物保姆》、《Walkr》、《記事探險》和《記帳城市》與其他眾多專案的過程，逐步整理出許多有趣的設計工具，組成充滿魔力的「玩心設計工具箱」。 在這場演講中，陳威帆將與大家分享他的「工具箱」內的各種有趣設計工具，以及如何將它們應用於現實。",
        },
        {
          key: "unknown 3",
          img: "blank_speaker_image.png",
          name: "敬請期待演講者",
          work: "",
          title: "敬請期待演講主題",
          description: "主題簡介",
        },
        {
          key: "unknown 2",
          img: "blank_speaker_image.png",
          name: "敬請期待演講者",
          work: "",
          title: "敬請期待演講主題",
          description: "主題簡介",
        },
      ],
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;

.keynote {
  display: flex;
  flex-direction: row;

  @media (max-width: $md) {
    flex-direction: column;
  }

  &__sidebar {
    text-align: end;
    padding-right: 40px;
    width: 40%;

    @media (max-width: 1400px) {
      display: none;
    }

    &--image {
      width: 100%;
      margin-top: 120px;

      @media (max-width: $md) {
        display: none;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 5%;
  }
}
</style>
