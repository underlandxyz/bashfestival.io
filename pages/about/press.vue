<template>
  <div>
    <SubHeaderAbout/>
    <div class='w content'>
      <h1 id="title">Press Release</h1>
      <p><a href="/press-release.pdf">Download the press release as a PDF</a></p>
      <img src='~/assets/img/press-image.jpg'>
      <img src="/og.png">
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  components: { SubHeaderAbout },
  head () {
    return { title: `Press - ${this.$store.state.title}` }
  },
}
</script>

<style scoped>
img {
  width: 100%;
  margin-top: 2em;
}
</style>