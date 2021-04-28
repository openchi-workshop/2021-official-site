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
$md: 768px;
$sm: 576px;
.program-item {
  font-family: "Arvo", serif;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #ffffff;
  flex-wrap: wrap;
  &__date {
    position: relative;
    font-size: 36px;
    line-height: 44px;
    color: #00ff00;
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
      stroke: #00ff00;
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
    width: 105px;
    margin-right: 64px;
    @media (max-width: $sm) {
      margin-right: 40px;
      margin-bottom: 40px;
    }
  }
  &__body {
    font-family: "Noto Sans TC", sans-serif;
    white-space: pre-line;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
  }
}
</style>
