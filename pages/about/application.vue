<template>
  <div>
    <SubHeaderAbout />
    <div class='w content'>
      <h1 id="title">About the Application Process</h1>
      <p>We have decided to use an application-based ticketing system for BASH Festival of Code 2019. This is for a number of reasons:</p>
      <ul>
        <li>We want to provide a big and fair application window - making sure everyone who wants to gets a chance to apply, instead of those who happen to be quickest at getting tickets.</li>
        <li>We want to ensure all Regional Hubs, and therefore our event as a whole, is full of induviduals from a diverse set of backgrounds and circumstances. Having applications helps us avoid scenarios where a hub lacks diversity.</li>
        <li>In the case that young people are at the very beginning of their technical journey and can't code, we can signpost them to initatives which are more suitable for them.</li>
      </ul>
      <p>Our applications in no way exist to pick the 'best' or 'most skilled' young people. Just a basic working knowledge of a written programming or markup language is all we require.</p>
      <h2>Initial Applications - Deadline May 15th 2019</h2>
      <p>Our application takes about 15 minutes and is split into two sections.</p>
      <p>Part 1 is for the applicant to fill out themselves. It tells us about them, their interests and what they hope to get out of the event. There are no wrong answers! </p>
      <p>Part 2 is for the applicant's parent or guardian. This is to make sure we always have a point of contact and that they're always kept in the loop. </p>
      <p>Both parts must be filled out at the same time. Some questions help us later <n-link to='/about/success'>assess the success of our event</n-link> when put together with a post-event questionnaire.</p>
      <p><b>We'll send out acceptances to applicants and their parents or guardians on May 20th 2019. </b></p>
      <h2>Round 1 Acceptances - Deadline June 3rd 2019</h2>
      <p>You'll then have 2 weeks to confirm your space at the event, which we ask you to only do if you are certain that you can attend. Both parents and attendees will need to accept, and this will be the point we collect formal permission documents from parents or guardians.</p>
      <h2>Round 2 Acceptances - Deadline June 11th 2019</h2>
      <p>We expect some applicants won't be able to accept their invitations to BASH Festival of Code. On June 4th 2019 we will send out a second wave of invites which must be accepted by June 11th 2019.</p>
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  head () {
    return { title: `Application Process - ${this.$store.state.title}` }
  },
  components: { SubHeaderAbout }
}
</script>