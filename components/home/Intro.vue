<template>
  <div class='w'>
    <div class="text">
      <p>There are many great organisations that teach young people technical skills, but few to help them once they've learnt the basics. We aim to provide an environment and community for technical young people to further build their skills and networks.</p>
    </div>
    <div class="img">
      <img src="@/assets/img/jamie/build.svg" alt="Image of Jamie - our mascot - with a laptop">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.w {
  padding-top: 4em;
  padding-bottom: 4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.text {
  padding-right: 2em;
  font-size: 1.25em;
}
img {
  height: 15em;
}
@media screen and (max-width: 1000px) {
  .w {
    padding-top: 2em;
    flex-direction: column;
    text-align: center;
  }
  .text {
    font-size: 1em;
    margin-bottom: 2em;
    padding-right: 0;
  }
}
</style>
