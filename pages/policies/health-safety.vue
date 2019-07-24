<template>
  <div>
    <SubHeaderPolicies />
    <div class='w content'>
      <h1 id="title">Heath & Safety Policy</h1>
      <p>Underland Events is committed to protecting the health & safety of all participants involved in the BASH Festival of Code. This policy outlines the measures that we take to ensure nobody taking part, regardless of role of capacity, is put at risk.</p>
      <h2>Applicability & Scope</h2>
      <p>The measures stated in this policy are the responsibility of at least one or more of the following parties:</p>
      <ul>
        <li>The <n-link to='/about/team'>BASH Festival of Code</n-link> are responsible for themselves, hub leaders, mentors, volunteers and participants across all hubs.</li>
        <li>Hub leaders - the main point of contact in each regional hub - are responsible for themselves and the mentors and participants in the hub.</li>
        <li>Week mentors are responsible for themselves and the participants in their hub.</li>
        <li>Weekend volunteers are responsible for themselves and the participants taking part at the weekend.</li>
        <li>Young people participating in the event are only responsible for themselves.</li>
      </ul>
      <p>These responsible parties have a duty of care to implement this policy, and where this falls outside of their individually-assigned responsibilities, to ensure that their appropriate person takes responsibility.</p>
      <p>The BASH Festival of Code takes place across multiple sites. This policy covers all workspaces utilised for the event, and is in force for the entire duration of the event activities. These activities are split into three schedules:</p>
      <ul>
        <li>Schedule 1: August 5-9 2019 in the regional locations.</li>
        <li>Schedule 2: August 10-11 2019 in the central finale location.</li>
      </ul>
      <h2>Schedule 1: August 5-9 2019</h2>
      <ul>
        <li v-for='hub in hubs' :key='hub.city'>
          {{hub.city.charAt(0).toUpperCase() + hub.city.slice(1)}} Hub Workspace: {{hub.address}}
        </li>
      </ul>
      <h3>Measures in Schedule 1</h3>     
      <p>This section comprises the existing on-site health and safety policy of the host venue and the common policy matters that will apply to all locations and workspaces used in this schedule as set out by the BASH team.</p>
      <p>Venues designated as work spaces for hubs are subject to an advance survey by Hub Leaders to ensure they comply with this policy and meet the following requirements:</p>
      <ol>
        <li>All workspaces and their associated accessways, as well as any utility areas (e.g. toilet facilities) that will be used by participants must accommodate disabled access requirements whether specifically required by participants or not. This is to ensure that all participants can safely navigate and operate within designated areas regardless of need or ability</li>
        <li>Workspaces must be suitably ventilated or equipped with some measure of reasonable temperature control to ensure a safe, comfortable working environment</li>
        <li>Workspaces must be of sufficient size to comfortably and reasonably accommodate a full complement of participants in the hub, assuming that it is at full capacity.</li>
        <li>Power supply to the workspaces should be sufficient to accommodate a full complement of participants such that there is no undue cause for overloading demand upon outlets.</li>
        <li>Workspaces must be served by reliable coverage for use of mobile telephones or be served by a dedicated functioning landline telephone that can call out to external agencies in case of emergency.</li>
        <li>Workspaces must be reasonably free of exposure to sources of excessive ambient or environmental noise such that participants are able to work safely without risk of injury to their hearing.</li>
        <li>Any on-site electrical equipment in the workspaces must have in-date inspection tags.</li>
        <li>On-site fire safety information and an emergency evacuation plan must be available/clearly displayed.</li>
        <li>Workspaces and utility areas must be clear of any unsecured materials that may be hazardous to health, such as cleaning or sanitations materials that would require an additional COSHH evaluation.</li>
        <li>All pathways and areas accessed for use as workspace or utility needs (e.g. toilet facilities) must be clear and free of obstructions or trip hazards, (e.g. loose or damaged floor tiles/carpeting)</li>
        <li>The presence/location of first aid materials or a designated contact on-site who is first-aid trained must be clearly marked.</li>
        <li>Workspaces must have their existing in-house Health and Safety policies available to Hub Leaders for reference and instruction.</li>
      </ol>
      <p>Further to these pre-inspection measures, the following precautions must also be taken during activities carried out in this schedule's “in-force” period:</p>
      <ol start='13'>
        <li>No participants should use excessive hurrying, running or moving with undue care or diligence while arriving at or leaving the workspaces.</li>
        <li>Hub Leaders, Mentors and Volunteers must ensure that the workspaces and utility spaces are clear of any slip, trip, or similar hazards at the start of each day's session before allowing attending participants to arrive and enter the spaces.</li>
        <li>Cabling that is in use during the activities must be taped where crossing passage by participants.</li>
        <li>No open liquids should be consumed in proximity to electrical equipment or left unattended. Participants should instead be encouraged to consume fluids as part of regular screen breaks.</li>
        <li>Hub leaders and mentors should advise and coordinate regular screen breaks for all participants.</li>
        <li>Where participants are observed to be at risk from upper limb disorders, repetitive strain injuries or other musculo-skeletal risks due to poor posture or working habits, Hub Leaders and volunteers should advise and coordinate periodic adjustment and correction.</li>
      </ol>
      <h2>Schedule 2: August 10-11 2019 (Finale)</h2>
      <p>As per schedule 1, this section comprises:</p>
      <ul>
        <li>The existing on-site health and safety policy of the host venue (BASH Festival of Code spaces in Millennium Point, Curzon Street, Birmingham B4 7XG)</li>
        <li>Common policy matters that will apply to all locations and workspaces used within this host venue (see measures 1-18 in schedule 1).</li>
        <li>Following site inspection and risk assessment on 29/07/2019, all spaces and activities in Schedule 2 fall into compliance with policy measures 1-18 as stated in Schedule 1.</li>
      </ul>
      <div class="log">
        <h2>Revisions</h2>
        <ul>
          <li>01 July 2019: Initial version written</li>
          <li>16 July 2019: Removed a schedule related to travel to the weekend as this is now the responsibility of attendees</li>
          <li>02 August 2019: Listed date of risk assessment in Schedule 2 section</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderPolicies from '@/components/nav/subnavs/SubHeaderPolicies'
export default {
  components: { SubHeaderPolicies },
  head () {
    return { title: `Health & Safety Policy - ${this.$store.state.title}` }
  },
  computed: {
    hubs() {
      return this.$store.state.hubs
    }
  }
}
</script>

<style scoped>
ol {
  margin-left: 0.5em;
}
</style>