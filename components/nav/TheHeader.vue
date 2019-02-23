<template>
  <header>
    <div id="notice-line">
      <span class="dates">August 5-11, 2019. Across the UK, with a finale in Birmingham.</span>
      <div class="meta">
        <n-link to='/policies/conduct'>Code of Conduct</n-link>
        <n-link to='/sponsorship'>Sponsor BASH Festival</n-link>
        <a href='https://underland.xyz'>An event by Underland</a>
      </div>
    </div>
    <div id="core">
      <nav>
        <n-link to='/' class='brand'>
          <img src="~/assets/img/logo-white.svg" alt="~ BASH Logo">
          <h1>BASH Festival</h1>
        </n-link>
        <n-link to='/week' class='bold'>The Week</n-link>
        <n-link to='/weekend' class='bold'>Weekend</n-link>
        <n-link to='/about' class='minor'>About</n-link>
        <n-link to='/faq' class='minor'>FAQ</n-link>
        <n-link to='/contact' class='minor'>Contact</n-link>
      </nav>
      <n-link to='/apply' class="cta btn">Apply now</n-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#notice-line {
  background: var(--blue-dark);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  font-size: 0.8em;
  * {
    color: #ccc;
  }
  .meta a {
    margin-left: 1em;
    text-decoration: none;
  }
}

#core {
  background: var(--blue);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.8em;
  * {
    color: white;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    a {
      text-decoration: none;
      padding: 1.5em 1.25em;
      display: inline-block;
      border-right: 1px solid rgba(248,237,235,.1);
      &.brand {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          height: 1em;
        }
        h1 {
          font-size: 1em;
          text-transform: uppercase;
          margin-left: 0.5em;
        }
      }
      &.bold {
        text-transform: uppercase;
        font-weight: bold;
      }
      &.minor {
        border-right: 0;
        padding-right: 0;
        color: #ccc;
      }
    }
  }
  .cta {
    background: var(--pink-dark);
    color: white;
    display: flex;
    align-items: center;
    padding: 1.5em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
