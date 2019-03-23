<template>
  <div>
    <SubHeaderSupport />
    <div class='w'>
      <h1 id="title">Talk</h1>
    </div>
  </div>
</template>

<script>
import SubHeaderSupport from '@/components/nav/subnavs/SubHeaderSupport'
export default {
  components: { SubHeaderSupport },
  head () {
    return { title: `Talk - ${this.$store.state.title}` }
  },
}
</script>