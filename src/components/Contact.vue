<template>
  <div id="contact">
    <b-row cols-lg="4" cols-md="2" cols-sm="2" align-h="center" class="contact_all">
      <b-col>
        <div class="contact__section">
          <h1 class="contact__section__title"> OPENHCI'21 </h1>
          <div class="contact__section_more_info">
              <p><a href="#about">About</a></p>
              <p><a href="#intro_goals">Intro &amp; Goals</a></p>
              <p><a href="#program">Program</a></p>
              <p><a href="#keynote">Keynote Speaker</a></p>
              <p><a href="#taichi">TAICHI</a></p>
              <p><a href="#organizer">Organizer</a></p>
              <p><a href="#sponsers">Sponsor</a></p>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="contact__section">
          <h1 class="contact__section__title"> REGISTRATION </h1>
          <div class="contact__section_more_info">
            <p><a href="#">Workshop Information</a></p>
            <p><a href="#">Application</a></p>
            <p><a href="#">How to Apply</a></p>
            <p><a href="#">Admission List &amp; Payment </a></p>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="contact__section">
          <h1 class="contact__section__title"> GROUP </h1>
          <div class="contact__section_more_info">
            <p id="disabled"><a>Crew</a></p>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="contact__section">
          <h1 class="contact__section__title"> WORKS </h1>
          <div class="contact__section_more_info">
            <p><a id="disabled">2021</a></p>
            <p><a href="#">2019</a></p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src



export default {

  name: "contact",
  components: {
  },
};

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#contact {
  background: #1c1c24;
  margin-left: 117px;
  width:85%;
}
.contact__section {
  overfill:hidden;
  width: 204px;
  margin-top: 104px;
  &__title {
    height: 25px;
    color: white;
    font-size:18px;
    text-align:left;
    font-family: "Arvo", serif;
  }
  &_more_info {
    color: white;
    font-size:18px;
    font-family:"Arvo", serif;
    text-align:left;
    margin-top: 32px;
    line-height: 22px;
    a:link {
      color: white;
      text-decoration: none;
    }
    a:visited {
      color: white;
    }
    a:hover{
      text-decoration: underline;
    }
    a:active{
      color:rgba(0, 0, 255, 1);
      text-decoration: none;
    }

  }
}
#disabled{
  color:#BDBDBD;
}

</style>
