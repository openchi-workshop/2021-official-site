<template>
  <div id="contact">
    <b-row col="4" class="contact_all">
      <b-col>
        <div class="contact__section">
          <Title text="OPENHCI'21" class="contact__section__title" />
          <div class="more_info">
            <p><a href="#">About</a></p>
            <p><a href="#">Intro &amp; Goals</a></p>
            <p><a href="#">Program</a></p>
            <p><a href="#">Keynote Speaker</a></p>
            <p><a href="#">Blog</a></p>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="contact__section">
          <Title text="REGISTRATION" class="contact__section__title" />
          <div class="more_info">
            <p><a href="#">Registration</a></p>
            <p><a href="#">Admission List</a></p>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="contact__section">
          <Title text="GROUP" class="contact__section__title" />
          <div class="more_info">
            <p><a href="#">Crew</a></p>
            <p><a href="#">Organizers</a></p>
            <p><a href="#">Co-organizers</a></p>
            <p><a href="#">Sponsors</a></p>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="contact__section">
          <Title text="WORKS" class="contact__section__title" />
          <div class="more_info">
            <p><a href="#">2021</a></p>
            <p><a href="#">2019</a></p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";

export default {
  name: "contact",
  components: {
    Title,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#contact {
  background: #1c1c24;
  margin-left: 117px;
}
.contact__section {
  width: 204px;
  &__title {
    margin: 123px 100px 0 0;
    height: 25px;
  }
}
.more_info {
  color: white;
  margin-top: 32px;
  a:link {
    color: white;
    text-decoration: none;
  }
  a:visited {
    color: white;
  }
}
</style>
