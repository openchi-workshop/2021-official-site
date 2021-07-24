<template>
  <div class="staff">
    <app-header />
    <div
      v-for="{ type, members } in staffGroup"
      class="staff__section"
      :key="type"
    >
      <app-title class="staff__section--title"
        ># {{ type.toUpperCase() }}
      </app-title>
      <div class="staff__section--cardList">
        <staff-card-list :items="members" />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppTitle from "@/components/ui/AppTitle";
import staffGroup from "./staff.json";
import StaffCardList from "@/components/staff/StaffCardList";

export default {
  components: {
    AppHeader,
    AppTitle,
    StaffCardList,
  },
  data() {
    return {
      staffGroup: staffGroup,
    };
  },
};
</script>

<style lang="scss">
.staff {
  &__section {
    padding: 0 8%;
    margin-bottom: 10%;

    &--title {
      margin-bottom: 4%;
    }

    &--cardList {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>