<template>
  <div id="registration">
    <Header />
    <go-to-top-button />
    <div class="banner_registration">
      <div v-lazy-container="{ source: 'img' }">
        <div class="banner_registration--image-small">
          <img
            data-src="https://storage.googleapis.com/openhci2021-storage/registration/banner_320w.png"
            style="width: 100%"
          />
        </div>
        <div class="banner_registration--image-large">
          <img
            data-src="https://storage.googleapis.com/openhci2021-storage/registration/banner_1440w.png"
            data-loading="https://storage.googleapis.com/openhci2021-storage/registration/registration_banner_small.png"
            alt="Chris standing up holding his daughter Elva"
            style="width: 100%"
          />
        </div>

        <StyledBox class="banner_title"> ＜REGISTRATION＞ </StyledBox>
      </div>
    </div>
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
import StyledBox from "@/components/ui/StyledBox";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import CallToAction from "@/components/ui/CallToAction";

export default {
  name: "Registration",
  components: {
    Header,
    Info,
    Application,
    ApplyForm,
    TraineeList,
    StyledBox,
    CallToAction,
    Map,
    Contact,
    GoToTopButton,
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

.banner_registration {
  margin-bottom: 90px;

  &--image-small {
    width: 100%;
    display: none;

    @media (max-width: 576px) {
      display: block;
    }
  }

  &--image-large {
    width: 100%;

    @media (max-width: 576px) {
      display: none;
    }
  }
}

.banner_title {
  position: absolute;
  font-size: 48px;
  color: white;
  left: 10%;
  bottom: 10%;
  font-family: Arvo;

  @media (max-width: 992px) {
    display: none;
  }

  @media (max-width: $md) {
    top: 348px;
    left: 73px;
    font-size: 36px;
  }
  @media (max-width: $sm) {
    top: 249px;
    left: 57px;
    font-size: 36px;
  }
}
.hidden {
  display: none;
}
</style>
