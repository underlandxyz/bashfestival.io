<template>
  <div>
    <SubHeaderGuides />
    <div class='w content'>
      <h1 id="title">Daily videos</h1>
      <p>Check back on Monday 5th August for the first video.</p>
      <h2>Monday</h2>
      <p>In this video we'll welcome you to the event, introduce you to the themes and our sponsors, and talk about how to form teams and think of ideas on what to build.</p>
      <!-- <iframe src="https://www.youtube.com/embed/BpEzbyYLRw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <h2>Tuesday</h2>
      <p>In this video we'll be discussing how to decide on exactly what parts of your idea to build, how to choose technologies and splitting up work and communicating as a team.</p>
      <!-- <iframe src="https://www.youtube.com/embed/KW2QI7q_2ik" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <h2>Wednesday</h2>
      <p>In this video we'll talk about when it's right to change your idea, and how to back up your work so you don't lose it.</p>
      <!-- <iframe src="https://www.youtube.com/embed/qV6fde6NyUg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <h2>Thursday</h2>
      <p>In this video we'll cover documenting your work so you have something to show at the end of the event.</p>
      <!-- <iframe src="https://www.youtube.com/embed/L6-sOJBH2Fc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <h2>Friday</h2>
      <p>In this video we'll get you ready for presenting your idea and give you an idea of what to expect from the weekend.</p>
      <!-- <iframe src="https://www.youtube.com/embed/rewkA-_jUqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    </div>
  </div>
</template>

<script>
import SubHeaderGuides from '@/components/nav/subnavs/SubHeaderGuides'
export default {
  components: { SubHeaderGuides },
  head () {
    return { title: `Videos - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 500px;
}
@media screen and (max-width: 960px) {
  iframe {
    height: 54vw;
  }
}
</style>
