<template>
  <div>
    <SubHeaderAbout />
    <div class='w'>
      <h1 id="title">About the Application Process</h1>
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  head () {
    return { title: `Application Process - ${this.$store.state.title}` }
  },
  components: { SubHeaderAbout }
}
</script>