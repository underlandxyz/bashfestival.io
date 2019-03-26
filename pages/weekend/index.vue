<template>
  <div>
    <SubHeaderWeekend />
    <div class='w content'>
      <h1 id="title">Finale Weekend</h1>
      <p>The weekend finale of BASH Festival of Code is a chance for you to showcase your projects, learn new skills through our multi-stream conference, and make like-minded friends from across the UK.</p>
      <p>It starts with a science fair and then transitions into a conference until the evening whwn we will have multiple chill activities to choose from - movies, games, and more. If you have specific activities you'd like to see - <a href="https://twitter.com/BASHFestival">tweet at us</a> and we'll see what we can do.</p>
      <p>Attendees then sleepover in the venue before a second day of conference acitivites, before the final repsentations of projects which judges find the most interesting.</p>
      <p>The weekend is free to attend thanks to our event sponsors, and it's expected that all attendees from the week will also attend the weekend. If cost is a barrier to this, take a look at information around our <n-link to='/weekend/access'>Access Scheme</n-link>.</p>
      <p>We'll share more details around the weekend closer to the event. For now you can find our <n-link to='/weekend/venue'>venue details</n-link> and <n-link to='/weekend/schedule'>weekend schedule</n-link>.</p>
    </div>
  </div>
</template>

<script>
import SubHeaderWeekend from '@/components/nav/subnavs/SubHeaderWeekend'
export default {
  components: { SubHeaderWeekend },
  head () {
    return { title: `Weekend - ${this.$store.state.title}` }
  },
}
</script>