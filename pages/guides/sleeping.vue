<template>
  <div>
    <SubHeaderGuides />
    <div class='w content'>
      <h1 id="title">Sleeping arrangements</h1>
      <p>On Saturday night from we'll be operating indoor camping in our weekend venue. Here's some notes:</p>
      <ul>
        <li>Sleeping spaces will be available 22:30 until Sunday at 08:30.</li>
        <li>To remain inclusive we have mixed-gender sleeping spaces.</li>
        <li>All young people must have their own sleeping provisions (no sharing).</li>
        <li>There will be 4 sleeping spaces. Young people will be denoted a sleeping space based on their hub, with a register of young people in/out of the space. Only those on the register will be allowed access.</li>
        <li>Spaces will be overseen by a minimum of 3 DBS-checked adults at a time.</li>
        <li>Only young people will be sharing sleeping spaces. Adult volunteers will also have a separate space, though it is on a different floor.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubHeaderGuides from '@/components/nav/subnavs/SubHeaderGuides'
export default {
  components: { SubHeaderGuides },
  head () {
    return { title: `Sleeping - ${this.$store.state.title}` }
  },
}
</script>