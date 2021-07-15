<template>
  <past-work-container>
    <template v-slot="{ displayIndex }">
      <div class="pastwork">
        <app-header navbarVariant="light-transparent" />
        <div class="pastwork__content">
          <div class="pastwork__content--title">
            {{ articles[displayIndex].title }}
          </div>
          <div class="pastwork__content--subtitle">
            {{ articles[displayIndex].subtitle }}
          </div>
          <div class="pastwork__content--text">
            {{ articles[displayIndex].content }}
          </div>
          <div>
            <a
              class="pastwork__content--link"
              :href="articles[displayIndex].link"
              target="_blank"
              >MORE</a
            >
          </div>
        </div>
        <div class="pastwork__indicators">
          <div
            v-for="i in articles.length"
            :key="i"
            :class="{ 'pastwork__indicators--active': i - 1 == displayIndex }"
            class="pastwork__indicators--dot"
          ></div>
        </div>
      </div>
    </template>
  </past-work-container>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import PastWorkContainer from "./PastWorkContainer";
import pastworks from "./pastworks.json";

export default {
  title: "OpenHCI 2021 | Previous Works",
  components: { AppHeader, PastWorkContainer },
  computed: {
    displayArticle() {
      return this.articles[this.displayIndex];
    },
  },
  data() {
    return {
      articles: pastworks,
    };
  },
  metaInfo() {
    return {
      title: "OpenHCI 2021 | Previous Work",
    };
  },
};
</script>

<style lang="scss" scoped>
.pastwork {
  position: absolute;
  width: 100vw;
  height: 90%;

  &__content {
    position: absolute;
    left: 10%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    height: 100%;

    @media screen and (max-width: 768px) {
      width: 100%;
      left: 0;
      margin-left: 0;
      padding: 0 10%;
    }

    @media screen and (max-width: 576px) {
      height: 100%;
      text-align: center;
      top: 10%;
    }

    &--title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;

      @media (max-width: 576px) {
        font-size: 20px;
        margin-bottom: 12px;
      }
    }

    &--subtitle {
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 20px;

      @media (max-width: 576px) {
        font-size: 32px;
        line-height: 20px;
        margin-bottom: 12px;
      }
    }

    &--text {
      font-size: 16px;
      max-width: 600px;
      margin-bottom: 64px;

      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 576px) {
        margin-bottom: 20px;
      }
    }

    &--link {
      border: white 2px solid;
      color: white;
      display: inline-block;
      text-decoration: none;
      padding: 12px 54px;
      font-size: 14px;
      font-weight: 700;
    }
  }

  &__indicators {
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);

    &--dot {
      border: #fff 1px solid;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 12px;
    }

    &--active {
      background-color: #fff;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>