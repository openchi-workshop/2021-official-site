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
        <div class="program-item__title--note">Day {{ day }}</div>
        <div>{{ title }}</div>
      </div>
    </div>

    <div class="program-item__body">
      <div
        v-for="{ time, content } in schedule"
        :key="time + content"
        class="schedule"
      >
        <div class="schedule__time">{{ time }}</div>
        <div class="schedule__text">{{ content }}</div>
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
  color: #ffffff;

  @media (max-width: $sm) {
    display: block;
  }

  &__head {
    width: 120px;
    flex-shrink: 0;
    margin-right: 40px;

    @media (max-width: $sm) {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
    }
  }

  &__date {
    position: relative;
    color: #00ff00;
    padding-bottom: 20px;
    font-size: 36px;

    @media (max-width: $sm) {
      margin-right: 46px;
    }

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
    font-weight: bold;

    &--note {
      font-family: "Arvo", serif;
      line-height: 22px;
      margin-bottom: 10px;

      @media (max-width: $sm) {
        color: #00ff00;
      }
    }
  }

  &__body {
    font-size: 18px;
  }
}

.schedule {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  &__time {
    width: 120px;
    flex-shrink: 0;
    margin-right: 12px;
  }
}
</style>
