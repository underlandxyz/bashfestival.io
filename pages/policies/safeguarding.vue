<template>
  <div>
    <SubHeaderPolicies />
    <div class='w'>
      <h1 id="title">Safeguarding</h1>
    </div>
  </div>
</template>

<script>
import SubHeaderPolicies from '@/components/nav/subnavs/SubHeaderPolicies'
export default {
  components: { SubHeaderPolicies },
  head () {
    return { title: `Safeguarding Policy - ${this.$store.state.title}` }
  },
}
</script>