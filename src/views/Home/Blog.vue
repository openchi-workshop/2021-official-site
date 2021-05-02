<template>
  <div id="blog" class="blog">
    <div class="blog__img blog__img--rotate">
      <lazy-component>
        <img
          alt="mobius"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/openhci_taichi_rotate.png"
          style="width: 100%"
        />
      </lazy-component>
    </div>
    <div class="blog__content">
      <Title
        text="# OPENHCI X TAICHI"
        id="taichi"
        class="blog__content--title"
      />
      <StyledSubtitle
        text="TAICHI'21【共存溫度 CO-EXIST˚C】"
        class="blog__content--subtitle"
      />
      <div class="blog__content--section">
        延燒了一年多的
        COVID-19，人與人之間的互動模式產生巨大的改變，面對面交流變得不再容易，在未來的後疫情時代，「遠距互動」已成為熱門關鍵字。在藉由科技聯繫彼此的當下，我們該如何透過螢幕來真實的感受對方溫度呢？
      </div>
      <div class="blog__content--section">
        本次會議主題為「共存溫度
        CO-EXIST˚C」，意旨人機共存的溫度，在後疫情時代下，我們重構互動模式、創造與科技並存的適切溫度，將會是
        HCI 發展的重要里程碑。本次大會歡迎國內外科技 ( Technology )、設計 (
        Design )、人文與社會科學 ( People )
        等相關領域研究者分享研究成果、擴大交流與研討，以發揮人機互動多元、持續且深遠的影響力與願景。
      </div>

      <StyledSubtitle
        text="OpenHCI 與 TAICHI 合作"
        class="blog__content--subtitle"
      />
      <div class="blog__content--section">
        你想要讓自己的作品在台灣人機互動年度盛會 TAICHI 被看見嗎？ TAICHI
        是台灣人機互動研究領域中最具代表性的研討會，由台灣人機互動學會所舉辦的年度會議，
        為國內跨領域人機互動學者與社群，提供一個意見交換以及成果交流的年度盛會。
      </div>
      <div class="blog__content--section">
        OpenHCI 工作坊結束之後，OpenHCI 將推薦一些組別之成果作品至 TAICHI
        年會展示，
        除了學員能夠於會議中發表自己的作品、增加曝光度外，也有機會跟眾多國內外
        HCI、UXD 專家交流，
        不管是向學界、業界前輩取經，或是互相分享經驗，相信對學員的未來求學或工作都有相當大的幫助。
      </div>
      <div class="blog__content--section">
        除此之外，參展隊伍所有成員都可以免註冊費參加 TAICHI
        會議期間各場次活動喔！這麼難得的機會，只有 OpenHCI 學員才有呢！
      </div>
    </div>
    <div class="blog__img blog__img--normal">
      <lazy-component>
        <img
          alt="mobius"
          src="https://storage.googleapis.com/openhci2021-storage/home-page/openhci_taichi.png"
          style="width: 100%"
        />
      </lazy-component>
    </div>
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
.blog {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 5%;
  margin-bottom: 150px;

  @media (max-width: $md) {
    flex-direction: column;
    padding: 0;
    margin-bottom: 0;
  }

  &__content {
    width: 50%;

    @media (max-width: $md) {
      width: 80%;
      margin-bottom: 96px;
    }

    &--title {
      margin-bottom: 70px;
    }

    &--subtitle {
      margin-bottom: 32px;
    }

    &--section {
      color: #fff;
      margin-bottom: 30px;
      text-align: justify;
    }
  }

  &__img {
    width: 30%;

    @media (max-width: $md) {
      align-self: flex-end;
      width: 80%;
      margin-bottom: 130px;
    }

    &--normal {
      @media (max-width: $md) {
        display: none;
      }
    }

    &--rotate {
      display: none;

      @media (max-width: $md) {
        display: block;
      }
    }
  }
}
</style>
