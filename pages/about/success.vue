<template>
  <div>
    <SubHeaderAbout/>
    <div class='w content'>
      <h1 id="title">Success Framework</h1>
      <p>Every good plan starts with an evaluation framework. However boring it may sound, this framework will allow us to critically and objectively understand if BASH Festival of Code has been successful (above and beyond the logistics). Our framework is broken into 6 areas:</p>
      <h2>Attendance</h2>
      <ul>
        <li>Minimum turnout: 300. Desired turnout: 350.</li>
        <li>Aiming for no more than 20% no-shows between registration and the week.</li>
        <li>Aiming for no more than 10% attrition between the week attendees and the weekend.</li>
      </ul>
      <h2>Inclusivity</h2>
      <ul>
        <li>Minimum of 25% of attendees to be non-male (female, non-binary, agender).</li>
        <li>Minimum of 25% of attendees to be people of colour.</li>
        <li>Minimum of 25% of attendees to be from low socioeconomic backgrounds.</li>
      </ul>
      <p>Of course we always want to meet or exceed 50% for all of these groups - these goals express the minumum we will be happy with in Year 1.</p>
      <h2>Aspirations</h2>
      <ul>
        <li>Does BASH Festival of Code impact future academic aspirations?</li>
        <li>Does BASH Festival of Code impact future career aspirations?</li>
      </ul>
      <h2>Skills</h2>
      <ul>
        <li>Do attendees achieve their personal learning goals?</li>
        <li>Do attendees acknowledge that they have learn any skills above and beyond the ones they set as targets?</li>
      </ul>
      <h2>Networking</h2>
      <ul>
        <li>Do attendees meet new people at BASH Festival of Code who they intend on continuing their relationship with?</li>
        <li>Do attendees make any meaningful connections with people in industry - either through sponsors, mentors, volunteers or weekend content facilitators?</li>
      </ul>
      <h2>Engagement</h2>
      <ul>
        <li>Do attendees engage with our challenges and the content we provide?</li>
        <li>Do people provide positive feedback about the event?</li>
      </ul>
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