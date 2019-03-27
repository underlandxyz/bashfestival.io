<template>
  <div class='w content'>
    <h1 id="title">Apply to BASH Festival of Code 2019</h1>
    <p>Applications close 15 May at 11:59pm GMT. We'll inform all applicants by 20 May and require you to accept your place before 3 June. <n-link to='/about/application'>Learn more about the application process here.</n-link></p>
    <div class="soon">Applications will open on March 31 at 12pm.</div>
  </div>
</template>

<script>
export default {
  head () {
    return { title: `Apply - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
.soon {
  text-align: center;
  background: var(--pink-dark);
  color: white;
  padding: 1em;
  margin-top: 2em;
}
</style>
