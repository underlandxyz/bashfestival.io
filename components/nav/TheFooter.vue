<template>
  <footer>
    <div id="core">
      <div class='section'>
        <h2>About</h2>
        <div class="items">
          <n-link to='#'>About BASH Festival</n-link>
          <n-link to='#'>Team members</n-link>
          <n-link to='#'>Success framework</n-link>
          <n-link to='#'>Contact us</n-link>
          <n-link to='#'>FAQ</n-link>
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
        <n-link to='#'>Sponsor event</n-link>
        <n-link to='#'>Register as a mentor</n-link>
        <n-link to='#'>Be a weekend volunteer</n-link>
        <n-link to='#'>Propose a weekend session</n-link>
      </div>
      <div class='section'>
        <h2>Attending BASH</h2>
        <n-link to='#'>Application process</n-link>
        <n-link to='#'>Travel information</n-link>
        <n-link to='#'>Code of Conduct</n-link>
        <n-link to='#'>Health & Safety Policy</n-link>
        <n-link to='#'>Safeguarding Policy</n-link>
      </div>
    </div>
    <div id="underland">
      <a href="https://underland.xyz">
        <img src="@/assets/underland-logo.svg" alt="Underland Logo">
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
#core {
  background: var(--blue);
  color: white;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
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
}
#underland {
  background: var(--blue-dark);
  padding: 2em;
  img {
    height: 3em;
    display: block;
    margin: 0 auto;
  }
}
</style>
