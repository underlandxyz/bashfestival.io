<template>
  <div>
    <SubHeaderAbout/>
    <div class='w content'>
      <h1 id="title">Success Framework</h1>
      <p>Every good plan starts with an evaluation framework. This allows us to critically and objectively understand how BASH Festival of Code has been successful (above and beyond the logistics). Our framework is broken into 6 areas:</p>
      <h2>Attendance</h2>
      <ul>
        <li>The festival is designed to accommodate a capacity of up to 350 participants, and we're using a 2-round placing system to best maximise occupancy of places.</li>
        <li>This creates a meaningful contingency for circumstantial non-attendance and attrition from the week attendees to those present on the weekend.</li>
      </ul>
      <h2>Inclusivity</h2>
      <ul>
        <li>While we monitor demographic data in applications the requirements for successful offers of places at the Festival have been purposely kept to skill and interest level so that no prospective attendee is discriminated upon the basis of their gender or ethnicity.</li>
        <li>Additionally we have intentionally kept equipment requirements to a reasonable minimum, and geographic locations of hubs and the weekend venue distributed to positively include applicants from different socio-economic backgrounds.</li>
        <li>As the primary dividing barriers we have identified in what traditionally defies inclusivity in technical fields, we will be therefore be happy with significant representation in all three areas for Year 1, with post-event analysis enabling us to further develop inclusivity mechanisms for future events.</li>
      </ul>
      <p>Of course we always want to meet or exceed 50% for all of these groups - these goals express the minimum we will be happy with in Year 1.</p>
      <h2>Aspirations</h2>
      <p>BASH Festival of Code should demonstrably impact:</p>
      <ul>
        <li>future academic aspirations</li>
        <li>future career aspirations</li>
      </ul>
      <h2>Skills</h2>
      <p>Attendees should be able to measurably:</p>
      <ul>
        <li>achieve their personal learning goals from participating in the Festival</li>
        <li>acknowledge that they have learnt skills above and beyond those that they initially set as targets</li>
      </ul>
      <h2>Networking</h2>
      <p>Attendees should be able to: </p>
      <ul>
        <li>meet new people at BASH Festival of Code who they can further explore creative partnerships and friendships with</li>
        <li>make meaningful connections with people in industry - either through sponsors, mentors, volunteers or weekend content facilitators</li>
      </ul>
      <h2>Engagement</h2>
      <p>Attendees should be able to feel that their work over the festival demonstrates engagement with the challenges and content we provide, and we will specifically be seeking to explore this positive feedback in post-event analysis.</p>
      <h2>Future Development of our Framework</h2>
      <p>Post event analysis will be utilised as the basis for iteratively designing success criteria in successive years.</p>
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  components: { SubHeaderAbout },
  head () {
    return { title: `Success Framework - ${this.$store.state.title}` }
  },
}
</script>