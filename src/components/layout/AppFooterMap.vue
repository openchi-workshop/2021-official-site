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
      <div class="hci_info_col--title">活動地點</div>
      <iframe
        src="https://maps.google.com/maps?q=%E6%9D%BE%E8%8F%B8%E5%89%B5%E4%BD%9C%E8%80%85%E5%B7%A5%E5%BB%A0&t=&z=15&ie=UTF8&iwloc=&output=embed"
        class="hci_info_col--map"
        loading="lazy"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
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
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &_col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 45%;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 80px;
    }

    &--title {
      font-family: "Arvo", sans-serif;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 32px;
    }

    &--map {
      min-height: 400px;
      width: 100%;
      height: 100%;
    }
  }

  &_logo {
    margin-bottom: 44px;
    text-align: center;
  }

  &_topic {
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
