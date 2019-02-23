<template>
  <div id='page'>
    <TheHeader />
    <div id='main'>
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/nav/TheHeader'
import TheFooter from '~/components/nav/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
</style>
