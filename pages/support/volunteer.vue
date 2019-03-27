<template>
  <div>
    <SubHeaderSupport />
    <div class='w content'>
      <h1 id="title">Volunteer at the BASH Festival of Code Weekend</h1>
      <n-link to='/support/mentor' class="info"><i class="fas fa-info-circle"></i>Want to volunteer during the week as a Mentor? Click here for more information.</n-link>
      <div class="top">
        <div class="copy">
          <p>BASH Festival of Code is run by Underland as a for-good project. It's team is made up of Underland staff and a set of awesome volunteers who are helping because they see the value in supporting technical young people build their networks and skills.</p>
          <p>The <n-link to='/weekend'>weekend</n-link> is going to be awesome, but it's also quite a complex event to organise with lots of moving parts. It simply won't run without support from additional volunteers - and that's where you come in!</p>
        </div>
      </div>
      
      <p>Places we'll need help are:</p>
      <ul>
        <li>Setting up and resetting spaces throughout the event</li>
        <li>Registration & making sure we know who is in/out of the building</li>
        <li>Making sure food is delivered fairly and efficiently</li>
        <li>Helping us make sure the multi-stream conference runs smoothly</li>
        <li>Overnight supervision of the sleeping spaces</li>
      </ul>
      <p>We're still assessing the exact requirements for volunteers at the weekend, but we <b>will</b> need help. If you're able to set aside either or both of the days of BASH Festival of Code (or the overnight) please let us know by filling in the form below...</p>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrqcjsFIcKdH2ecu?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="600" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
  </div>
</template>

<script>
import SubHeaderSupport from '@/components/nav/subnavs/SubHeaderSupport'
export default {
  components: { SubHeaderSupport },
  head () {
    return { title: `Volunteer - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
  .info {
  background: var(--light);
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 1em;
  margin-bottom: 2em;
  i {
    margin-right: 0.5em;
  }
}
iframe {
margin-top: 2em;
}
.top {
  display: flex;
  img {
    flex: 100px;
  }
  .copy {
    padding-right: 2em;
  }
}
@media screen and (max-width: 1000px) {
  .top {
    display: flex;
    flex-direction: column-reverse;
    .copy {
      padding: 0;
    }
    img {
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
