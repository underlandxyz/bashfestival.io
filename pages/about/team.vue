<template>
  <div>
    <SubHeaderAbout />
    <div class='w'>
      <h1 id="title">BASH Festival Team</h1>
      <div id="team">
        <div class="person" v-for='person in team' :key='person.name'>
          <img :src="person.pic">
          <div class="meta">
            <h2>{{person.name}}</h2>
            <p>{{person.role}}</p>
            <p><a :href="person.mailto">{{person.email}}</a></p>
            <p v-if='person.twitter'>
              <a :href="person.twitterLink">@{{person.twitter}}</a>
            </p>
          </div>
        </div>
        <div class="person final">
          <p>Also with huge thanks to <a href="https://twitter.com/SarahLCarter_">Sarah Carter</a> and <a href="https://twitter.com/jabrks">James Brooks</a> for their time and support.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  created() {
    this.team = this.team.map(p => {
      return {
        ...p,
        mailto: 'mailto:' + p.email,
        twitterLink: 'https://twitter.com/' + p.twitter
      }
    })
  },
  data() {
    return {
      team: [
        { 
          name: 'Kevin Lewis', 
          role: 'Co-Lead Organiser', 
          email: 'kevin@underland.xyz', 
          twitter: '_phzn',
          pic: '/team/kev.jpg'
        },
        { 
          name: 'Wilson Tolentino da Silva', 
          role: 'Co-Lead Organiser', 
          email: 'wilson@underland.xyz', 
          twitter: 'stdlibdoh', 
          pic: '/team/wilson.jpg' 
        },
        { 
          name: 'Sunil Patel', 
          role: 'Event Coordinator', 
          email: 'sunil@underland.xyz', 
          pic: '/team/sunil.png'
        },
        { 
          name: 'David Durant',
          role: 'Volunteer & Mentor Coordinator',
          email: 'david@bashfestival.io',
          twitter: 'cholten99',
          pic: '/team/david.png' 
        },
        { 
          name: 'Sanziana Chiorescu', 
          role: 'Regional Hub Coordinator', 
          email: 'sanzi@bashfestival.io', 
          twitter: 'SanzianaCh', 
          pic: '/team/sanzi.jpeg' 
        },
        { name: 'Poppie Simmonds',
          role: 'Attendee Operations & Support',
          email: 'poppie@bashfestival.io',
          pic: '/team/poppie.jpg' 
        },
        { 
          name: 'Joshua Simpson',
          role: 'Attendee Operations & Support',
          email: 'josh@bashfestival.io',
          twitter: 'J0shSimpson',
          pic: '/team/josh.jpg'
        },
        { 
          name: 'An-Ni Chen',
          role: 'Weekend Content Coordinator',
          email: 'anni@bashfestival.io',
          pic: '/team/anni.jpg' 
        },
        { 
          name: 'Bethany Loft',
          role: 'Data Processor',
          email: 'beth@bashfestival.io',
          twitter: 'bb_loft',
          pic: '/team/beth.jpg' 
        }
      ]
    }
  },
  components: { SubHeaderAbout }
}
</script>

<style lang="scss" scoped>
#team {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-bottom: 4em;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr; 
  }
}
.person {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: 2;
  background: white;
  padding: 1em;
  border: 1px solid var(--light);
  box-shadow: 0.5em 0 0.5em rgba(0,0,0,0.125);
  h2 {
    font-size: 1.25em;
  }
  img {
    height: 8em;
    margin-right: 2em;
  }
  a {
    display: inline-block;
  }
  &.final {
    text-align: center;
  }
  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 2em;
    padding-bottom: 2em;
    h2 {
      font-size: 1em;
    }
    img {
      display: block;
      margin: 0 auto 1em;
    }
  }
}
</style>
