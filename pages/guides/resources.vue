<template>
  <div>
    <SubHeaderGuides />
    <div class='w content'>
      <h1 id="title">Technical resources</h1>
      <p><a href="https://airtable.com/shrpCTLG3Aubjv1sd">Submit a new resource</a></p>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrLc7FiBdMWAn0ki?backgroundColor=blue&layout=card&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
  </div>
</template>

<script>
import SubHeaderGuides from '@/components/nav/subnavs/SubHeaderGuides'
export default {
  components: { SubHeaderGuides },
  head () {
    return { title: `Resources - ${this.$store.state.title}` }
  },
}
</script>