<template>
  <div class="hci_info">
    <div class="hci_info_col">
      <div class="hci_info_logo">
        <img
          src="https://storage.googleapis.com/openhci2021-storage/home-page/openHCI_light.png"
        />
      </div>
      <div class="hci_info_logo">
        <img
          src="https://storage.googleapis.com/openhci2021-storage/home-page/mobius_logo.png"
          class="hci_info_topic--image"
        />
      </div>
      <div class="hci_info_topic">
        <div class="hci_info_word">
          <span>OPEN HCI：</span>
          <template v-for="(web, i) in websites">
            <a :key="web.link" :href="web.link" target="_blank">
              {{ web.year }}
              <span v-if="i !== websites.length - 1">|</span>
            </a>
          </template>
        </div>
        <div class="hci_info_word">
          <span>FACEBOOK PAGE：</span>
          <a href="https://www.facebook.com/openhci/" target="_blank"
            >Open HCI 人機互動工作坊</a
          >
        </div>
        <div class="hci_info_word">@COPYRIGHT 2021 OPEN HCI</div>
      </div>
    </div>
    <div class="hci_info_col">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.736482984978!2d121.53322036376257!3d25.043015433968147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47ea748e8f3f53aa!2sNational%20Taipei%20University%20of%20Technology!5e0!3m2!1sen!2stw!4v1619019800862!5m2!1sen!2stw"
        class="hci_info_col--map"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      websites: [
        { year: 2019, link: "https://www.2019.openhci.com/" },
        { year: 2018, link: "https://www.2018.openhci.com/" },
        { year: 2017, link: "https://www.2017.openhci.com/" },
        { year: 2016, link: "https://www.2016.openhci.com/" },
        { year: 2015, link: "https://www.2015.openhci.com/" },
        { year: 2014, link: "https://www.2014.openhci.com/" },
        { year: 2013, link: "https://www.2013.openhci.com/" },
        { year: 2012, link: "https://www.2012.openhci.com/" },
        { year: 2011, link: "https://www.2011.openhci.com/" },
        { year: 2009, link: "https://www.2009.openhci.com/" },
      ],
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.hci_info {
  display: flex;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &_col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 80px;
    }

    &--map {
      min-height: 400px;
      width: 70%;
      height: 90%;
    }
  }

  &_logo {
    width: 70%;
    margin-bottom: 44px;
    text-align: center;
  }

  &_topic {
    width: 70%;
    font-size: 18px;

    &--image {
      width: 100%;
      margin-bottom: 48px;
    }
  }

  &_word {
    align-items: start;
    color: #fff;
    margin-top: 12px;

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
</style>
