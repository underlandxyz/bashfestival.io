<template>
  <div id='sponsors' class='w'>
    <a href="https://wildrocket.io" target="_blank">
      <img src="~/assets/img/sponsors/wildrocket.png" alt="Wild Rocket Dev Studio">
    </a>
    <a href="https://createk.io" target="_blank">
      <img src="~/assets/img/sponsors/createk.png" alt="Createk">
    </a>
    <a href="https://samsunginter.net" target="_blank">
      <img src="~/assets/img/sponsors/samsung-internet.png" alt="Samsung Internet">
    </a>
    <a href="https://www.rolls-royce.com/" target="_blank">
      <img src="~/assets/img/sponsors/rollsroyce.png" alt="Rolls-Royce">
    </a>
    <a href="https://balsamiq.com" target="_blank">
      <img src="~/assets/img/sponsors/balsamiq.png" alt="Balsamiq">
    </a>
    <a href="https://www.digitalocean.com" target="_blank">
      <img src="~/assets/img/sponsors/digitalocean.png" alt="DigitalOcean">
    </a>
    <a href="https://www.ukgovcamp.com/" target="_blank">
      <img src="~/assets/img/sponsors/ukgovcamp.png" alt="UKGovCamp Grants">
    </a>
    <a href="http://front-line-tech.com/" target="_blank">
      <img src="~/assets/img/sponsors/frontlinetech.png" alt="Front-Line Technology">
    </a>
    <a href="https://www.barclays.co.uk/" target="_blank">
      <img src="~/assets/img/sponsors/barclays.png" alt="Barclays">
    </a>
    <a href="http://puntofisso.net/" target="_blank">
      <img src="~/assets/img/sponsors/puntofisso.png" alt="In Other News by @puntofisso">
    </a>
  </div>
</template>

<style lang="scss" scoped>
#sponsors {
  margin-bottom: 3em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3em;
  margin-bottom: 2em;
  a {
    display: block;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 700px) {
    .top, .bottom {

      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
