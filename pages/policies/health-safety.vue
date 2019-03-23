<template>
  <div>
    <SubHeaderPolicies />
    <div class='w'>
      <h1 id="title">Heath & Safety Policy</h1>
    </div>
  </div>
</template>

<script>
import SubHeaderPolicies from '@/components/nav/subnavs/SubHeaderPolicies'
export default {
  components: { SubHeaderPolicies },
  head () {
    return { title: `Health & Safety Policy - ${this.$store.state.title}` }
  },
}
</script>