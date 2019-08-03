<template>
  <div id='hub'>
    <SubHeaderEvents />
    <div class='w'>
      <div class='profile'>
        <small :style="{ color: hub.text, background: hub.color }">{{hub.city}}</small>
        <br>
        <h1 id="title" :style="{borderColor: hub.color}">{{hub.name}}</h1>
        <p><i class="fas faw fa-map-pin" :style="{color: hub.color}"></i>{{hub.address}}</p>
        <p><i class="fas faw fa-clock" :style="{color: hub.color}"></i>Monday 5th - Friday 9th August, each day running 10am-4pm (this event is 5 days long)</p>
        <p v-if='hub.notes'>{{hub.notes}}</p>
        <p>For details about this event, please email {{hub.leader.name}} at {{hub.leader.email}}</p>
        <!-- <n-link to='/tickets' class='apply' :style="{ color: hub.text, background: hub.color }">Get free tickets for this event</n-link> -->
      </div>
      <GmapMap :center="hub.loc" :zoom="9" map-type-id="roadmap" style="width: 100; height: 300px">
        <GmapMarker :position="hub.loc" :clickable="true" :draggable="true" />
      </GmapMap>
      <h2>Tickets for the week events are no longer available. However you can still get them for <n-link to='/weekend'>the weekend</n-link>.</h2>
      <!-- <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" :src="hub.hubEmbed" frameborder="0" onmousewheel="" width="100%" height="2967" style="background: transparent; border: 1px solid #ccc;"></iframe> -->
    </div>
  </div>
</template>

<script>
import SubHeaderEvents from '@/components/nav/subnavs/SubHeaderEvents'

export default {
  async created() {
    this.hub = await this.$store.state.hubs.filter(hub => {
      return hub.city == this.$route.params.city
    })[0];
    this.hub = {
      ...this.hub,
      hubEmbed: `https://airtable.com/embed/shrC87zSvLlyhIHc3?backgroundColor=blue&prefill_Event=${this.hub.formPrefill}`
    }
  },
  data() {
    return {
      hub: { loc: { lat: 0, lng: 0 }, leader: {} }
    }
  },
  components: {
    SubHeaderEvents
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
.apply {
  display: block;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
}
i {
  width: 16px;
}
iframe {
  margin-top: 2em;
}
h2 {
  margin-top: 1em;
}
</style>
