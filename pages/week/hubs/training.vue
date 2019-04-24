<template>
  <div>
    <SubHeaderWeek />
    <div class='w'>
      <h1 id="title">Training</h1>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrraS18zWuoaBmD7?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="800" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
  </div>
</template>

<script>
import SubHeaderWeek from '@/components/nav/subnavs/SubHeaderWeek'
export default {
  components: { SubHeaderWeek },
  head () {
    return { title: `Training - ${this.$store.state.title}` }
  },
}
</script>

<style scoped>
  iframe {
    margin-bottom: 4em;
  }
</style>