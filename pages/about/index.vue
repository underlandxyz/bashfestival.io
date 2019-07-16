<template>
  <div>
    <SubHeaderAbout />
    <div class='w content'>
      <h1 id="title">About BASH Festival of Code</h1>
      <h2>What is it?</h2>
      <p>BASH Festival of Code is a free week-long coding festival for 13-17 year olds across the UK. During our week events, teams of young people will spend the week building awesome projects together before the finale weekend in Birmingham. The finale will be packed with talks, workshops, music, films and more. Projects will be focused around any of our three themes - games, music and data.</p>
      <h2>Why take part?</h2>
      <p>There are lots of amazing programmes to teach young people how to code, and once they have learnt the basics it puts them into a much bigger and sometimes overwhelming world of choice in terms of where they can go with developing these skills. The BASH Festival of Code is designed to foster regional and technical communities, providing a foundation structure in which they can further explore and innovate, taking advantage of the collaborative benefits of working with other young coders. We thereby aim to give young people a space where a wider sense of the technical community they are part of can further support and build on their skills.</p>
      <h2>Who is this for?</h2>
      <p>This event is for young people who have learnt the basics of software development (working knowledge in one programming or markup language is fine). Supported by each other and adult mentors, they'll apply their skills and learn new ones.</p>
      <h2>When is it?</h2>
      <p>The week-days portion in regional hubs runs across August 5th – 9th, from 10am - 4pm each day. The weekend portion including overnight stay takes place on August 10th - 11th</p>
      <h2>Where is it?</h2>
      <p>During the week, young people will be in one of our <n-link to='/events'>regional events</n-link> across the UK. At the weekend, our finale will be in <n-link to='/weekend/venue'>Birmingham</n-link>. Attendees are expected to cover the cost of travel to the finale, although we have a small <n-link to='/weekend/access'>Access Scheme</n-link> to help make this achievable for those who otherwise wouldn't be able to afford it.</p>
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  components: { SubHeaderAbout },
  head () {
    return { title: `About - ${this.$store.state.title}` }
  },
}
</script>