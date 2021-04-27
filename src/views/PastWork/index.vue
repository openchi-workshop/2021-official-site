<template>
  <past-work-container class="pastwork">
    <template v-slot="{ displayIndex }">
      <Header navbarVariant="light-transparent" />
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
        <a
          class="pastwork__content--link"
          :href="articles[displayIndex].link"
          target="_blank"
          >MORE</a
        >
      </div>
      <div class="pastwork__indicators">
        <div
          v-for="i in articles.length"
          :key="i"
          :class="{ 'pastwork__indicators--active': i - 1 == displayIndex }"
          class="pastwork__indicators--dot"
        ></div>
      </div>
    </template>
  </past-work-container>
</template>

<script>
import Header from "@/components/layout/Header";
import PastWorkContainer from "./PastWorkContainer";
import pastworks from "./pastworks.json";

export default {
  components: { Header, PastWorkContainer },
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
};
</script>

<style lang="scss" scoped>
.pastwork {
  &__content {
    position: absolute;
    text-align: left;
    top: 30%;
    left: 10%;
    color: white;
    &--title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 16px;
    }

    &--subtitle {
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 12px;
    }

    &--text {
      font-size: 18px;
      max-width: 600px;
      margin-bottom: 24px;
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
  }
}
</style>