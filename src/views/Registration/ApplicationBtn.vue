<template>
  <b-row id="applicationbtn">
    <img src="@/assets/registration/applycta_pc.png" alt="applycta_pc" class="applycta_pc">
    <img src="@/assets/registration/applycta_md.png" alt="applycta_md" class="applycta_md">
    <img src="@/assets/registration/applycta_sm.png" alt="applycta_sm" class="applycta_sm">
    <b-col class="applicationbtn_context"> 
      <div class="applicationbtn_content">
        <div class="applicationbtn-title">
          <Title text="# APPLICATION" />
        </div>
        <div class="applicationbtn-subtitle">
          報名資格
        </div>
        <div class="applicationbtn-content">
          全國各大專院校升大三以上在學生，含學碩博應屆畢業生及新生。
        </div>
        <div class="applicationbtn-subtitle">
          報名方式
        </div>
        <div class="applicationbtn-content">
          一律填寫線上表單報名。本活動以報名資料填寫內容作為錄取參考依據，報名先後順序不列入計分標準。
        </div>
        <div class="applicationbtn-subtitle">
          線上報名時間
        </div>
        <div class="applicationbtn-content">
          2021 年 4 月 26 日 ( 一 )  -  2021 年 5 月 14 日 ( 五 ) 23:59'59
        </div>
      </div>
      
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSekkZMK9lRT1JLi7ZsWoM4np8NLramMl91bO9nK9hJsgXT_6g/viewform" target="_blank"><button class="applicationnow-btn" >APPLY NOW</button></a>
    </b-col>
  </b-row>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui/Title";

export default {
  name: "applicationbtn",
  components: {
    Title,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
#applicationbtn {
  width: 100%;
  position: relative;
  color: #fff;
  background: #1c1c24;
  margin-right: 0px;
  margin-left: 0px;
}
.applycta_pc {
  width: 100%;
  height: 100%;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.applycta_md {
  display: none;
  width: 769px;
  @media (max-width: $md) {
    display: block;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.applycta_sm {
  display: none;
  width: 105%;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: block;
  }
}
.applicationbtn-title {
  width: 100%;
  right: 0px;
}
.applicationbtn_content {
  width: 40%;
  @media (max-width: $md) {
    display: none;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.applicationbtn_context {
  top: 104px;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  padding-left: 120px;
  @media (max-width: $md) {
    top: 0px;
  }
  @media (max-width: $sm) {
    padding-left: 0px;
    top: 0px;
  }
}
.applicationbtn-subtitle {
  width: 100%;
  margin-top: 14%;
  font-weight: 500;
  font-size: 24px;
  line-height: 25.6px;
}
.applicationbtn-content {
  width: 100%;
  margin-top: 16px;
  font-size: 16px;
  line-height: 25.6px;
}
.applicationnow-btn {
  position: absolute;
  width: 333px;
  height: 92px;
  top: 190px;
  left: 64%;
  background: #00FF00;
  border: 5px solid #00FF00;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Arvo;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
  align-items: center;
  text-align: center;
  color: #0000FF;
  @media (max-width: $md) {
    position: absolute;
    width: 198px;
    height: 46px;
    left: 39%;
    top: 43%;
    border-radius: 5px;
    
    font-size: 24px;
    line-height: 30px;
  }
  @media (max-width: $sm) {
    position: absolute;
    left: 23%;
    top: 43%;
    border-radius: 5px;
    
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
