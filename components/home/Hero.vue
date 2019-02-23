<template>
  <div id='hero'>
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom"></div>
      </div>
    </div>
    <div class="w">
      <h1>BASH Festival is a free week-long coding festival for 13-17 year olds.</h1>
      <h2>Spend Monday to Friday building projects in teams in one of our regional hubs, supported by mentors. Then visit Birmingham for our finale weekend - present your projects, enjoy our five-stream content schedule, and make friends with other like-minded people.</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#hero {
  padding-top: 4em;
  padding-bottom: 12em;
  text-align: center;
  background: var(--green-bright);
  color: white;
  position: relative;
}
h1 {
  font-size: 3vw;
  margin-bottom: 0.5em;
  z-index: 20;
}
h2 {
  font-size: 1.25em;
  z-index: 20;
}
@keyframes move_wave {
  0% { transform: translateX(0) translateZ(0) scaleY(1) }
  50% { transform: translateX(-25%) translateZ(0) scaleY(0.55) }
  100% { transform: translateX(-50%) translateZ(0) scaleY(1) }
}
.waveWrapper {
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  .waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
  }
  .bgTop {
    z-index: 15;
    opacity: 0.5;
  }
  .bgMiddle {
    z-index: 10;
    opacity: 0.75;
  }
  .bgBottom {
    z-index: 5;
  }
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
  &.waveTop {
    background-size: 50% 100px;
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    background-image: url('~assets/img/waves/top.png')
  }
  &.waveMiddle {
    background-size: 50% 120px;
    animation: move_wave 10s linear infinite;
    background-image: url('~assets/img/waves/middle.png')
  }
  &.waveBottom {
    background-size: 50% 100px;
    animation: move_wave 15s linear infinite;
    background-image: url('~assets/img/waves/bottom.png')
  }
}
</style>
