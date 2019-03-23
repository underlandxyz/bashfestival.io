<template>
  <div>
    <SubHeaderAbout/>
    <div class='w'>
      <h1 id="title">What success looks like to us</h1>
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  components: { SubHeaderAbout },
  head () {
    return { title: `Success Framework - ${this.$store.state.title}` }
  },
}
</script>