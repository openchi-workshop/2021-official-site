<template>
  <div class="staff" id="crew">
    <app-header />
    <app-banner
      largeImage="https://storage.googleapis.com/openhci2021-storage/staff/banner-1440.png"
      smallImage="https://storage.googleapis.com/openhci2021-storage/staff/banner-320.png"
      placeholder="OpenHCI Staff Page"
    />
    <div
      v-for="{ type, title, members } in staffGroup"
      class="staff__section"
      :key="type"
    >
      <app-title class="staff__section--title"># {{ title }} </app-title>
      <staff-card-list
        :items="members"
        :offsetRight="layout.offsetRight.has(type)"
        :offsetLeft="layout.offsetLeft.has(type)"
      />
      <lazy-component
        v-if="layout.imageBelow.has(type)"
        class="staff__section--image"
      >
        <img
          :src="
            `https://storage.googleapis.com/openhci2021-storage/staff/${type}.png`
          "
          :alt="type"
        />
      </lazy-component>
    </div>
    <app-go-to-top-button />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import AppBanner from "@/components/ui/AppBanner";
import AppTitle from "@/components/ui/AppTitle";
import AppGoToTopButton from "@/components/ui/AppGoToTopButton";

import staffGroup from "./staff.json";
import StaffCardList from "@/components/staff/StaffCardList";

const LAYOUT = {
  offsetRight: new Set([
    "curator",
    "publicity",
    "visualDesign",
    "teachingAssistantTech",
  ]),
  offsetLeft: new Set(["speechHost", "webServie", "teachingAssistantDesign"]),
  imageBelow: new Set(["humanResource", "speechHost", "webService"]),
};

export default {
  components: {
    AppHeader,
    AppFooter,
    AppBanner,
    AppTitle,
    AppGoToTopButton,
    StaffCardList,
  },
  data() {
    return {
      staffGroup: staffGroup,
      layout: LAYOUT,
    };
  },
};
</script>

<style lang="scss">
$sm: 576px;

.staff {
  &__section {
    padding: 0 8vw;

    &--title {
      margin-bottom: 8%;
      font-size: 36px;

      @media (max-width: $sm) {
        margin-bottom: 40px;
      }
    }

    &--image {
      text-align: right;
      margin-right: -8vw;
      margin-bottom: 96px;

      @media (max-width: $sm) {
        margin-bottom: 60px;
      }

      img {
        width: 50%;

        @media (max-width: $sm) {
          width: 100%;
        }
      }
    }
  }
}
</style>
