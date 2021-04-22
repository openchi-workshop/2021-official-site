<template>
  <div id="sponsers">
    <Title text="#  SPONSORS" class="sponsers__title" />
    <div class="sponsers__section">
      <StyledSubtitle text="SUPREME-SPONSORS" class="sponsers__subtitle" />
      <b-row cols="4" class="sponsers__list">
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
      </b-row>
    </div>
    <div class="sponsers__section">
      <StyledSubtitle text="GOLD-SPONSORS" class="sponsers__subtitle" />
      <b-row cols="4" class="sponsers__list">
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
      </b-row>
    </div>
    <div class="sponsers__section">
      <StyledSubtitle text="SPONSORS" class="sponsers__subtitle" />
      <b-row cols="4" class="sponsers__list">
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
        <b-col><div class="sponsers__list__item"></div></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";
import StyledSubtitle from "@/components/ui/StyledSubtitle";

export default {
  name: "Sponsers",
  components: {
    Title,
    StyledSubtitle,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#sponsers {
  background: #1c1c24;
}
.sponsers {
  &__title {
    padding: 384px 0 0 120px;
  }
  &__section {
    margin: 0 123px;
  }
  &__subtitle {
    margin: 97px 0 45px 5px;
  }
  &__list {
    display: flex;
    &__item {
      height: 160px;
      background: #9e9e9e;
      margin: 10px 0;
    }
  }
}
</style>
