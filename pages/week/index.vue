<template>
  <div>
    <SubHeaderWeek />
    <div class='w content'>
      <h1 id="title">The Week</h1>
      <p>On Monday to Friday (10am - 4pm), attendees will be in one of our <n-link to='/week/hubs'>regional hubs</n-link> around the UK. Work in groups (or alone, if that's your style) to build cool projects to answer our challenges supported by expert mentors in your hub.</p>
      <p>You'll have 30 hours in total to think of an idea and build a prototype. We don't expect it to be complete at all - but you'll need something presentable before the weekend.</p>
      <p>Every day, we'll release a new video for you to watch which will teach you a new skill and keep you on-track to complete your project on time and make it something you're proud of. </p>
      <p>Closer to the event, we'll also make a list of great online resources to learn new skills. </p>
      <p><i>Note: This is a full 7 day event - attendees are expected to attend Monday to Friday in their regional hubs and Saturday to Sunday in Birmingham for the <n-link to='/weekend'>finale weekend</n-link>.</i></p>

      <h2>Costs</h2>
      <p>BASH Festival of Code is completely free to attend and **run by volunteers**. It is formally run by <a href='https://undand.xyz' target='_blank'>Underland</a> and is funded by our sponsors. We will be publishing a transparency report after the event to recap our costs. If you are an organisation who can <n-link to='/support/sponsor'>sponsor BASH Feserltival</n-link>, please let us know.</p>
      <p>The only costs to you are:</p>
      <ul>  
        <li>Equipment: we are not supplying equipment, so you'll need to bring a laptop per-participant.</li>
        <li>Travel to locations: your regional hub and to Birmingham on Saturday (and returning on Sunday). We have a (very) small hardship fund to cover the costs of the weekend travel for families who can't afford it, which you can apply for at a later date.</li>
        <li>Food during the week: it is an expectation that you'll bring a packed lunch during the week. Some hubs may be able to provide lunch, but don't rely on this please.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubHeaderWeek from '@/components/nav/subnavs/SubHeaderWeek'
export default {
  components: { SubHeaderWeek }
}
</script>