<template>
  <div>
    <SubHeaderWeek />
    <div class='w content'>
      <h1 id="title">Training</h1>
      <p>Here is a list of links related to BASH Festival of Code Hub Leader Training, and all supplementary forms/information.</p>
      <ul>
        <li><a href='https://docs.google.com/presentation/d/1GOcy1DVu9mklak2w7CAeb9RfKgewPVuCXsZe3JDpw7o/edit?usp=sharing' target="_blank">Training presentation</a></li>
        <li><a href='https://www.raspberrypi.org/safeguarding/e-learning-module' target="_blank">Raspberry Pi e-learning module for safeguarding</a></li>
        <li><a href='https://bashfestival.io/dbs' target="_blank">DBS Check Form</a></li>
        <li><a href='https://airtable.com/shrH0zoWw5clmBkrP' target="_blank">Hub Site Survey</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubHeaderWeek from '@/components/nav/subnavs/SubHeaderWeek'
export default {
  components: { SubHeaderWeek },
  head () {
    return { title: `Hub Training - ${this.$store.state.title}` }
  },
}
</script>

<style scoped>
  iframe {
    margin-bottom: 4em;
  }
</style>