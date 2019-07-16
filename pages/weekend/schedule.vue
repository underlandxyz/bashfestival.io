<template>
  <div>
    <SubHeaderWeekend />
    <div class='w content'>
      <h1 id="title">Weekend Schedule</h1>
      <p>This schedule is still preliminary and subject to change, but it should give you a pretty good idea on what to expect from the BASH Festival of Code weekend.</p>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrTIzulHPoGRTVz0?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
  </div>
</template>

<script>
import SubHeaderWeekend from '@/components/nav/subnavs/SubHeaderWeekend'
export default {
  components: { SubHeaderWeekend },
  head () {
    return { title: `Schedule - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
iframe {
  margin-top: 1em;
}
</style>
