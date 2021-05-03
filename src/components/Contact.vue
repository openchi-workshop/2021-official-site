<template>
  <div class="contact">
    <div class="contact__section">
      <h1 class="contact__section__title">OPENHCI'21</h1>
      <div class="contact__section_more_info">
        <p><router-link to="/#about">About</router-link></p>
        <p><router-link to="/#intro_goals">Intro &amp; Goals</router-link></p>
        <p><router-link to="/#program">Program</router-link></p>
        <p><router-link to="/#keynote">Keynote Speaker</router-link></p>
        <p><router-link to="/#taichi">TAICHI</router-link></p>
        <p><router-link to="/#organizer">Organizer</router-link></p>
        <p><router-link to="/#sponsers">Sponsor</router-link></p>
      </div>
    </div>
    <div class="contact__section">
      <h1 class="contact__section__title">REGISTRATION</h1>
      <div class="contact__section_more_info">
        <p>
          <router-link to="/registration#info"
            >Workshop Information
          </router-link>
        </p>
        <p>
          <router-link to="/registration/#application"
            >Application
          </router-link>
        </p>
        <p>
          <router-link to="/registration#apply_form">How to Apply</router-link>
        </p>
        <p>
          <router-link to="/registration#trainee_list"
            >Admission List &amp; Payment
          </router-link>
        </p>
      </div>
    </div>
    <div class="contact__section">
      <h1 class="contact__section__title">GROUP</h1>
      <div class="contact__section_more_info">
        <p id="disabled"><a>Crew (coming soon)</a></p>
      </div>
    </div>
    <div class="contact__section">
      <h1 class="contact__section__title">WORKS</h1>
      <div class="contact__section_more_info">
        <p><a id="disabled">2021</a></p>
        <p><router-link to="/pastwork">2019</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.contact {
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  &__section {
    width: 25%;
    color: white;

    @media (max-width: 768px) {
      padding: 0 10%;
      width: 50%;
      margin-bottom: 64px;
    }

    @media (max-width: 576px) {
      width: 100%;
    }

    &__title {
      font-family: "Arvo", serif;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 24px;
    }

    &_more_info {
      font-size: 18px;
      font-family: "Arvo", serif;
      line-height: 22px;
      a:link {
        color: white;
        text-decoration: none;
      }
      a:visited {
        color: white;
      }
      a:hover {
        text-decoration: underline;
      }
      a:active {
        color: rgba(0, 0, 255, 1);
        text-decoration: none;
      }
    }
  }
}
#disabled {
  color: #bdbdbd;
}
</style>
