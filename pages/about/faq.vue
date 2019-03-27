<template>
  <div>
    <SubHeaderAbout />
    <div class='w'>
      <h1 id="title">Frequently Asked Questions</h1>
      <p>This page is 'living' and will be updated as we are asked questions. If you have further questions which aren't covered here, please <n-link to='/contact'>get in touch</n-link>.</p>
      <input type="text" v-model='search' placeholder='Search FAQ'>
      <ul id="faq">
        <li v-for='question in filteredFaq' :key='question.q'>
          <h2>{{question.q}}</h2>
          <p>{{question.a}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubHeaderAbout from '@/components/nav/subnavs/SubHeaderAbout'
export default {
  data() {
    return {
      search:'',
      questions: [
          { 
            q: 'Who is the BASH Festival of Code for?',
            a: 'BASH Festival of Code is for young developers aged between 13-17. All you need is a basic working knowledge of at least one programming language. There will be other technical young people around to help you and work with you when you get there, and mentors to support you.'
          },
          { 
            q: 'Will you teach me to code?',
            a: 'Our aim is not to teach you how to code, but to support those people who have already learnt the basics and want support to further build on, and apply, their skills.'
          },
          { 
            q: 'What skill is required to attend?',
            a: 'Any experience of written code at all. It might be some HTML and CSS for web design, a scripting or programming language, database querying languages, skills related to electronics or something else! If your skill relates only to \'drag-and-drop\' tools such as Scratch, this might not be the event for you.'
          },
          { 
            q: 'What if I am not aged between 13 and 17?',
            a: 'At BASH Festival of Code, we can only accept young people between the ages of 13 and 17 inclusive. If you fall outside of this bracket then you won\'t be able to attend BASH Festival of Code.'
          },
          { 
            q: 'How much does it cost?',
            a: 'Attending BASH Festival of Code is free! Regional Hubs are volunteer-run, and the weekend finale will be funded by sponsors. The only exceptions to this are travelling to your Hub and the finale, week day lunches, and your own snacks.'
          },
          { 
            q: 'What if I do not know anyone?',
            a: 'That is absolutely fine! On Monday morning you will get to know people in your Hub and possibly work with them throughout the week. If working alone is more your style - that is okay too!'
          },
          { 
            q: 'Do you provide equipment or materials?',
            a: 'We are not able to provide laptops to work from during the event, and it is the responsibility of attendees to ensure that you bring a laptop and any hardware which you require for your projects.'
          },
          { 
            q: 'What do I need to bring to the week?',
            a: 'Your laptop, any hardware you may want to use in your project, chargers for those devices, and a packed lunch.'
          },
          { 
            q: 'What do I need to bring to the weekend?',
            a: 'Your laptop, hardware and chargers, a sleeping kit (pillow, sleeping bag and a roll mat or airbed), toiletries and a change of clothes. Closer to the event we will provide a more comprehensive packing list.'
          },
          { 
            q: 'Do I have to attend the weekend finale?',
            a: 'Yes - BASH Festival of Code is a 7-day event, and the best part is the weekend! You will get to present your project, participate in our fun activities, and meet over 300 other young participants - taking your place in our national community.'
          },
          { 
            q: 'What should I expect from the weekend?',
            a: 'The weekend will start with a short science fair where you will get to show off your project. The most interesting will be selected and shown on stage in front of other participants and prizes will be awarded. After that, expect workshops, talks, music and other hands-on activities. Overnight sleeping arrangements will be indoor camping in a large hall, and Sunday will include more activities. The event will be over by 4pm, where Hubs will travel back home and the event will be over.'
          },
          { 
            q: 'How will I get to the finale weekend venue?',
            a: 'Your regional Hub will organise group travel either by train, plane, car, or coach, which you will probably have to pay for. While this is organised by your Hub Leader, you are welcome to make alternative plans separate from the Hub.'
          },
          { 
            q: 'Does a parent/guardian need to stay?',
            a: 'No, and we would prefer they don\'t unless previously agreed. All participants will need parental permission to attend before their space at a Hub is confirmed. Emergency details will be shared with the Underland team and your Regional Hub Leader.'
          },
          {
            q: 'Will there be a space for religious observance?',
            a: 'We will have a quiet reflection room throughout which can be utilised for this purpose.'
          },
          { 
            q: 'Who is behind the BASH Festival of Code?',
            a: 'Underland are a London-based team specialising in software development, teaching people technical skills, and running specialist events. Our values are talk straight, get the job done, and don’t forget to have fun on the way.'
          },
      ]
    }
  },
  computed: {
    filteredFaq() {
      return this.questions.filter(question => {
        return question.q.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  head () {
    return { title: `FAQ - ${this.$store.state.title}` }
  },
  components: { SubHeaderAbout }
}
</script>

<style lang="scss" scoped>
input {
  margin-top: 2em;
}
ul {
  margin-bottom: 4em;
}
li {
  list-style-type: none;
  background: var(--light);
  padding: 1em;
  margin-top: 1em;
}
</style>
