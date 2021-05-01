<template>
  <div id="registration">
    <Header />
    <go-to-top-button />
    <b-row class="banner_registration">
      <b-col>
        <picture>
          <source
            media="(min-width: 992px)"
            srcset="
              https://storage.googleapis.com/openhci2021-storage/registration/banner.png
            "
          />
          <v-lazy-image
            src="https://storage.googleapis.com/openhci2021-storage/registration/banner_320.png"
            src-placeholder="https://storage.googleapis.com/openhci2021-storage/registration/registration_banner_small.png"
            class="about__banner--image"
            alt="Chris standing up holding his daughter Elva"
          />
        </picture>

        <StyledBox class="banner_title"> ＜REGISTRATION＞ </StyledBox>
      </b-col>
    </b-row>
    <Info />
    <Application />
    <ApplyForm />
    <TraineeList />
    <CallToAction />
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
import CallToAction from "./CallToAction";

import Header from "@/components/layout/Header";
import GoToTopButton from "../../components/ui/GoToTopButton.vue";
import StyledBox from "@/components/ui/StyledBox";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

import VLazyImage from "v-lazy-image";

export default {
  name: "Registration",
  components: {
    Header,
    VLazyImage,
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

.banner_registration img {
  background: #0000ff;
  width: 100%;
  margin-bottom: 46px;
}

.banner_title {
  position: absolute;
  font-size: 48px;
  color: white;
  left: 10%;
  bottom: 20%;
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
