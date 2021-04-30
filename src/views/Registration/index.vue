<template>
  <div id="registration">
    <div class="banner_registration">
      <img src="@/assets/registration_banner.png" alt="banner">
      <StyledBox class="banner_title">
        ＜ REGISTRATION ＞ 
      </StyledBox>
    </div>
    <Info />
    <Application />
    <ApplyForm />
    <TraineeList />
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

export default {
  name: "Registration",
  components: {
    Info,
    Application,
    ApplyForm,
    TraineeList,
    StyledBox,
    Map,
    Contact,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#registration {
  background: #1c1c24;
}
.banner_registration img {
  background: #0000ff;
  height: 821px;
  width: 100%;
}
.banner_title {
  position: absolute; 
  font-size: 48px;
  color: white;
  left: 129px;
  top: 745px;
  font-family: Arvo;
}
</style>
