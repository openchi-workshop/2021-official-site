<template>
  <div class="staffCard">
    <lazy-component class="staffCard__image">
      <styled-box>
        <img :src="imageUrl" :alt="name" />
      </styled-box>
    </lazy-component>
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
$sm: 576px;
$md: 768px;

.staffCard {
  min-width: 160px;

  @media (max-width: $sm) {
    display: flex;
    flex-direction: row;
  }

  &__image {
    margin-bottom: 32px;

    @media (max-width: $sm) {
      margin-right: 20px;
      width: 40%;
    }

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

      @media (max-width: $sm) {
        margin-bottom: 8px;
        font-size: 18px;
      }
    }

    &--text {
      color: #bdbdbd;
      margin-bottom: 12px;

      @media (max-width: $sm) {
        margin-bottom: 4px;
      }
    }

    &--highlight {
      color: #00ff05;
    }
  }
}
</style>
