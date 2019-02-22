<template>
  <div>
    <Hero />
    <Intro />
    <Stats />
  </div>
</template>

<script>
import Hero from '~/components/home/Hero'
import Intro from '~/components/home/Intro'
import Stats from '~/components/home/Stats'

export default {
  components: {
    Hero,
    Intro,
    Stats
  }
}
</script>

<style>
</style>
