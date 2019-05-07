<template>
  <div>
    <SubHeaderWeekend />
    <div class='w content'>
      <h1 id="title">Access Scheme</h1>
      <p>In recognition of the potential for cost of travelling to and from the weekend finale being prohibitive, as well as cost to cover food at the weekend, we will be able to provide some funding assistance towards this as an inclusive Access Scheme.</p>
      <p>Applying for assistance will be available both before and after getting a ticket, and shall be assessed on a case by case basis as benefits the need.</p>
      <p>The Access Scheme is made possible thanks to <a href='https://www.digitalocean.com/' target="_blank">DigitalOcean</a> and has the value of £1,000 (approximately 20 awards of £50). If you'd like to contribute, please <n-link to='/contact'>get in touch</n-link>.</p>
      <p>The total maximum value of an award is £50. This may not completely cover the cost of travel and food at the weekend, but we hope it will help lower the barrier of entry.</p>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrf7DGbmCofWoyqa?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
  </div>
</template>

<script>
import SubHeaderWeekend from '@/components/nav/subnavs/SubHeaderWeekend'
import Sponsors from '~/components/home/Sponsors'
export default {
  components: { 
    SubHeaderWeekend ,
    Sponsors
  },
  head () {
    return { title: `Access Scheme - ${this.$store.state.title}` }
  },
}
</script>

<style scoped>
#sponsors {
  margin-top: 2em;
}
iframe {
  margin-top: 1em;
}
</style>