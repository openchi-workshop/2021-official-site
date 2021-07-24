<template>
  <div id="registration">
    <app-header />

    <app-banner
      largeImage="https://storage.googleapis.com/openhci2021-storage/registration/registration_banner_1440.png"
      smallImage="https://storage.googleapis.com/openhci2021-storage/registration/registration_banner_320.png"
      loadingImage="https://storage.googleapis.com/openhci2021-storage/registration/registration_banner_small.png"
      placeholder="OpenHCI Registration Page Banner"
    />
    <info />
    <application />
    <apply-form />
    <trainee-list />

    <app-go-to-top-button />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import AppBanner from "@/components/ui/AppBanner";
import AppGoToTopButton from "../../components/ui/AppGoToTopButton.vue";

import Info from "./Info.vue";
import Application from "./Application.vue";
import ApplyForm from "./ApplyForm.vue";
import TraineeList from "./TraineeList.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppBanner,
    AppGoToTopButton,
    Info,
    Application,
    ApplyForm,
    TraineeList,
  },
  metaInfo() {
    return {
      title: "OpenHCI 2021 | Registration",
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
#registration {
  background: #1c1c24;
  position: relative;
  overflow-x: hidden;
}
</style>
