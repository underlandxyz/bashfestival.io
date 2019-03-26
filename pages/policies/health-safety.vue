<template>
  <div>
    <SubHeaderPolicies />
    <div class='w content'>
      <h1 id="title">Heath & Safety Policy</h1>
      <p>We are still working on this policy as we are yet to confirm every space we will be using at the weekend finale. We would much rather delay the release of this policy and make sure it is well researched and thought through.</p>
      <p><n-link to=/contact>If you have any questions please contact us.</n-link></p>
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