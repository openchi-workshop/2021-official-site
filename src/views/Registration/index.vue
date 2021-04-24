<template>
  <div id="registration">
    <div class="banner_registration">
      <div class="banner_title">
          Registration
      </div>
    </div>
    <Info />
    <Application />
    <ApplyForm />
    <TraineeList />
    <br><br>
  </div>
</template>

<script>
// @ is an alias to /src
 import Info from "./Info";
 import Application from "./Application";
 import ApplyForm from "./ApplyForm";
 import TraineeList from "./TraineeList";

export default {
  name: "Registration",
  components: {
      Info,
      Application,
      ApplyForm,
      TraineeList,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#registration {
  background: #1c1c24;
}
.banner_registration {
  background: #0000ff;
  height: 740px;
  padding-top: 79px;
  width: 100%;
}
.banner_title {
  font-size: 64px;
  color: white;
  margin-top: 265px;
  margin-left: 115px;
}
</style>
