<template>
  <div>
    <SubHeaderWeek />
    <div class='w'>
      <h1 id="title">Regional Hubs</h1>
      <p>All regional hubs are generously volunteer-run and each will be able to host 15-20 young people during the week for the 2019 event. If you have questions please check the <n-link to='/about/faq'>FAQ</n-link> first and then direct any questions to the <n-link to='/contact'>BASH Festival of Code team</n-link>.</p>
      <GmapMap
        :zoom="5.5"
        :center='{ lat: 53.486244, lng: -1.890401 }'
        map-type-id="roadmap"
        class='map'>
        <GmapMarker
          v-for='hub in hubs'
          :key='hub.name'
          :position="hub.loc"
          :clickable="true"
          :draggable="true" />
      </GmapMap>
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
  },
  head () {
    return { title: `Regional Hubs - ${this.$store.state.title}` }
  },
}
</script>

<style scoped lang='scss'>
#hubs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-bottom: 2em;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
}
.more {
  margin-bottom: 3em;
  margin-top: 3em;
}
.map {
  margin: 2em 0;
  width: 100%;
  height: 500px;
  @media screen and (max-width: 1000px) {
    height: 56vw;
  }
}
</style>