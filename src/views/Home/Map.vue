<template>
    <div id="map">
        <b-row col="2" class="map_section">
            <b-col class="hci_info">
                <div><img src="@/assets/OpenHCI_light.png" class="hci_info_logo"></div>
                <div><img src="@/assets/Mobius_light_1.png" class="hci_info_topic"></div>
                <div class="hci_info_word">
                    <p>OPEN HCI：
                        <a href="#">2021｜</a>
                        <a href="http://www.openhci.com/" target="_blank">2019｜</a>
                        <a href="http://www.openhci.com/2018/index.html" target="_blank">2018｜</a>
                        <a href="http://www.openhci.com/2017/index.html" target="_blank">2017｜</a>
                        <a href="http://www.openhci.com/2016/index.html" target="_blank">2016｜</a>
                        <a href="http://www.openhci.com/2015/index.html" target="_blank">2015｜</a>
                        <a href="http://www.openhci.com/2014/index.html" target="_blank">2014｜</a>
                        <a href="http://www.openhci.com/2013/index.html" target="_blank">2013｜</a>
                        <a href="http://www.openhci.com/2012/index.html" target="_blank">2012｜</a>
                        <a href="http://www.openhci.com/2011/index.html" target="_blank">2011｜</a>
                        <a href="http://www.openhci.com/2009/index.html" target="_blank">2009｜</a>
                    </p>
                    <p>FACEBOOK PAGE：Open HCI 人機互動工作坊</p>
                    <p>@COPYRIGHT 2021 OPEN HCI</p>
                </div>
            </b-col>
            <b-col>
                <div class="map_show">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.736482984978!2d121.53322036376257!3d25.043015433968147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47ea748e8f3f53aa!2sNational%20Taipei%20University%20of%20Technology!5e0!3m2!1sen!2stw!4v1619019800862!5m2!1sen!2stw" width="490" height="422" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </b-col>
        </b-row>

               
    </div>
</template>

<script>

export default {
  name: "contact",
  components: {
    
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#map{
    background:#1c1c24;
    margin-top: 189px;
}
.hci_info{
    margin-left:117px;
    &_logo{
        height: 78px;
        width: 80px;
        position:absolute;
        top: 6px;
        left: 230px;
    }

    &_topic{
        height: 119px;
        width: 498px;
        position:absolute;
        top:120px;
    }
    &_word{
        color: white;
        width: 496px;
        height: 139px;
        position: absolute;
        top: 297px;
        font-size: 18px;
        line-height: 22px;
        align-items: center;
        font-family:"Arvo",serif;
        vertical-align: center;
        a:link{color: white;text-decoration: none}
        a:visited{color: white;}
    }

}
.map_show{
    margin-right:123px;
}


</style>