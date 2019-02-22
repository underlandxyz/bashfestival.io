<template>
  <div id='page'>
    <TheHeader />
    <div id='main'>
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/nav/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
</style>
