<template>
  <div id="blog">
    <div class="blog__img--rwd">
      <img alt="mobius" src="@/assets/openhci_taichi.png" />
    </div>
    <Title text="# OPENHCI X TAICHI" class="blog__title" />
    <b-row class="mobius">
      <b-col cols md="5" order-md="last" class="blog__img">
        <img alt="mobius" src="@/assets/openhci_taichi.png" />
      </b-col>
      <b-col cols md="7" order-md="1" class="blog__body">
        <StyledSubtitle
          text="TAICHI'21【共存溫度 CO-EXIST˚C】"
          class="blog__subtitle"
        />
        <div class="blog__content">
          延燒了一年多的
          COVID-19，人與人之間的互動模式產生巨大的改變，面對面交流變得不再容易，在未來的後疫情時代，「遠距互動」已成為熱門關鍵字。在藉由科技聯繫彼此的當下，我們該如何透過螢幕來真實的感受對方溫度呢？
          <br />
          <br />
          本次會議主題為「共存溫度
          CO-EXIST˚C」，意旨人機共存的溫度，在後疫情時代下，我們重構互動模式、創造與科技並存的適切溫度，將會是
          HCI 發展的重要里程碑。本次大會歡迎國內外科技 ( Technology )、設計 (
          Design )、人文與社會科學 ( People )
          等相關領域研究者分享研究成果、擴大交流與研討，以發揮人機互動多元、持續且深遠的影響力與願景。
        </div>
        <StyledSubtitle text="OpenHCI 與 TAICHI 合作" class="blog__subtitle" />
        <div class="blog__content">
          你想要讓自己的作品在台灣人機互動年度盛會 TAICHI 被看見嗎？ TAICHI
          是台灣人機互動研究領域中最具代表性的研討會，由台灣人機互動學會所舉辦的年度會議，
          為國內跨領域人機互動學者與社群，提供一個意見交換以及成果交流的年度盛會。
          <br />
          <br />
          OpenHCI 工作坊結束之後，OpenHCI 將推薦一些組別之成果作品至 TAICHI
          年會展示，
          除了學員能夠於會議中發表自己的作品、增加曝光度外，也有機會跟眾多國內外
          HCI、UXD 專家交流，
          不管是向學界、業界前輩取經，或是互相分享經驗，相信對學員的未來求學或工作都有相當大的幫助。
          <br />
          <br />
          除此之外，參展隊伍所有成員都可以免註冊費參加 TAICHI
          會議期間各場次活動喔！這麼難得的機會，只有 OpenHCI 學員才有呢！
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import StyledSubtitle from "@/components/ui/StyledSubtitle";

export default {
  name: "Blog",
  components: {
    Title,
    StyledSubtitle,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
#blog {
  background: #1c1c24;
  position: relative;
}
.blog {
  &__title {
    padding: 78px 0 38px 120px;
    @media (max-width: $md) {
      padding-left: 64px;
    }
    @media (max-width: $sm) {
      padding-left: 50px;
    }
  }
  &__subtitle {
    margin: 32px 0;
  }
  &__content {
    color: #fff;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: justify;
  }
  &__body {
    padding-left: 124px;
    padding-right: 62px;
    @media (max-width: $md) {
      padding-left: 66px;
      padding-right: 110px;
    }
    @media (max-width: $sm) {
      padding: 48px;
    }
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: $md) {
      display: none;
    }
  }
}
.blog__img--rwd {
  display: none;
  text-align: right;
  margin: -50px 0;
  @media (max-width: $md) {
    display: block;
  }
  @media (max-width: $sm) {
    margin: -50px 0 -50px 173px;
  }
  img {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}
</style>
