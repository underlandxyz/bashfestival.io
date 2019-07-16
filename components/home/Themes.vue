<template>
  <div class='w'>
    <h2>2019 Challenges</h2>
    <div class="themes">
      <div class="theme">
        <img src="@/assets/img/themes/games.svg" alt="Icon for games">
        <h2>Build digital or physical games</h2>
      </div>
      <div class="theme">
        <img src="@/assets/img/themes/data.svg" alt="Icon for data">
        <h2>Present data in novel ways</h2>
      </div>
      <div class="theme">
        <img src="@/assets/img/themes/music.svg" alt="Icon for music">
        <h2>Use tech to create music</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.w {
  padding: 4em 0;
}
h2 {
  text-align: center;
  margin-bottom: 2em;
}
.themes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  .theme {
    text-transform: uppercase;
    margin-bottom: 1em;
    img {
      width: 50%;
      display: block;
      margin: 0 auto;
    }
    h2 {
      font-size: 0.8em;
      margin-top: 1em;
    }
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 0;    
    .theme img {
      height: auto;
      width: 60%;
      margin-bottom: 0;
    }
  }
}
</style>
