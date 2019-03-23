<template>
  <div>
    <SubHeaderWeek />
    <div class='w'>
      <h1 id="title">Resources</h1>
    </div>
  </div>
</template>

<script>
import SubHeaderWeek from '@/components/nav/subnavs/SubHeaderWeek'
export default {
  components: { SubHeaderWeek },
  head () {
    return { title: `Resources - ${this.$store.state.title}` }
  },
}
</script>