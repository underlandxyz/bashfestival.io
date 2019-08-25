<template>
  <div id='hero'>
    <div class="stars">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
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
      <div class="img">
        <img src="~/assets/img/logo-white.svg" alt="~ BASH Logo">
      </div>
      <h1>BASH Festival of Code was a series of free coding events for 13-17 year olds.</h1>
      <h2>Young people spent Monday to Friday building projects in teams in one of our regional hubs, supported by mentors. They then visited Birmingham for our finale weekend - presenting projects, enjoying our multi-stream content schedule, and making friends with other like-minded people.</h2>
      <h3>August 5th - 11th 2019</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#hero {
  text-align: center;
  background: var(--green-bright);
  color: white;
  position: relative;
  background: var(--blue);
  background: linear-gradient(0deg, var(--blue) 0%, var(--blue-dark) 100%);
  position: relative;
  overflow: hidden;
}
.w {
  padding-top: 4em;
  padding-bottom: 12em;
}
img {
  width: 150px;
  margin-bottom: 3em;
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
h3 {
  font-size: 1em;
  margin-top: 1em;
}
@media screen and (max-width: 1000px) {
  .w {
    padding-top: 3em;
    padding-bottom: 3em;
  }
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-weight: normal;
    font-size: 1em;
  }
  h3 {
    font-size: 1.25em;
  }
  .wave {
    display: none;
  }
  .wave,
  #stars,
  #stars2,
  #stars3 {
    animation: none !important;
  }
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
    animation: move-wave 12s;
    -webkit-animation: move-wave 12s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    background-image: url('~assets/img/waves/top.png')
  }
  &.waveMiddle {
    background-size: 50% 120px;
    animation: move_wave 30s linear infinite;
    background-image: url('~assets/img/waves/middle.png')
  }
  &.waveBottom {
    background-size: 50% 100px;
    animation: move_wave 50s linear infinite;
    background-image: url('~assets/img/waves/bottom.png')
  }
}
</style>

<style lang="sass" scoped>
@function multiple-box-shadow ($n) 
  $value: '#{random(2000)}px #{random(650)}px #FFF'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(2000)}px #{random(650)}px #FFF'

  @return unquote($value)

$shadows-small:  multiple-box-shadow(700)
$shadows-medium: multiple-box-shadow(200)
$shadows-big:    multiple-box-shadow(100)

.stars
  opacity: 0.25

@media (prefers-reduced-motion: reduce)
  .stars
    display: none

#stars
  width: 1px
  height: 1px
  background: transparent
  box-shadow: $shadows-small
  animation			: animStar 50s linear infinite
    
  &:after
    content: " "
    position: absolute
    top: 650px
    width: 1px
    height: 1px
    background: transparent
    box-shadow: $shadows-small
    
#stars2
  width: 2px
  height: 2px
  background: transparent
  box-shadow: $shadows-medium
  animation			: animStar 100s linear infinite
    
  &:after
    content: " "
    position: absolute
    top: 650px
    width: 2px
    height: 2px
    background: transparent
    box-shadow: $shadows-medium
    
#stars3
  width: 3px
  height: 3px
  background: transparent
  box-shadow: $shadows-big
  animation			: animStar 150s linear infinite
    
  &:after
    content: " "
    position: absolute
    top: 650px
    width: 3px
    height: 3px
    background: transparent
    box-shadow: $shadows-big

@keyframes animStar
  from	
    transform: translateY(0px)
  to		
    transform: translateY(-650px)
    
</style>
