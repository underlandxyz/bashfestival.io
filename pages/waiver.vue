<template>
  <div class='w content'>
    <h1 id="title">Waiver</h1>
    <p>In the case that an attendee is under the age of 16 and it is not possible for a parent or guardian to personally drop off and collect them, we have arranged the following process.</p>
    <p><b>This MUST BE requested, confirmed and arranged before the event.</b></p>
    <ol>
      <li>We will send a photo of the hub leader to the attendee and their parent/guardian ahead of time.</li>
      <li>A form of photo ID (including school or bus passes) must be made available to the BASH Festival of Code team, and the hub leader, before the event via the form below.</li>
      <li>Travel plans must be shared, mainly so we know roughly how long your commute will take.</li>
      <li>Just before attendees leave home, hub leaders must be notified via text, email or Slack (from day 2). When they arrive at the location, we will text their parent/guardian to confirm they have arrived.</li>
      <li>Just before attendees leave the location, hub leaders will text their parent/guardian. Once home, please make sure to tell your hub leader so they know you have arrived home.</li>
    </ol>
    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrm5AthgCkE08byI?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
</template>

<script>
export default {
  head () {
    return { title: `Waiver - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
iframe {
  margin-top: 2em;
}
</style>
