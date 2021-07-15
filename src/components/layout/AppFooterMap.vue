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
          src="https://storage.googleapis.com/openhci2021-storage/home-page/mobius_light.png"
          class="hci_info_topic--image"
        />
      </div>
      <div class="hci_info_topic">
        <div class="hci_info_word">
          OPEN HCI：
          <template v-for="(web, i) in websites">
            <a :key="web.link" :href="web.link" target="_blank">
              {{ web.year }}
              <span v-if="i != 1 || i != websites.length + 1">|</span>
            </a>
          </template>
        </div>
        <div class="hci_info_word">
          FACEBOOK PAGE：
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
        { year: 2019, link: "http://www.openhci.com/" },
        { year: 2018, link: "http://www.openhci.com/2018/index.html" },
        { year: 2017, link: "http://www.openhci.com/2017/index.html" },
        { year: 2016, link: "http://www.openhci.com/2016/index.html" },
        { year: 2015, link: "http://www.openhci.com/2015/index.html" },
        { year: 2014, link: "http://www.openhci.com/2014/index.html" },
        { year: 2013, link: "http://www.openhci.com/2013/index.html" },
        { year: 2012, link: "http://www.openhci.com/2012/index.html" },
        { year: 2011, link: "http://www.openhci.com/2011/index.html" },
        { year: 2009, link: "http://www.openhci.com/2009/index.html" },
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