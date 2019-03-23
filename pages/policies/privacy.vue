<template>
  <div>
    <SubHeaderPolicies />
    <div class='w content'>
      <h1 id="title">Privacy Policy</h1>
      <p>We understand the importance of data privacy. You should always know what data we collect, how it's used, and how you can ask us to remove it.</p>
      <h2>Company information</h2>
      <p>BASH Festival of Code is run by Welcome to Underland Ltd ("Underland"), which is registered company 11288868 in England and Wales. Our registered address is 58 Craigerne Road, London, SE3 8SN, UK. If you need to get in touch, you can <n-link to='/contact'>contact us</n-link>.</p>
      <h2>Third-party platforms</h2>
      <p>We use Google Forms for our application process. This means your data will exist on Google's infrastructure. All data will be deleted from our account one month after BASH Festival of Code 2019 has finished, but it may remain on Google servers.</p>
      <p>We use Hotjar to understand how users navigate through our site, and use this to inform adjustments to the site. Hotjar has a 365-day retention policy on data collected.</p>
      <h2>Application data</h2>
      <p>The data we collect from applications is only accessible to the BASH Festival of Code team, Hub Leaders and any parties which we must in order to run the event, for example venue security and trained volunteers on the weekend. Partners will only be given data which is required for their role.</p>
      <p>In the interest of transparency, we will detail below all parties who we have given access to your data, along with what they were given:</p>
      <ul>
        <li>Application data: BASH Festival of Code team only</li>
        <li>DBS-check form: Lead Organisers and our Data Processor only. The Volunteer & Mentor Coordinator and Regional Hub Coordinator will only know if DBS checks came back clear or with need for further action.</li>
        <li>Attendee and parent names, contact detrails and special requirements: BASH Festival of Code team and Hub Leaders.</li>
        <li>Demographic details: anonymised, aggregated and made available as part of our post-event reporting.</li>
        <li>Dietary requirements: may be provided to caterers.</li>
      </ul>
      <p>If we need to provide details to any other parties, we'll update this document accordingly.</p>
      <h2>Right of removal</h2>
      <p>You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
      <ol>
        <li>Ask for a list of personal information we have about you, if any.</li>
        <li>Request a change, correction, or deletion of your personal information.</li>
        <li>Request that we avoid collecting anything in the future (opt-out).</li>
      </ol>
      <h2>Something feel out of place?</h2>
      <p>If you believe at any point that we are not following this privacy policy as stated, please contact us immediately via email (bash@underland.xyz), or via telephone (+44 7492 886145).<p>
      <h2>Changes to policy</h2>
      <p>This policy might change over time, which we reserve the right to do without notice. If we do make edits, you'll find them listed below.</p>
      <div class="log">
        <h2>Revisions</h2>
        <ul>
          <li>22 March 2019: Initial version written</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderPolicies from '@/components/nav/subnavs/SubHeaderPolicies'
export default {
  components: { SubHeaderPolicies }
}
</script>

<style lang="scss" scoped>
.log {
  background: var(--light);
  padding: 1em;
  margin-top: 2em;
  h2 {
    margin-top: 0;
  }
}
</style>
