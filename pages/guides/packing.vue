<template>
  <div>
    <SubHeaderGuides />
    <div class='w content'>
      <h1 id="title">Packing List</h1>
      <h2>During the week</h2>
      <ol>
        <li>A laptop per person</li>
        <li>Any electronics/kit you want to use in a project</li>
        <li>Chargers/batteries for laptops and kit</li>
        <li>Any medication that you need</li>
        <li>A packed lunch for each day</li>
        <li>Anything your hub leader has asked you to bring</li>
      </ol>
      <h2>During the weekend</h2>
      <ol>
        <li>A laptop per person</li>
        <li>Chargers for laptop/phone/any other electronics you bring</li>
        <li>Any medication that you need</li>
        <li>Sleeping kit (airbed/mat, sleeping bag/blanket and a small pillow)</li>
        <li>Pyjamas and a change of clothes for Sunday (especially underwear & socks)</li>
        <li>Toothbrush, toothpaste, deodorant and any other toiletries you need (note: we don't have showers)</li>
        <li>Reusable water bottle - stay hydrated!</li>
        <li>Hoodie - in case it gets a bit colder overnight</li>
      </ol>
    </div>
  </div>
</template>

<script>
import SubHeaderGuides from '@/components/nav/subnavs/SubHeaderGuides'
export default {
  components: { SubHeaderGuides },
  head () {
    return { title: `Packing List - ${this.$store.state.title}` }
  },
}
</script>