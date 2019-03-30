<template>
  <div id='stats'>
    <div class="w">
      <div class="stat">
        <h2>30</h2>
        <span>Hours to Build</span>
      </div>
      <div class="img">
        <img src="@/assets/img/logo-white.svg" alt="~ BASH Logo">
      </div>
      <div class="stat">
        <h2>{{hubsNumber}}</h2>
        <span>Regional Hubs</span>
      </div>
      <div class="img">
        <img src="@/assets/img/logo-white.svg" alt="~ BASH Logo">
      </div>
      <div class="stat">
        <h2>350</h2>
        <span>Attendees</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hubsNumber() {
      return this.$store.state.hubs.length
    }
  }
}
</script>

<style lang="scss" scoped>
#stats {
  background: var(--blue);
  color: white;
  text-align: center;
  padding: 4em 0;
}
.w {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 2fr;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 3em;
  }
}
h2 {
  font-size: 4em;
}
span {
  text-transform: uppercase;
}
@media screen and (max-width: 1000px) {
  .w {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .img {
    display: none;
  }
  .stat {
    padding: 0.5em;
  }
  h2 {
    font-size: 2em;
  }
  span {
    font-size: 0.8em;
  }
}
</style>
