<template>
  <div id="map">
    <b-row class="map_section">
      <b-col class="hci_info">
        <div class="hci_info_logo">
          <img src="@/assets/homePage/openHCI_light.png" 
          style="maxWidth:80px; "
          />
        </div>
        <div class="hci_info_topic">
          <img src="@/assets/homePage/mobius_light_1.png"  
          style="maxWidth:498px; "
          />
        </div>
        <div class="hci_info_word">
          <p>
            OPEN HCI：
            <a href="#">2021</a>｜
            <a href="http://www.openhci.com/" target="_blank">2019</a>｜
            <a href="http://www.openhci.com/2018/index.html" target="_blank">2018</a>｜
            <a href="http://www.openhci.com/2017/index.html" target="_blank">2017</a>｜
            <a href="http://www.openhci.com/2016/index.html" target="_blank">2016</a>｜
            <a href="http://www.openhci.com/2015/index.html" target="_blank">2015</a>｜
            <a href="http://www.openhci.com/2014/index.html" target="_blank">2014</a>｜
            <a href="http://www.openhci.com/2013/index.html" target="_blank">2013</a>｜
            <a href="http://www.openhci.com/2012/index.html" target="_blank">2012</a>｜
            <a href="http://www.openhci.com/2011/index.html" target="_blank">2011</a>｜
            <a href="http://www.openhci.com/2009/index.html" target="_blank">2009</a>｜
          </p>
          <p>FACEBOOK PAGE：<a href="https://www.facebook.com/openhci/" target="_blank">Open HCI 人機互動工作坊</a></p>
          <p>@COPYRIGHT 2021 OPEN HCI</p>
        </div>
      </b-col>
      <b-col>
        <div class="map_show">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.736482984978!2d121.53322036376257!3d25.043015433968147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47ea748e8f3f53aa!2sNational%20Taipei%20University%20of%20Technology!5e0!3m2!1sen!2stw!4v1619019800862!5m2!1sen!2stw"
            width="602px"
            height="422px"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "contact",
  components: {},
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

#map {
  background: #1c1c24;
  margin-top: 329px;
  overflow:hidden;
  width:100%;

}

.hci_info {
  margin-left:117px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
 
  .hci_info_logo{
    width: 100%;
    height: auto;
    margin-left: 209px;
  }

  &_topic {
    height: auto;
    width: 100%;
    margin-top:47px;
  }
  &_word {
    color: white;
    width: 496px;
    height: 122px;
    margin-top: 53px;
    font-size: 18px;
    line-height: 22px;
    align-items: left;
    font-family: "Arvo", serif;
    text-align:left;
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

@media screen and (max-width:576px){

  .hci_info_topic{
     width: 100%;
     height: auto;
  }
  iframe{
    display:flex;
    width:407.99px;
    height:286px;
    margin: 0 auto;
  }
}

@media screen and (max-width:768px){

  .hci_info_logo{
    margin-top:408px;
    margin-left:247px;
  }
  .hci_info_word{
    display:block;
    align-text:left;
  }
  iframe{
    margin-left:81px;
    margin-top:80px;
  }
}

</style>