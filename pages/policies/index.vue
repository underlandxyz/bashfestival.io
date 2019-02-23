<template>
  <div>
    <SubHeaderPolicies />
    <div class='w content'>
      <h1 id="title">Our policies</h1>
      <p>There are a number of policies created by the BASH Festival team to ensure everyone is safe and happy throughout the event.</p>
      <p>They're listed below. If you have any questions about them, please <n-link to='/contact'>contact us</n-link>.</p>
      <ul>
        <li><n-link to='/policies/conduct'>Code of Conduct</n-link></li>
        <li><n-link to='/policies/incident-response'>Incident Response Policy</n-link></li>
        <li><n-link to='/policies/health-safety'>Health & Safety Policy</n-link></li>
        <li><n-link to='/policies/safeguarding'>Safeguarding Policy</n-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubHeaderPolicies from '@/components/nav/subnavs/SubHeaderPolicies'
export default {
  components: { SubHeaderPolicies }
}
</script>