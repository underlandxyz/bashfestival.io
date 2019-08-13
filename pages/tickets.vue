<template>
  <div class='w content'>
    <h1 id='title'>Get tickets to BASH Festival of Code</h1>
    <p>Getting tickets are a two-part process. Part one is below and holds a ticket for you. Once submitted, we will email a Parent/Guardian and require them to confirm, give permission, and answer a couple of extra questions. Only once this second step is completed is your ticket confirmed.</p>
    <h2>Costs to you</h2>
    <p>All tickets are, and will always be, free. However, you are expected to cover the following costs:</p>
    <ul>
      <li>Travel to and from the events</li>
      <li>A packed lunch on Monday - Friday</li>
    </ul>
    <p>If the cost of the weekend is prohibitive, please take a look at our <n-link to='/weekend/access'>Access Scheme</n-link> and apply for a ticket through the scheme.</p>
    <div class="tickets">
      <h2>Tickets for the August 5th - 9th Week Events</h2>
      <!-- <n-link :to='hub.path' v-for='hub in hubs' :key='hub.name' :style="{ background: hub.color }">{{hub.city}}</n-link> -->
      <p>These tickets are no longer available.</p>
      <h2>Tickets for the August 10th - 11th Finale</h2>
      <p>These tickets are no longer available.</p>
      <!-- <n-link to='/weekend' class='finale'>Birmingham</n-link> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hubs() {
      return this.$store.state.hubs.map(hub => {
        return {
          ...hub, 
          path: `/events/${hub.city}`
        }
      });
    }
  },
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
.tickets a {
  display: inline-block;
  margin: 0 0.5em 0.5em 0;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.25em 0.5em;
  font-size: 1.25em;
}
a.finale {
  background: var(--blue);
  color: white;
}
</style>
