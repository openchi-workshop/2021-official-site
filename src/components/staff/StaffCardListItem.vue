<template>
  <div class="staffCard">
    <styled-box class="staffCard__image">
      <img :src="imageUrl" :alt="name" />
    </styled-box>
    <div class="staffCard__body">
      <h2 class="staffCard__body--title">&lt; {{ name }} &gt;</h2>
      <div class="staffCard__body--text">{{ school }}</div>
      <div class="staffCard__body--text">{{ department }}</div>
      <div v-if="advisor" class="staffCard__body--text">
        <span>指導教授</span>
        <span class="staffCard__body--highlight"> {{ advisor }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import StyledBox from "../ui/StyledBox.vue";
export default {
  components: {
    StyledBox,
  },
  props: {
    imageUrl: {
      type: String,
    },
    name: {
      type: String,
    },
    school: {
      type: String,
    },
    department: {
      type: String,
    },
    advisor: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.staffCard {
    &__image {
        margin-bottom: 40px;

        img {
            width: 100%;
        }
    }

    &__body {
        display: flex;
        flex-direction: column;
        font-family: "Noto Sans TC";

        &--title {
            font-size: 24px;
            color: #ffffff;
            margin-bottom: 24px;
        }

        &--text {
            color: #BDBDBD;
            margin-bottom: 12px;
        }

        &--highlight {
            color: #00FF05;
        }
    }
}
</style>