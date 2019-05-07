<template>
  <div class='w content'>
    <h1 id='title'>Get tickets to BASH Festival of Code</h1>
    <p>Getting tickets are a two-part process. Part one is below and holds a ticket for you. Once submitted, we will email a Parent/Guardian and require them to confirm, give permission, and answer a couple of extra questions. Only once this second step is completed is your ticket confirmed.</p>
    <h2>Costs to you</h2>
    <p>All tickets are, and will always be, free. However, you are expected to cover the following costs:</p>
    <ul>
      <li>Travel to and from your regional hub on Monday-Friday</li>
      <li>A packed lunch on Monday-Friday</li>
      <li>Travel to and from Birmingham. This will be organised by your Hub Leaders.</li>
      <li>A small amount of spending money for food at the weekend. If we raise enough sponsorship we will cover food, but this is not currently the case.</li>
    </ul>
    <p>If the cost of the weekend is prohibitive, please take a look at our <n-link to='/weekend/access'>Access Scheme</n-link> and apply for a ticket through the scheme.</p>
    <iframe src="https://www.eventbrite.co.uk/checkout-external?eid=61486921036&amp;parent=https%3A%2F%2Fwww.eventbrite.co.uk%2Fmyevent%2F61486921036%2Fembedded-checkout%2F" sandbox="allow-modals allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation" data-automation="checkout-widget-iframe-61486921036" allowtransparency="true" frameborder="0" scrolling="auto" width="100%" height="1650px"></iframe>
  </div>
</template>

<script>
export default {
  head () {
    return { title: `Tickets - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  margin-top: 2em;
  border: 2px solid var(--blue);
}
</style>
