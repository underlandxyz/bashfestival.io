<template>
  <div id='mentor-page'>
    <SubHeaderSupport />
    <div class='w content'>
      <h1 id="title">Share BASH Festival of Code</h1>
      <p>We need your help to share BASH Festival of Code and help us get the word out to more young people, and support from <n-link to='/support/mentor'>Mentors</n-link> & <n-link to='/support/volunteer'>Volunteers</n-link>.</p>
      <h2>Images & Printables</h2>
      <ul>
        <li><a href="/Poster.pdf">Download our poster to put up in schools and community centres.</a></li>
        <li><a href="/Poster-LowInk.pdf">A low-ink version of our poster, which takes away a lot of the background colouring to save your printer.</a></li>
        <li><a href="/og.png">A rectangle image for you to share on Facebook or Twitter.</a> If you tweet, make sure to use #BASHFestival and tag us @BASHFestival.</li>
      </ul>
      <h2>Summary</h2>
      <p>"BASH Festival of Code is a free week-long coding festival for 13-17 year olds across the UK. We aim to provide an environment and community for technical young people to further build their skills and networks."</p>
      <h2>Sample Tweets</h2>
      <p>For attendee recruitment</p>
      <ul>
        <li>Are you 13-17, know how to code and based in the UK? You should check out @BASHFestival - a free week-long coding festival in August and meet other young people like you! https://bashfestival.io #BASHFestival</li>
        <li>The @BASHFestival weekend is going to have loads of workshops, talks and breakout activities. Spend the weekend with other young technical people, make new friends and build cool stuff! https://bashfestival.io #BASHFestival</li>
      </ul>
      <p>For Mentor & Volunteer recruitment</p>
      <ul>
        <li>Are you free at all between August 5-11? @BASHFestival are looking for mentors and volunteers to help run their free coding festival for young people. https://bashfestival.io/support #BASHFestival</li>
      </ul>
      <h2>Sample Email for Schools</h2>
      <p><i>Note: we've always found it best to try and get directly in touch with an ICT/Computing teacher or Head of Department. They generally have a better idea of the young people who'd most benefit from this event.</i></p>
      <article>
        <p>I thought some of your students might be interested in <a href='https://bashfestival.io'>BASH Festival of Code</a>. It's a free week-long coding festival for 13-17 year olds across the UK in August. On Monday-Friday young people are in one of {{hubNumber}} regional hubs around the UK and build projects together using their technical skills and supported by mentors.</p>
        <p>At the weekend they travel to Birmingham for a big finale where they'll present their projects, have a free multi-stream conference, and get to talk with industry partners about their work and careers. There's an Access Scheme to help with the cost of travel to the weekend.</p>
        <p>If you have any particularly engaged students who have some coding ability, please do share this with them and their parents. Tickets are free, but first come first served, so encourage them to sign up as this is a great opportunity!</p>
        <p>Let me know if you have any questions!</p>
      </article>
    </div>
  </div>
</template>

<script>
import SubHeaderSupport from '@/components/nav/subnavs/SubHeaderSupport'
export default {
  components: { SubHeaderSupport },
  head () {
    return { title: `Share - ${this.$store.state.title}` }
  },
  computed: {
    hubNumber() {
      return this.$store.state.hubs.length;
    }
  },
}
</script>

<style lang="scss" scoped>
article {
  background: #eee;
  padding: 1px 1em;
  margin-top: 2em;
}
</style>
