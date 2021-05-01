<template>
  <div class="contact">
    <div class="contact__section">
      <h1 class="contact__section__title">OPENHCI'21</h1>
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
    <div class="contact__section">
      <h1 class="contact__section__title">REGISTRATION</h1>
      <div class="contact__section_more_info">
        <p><a href="#">Workshop Information</a></p>
        <p><a href="#">Application</a></p>
        <p><a href="#">How to Apply</a></p>
        <p><a href="#">Admission List &amp; Payment </a></p>
      </div>
    </div>
    <div class="contact__section">
      <h1 class="contact__section__title">GROUP</h1>
      <div class="contact__section_more_info">
        <p id="disabled"><a>Crew</a></p>
      </div>
    </div>
    <div class="contact__section">
      <h1 class="contact__section__title">WORKS</h1>
      <div class="contact__section_more_info">
        <p><a id="disabled">2021</a></p>
        <p><a href="#">2019</a></p>
      </div>
    </div>
  </div>
</template>


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
