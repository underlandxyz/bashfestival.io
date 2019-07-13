<template>
  <div>
    <SubHeaderGuides />
    <div class='w content'>
      <h1 id="title">Guides & Resources</h1>
      <p>We want to make the event as impactful as possible, so we've put together these guides & resource lists to help.</p>
      <p>If you have any questions about them, please <n-link to='/contact'>contact us</n-link>.</p>
      <ul>
        <li><n-link to='/guides/packing'>Packing List - What to bring</n-link></li>
        <li><n-link to='/guides/challenges'>Challenges - What to work on</n-link></li>
        <li><n-link to='/guides/resources'>Technical resources - want to learn a skill? Look here.</n-link></li>
        <li><n-link to='/guides/videos'>Daily videos - shown at the start of each day</n-link></li>
        <li><n-link to='/guides/sleeping'>Sleeping arrangements for the weekend</n-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubHeaderGuides from '@/components/nav/subnavs/SubHeaderGuides'
export default {
  components: { SubHeaderGuides },
  head () {
    return { title: `Guides - ${this.$store.state.title}` }
  },
}
</script>