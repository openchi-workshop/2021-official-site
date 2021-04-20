<template>
  <div class="header">
    <div class="header__logo"></div>
    <div class="header__list">
      <router-link class="header__list-item" to="/">報名資訊</router-link>
      <router-link class="header__list-item" to="/">活動文章</router-link>
      <router-link class="header__list-item" to="/">籌備團隊</router-link>
      <router-link class="header__list-item" to="/">歷屆作品</router-link>
      <router-link class="header__list-item" to="/about">立即報名</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.header {
  background-color: #000;
  height: 80px;
  &__logo {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #9e9e9e;
    border-radius: 100px;
    left: 120px;
    top: 16px;
  }
  &__list {
    height: 80px;
    display: flex;
    position: relative;
    justify-content: flex-end;
    margin-right: 120px;
    align-items: center;
  }
  &__list-item {
    width: 86px;
    height: 32px;
    background: #dedede;
    color: #000;
    text-align: center;
    font-size: 12px;
    line-height: 32px;
    text-decoration: none;
    margin-left: 16px;
  }
}
</style>
