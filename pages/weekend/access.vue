<template>
  <div>
    <SubHeaderWeekend />
    <div class='w content'>
      <h1 id="title">Access Scheme</h1>
      <p>In recognition of the potential for cost of travelling to and from the weekend finale being prohibitive, we will be able to provide some funding assistance towards this as an inclusive Access Scheme.</p>
      <p>Registering for assistance will be available as an optional part of the application process when it opens, and shall be assessed on a case by case basis as benefits the need.</p>
      <p>The Access Scheme is made possible thanks to the following kind folks:</p>
      <ul>
        <li><a href='https://www.digitalocean.com/' target="_blank">DigitalOcean</a></li>
      </ul>
      <p>If you'd like to contribute, please <n-link to='/contact'>get in touch</n-link>.</p>
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
</style>