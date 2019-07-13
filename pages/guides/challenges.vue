<template>
  <div>
    <SubHeaderGuides />
    <div class='w content'>
      <Themes />
      <div class="theme">
        <h2>Build a Game</h2>
        <p>This challenge asks participants to build a game. What and how you build it is up to you - it can be a physical game or a computer game, and it's theming is up to you.</p>
        <p>While we'd love to see some original games, you're also welcome to try and replicate games you already enjoy.</p>
        <p>During the weekend's science fair be ready to explain and have people play your game in about 3-4 minutes.</p>
        <h2>Novel Use of Data</h2>
        <p>This challenge is all about taking data and displaying it in interesting ways. This could mean some data visualisation, or using physical items to make data more understandable to the average person.</p>
        <p>During the science fair try and tell a story about the data to help people understand it - use your tool to help.</p>
        <h2>Use Tech to Create Music</h2>
        <p>In this challenge you can use tech (physical or software-based) to create noise. You might want to look at using WebAudio or specialised tools like MaxMSP.</p>
        <p>When presenting music challenges in the science fair try not to have it running too loud or the space will become vey noisy.</p>
        <h2>* (Wildcard)</h2>
        <p>If you want to build a project that doesn't fit our three themes that's okay too - they are only there to provide some inspiration. The final prize will be for the * (wildcard) challenge, which is a bucket for all proejcts that don't belong elsewhere.</p>
        <p>Every project will automatically be part of this challenge, even if you've clearly taken part in others.</p>
        <h2>Finally...</h2>
        <ul>
          <li>No team size limits - you can work alone or everyone in your hub can work on one challenge. However, we find teams of 3-4 work best.</li>
          <li>Prizes are little limited edition BASH Festival pins, and we have enough for large teams.</li>
          <li>You can absolutely mix multiple challenges - some projects will clearly belong in multiple.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderGuides from '@/components/nav/subnavs/SubHeaderGuides'
import Themes from '~/components/home/Themes'

export default {
  components: { 
    SubHeaderGuides,
    Themes
  },
  head () {
    return { title: `Challenges - ${this.$store.state.title}` }
  },
}
</script>