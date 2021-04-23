<template>
    <div id="map">
        <b-row col="2" class="map_section">
            <div><img src="assets/OpenHCI_light_1%201.png" id="logo"></div>
            <div><img src="assets/Mobius_light_3%201.png" id="topic"></div>
            <div id="info">
                <p>OPEN HCI：2021｜2019｜2018｜2017｜2016｜2015｜2014｜2013｜2012｜2011｜2010｜2009</p>
                <p>FACEBOOK PAGE：Open HCI 人機互動工作坊</p>
                <p>@COPYRIGHT 2021 OPEN HCI</p>
            </div>
            </div>
        </b-row>
        <b-row col="2" class="map_section"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.736482984978!2d121.53322036376257!3d25.043015433968147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47ea748e8f3f53aa!2sNational%20Taipei%20University%20of%20Technology!5e0!3m2!1sen!2stw!4v1619019800862!5m2!1sen!2stw" width="602" height="422" style="border:0;" allowfullscreen="" loading="lazy"></iframe></b-row>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
#map{
    background:1c1c24;
}
#logo {
    height: 78px;
    width: 80px;
    position:absolute;
    top: 6px;
    left: 326px;
}
#topic {
    height: 119px;
    width: 498px;
    position:absolute;
    left:117px;
    top:120px;
}
#info {
    width: 496px;
    height: 139px;
    position: absolute;
    left: 117px;
    top: 297px;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    font-family:"Arvo",serif;
    vertical-align: center;
}
</style>