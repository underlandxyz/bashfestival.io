<template>
  <div class='w content'>
    <h1 id="title">Contact 💬</h1>
    <p>Before getting in touch, check out the <n-link to='/about/faq'>FAQ</n-link> page.</p>
    <h2>Emails</h2>
    <ul>
      <li>If you're a Hub Leader, first reach out to us on Slack. For email, please get in touch with Sanzi Chiorescu, our Regional Hub Coordinator (<a href='mailto:sanzi@bashfestival.io'>sanzi@bashfestival.io</a>)</li>
      <li>If you are a week mentor or a weekend volunteer, first reach out to us on Slack. For email, please get in touch with David Durant, our Volunteer &amp; Mentor Coordinator (<a href='mailto:david@bashfestival.io'>david@bashfestival.io</a>)</li>
      <li>If you have questions as a (potential) attendee or parent/guardian, please email (<a href='mailto:info@bashfestival.io'>info@bashfestival.io</a>)</li>
      <li>For all other enquiries, including sponsorship &amp; press please email Kevin, our Co-Lead Organiser (<a href="mailto:kevin@bashfestival.io">kevin@bashfestival.io</a>)</li>
    </ul>
    <h2>Social</h2>
    <ul>
      <li><a href="https://twitter.com/bashfestival">@BASHFestival on Twitter</a></li>
      <li><a href="https://www.facebook.com/BASHFestival">BASH Festival on Facebook</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  head () {
    return { title: `Contact - ${this.$store.state.title}` }
  },
}
</script>