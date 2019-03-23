<template>
  <div>
    <SubHeaderWeekend />
    <div class='w'>
      <h1 id="title">Packing List</h1>
    </div>
  </div>
</template>

<script>
import SubHeaderWeekend from '@/components/nav/subnavs/SubHeaderWeekend'
export default {
  components: { SubHeaderWeekend },
  head () {
    return { title: `Packing List - ${this.$store.state.title}` }
  },
}
</script>