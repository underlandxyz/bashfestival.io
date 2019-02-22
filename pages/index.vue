<template>
  <div>
    <Hero />
    <Intro />
    <Stats />
    <Themes />
    <MailingList />
  </div>
</template>

<script>
import Hero from '~/components/home/Hero'
import Intro from '~/components/home/Intro'
import Stats from '~/components/home/Stats'
import Themes from '~/components/home/Themes'
import MailingList from '~/components/contact/MailingList'

export default {
  components: {
    Hero,
    Intro,
    Stats,
    Themes,
    MailingList
  }
}
</script>

<style>
</style>
