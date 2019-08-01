<template>
  <div id='show-page'>
    <SubHeaderSupport />
    <div class='w content'>
      <h1 id="title">Deliver a talk or workshop at the weekend</h1>
      <p>Our <n-link to='/weekend/schedule'>schedule</n-link> for the BASH Festival of Code weekend involves a multi-stream conference for the attendees. If you're interested in filling a 1-2 hour talk or workshop, we'd love to hear from you.</p>
      <p>Here's what you need to know:</p>
      <ul>
        <li>Our attendees have some degree of technical knowledge, but it may not be very high. We'd prefer beginner technical (or non-technical) topics.</li>
        <li>For well adopted technologies, we'd be interested in slightly more intermediate content.</li>
        <li>If we raise enough funds, we'd be happy to cover travel expenses, but this currently isn't the case. Please assume that we won't be able to unless we communicate otherwise. This means that talks or workshops might be better for existing weekend volunteers.</li>
      </ul>
      <!-- <iframe class="airtable-embed" src="https://airtable.com/embed/shrSjzB3k0vc1JtMc?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe> -->

      <h2>We've now filled all of our slots.</h2>
      <!-- <n-link to='/contact'>Please get in touch with our Weekend Content Coordinator</n-link> -->
    </div>
  </div>
</template>

<script>
import SubHeaderSupport from '@/components/nav/subnavs/SubHeaderSupport'
export default {
  components: { SubHeaderSupport },
  head () {
    return { title: `Talk - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
iframe {
  margin-top: 2em;
}
#show-page {
  &::after {
    background-image: url('~assets/img/jamie/show.svg');
    background-position: right;
    background-size: 25vw;
    background-repeat: no-repeat;
    content: "";
    opacity: 0.25;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
}
</style>
