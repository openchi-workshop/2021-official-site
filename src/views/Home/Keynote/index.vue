<template>
  <div id="keynote" class="keynote">
    <lazy-component class="keynote__sidebar">
      <img
        alt="mobius"
        src="https://storage.googleapis.com/openhci2021-storage/home-page/keynote__banner.png"
        class="keynote__sidebar--image"
      />
    </lazy-component>
    <div class="keynote__list">
      <app-title class="keynote__title"> # KEYNOTE SPEAKER </app-title>
      <template v-for="speaker in speakers">
        <keynote-card :key="speaker.key" v-bind="speaker" />
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTitle from "@/components/ui/AppTitle";
import KeynoteCard from "./KeynoteCard";

export default {
  components: {
    AppTitle,
    KeynoteCard,
  },
  data() {
    return {
      speakers: [
        {
          key: "林蕙如",
          img: "https://storage.googleapis.com/openhci2021-storage/home-page/speaker/speaker_1.png",
          name: "林蕙如",
          work: "悠識數位 研究總監",
          title: "規劃到轉化，如何進行使用者研究",
          description:
            "使用者研究怎麼進行，該考量的事情有哪些？這一個小時我們將濃縮幾年的經驗，跟各位聊聊研究在實際上執行的各種狀況以及眉眉角角，從擬定計畫，定義族群，到研究執行，收斂報告，讓大家一窺使用者研究的起承轉合。",
        },
        {
          key: "梁容輝",
          img: "https://storage.googleapis.com/openhci2021-storage/home-page/speaker/speaker_2.png",
          name: "梁容輝",
          work: "台灣科技大學設計系副教授",
          title: "我相信但是沒感覺: 纏結人機互動設計之經驗轉向",
          description:
            "人機互動設計經歷了三大派典後，湧現的推測設計、設計虛構、論述設計被稱為纏結的人機互動派典(entanglement HCI)，結合行動者網絡理論(ANT)、物件導向本體論(OOO)、後現象學、與能動實在論(agential realism)。然而，人的經驗如何在纏結學派中找到定位?停止懷疑 (suspension of disbelief)是否足以創造親身經驗 (felt experience)?從現象學的存在於世界(being-in-the-world)如何朝向存在於可能世界(being-in-the-possible-world)?相信等於經驗嗎?",
        },
        {
          key: "陳威帆",
          img: "https://storage.googleapis.com/openhci2021-storage/home-page/speaker/speaker_3.png",
          name: "陳威帆",
          work: "Fourdesire 創辦人兼製作人",
          title: "演講主題：玩心設計工具箱",
          description:
            "「好用還不夠，好玩才是真理！」在眾多的互動設計形式中，「玩」是最容易讓人印象深刻的一種互動方式。只有出於「玩心」所產生的行為、製造的產品、付出的服務，才會令人愛不釋手，不因時間而減損其價值。透過設計出《植物保姆》、《Walkr》、《記事探險》和《記帳城市》與其他眾多專案的過程，逐步整理出許多有趣的設計工具，組成充滿魔力的「玩心設計工具箱」。 在這場演講中，陳威帆將與大家分享他的「工具箱」內的各種有趣設計工具，以及如何將它們應用於現實。",
        },
        {
          key: "洪燕茹",
          img: "https://storage.googleapis.com/openhci2021-storage/home-page/speaker/speaker_4.png",
          name: "洪燕茹",
          work: "5% Design Action 社會設計平台 共同發起人",
          title: "創新社會設計概念全面展開",
          description:
            "一個好的社會設計，不只要能夠洞察使用者需求及痛點，同理之後的「解方」如何夠有創意夠亮眼、夠具體可行才是關鍵。我們常發現在創新設計提案中存在缺乏洞見、缺乏價值訴說及缺乏可行性等問題，這次的短講工作坊，會藉由講師過往在帶領國際型、高度複雜的社會設計共創與落地經驗，來幫助各位看見何謂一個Great idea？有哪些挑選點子時的參考標準？以及想出idea之後如何全面展開概念細節以至於大家能想像亮點使用情境？本堂分享，將會有許多機會和小組討論時間來打磨你們初步的點子解方，建議團隊在進入本堂課前，先完成至少一輪的Brainstorming帶著滿滿的點子過來吧！",
        },
        {
          key: "宋恆",
          img: "https://storage.googleapis.com/openhci2021-storage/home-page/speaker/speaker_5.png",
          name: "宋恆",
          work: "如牧創新有限公司 總監",
          title: "互動科技創意應用",
          description:
            "主題分享中從日常洞察到探討需求解決，互動科技在創意上是如何奔放地超展開？從實際互動應用案例中，解析透過創造新的感知經驗，以實踐超乎常態的狂想攻略",
        },
      ],
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 968px;
$sm: 576px;

.keynote {
  display: flex;
  flex-direction: row;
  padding-right: 4%;

  @media (max-width: $md) {
    padding-left: 4%;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 60px;
  }

  &__sidebar {
    margin-right: 100px;
    width: 40%;

    @media (max-width: $md) {
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
    width: 100%;
  }
}
</style>
