<template>
  <div class="program-item">
    <div class="program-item__head">
      <div class="program-item__date">
        <span class="program-item__date--month">
          {{ new Date(date).getMonth() + 1 }}
        </span>
        <svg class="program-item__date--slash">
          <line x1="0" y1="52" x2="52" y2="0" />
        </svg>
        <span class="program-item__date--day">
          {{ new Date(date).getDate() }}
        </span>
      </div>
      <div class="program-item__title">
        <p class="program-item__title--note">Day {{ day }}</p>
        <p>{{ title }}</p>
      </div>
    </div>
    <div class="program-item__body">
      <div
        v-for="{ time, content } in schedule"
        :key="time + content"
        class="program-item__body--schedule"
      >
        <div class="program-item__body--time">{{ time }}</div>
        <div class="program-item__body--text">{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramItem",
  props: {
    day: { type: Number, required: true },
    date: { type: String, required: true },
    title: { type: String, required: true },
    schedule: { type: Array, required: true },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$md: 768px;
$sm: 576px;
.program-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Arvo", serif;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;

  @media (max-width: $sm) {
    width: 100%;
    display: block;
    text-align: center;
  }

  &__head {
    margin-right: 8%;
    margin-bottom: 40px;

    @media (max-width: $sm) {
      margin-right: 0;
    }
  }

  &__date {
    position: relative;
    font-size: 36px;
    line-height: 44px;
    color: #00ff00;
    padding-bottom: 20px;

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

  &__body {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 18px;
    line-height: 36px;

    &--schedule {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &--time {
      margin-right: 12px;

      @media (max-width: $sm) {
        width: 50%;
        text-align: right;
      }
    }

    &--text {
      @media (max-width: $sm) {
        width: 50%;
        text-align: left;
      }
    }
  }
}
</style>
