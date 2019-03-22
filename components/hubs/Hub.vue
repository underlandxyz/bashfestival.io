<template>
  <n-link :to='hubPath' class='single' :style="{ background: hub.color }">
    <div class="meta" :style="{ color: hub.text }">
      <small :style="{ color: hub.color, background: hub.text }">{{hub.city}}</small>
      <h2>{{hub.name}}</h2>
      <p class='address'>{{hub.address}}</p>
    </div>
  </n-link>
</template>

<script>
export default {
  props: ['hub'],
  computed: {
    hubPath() {
      return `/week/hubs/${this.hub.city}`
    }
  }
}
</script>

<style lang='scss' scoped>
.single {
  background: var(--light);
  padding: 1em;
  color: white;
  text-decoration: none;
}
small {
  text-transform: uppercase;
  padding: 0.25em 0.75em;
  display: inline-block;
  margin-bottom: 0.5em;
}
h2 {
  font-size: 1.25em;
  text-transform: capitalize;
  text-transform: uppercase;
}
span {
  font-weight: normal;
  display: inline-block;
  margin-left: 0.3em;
}
p {
  font-style: italic;
  font-size: 0.75em;
  &.address {
    margin-top: 0.5em;
  }
  &.notes {
    margin-top: 0.5em;
  }
}
</style>
