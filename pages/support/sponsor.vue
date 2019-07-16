<template>
  <div id='sponsor-page'>
    <SubHeaderSupport />
    <div class='w'>
      <div class="top">
        <div class="copy">
          <h1 id="title">Sponsor BASH Festival of Code 😍</h1>
          <p>BASH Festival of Code is a free week-long coding festival for 13-17 year olds who have had some exposure to development or digital design. It will take place on August 5th - 11th 2019.</p>
        </div>
      </div>
      <div class="intro">
        <div class="why">
          <h2>The need 👀</h2>
          <p>There are lots of programmes to teach young people how to code, but once the basics are taught, there’s very little support as most events cannot facilitate minors.</p>
        </div>
        <div class="mission">
          <h2>Our mission 🎯</h2>
          <p>To create and foster regional and national communities of technical young people, and support them in building upon their existing skills through a series of events.</p>
        </div>
      </div>
      <div class="summary">
        <h2>Summary ✨</h2>
        <div class="split">
          <ul>
            <!-- <li>350 young people aged 13-17</li> -->
            <li>Young people aged 13-17</li>
            <li>These young people all have some degree of prior technical skill</li>
            <li>During the week young people are in one of our regional events ('hubs') across the UK</li>
            <li>During the weekend they're at the finale in Birmingham</li>
            <li>Aiming for no less than 25% low-income backgrounds, 25% people of colour, 25% female or non-binary participation (<n-link to='/about/success'>more about our success framework</n-link>)</li>
            <li>We'll be publishing a diversity, inclusion &amp; transparency report post-event</li>
          </ul>
          <div class="locations">
            <h3>Locations 📍</h3>
            <n-link :to='hub.path' class="location" v-for='hub in hubs' :key='hub.name'>
              ⭐ <span>{{hub.city.charAt(0).toUpperCase() + hub.city.slice(1)}}</span>
            </n-link>
          </div>
        </div>
      </div>
      <div class="benefits">
        <h2>Why should you sponsor? 💖</h2>
        <div class='reasons'>
          <div class="reason">
            🎓 <b>Recruitment opportunities</b> for apprenticeships, internships and higher education study at our finale weekend.
          </div>
          <div class="reason">
            💞 <b>Positive brand association</b> for our attendees - they’re getting to attend a fun and free event because of your support!
          </div>
          <div class="reason">
            🔮 <b>Demonstrated corporate social responsibility</b> through our post-event diversity & impact report - all sponsors will feature in this document.
          </div>
          <div class="reason">
            👩‍💻 <b>Use and feedback of your tech</b> - through brand awareness and optional challenges, participants may use your tech in their projects.
          </div>
        </div>
      </div>
      <div class="packages">
        <h2>Sponsorship Packages 🎁</h2>
        <div class='grid'>
          <div class='option'>
            <h3>BASH Supporter - £1,000</h3>
            <ul>
              <li>Logo on website</li>
              <li>Tweets of thanks</li>
              <li>Message in event email</li>
              <li>Shout out in opening</li>
              <li>Inclusion in impact report</li>
            </ul>
          </div>
          <div class='option'>
            <h3>BASH Champion - £4,000</h3>
            <ul>
              <li>Be a BASH Supporter</li>
              <li>Space in networking area</li>
              <li>Distribution of materials to hubs</li>
              <li>1-2 hour talk/workshop</li>
            </ul>
          </div>
          <div class='option'>
            <h3>BASH Partner - £10,000</h3>
            <ul>
              <li>Be a BASH Champion</li>
              <li>Significant branding in venue</li>
              <li>A branded chill out lounge</li>
              <li>Co-brand 2019 event</li>
            </ul>
          </div>
        </div>
      </div>
      <div class='contact'>
        If you have any questions, or wish to discuss sponsorship, please feel free to reach out to Kevin Lewis (Co-Lead Organiser of BASH) at <a href='mailto:kevin@underland.xyz'>kevin@underland.xyz</a> or by phone at +44 7492 886145.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

h1#title + p {
  font-weight: bold;
  font-size: 1.25em;
}
h2,
h3 {
  border-bottom: 1px solid var(--light);
  margin-bottom: 0.5em;
  padding-bottom: 0.25em;
}
li {
  margin-left: 1.5em;
  margin-bottom: 0.5em;
}
.intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin: 2em 0;
}
.summary {
  h2 {
    margin-bottom: -0.5em;
  }
  .split {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2em;
    margin: 2em 0;
    .location {
      margin-top: 0.5em;
    }
  }
}
.reasons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-bottom: 4em;
}
.packages .grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  margin-bottom: 4em;
  .option {
    margin-top: 1em;
  }
}
.contact {
  margin-bottom: 4em;
}
.location {
  display: block;
  text-decoration: none;
  span {
    text-decoration: underline;
  }
}
@media screen and (max-width: 1000px) {
  .intro, 
  .summary .split,
  .reasons,
  .packages .grid {
    grid-template-columns: 1fr;
  }
}
#sponsor-page {
  &::after {
    background-image: url('~assets/img/jamie/sponsor.svg');
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
</style>


<script>
import SubHeaderSupport from '@/components/nav/subnavs/SubHeaderSupport'
export default {
  computed: {
    hubs() {
      return this.$store.state.hubs.map(hub => {
        return {
          ...hub,
          path: '/week/hubs/' + hub.city
        }
      })
    }
  },
  components: { SubHeaderSupport },
  head () {
    return { title: `Sponsor - ${this.$store.state.title}` }
  },
}
</script>