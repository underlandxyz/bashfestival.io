<template>
  <div id='hub'>
    <SubHeaderWeek />
    <div class='w'>
      <div class='profile'>
        <small :style="{ color: hub.text, background: hub.color }">{{hub.city}}</small>
        <br>
        <h1 id="title" :style="{borderColor: hub.color}">{{hub.name}}</h1>
        <p><i class="fas fa-map-pin" :style="{color: hub.color}"></i>{{hub.address}}</p>
        <p v-if='hub.notes'>{{hub.notes}}</p>
        <p>Closer to the event we'll provide more details about your Hub Leader. For now, if you have questions please <n-link to='/contact'>contact the BASH team</n-link>.</p>
      </div>
      <GmapMap
        :center="hub.loc"
        :zoom="9"
        map-type-id="roadmap"
        style="width: 100; height: 300px">
          <GmapMarker
            :position="hub.loc"
            :clickable="true"
            :draggable="true" />
      </GmapMap>
    </div>
  </div>
</template>

<script>
import SubHeaderWeek from '@/components/nav/subnavs/SubHeaderWeek'

export default {
  async created() {
    this.hub = await this.$store.state.hubs.filter(hub => {
      return hub.city == this.$route.params.city
    })[0];
  },
  data() {
    return {
      hub: { loc: { lat: 0, lng: 0 } }
    }
  },
  computed: {
  },
  components: {
    SubHeaderWeek
  },
  head () {
    const city = this.$route.params.city;
    return { title: `${city.charAt(0).toUpperCase() + city.slice(1)} - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
#hub {
  margin-bottom: 4em;
}
small {
  text-transform: uppercase;
  padding: 0.25em 0.75em;
  display: inline-block;
  margin-bottom: 0.5em;
}
h1#title {
  border-bottom: 2px solid black;
  display:inline-block;
  text-transform: uppercase;
  margin-top: 0.5em;
}
.profile {
  margin-bottom: 2em;
  p {
    margin-bottom: 1em;
  }
  i {
    margin-right: 1em;
  }
}
</style>
