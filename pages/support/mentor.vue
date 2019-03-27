<template>
  <div id='mentor-page'>
    <SubHeaderSupport />
    <div class='w content'>
      <h1 id="title">Mentor at BASH Festival of Code</h1>
      <div class="top">
        <div class="copy">
          <p>Mentors are a key part of making BASH Festival of Code impactful for the young people who attend. While they'll all have some degree of existing technical knowledge, we will encourage attendees to try new skills, and inevitably they'll need some support.</p>
          <p>This is where you come in. Each Hub will have 3-4 mentors at any point in time. Your job isn't to build projects for attendees, but to support them in troubleshooting - pointing them in the direction of solutions and answering their questions.</p>
        </div>
      </div>
      <h2>Interested?</h2>
      <p>We're still confirming the process to apply as a mentor, but here are the basics:</p>
      <ul>
        <li>You'll need to complete a new DBS Check or provide an existing certificate if you've registered with the DBS Update Service. If you have an existing DBS Check but have not registered with the DBS Update Service, then you'll need to compelte a new check which we will organise.</li>
        <li>We're specifcially looking for technical mentors - so proficiency with at least 1 programming language is a must. Ideally, you should be comfortable explaining these topics too.</li>
        <li>You'll need to commit to a minimum of 2 full consecutive days during the week. Days are 10am-4pm.</li>
      </ul>
      <p>Finally - thank you. Even being here and considering helping means a lot to us.</p>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shr4SaRUAqxgLbLuF?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="600" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
  </div>
</template>

<script>
import SubHeaderSupport from '@/components/nav/subnavs/SubHeaderSupport'
export default {
  components: { SubHeaderSupport },
  head () {
    return { title: `Mentor - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
#mentor-page {
  &::after {
    background-image: url('~assets/img/jamie/mentor.svg');
    background-position: right;
    background-size: 25vw;
    background-repeat: no-repeat;
    content: "";
    opacity: 0.15;
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
