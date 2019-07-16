<template>
  <div>
    <SubHeaderEvents />
    <div class='w content'>
      <h1 id="title">Week Events</h1>
      <p>During the week we have {{ hubNumber }} free week-long coding day camps in various locations throughout the UK. In them, young people will build projects together (or alone, if preferred) supported by adult mentors.</p>
      <div id="hubs">
        <Hub v-for='hub in hubs' :key='hub.name' :hub='hub' />
      </div>
      <p>At the end of the week we have a <n-link to='/weekend'>free 2-day finale in Birmingham</n-link> which includes workshops, talks and a stream dedicated to building projects (a 'hackathon'). You are welcome to the finale without attending an event in the week, or vice-versa.</p>
    </div>
  </div>
</template>

<script>
import SubHeaderEvents from '@/components/nav/subnavs/SubHeaderEvents'
import Hub from '@/components/hubs/Hub'
export default {
  head() {
    return { title: `Events - ${this.$store.state.title}` }
  },
  computed: {
    hubs() {
      return this.$store.state.hubs;
    },
    hubNumber() {
      return this.$store.state.hubs.length;
    }
  },
  components: {
    SubHeaderEvents,
    Hub
  }
}
</script>

<style lang='scss' scoped>
#hubs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-bottom: 2em;
  margin-top: 2em;
  line-height: 1.25;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
}
</style>
