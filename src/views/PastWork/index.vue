<template>
  <past-work-container>
    <past-work-content v-bind="displayArticle" />
  </past-work-container>
</template>

<script>
import PastWorkContainer from "./PastWorkContainer";
import PastWorkContent from "./PastWorkContent";

export default {
  components: { PastWorkContainer, PastWorkContent },
  computed: {
    displayArticle() {
      return this.articles[this.displayIndex];
    },
  },
  data() {
    return {
      displayIndex: 0,
      articles: [
        {
          title: "OpenHCI 最佳整體獎項",
          subtitle: "MOMENT",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          link: "https://www.google.com",
        },
        {
          title: "OpenHCI 最佳整體獎項",
          subtitle: "MOMENT",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          link: "https://www.safari.com",
        },
      ],
    };
  },
};
</script>
