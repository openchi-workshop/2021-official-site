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
.cardList {
  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 20vw;
    margin-right: 8vw;
    margin-bottom: 80px;
  }
}

.customOffset-right {
  padding-left: 28vw;
}

.customOffset-left {
  padding-right: 28vw;
}
</style>
