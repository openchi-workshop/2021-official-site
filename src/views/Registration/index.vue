<template>
  <div id="registration">
    <Header />
    <go-to-top-button />
    <Info />
    <Application />
    <ApplyForm />
    <TraineeList />
    <call-to-action />
    <Map />
    <Contact />
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
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import CallToAction from "@/components/ui/CallToAction";

export default {
  components: {
    Header,
    Info,
    Application,
    ApplyForm,
    TraineeList,
    CallToAction,
    Map,
    Contact,
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
