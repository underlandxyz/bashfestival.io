<template>
  <div class='w content'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdXJ2a3sm6jCXWGB1x2jL859ftOzv_b4pFNmPzUul23uf8r2g/viewform?embedded=true" height="3272" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </div>
</template>

<script>
export default {
  head () {
    return { title: `Apply - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  margin-top: 2em;
}
</style>
