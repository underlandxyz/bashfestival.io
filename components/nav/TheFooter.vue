<template>
  <footer>
    <div id="core">
      <div class='section'>
        <h2>About</h2>
        <div class="items">
          <n-link to='/about'>About BASH Festival</n-link>
          <n-link to='/about/application'>Application process</n-link>
          <n-link to='/about/success'>Success framework</n-link>
          <n-link to='/about/team'>Team members</n-link>
          <n-link to='/about/faq'>FAQ</n-link>
          <n-link to='/contact'>Contact us</n-link>
        </div>
      </div>
      <div class='section'>
        <h2>The Event</h2>
        <div class="items">
          <n-link to='/week'>The Week</n-link>
          <n-link to='/week/hubs'>Regional Hubs</n-link>
          <n-link to='/weekend'>Weekend Finale</n-link>
          <n-link to='/weekend/venue'>Weekend Venue</n-link>
        </div>
      </div>
      <div class='section'>
        <h2>Regional Hubs</h2>
        <div class="items locations">
          <n-link to='#'>Location 1</n-link>
          <n-link to='#'>Location 2</n-link>
          <n-link to='#'>Location 3</n-link>
          <n-link to='#'>Location 4</n-link>
          <n-link to='#'>Location 5</n-link>
          <n-link to='#'>Location 6</n-link>
          <n-link to='#'>Location 7</n-link>
          <n-link to='#'>Location 8</n-link>
          <n-link to='#'>Location 9</n-link>
          <n-link to='#'>Location 10</n-link>
          <n-link to='#'>Location 11</n-link>
          <n-link to='#'>Location 12</n-link>
          <n-link to='#'>Location 13</n-link>
          <n-link to='#'>Location 14</n-link>
        </div>
      </div>
      <div class='section'>
        <h2>Support BASH</h2>
        <n-link to='/support/sponsor'>Sponsor event</n-link>
        <n-link to='/support/mentor'>Register as a mentor</n-link>
        <n-link to='/support/volunteer'>Be a weekend volunteer</n-link>
        <n-link to='/support/share'>Share the word</n-link>
      </div>
      <div class='section'>
        <h2>Policies</h2>
        <n-link to='/policies/conduct'>Code of Conduct</n-link>
        <n-link to='/policies/incident-response'>Incident Response Policy</n-link>
        <n-link to='/policies/health-safety'>Health & Safety Policy</n-link>
        <n-link to='/policies/safeguarding'>Safeguarding Policy</n-link>
      </div>
    </div>
    <div id="underland">
      <a href="https://underland.xyz">
        <img src="@/assets/underland-logo.svg" alt="Underland Logo">
      </a>
      <n-link to='/about/colophon' class='c'>Colophon</n-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
#core {
  background: var(--blue);
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  grid-gap: 2em;
  padding: 1em;
  h2 {
    font-size: 1em;
    text-transform: uppercase;
    font-weight: bold;
  }
  a {
    display: block;
    text-decoration: none;
    margin-top: 0.5em;
    font-size: 0.8em;
  }
  .locations {
    a {
      display: inline-block;
      margin-right: 1em;
    }
  }
  @media screen and (max-width: 1000px) {
    display: none; 
  }
}
#underland {
  background: var(--blue-dark);
  padding: 2em;
  img {
    height: 3em;
    display: block;
    margin: 0 auto;
  }
  .c {
    color: white;
    text-align: center;
    text-decoration: none;
    display: block;
    margin-top: 1em;
  }
}
</style>
