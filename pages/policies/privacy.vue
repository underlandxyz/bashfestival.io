<template>
  <div>
    <SubHeaderPolicies />
    <div class='w content'>
      <h1 id="title">Privacy Policy</h1>
      <p>We understand the importance of data privacy. You should always know what data we collect, how it's used, and how you can ask us to remove it.</p>
      <h2>Company information</h2>
      <p>BASH Festival of Code is run by Welcome to Underland Ltd ("Underland"), which is registered company 11288868 in England and Wales. Our registered address is 58 Craigerne Road, London, SE3 8SN, UK. If you need to get in touch, you can <n-link to='/contact'>contact us</n-link>.</p>
      <h2>Third-party platforms</h2>
      <p>We use Eventbrite for our ticketing process. This means your data will exist on Eventbrite's infrastructure. All data will be deleted from our account one month after BASH Festival of Code 2019 has finished, but it may remain on Eventbrite servers.</p>
      <p>We use Hotjar to understand how users navigate through our site, and use this to inform adjustments to the site. Hotjar has a 365-day retention policy on data collected.</p>
      <h2>Ticket data</h2>
      <p>The data we collect from tickets is only accessible to the BASH Festival of Code team, Hub Leaders and any parties which we must in order to run the event, for example venue security and trained volunteers on the weekend. Partners will only be given data which is required for their role.</p>
      <p>In the interest of transparency, we will detail below all parties who we have given access to your data, along with what they were given:</p>
      <ul>
        <li>Ticket data: BASH Festival of Code team only.</li>
        <li>DBS-check form: Lead Organisers and our Data Processor only. The Volunteer & Mentor Coordinator and Regional Hub Coordinator will only know if DBS checks came back clear or with need for further action.</li>
        <li>Attendee and parent names, contact details and special requirements: BASH Festival of Code team and Hub Leaders.</li>
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
      <p>If you believe at any point that we are not following this privacy policy as stated, please contact us immediately via email (<a href='mailto:bash@underland.xyz'>bash@underland.xyz</a>), or via telephone (+44 7492 886145).<p>
      <h2>Privacy of Person Policy</h2>
      <p>These guidelines govern how participants are able to interact with their rights to privacy of their person when physically attending any or all parts of the BASH Festival of Code.</p>
      <h3>Applicability & Scope</h3>
      <p>This policy affects all participants at any level of responsibility or oversight, and is intended for consideration at all facing interactions in sites used for BASH Festival activities between parties with regard to the core dates of 5th to 11th August 2019.</p>
      <p>The remit in all cases applies only to the participant directly affected.</p>
      <h3>Your Rights</h3>
      <ul>
        <li>
          <p><b>Personal space</b></p>
          <p>You are the arbiter of what constitutes as comfortable and sufficient personal space. If you feel that you are not being afforded the reasonable minimum of this by another party then you have the right to politely and firmly express this to the party who is encroaching upon your immediate space and causing the discomfort.</p>
        </li>
        <li>
          <p><b>How you respond to questions</b></p>
          <p>You have the right to choose what you will and will not respond to when receiving communication that invites response. If you do not feel comfortable with responding to the manner in which you are addressed, or the subject of the communication, then you are within your rights to disregard it in whole or politely refrain in part from supplying the information about yourself when personally communicated with.</p>
        </li>
        <li>
          <p><b>Seclusion</b></p>
          <p>You have the right to request that you be afforded access to a private space where you can be alone if you so require. This will be accommodated where practical unless it conflicts with the circumstances around which other individuals are similarly accommodated, or in any other way detracts from the concerns of the larger group. </p>
        </li>
      </ul>
      <h2>Picture and Video Privacy/Sharing/Owning Guidance</h2>
      <p>These guidelines govern how participants are able to retain their rights to privacy from appearing in photos or videos when attending any or all parts of the BASH Festival of Code.</p>
      <h3>Applicability & Scope</h3>
      <p>This policy affects all participating young people and is intended for consideration at all facing interactions in sites used for BASH Festival activities between parties with regard to the core dates of 5th to 11th August 2019.</p>
      <p>The remit in all cases applies only to the participant directly affected.</p>
      <h3>Permission</h3>
      <p>All parents or guardians giving permission for young people to attend festival activities are required to express consent or not to appear in photographs or videos while taking part.</p>
      <h3>Indication</h3>
      <p>Upon arrival at regional hub sessions, the hub leader is charged with issuing yellow lanyards to any participants that do not wish to appear in photos or videos. For weekend event activities, the attendees will be issued these upon arrival and registration at Millennium Point by a member of the BASH team.</p>
      <h3>Instruction</h3>
      <p>As part of pre-event guidance, all attendees will be shown a video explaining the following guidelines on how to comply with this policy.</p>
      <ol>
        <li>When taking photos or videos as part of the activities, attendees are to refrain from capturing the image of anybody wearing a yellow lanyard.</li>
        <li>Images or video that inadvertently or accidentally capture anybody wearing a yellow lanyard are to be deleted immediately. There will be strictly no exceptions permitted.</li>
        <li>Any instances of these guidelines not being adhered to will be dealt with as a violation of Personal Privacy.</li>
      </ol>
      <p>If you have any questions about these criteria and how they make affect your involvement in the BASH Festival of Code then <n-link to='/contact'>please get in touch</n-link>.</p>
      <h2>Changes to policy</h2>
      <p>This policy might change over time, which we reserve the right to do without notice. If we do make edits, you'll find them listed below.</p>
      <div class="log">
        <h2>Revisions</h2>
        <ul>
          <li>04 July 2019: Added Privacy of Person Policy</li>
          <li>22 March 2019: Initial version written</li>
          <li>02 August 2019: Added section on Picture and Video Privacy/Sharing/Owning Guidance</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderPolicies from '@/components/nav/subnavs/SubHeaderPolicies'
export default {
  components: { SubHeaderPolicies },
  head () {
    return { title: `Privacy Policy - ${this.$store.state.title}` }
  },
}
</script>
