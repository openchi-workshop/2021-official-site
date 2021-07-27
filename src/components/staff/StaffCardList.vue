<template>
  <div
    class="cardList"
    :class="[
      { 'customOffset-right': offsetRight },
      { 'customOffset-left': offsetLeft },
    ]"
  >
    <staff-card-list-item
      v-for="{ id, ...item } in items"
      :key="id"
      v-bind="item"
      class="cardList__item"
    />
  </div>
</template>

<script>
import StaffCardListItem from "./StaffCardListItem.vue";

export default {
  props: {
    items: {
      type: Array,
    },
    offsetRight: {
      type: Boolean,
    },
    offsetLeft: {
      type: Boolean,
    },
  },
  components: {
    StaffCardListItem,
  },
};
</script>

<style lang="scss">
$md: 768px;
$sm: 576px;

.cardList {
  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 20vw;
    margin-right: 8vw;
    margin-bottom: 80px;

    @media (max-width: $md) {
      margin-right: 12vw;
    }

    @media (max-width: $sm) {
      margin-right: 0;
      width: 100vw;
    }
  }
}

.customOffset-right {
  padding-left: 28vw;

  @media (max-width: $md) {
    padding-left: 0;
  }
}

.customOffset-left {
  padding-right: 28vw;

  @media (max-width: $md) {
    padding-right: 0;
  }
}
</style>
