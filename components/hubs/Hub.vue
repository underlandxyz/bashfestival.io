<template>
  <n-link :to='hubPath' class='single' :style="{ background: hub.color }">
    <div class="meta">
      <small>{{hub.city}}</small>
      <h2>{{hub.name}}</h2>
      <p class='address'>{{hub.address}}</p>
      <span>See more</span>
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
  color: var(--dark);
  text-decoration: none;
}
small {
  text-transform: uppercase;
  padding: 0.25em 0.75em;
  display: inline-block;
  margin-bottom: 0.5em;
  background: white;
  color: var(--dark);
}
h2 {
  font-size: 1.25em;
  text-transform: capitalize;
  text-transform: uppercase;
}
span {
  font-weight: normal;
  display: inline-block;
  font-size: 0.75em;
  text-decoration: underline;
  margin-top: 0.75em;
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
