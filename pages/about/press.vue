<template>
  <div>
    <SubHeaderAbout/>
    <div class='w content'>
      <h1 id="title">Press Release</h1>
      <p><a href="/press-release.pdf">Download the press release as a PDF</a></p>
      <h2>Free nationwide summer coding camp aims to support the next generation of young software developers</h2>
      <p>BASH Festival of Code is a free week-long coding festival for 13-17 year olds in 11 regional locations this August, with a finale in Birmingham. It aims to provide support to young people with existing coding skills and enable them to build meaningful projects together. </p>
      <p>With an estimated 1.2 million more people with specialist digital skills needed by 2022, it’s critical that we support young people in further building their technical skills outside of the classroom by applying them in real-world settings. </p>
      <p>During the week, young people will work together and be supported by professional mentors to build functioning prototypes around the themes of games, data and music. At the weekend they’ll all travel to Millennium Point in Birmingham to showcase their projects and enjoy our curated multi-stream conference. </p>
      <p><i>“We believe that BASH Festival of Code is one part of the puzzle around supporting young technical people to flourish, and hope we can build a strong community of designers, coders and engineers around the country.”</i> - Kevin Lewis, Lead Organiser of BASH Festival of Code</p>
      <p>BASH Festival of Code 2019 has been supported by organisations including MongoDB, Samsung Internet, Barclays and Rolls-Royce.</p>
      <hr>
      <p>BASH Festival of Code [https://bashfestival.io] is an event by Underland Events, the developer events company [https://underland.events]. Attendees take part over the full 7 days between August 5-11 2019 inclusive. </p>
      <p>It is free, with an Access Scheme fund to support the travel costs to Brimingham for families who may not be able to afford the event otherwise.</p>
      <p><small>Citation: https://www.gov.uk/government/news/schools-minister-announces-boost-to-computer-science-teaching</small></p>
      <img src='~/assets/img/press-image.jpg'>
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  components: { SubHeaderAbout },
  head () {
    return { title: `Press - ${this.$store.state.title}` }
  },
}
</script>

<style scoped>
img {
  width: 100%;
  margin-top: 2em;
}
</style>