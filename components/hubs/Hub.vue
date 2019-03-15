<template>
  <div class='single'>
    <div class="meta">
      <h2>{{hub.name}}</h2>
      <p class='address'>{{hub.address}}</p>
      <p class='notes' v-if='hub.notes'>{{hub.notes}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hub']
}
// name, city, address, ?notes
</script>

<style lang='scss' scoped>
.single {
  background: var(--light);
  padding: 1em;
}
.short {
  color: white;
  background: var(--blue);
}
p {
  font-style: italic;
  &.address {
    margin: 0.5em 0;
  }
  &.notes {
    color: grey;
  }
}
</style>
