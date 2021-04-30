<template>
  <div class="loading">
    <div class="loading__block animation">
      <p class="loading__line">
        <span class="gray">>></span> import(<span class="blue">event_data</span
        >)
      </p>
      <p class="loading__line">
        <span class="gray">>></span> print(<span class="blue">greeting</span>)
      </p>
      <p class="loading__line">
        <span class="gray">>></span> print(<span class="blue">event_name</span>)
      </p>
      <p class="loading__line">...</p>
      <p class="loading__line">
        <span class="green">Welcome_to_OpenHCI’21</span>
      </p>
      <p class="loading__line"><span class="green">MOBIUS</span></p>
      <p class="loading__line">Loading . . .</p>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
.loading {
  font-family: "Arvo", serif;
  color: #ffffff;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &__block {
    text-align: left;
    display: block;
    width: 260px;
  }
}
.animation {
  .loading__line {
    margin: 6px 0;
    line-height: 20px;
    border-right: 0.1em solid gray;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    -webkit-animation: typewriter 2s steps(50, end),
      blink 0.1s step-end infinite alternate;
    animation: typewriter 2s steps(50, end),
      blink 0.1s step-end infinite alternate;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    &:nth-child(1) {
      width: 230px;
    }
    &:nth-child(2) {
      opacity: 0;
      width: 210px;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
    }
    &:nth-child(3) {
      opacity: 0;
      width: 245px;
      -webkit-animation-delay: 4s;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      -webkit-animation: typewriter 0.5s steps(50, end),
        blink 0.1s step-end infinite alternate;
      animation: typewriter 0.5s steps(50, end),
        blink 0.1s step-end infinite alternate;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      opacity: 0;
      width: 20px;
      -webkit-animation-delay: 6s;
      animation-delay: 6s;
    }
    &:nth-child(5) {
      -webkit-animation: typewriter 2.5s steps(50, end),
        blink 0.1s step-end infinite alternate;
      animation: typewriter 2.5s steps(50, end),
        blink 0.1s step-end infinite alternate;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      opacity: 0;
      width: 255px;
      -webkit-animation-delay: 7s;
      animation-delay: 7s;
    }
    &:nth-child(6) {
      -webkit-animation: typewriter 1s steps(50, end),
        blink 0.1s step-end infinite alternate;
      animation: typewriter 1s steps(50, end),
        blink 0.1s step-end infinite alternate;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      opacity: 0;
      width: 85px;
      -webkit-animation-delay: 9.5s;
      animation-delay: 9.5s;
    }
    &:nth-child(7) {
      color: rgb(172, 172, 172);
      opacity: 0;
      width: 120px;
      -webkit-animation-delay: 11s;
      animation-delay: 11s;
      line-height: 24px;
    }
  }
}

@keyframes typewriter {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@-webkit-keyframes typewriter {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

span.blue {
  color: #0000ff;
}
span.gray {
  color: rgb(172, 172, 172);
}
span.green {
  color: #00ff00;
}
</style>
