<template>
  <div>
    <SubHeaderSupport />
    <div class='w content'>
      <h1 id="title">Speaker Crib Sheet</h1>
      <p>Firstly thank you so much for agreeing to deliver a talk or workshop at the BASH Festival of Code weekend.</p>  
      <p>Check out where you are in the <n-link to='/weekend/schedule'>schedule</n-link> and familiarise yourself with the <n-link to='/weekend/venue'>venue location</n-link>. All talks will be happening in 'Connect 1' and all the workshops in 'Connect 2'. You should expect up to 30 attendees in your sessions.</p>
      <p>All sessions will have 2-4 volunteers to support you in delivering your session. This includes A/V support, but may also extend to helping you to troubleshoot problems.</p>
      <p>Both session rooms will have connectors for HDMI, USB-C and Mini DisplayPort and a projector.</p>
      <p>Some key things to remember:</p>
      <ul>
        <li>Try and avoid acronyms and jargon.</li>
        <li>You should never be left alone with an attendee. Your session volunteers are there to minimise this risk, but please be aware of this.</li>
        <li>You have an hour for each session. You don't need to fill it. Young people can return to our main breakout space if you run short, but ideally we'd like you to fill at least 40 minutes please.</li>
        <li>The audience are 13-17 year olds with a small degree of existing technical knowledge. Please keep this in mind when devising your content in terms of difficulty. Assume little to no knowledge in the subject areas you're talking about.</li>
      </ul>
      <p>If you need any specific setup beyond round tables in the workshop room and a theatre-style seating arrangement in the talk room, please let us know with as much notice as possible. Thanks!</p>
    </div>
  </div>
</template>

<script>
import SubHeaderSupport from '@/components/nav/subnavs/SubHeaderSupport'
export default {
  components: { SubHeaderSupport },
  head () {
    return { title: `Talk Guidance - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
</style>
