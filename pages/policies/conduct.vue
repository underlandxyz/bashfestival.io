<template>
  <div>
    <SubHeaderPolicies />
    <div class='w content'>
      <h1 id="title">Code of Conduct 💖</h1>
      <p>We believe that everyone has the right to be in a safe and welcoming environment when attending BASH Festival of Code. This Code of Conduct is about creating an open and welcoming environment at our event so that all our attendees feel able to participate while being safe and happy.</p>
      <p>People can have lots of viewpoints, and being part of this event means:</p>
      <ul>
        <li>Committing to helping each other</li>
        <li>Listening to others views</li>
        <li>Setting an example</li>
        <li>Treating everyone equally</li>
        <li>Respecting your environment and the people around you</li>
      </ul>
      <h2>What is not acceptable</h2>
      <p>To represent yourself to your very best ability, you must always practice:</p>
      <ul>
        <li>No violence</li>
        <li>No harassment</li>
        <li>No discrimination</li>
        <li>No inappropriate imagery or content</li>
      </ul>
      <p>Harassment includes but is not limited to offensive verbal or written comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. <b>If what you’re doing is making someone feel uncomfortable, that counts as harassment and is enough reason to stop doing it.</b></p>
      <h2>Attendees asked to stop any harassing behaviour are expected to comply immediately.</h2>
      <p>Absolutely everyone involved with our activities, including participants, sponsors, guests, volunteers and our organisers, are subject to our Code of Conduct.</p>
      <p>If a person engages in any harassing behaviour, we may take any action we deem appropriate, including (but not limited to) warnings, expulsion, and banning, with no eligibility for reimbursement or refund of any type.</p>
      <h2>What we won't respond to</h2>
      <p>Our community priotises marginalised people's safety over privileged people's comfort. We will not act on complaints regarding:</p>
      <ul>
        <li>Reverse-isms, including reverse racism, reverse sexism, and cisphobia.</li>
        <li>Reasonable communication of boundaries, such as "leave me alone", "go away", or "I'm not discussing this with you"</li>
        <li>Refusal to explain or debate social justice concepts</li>
      </ul>
      <p>We expect people to follow these rules at all event venues should there be more than one.</p>
      <h2>Reporting Code of Conduct violations</h2>
      <p>If you are subject to, or see something, that makes you uncomfortable please tell us. No issue is too small, and we want to make sure you are safe and happy.</p>
      <h3>During the week</h3>
      <p>During the week, you can report code of conduct violations to your Hub Leader. If you feel unable to approach them, or they are the reason for your report, please contact the BASH team by:</p>
      <ul>
        <li>Calling or texting our team on +44 7449 549 868 (this will call Kevin Lewis and Sunil Patel - our lead organisers)</li>
        <li>Emailing our team at <a href="mailto:incidents@underland.xyz">incidents@underland.xyz</a></li>
        <li>Sending us a Direct Message on <a href='https://twitter.com/bashfestival'>Twitter</a></li>
        <li>Using the anonymous reporting form below</li>
      </ul>
      <h3>During the weekend</h3>
      <p>Any of the above methods will work, but you can additionally approach any volunteer, who will be clearly marked.</p>
      <h2>Changes to policy</h2>
      <p>This policy might change over time, which we reserve the right to do without notice. If we do make edits, you'll find them listed below.</p>
      <div class="form">
        <iframe class="airtable-embed" src="https://airtable.com/embed/shrj780oQ2ttOJYSH?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="655" style="background: transparent; border: 1px solid #ccc;"></iframe>
      </div>
      <div class="log">
        <h2>Revisions</h2>
        <ul>
          <li>20 February 2019: Initial version published, adapted from the core Underland Code of Conduct.</li>
          <li>10 June 2019: Provided anonymous form as a way to report and incident</li>
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
    return { title: `Code of Conduct - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
iframe {
  margin-top: 2em;
}
</style>
