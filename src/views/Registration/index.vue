<template>
  <div id="registration">
    <Header />
    <go-to-top-button />
    <Info />
    <Application />
    <ApplyForm />
    <TraineeList />
    <app-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "./Info";
import Application from "./Application";
import ApplyForm from "./ApplyForm";
import TraineeList from "./TraineeList";

import Header from "@/components/layout/Header";
import GoToTopButton from "../../components/ui/GoToTopButton.vue";
import AppFooter from "@/components/layout/AppFooter";

export default {
  components: {
    Header,
    Info,
    Application,
    ApplyForm,
    TraineeList,
    AppFooter,
    GoToTopButton,
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
