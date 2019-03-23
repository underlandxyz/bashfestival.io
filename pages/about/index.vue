<template>
  <div>
    <SubHeaderAbout />
    <div class='w'>
      <h1 id="title">About BASH Festival of Code</h1>
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  components: { SubHeaderAbout },
  head () {
    return { title: `About - ${this.$store.state.title}` }
  },
}
</script>