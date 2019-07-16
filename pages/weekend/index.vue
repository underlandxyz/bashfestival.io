<template>
  <div>
    <SubHeaderWeekend />
    <div class='w content'>
      <h1 id="title">Weekend Finale</h1>
      <p>During the BASH Festival of Code finale weekend we will have talks & workshops, a hackathon where attendees can build projects around our themes of gaming, data and music, and make new friends from around the country.</p>
      <p>The finale runs two days with an overnight portion, free food and chill activities in the evening such as boardgaming and films.</p>
      <h2>Access Scheme Fund</h2>
      <p>The weekend is free to attend thanks to our event sponsors. If cost is a barrier to attending, take a look at information around our <n-link to='/weekend/access'>Access Scheme Fund</n-link>, which awards up to £50 towards travel.</p>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrC87zSvLlyhIHc3?backgroundColor=blue&prefill_Event=Birmingham%20Weekend%20Finale" frameborder="0" onmousewheel="" width="100%" height="2967" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
  </div>
</template>

<script>
import SubHeaderWeekend from '@/components/nav/subnavs/SubHeaderWeekend'
export default {
  components: { SubHeaderWeekend },
  head () {
    return { title: `Weekend - ${this.$store.state.title}` }
  },
}
</script>

<style scoped>
iframe {
  margin-top: 2em;
}
</style>
