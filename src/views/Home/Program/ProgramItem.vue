<template>
  <div class="program-item">
    <div class="program-item__head">
      <div class="program-item__date">
        <span class="program-item__date--month"> {{ month }} </span>
        <svg class="program-item__date--slash">
          <line x1="0" y1="52" x2="52" y2="0" />
        </svg>
        <span class="program-item__date--day"> {{ day }} </span>
      </div>
      <div class="program-item__title">
        <p class="program-item__title--note">Day {{ num }}</p>
        <p>{{ title }}</p>
      </div>
    </div>
    <div class="program-item__body">{{ schedule }}</div>
  </div>
</template>

<script>
export default {
  name: "ProgramItem",
  props: {
    num: { type: String, required: true },
    month: { type: String, required: true },
    day: { type: String, required: true },
    title: { type: String, required: true },
    schedule: { type: String, required: true },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.program-item {
  font-family: "Arvo", serif;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #ffffff;
  &__date {
    position: relative;
    font-size: 36px;
    line-height: 44px;
    &--month {
      position: absolute;
      transform: translate(0px, -15px);
    }
    &--day {
      position: absolute;
      transform: translate(-20px, 20px);
    }
    &--slash {
      width: 52px;
      height: 52px;
      stroke: #fff;
      stroke-width: 1;
    }
    padding-bottom: 20px;
  }
  &__title {
    font-size: 18px;
    line-height: 10px;
    font-family: "Noto Sans TC", sans-serif;
    &--note {
      font-family: "Arvo", serif;
      line-height: 22px;
      margin-bottom: 10px;
    }
  }
  &__head {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    transform: translateY(25px);
  }
  &__body {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 18px;
    line-height: 26px;
    white-space: pre-line;
    margin-left: 64px;
  }
}
</style>
