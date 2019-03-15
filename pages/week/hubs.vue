<template>
  <div>
    <SubHeaderWeek />
    <div class='w'>
      <h1 id="title">Regional Hubs</h1>
      <p>All regional hubs are generously volunteer-run and each will be able to host 15-20 young people during the week for the 2019 event. If you have questions please check the <n-link to='/about/faq'>FAQ</n-link> first and then direct any questions to the <n-link to='/contact'>BASH Festival team</n-link>.</p>
      <iframe src="https://snazzymaps.com/embed/122069" width="100%" height="400px" style="border:none;"></iframe>
      <div id="hubs">
        <Hub 
          v-for='hub in hubs'
          :key='hub.name'
          :hub='hub' />
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderWeek from '@/components/nav/subnavs/SubHeaderWeek'
import Hub from '@/components/hubs/Hub'
export default {
  computed: {
    hubs() {
      return this.$store.state.hubs;
    }
  },
  components: { 
    SubHeaderWeek,
    Hub
  }
}
</script>

<style scoped lang='scss'>
#hubs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-bottom: 4em;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
}
iframe {
  margin: 4em 0 2em;
}
</style>