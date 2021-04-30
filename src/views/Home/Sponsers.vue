<template>
  <div id="sponsers">
    <Title text="#  ORGANIZERS" class="sponsers__title" id="organizer" />
    <div class="sponsers__section">
      <img
        alt="台科設計"
        src="@/assets/homePage/organizer_1.png"
        style="maxWidth:140px; "
      />
      <img
        alt="北科互動"
        src="@/assets/homePage/organizer_2.png"
        style="maxWidth:463px;"
      />
      <img
        alt="政大數位內容"
        src="@/assets/homePage/organizer_3.png"
        style="maxWidth:378px;  "
      />
    </div>
    <Title text="#  CO-ORGANIZERS" class="sponsers__title" />
    <div class="sponsers__section">
      <img
        alt="iot"
        src="@/assets/homePage/co-organizer_1.png"
        style="maxWidth:571px"
      />
    </div>
    <Title text="#  SPONSERS" class="sponsers__title" />
    <div class="sponsers__section">
      <img
        alt="progress-bar"
        src="@/assets/homePage/sponser_1.png"
        style="maxWidth:557px"
      />
      <img
        alt="遊石設計"
        src="@/assets/homePage/sponser_2.png"
        style="maxWidth:570px"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";

export default {
  name: "Sponsers",
  components: {
    Title,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
#sponsers {
  background: #1c1c24;
}
.sponsers {
  &__title {
    padding: 200px 0 60px 120px;
    @media (max-width: $md) {
      padding-left: 64px;
    }
    @media (max-width: $sm) {
      padding-left: 50px;
    }
  }
  &__section {
    padding: 0 123px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      width: 100%;
      height: auto;
      margin: 24px 0;
      @media (max-width: $md) {
        width: 90%;
      }
      @media (max-width: $sm) {
        width: 120%;
      }
      &:nth-child(2) {
        @media (max-width: 1225px) {
          order: 3;
        }
      }
      .box :nth-child(3) {
        @media (max-width: 1225px) {
          order: 2;
        }
      }
    }
    @media (max-width: $md) {
      padding-left: 64px;
    }
    @media (max-width: $sm) {
      padding-left: 50px;
    }
  }
  &__subtitle {
    margin: 48px 0 0px 5px;
  }
}
</style>
