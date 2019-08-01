<template>
  <div class='w content'>
    <h1 id="title">Crib Sheet</h1>
    <h2>During the week</h2>
    <ul>
      <li><n-link to='/guides/packing'>Packing list - what to bring</n-link></li>
      <li><n-link to='/guides/videos'>Daily intro videos</n-link></li>
      <li><n-link to='/guides/challenges'>Challenges - what to work on</n-link></li>
      <li><n-link to='/guides/resources'>Resources - links and guides to build your skills</n-link></li>
      <li><n-link to='/policies/conduct'>Code of Conduct & reporting options</n-link></li>
      <li>Slack - ask your hub leader for the link</li>
    </ul>
    <h2>During the weekend</h2>
    <ul>
      <li><n-link to='/guides/packing'>Packing list - what to bring</n-link></li>
      <li><n-link to='/weekend'>Weekend intro</n-link></li>
      <li><n-link to='/weekend/venue'>Weekend venue</n-link></li>
      <li><n-link to='/weekend/schedule'>Schedule</n-link></li>
      <li><n-link to='/weekend/access'>Access Scheme if you need support with travel costs to the weekend</n-link></li>
      <li>Slack - we'll give you the link on the day</li>
    </ul>
  </div>
</template>

<script>
export default {
  head () {
    return { title: `Crib Sheet - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
iframe {
  margin-top: 2em;
}
</style>
