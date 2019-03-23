<template>
  <div>
    <SubHeaderSupport />
    <div class='w'>
      <h1 id="title">Support BASH Festival of Code</h1>
      <p>In order to make BASH Festival of Code happen, we need some support. There are a few different ways to get involved...</p>
      <div class="roles">
        <n-link to='/support/mentor' class="role mentor">
          <img src="~/assets/img/jamie/mentor.svg" alt="Jamie mascot as a mentor">
          <h2>As a week mentor</h2>
        </n-link>
        <n-link to='/support/volunteer' class="role volunteer">
          <img src="~/assets/img/jamie/volunteer.svg" alt="Jamie mascot as a volunteer">
          <h2>As a weekend volunteer</h2>
        </n-link>
        <n-link to='/support/sponsor' class="role sponsor">
          <img src="~/assets/img/jamie/sponsor.svg" alt="Jamie mascot as a sponsor">
          <h2>As an event sponsor</h2>
        </n-link>
      </div>
      <n-link to='/support/talk' class="talk">
        <p>We're also looking for some speakers at the weekend event. Click here to find out more information.</p>
      </n-link>
    </div>
  </div>
</template>

<script>
  import SubHeaderSupport from '@/components/nav/subnavs/SubHeaderSupport'
  export default {
    components: { SubHeaderSupport }
  }
</script>

<style lang="scss" scoped>
.roles {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  margin: 2em 0;
  .role {
    background: var(--light);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 1em 1em;
    text-decoration: none;
    text-align: center;
    &.mentor {
      background: #ACE9DD;
    }
    &.volunteer {
      background: #B7DCF4;
    }
    &.sponsor {
      background: #DBBDE5;
    }
  }
  img {
    width: 75%;
    margin: 0 auto;
    display: block;
  }
  h2 {
    font-size: 1.25em;
    margin-top: 2em;
  }
}
.talk {
  background: #F6D3AF;
  padding: 1.25em 1em 1.125em;
  text-align: center;
  text-decoration: none;
  display: block;
  line-height: 1;
  margin-bottom: 2em;
}
</style>
