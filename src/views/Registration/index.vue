<template>
  <div id="registration">
    <app-header />
    <go-to-top-button />
    <Info />
    <Application />
    <ApplyForm />
    <TraineeList />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import GoToTopButton from "../../components/ui/GoToTopButton.vue";

import Info from "./Info";
import Application from "./Application";
import ApplyForm from "./ApplyForm";
import TraineeList from "./TraineeList";

export default {
  components: {
    AppHeader,
    AppFooter,
    GoToTopButton,
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
