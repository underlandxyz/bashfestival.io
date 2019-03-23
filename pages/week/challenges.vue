<template>
  <div>
    <SubHeaderWeek />
    <div class='w'>
      <h1 id="title">Challenges</h1>
    </div>
  </div>
</template>

<script>
import SubHeaderWeek from '@/components/nav/subnavs/SubHeaderWeek'
export default {
  components: { SubHeaderWeek },
  head () {
    return { title: `Challenges - ${this.$store.state.title}` }
  },
}
</script>