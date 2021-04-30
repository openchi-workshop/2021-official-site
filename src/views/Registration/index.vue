<template>
  <div id="registration">
    <b-row class="banner_registration">
      <b-col>
      <img src="@/assets/registration/registration_banner.png" alt="banner">
      <StyledBox class="banner_title">
        ＜REGISTRATION＞ 
      </StyledBox>
      </b-col>
    </b-row>
    <Info />
    <Application />
    <ApplyForm />
    <TraineeList />
    <ApplicationBtn />
    <Map />
    <Contact />
    <br><br>
  </div>
</template>

<script>
// @ is an alias to /src
 import Info from "./Info";
 import Application from "./Application";
 import ApplyForm from "./ApplyForm";
 import TraineeList from "./TraineeList";
 import StyledBox from "@/components/ui/StyledBox";
 import Map from "@/views/Home/Map";
 import Contact from "@/views/Home/Contact";
 import ApplicationBtn from "./ApplicationBtn";

export default {
  name: "Registration",
  components: {
    Info,
    Application,
    ApplyForm,
    TraineeList,
    StyledBox,
    ApplicationBtn,
    Map,
    Contact,
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
  height: 821px;
  width: 100%;
  margin-bottom: 46px;
  @media (max-width: $md) {
    height: 438px;
    width: 768px;
  }
  @media (max-width: $sm) {
    width: 576px;
    height: 328px;
  }
}
.banner_title {
  position: absolute; 
  font-size: 48px;
  color: white;
  left: 129px;
  top: 677px;
  font-family: Arvo;  
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
</style>
