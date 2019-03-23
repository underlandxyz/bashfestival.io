<template>
  <div class='w'>
    <h1 id="title">Apply</h1>
  </div>
</template>

<script>
export default {
  head () {
    return { title: `Apply - ${this.$store.state.title}` }
  },
}
</script>