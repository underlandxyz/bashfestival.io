<template>
  <div>
    <SubHeaderGuides />
    <div class='w content'>
      <h1 id="title">Hub Leader Crib Sheet</h1>
      <ul>
        <li><a href='https://docs.google.com/presentation/d/1GOcy1DVu9mklak2w7CAeb9RfKgewPVuCXsZe3JDpw7o/edit?usp=sharing' target="_blank">Training presentation</a></li>
        <li><a href='https://www.raspberrypi.org/safeguarding/e-learning-module' target="_blank">Raspberry Pi e-learning module for safeguarding</a></li>
      </ul>
      <ul>
        <li><n-link to='/crib'>Attendee crib sheet</n-link></li>
        <li><n-link to='/guides/videos'>Daily videos (updated late each night)</n-link></li>
        <li><a href="https://bashfestival.io/reporting">End of day reporting</a></li>
        <li><n-link to='/policies/conduct'>Code of Conduct</n-link></li>
        <li><n-link to='/waiver'>Waiver for under 16s to travel alone</n-link></li>
        <li>
          <p><b>Arrives with no ticket</b></p>
          <p>Verify they're in the right age bracket. Take them in (we have a duty of care). Get them to fill in <a href="https://airtable.com/shrC87zSvLlyhIHc3">the ticket form</a>. Their parent/guardian must fill in the <a href="https://bashfestival.io/permission">parental consent</a> form before they leave. They will get emailed this automatically when the ticket form is fileld in. Please tell us.</p>
        </li>
        <li>
          <p><b>Arrives with no parental consent form having been filled in</b></p>
          <p>Their parent/guardian must fill in the <a href="https://bashfestival.io/permission">parental consent</a> form before they leave. They will get emailed this automatically when the ticket form is fileld in. Please tell us.</p>
        </li>
        <li>
          <p><b>If attendee is under 16, arrives without parent, and doesn't have a parental waiver</b></p>
          <p>We have a duty of care. Allow the attendee to take part but you must get hold of their parent/guardian before releasing them and have them fill in the waiver. Please tell us.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubHeaderGuides from '@/components/nav/subnavs/SubHeaderGuides'
export default {
  components: { SubHeaderGuides },
  head () {
    return { title: `Hub Leader Crib Sheet - ${this.$store.state.title}` }
  },
}
</script>

<style scoped>
  ul {
    margin-bottom: 2em;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>