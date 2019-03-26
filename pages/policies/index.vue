<template>
  <div>
    <SubHeaderPolicies />
    <div class='w content'>
      <h1 id="title">Our policies</h1>
      <p>There are a number of policies created by the BASH Festival of Code team to ensure everyone is safe and happy throughout the event.</p>
      <p>They're listed below. If you have any questions about them, please <n-link to='/contact'>contact us</n-link>.</p>
      <ul>
        <li><n-link to='/policies/conduct'>Code of Conduct</n-link></li>
        <li><n-link to='/policies/health-safety'>Health & Safety Policy</n-link></li>
        <li><n-link to='/policies/safeguarding'>Safeguarding Policy</n-link></li>
        <li><n-link to='/policies/privacy'>Privacy Policy</n-link></li>
      </ul>
      <p>We are still working on our Health &amp; Safety Policy as we confirm exactly which spaces we will be using at the weekend. We are also currently forming an Incident Response Policy, which detailes the steps we will take is any of our policies are broken.</p>
    </div>
  </div>
</template>

<script>
import SubHeaderPolicies from '@/components/nav/subnavs/SubHeaderPolicies'
export default {
  components: { SubHeaderPolicies },
  head () {
    return { title: `Policies - ${this.$store.state.title}` }
  },
}
</script>