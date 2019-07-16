<template>
  <div class='w'>
    <div class="text">
      <p>There are many great organisations that teach young people technical skills, but few to help them once they've learnt the basics. We aim to provide an environment and community for technical young people to further build their skills and networks.</p>
      <h2>August 5th - 9th Week Events</h2>
      <n-link :to='hub.path' v-for='hub in hubs' :key='hub.name' :style="{ background: hub.color }">{{hub.city}}</n-link>
      <h2>August 10th - 11th Finale</h2>
      <n-link to='/weekend' class='finale'>Birmingham</n-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hubs() {
      return this.$store.state.hubs.map(hub => {
        return {
          ...hub, 
          path: `/events/${hub.city}`
        }
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.w {
  padding-top: 4em;
  padding-bottom: 4em;
  display: flex;
}
.text {
  padding-right: 2em;
  font-size: 1.25em;
  text-align: center;
  width: 75%;
  margin: 0 auto 1em;
}
h2 {
  margin: 1em 0 0.5em;
}

a {
  display: inline-block;
  margin: 0.5em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.25em 0.5em;
  font-size: 1.25em;
}
a.finale {
  background: var(--blue);
  color: white;
}
@media screen and (max-width: 1000px) {
  .w {
    padding-top: 2em;
    flex-direction: column;
    text-align: center;
  }
  .text {
    font-size: 1em;
    padding-right: 0;
    width: 100%;
    margin-bottom: 0;
  }
}
</style>
