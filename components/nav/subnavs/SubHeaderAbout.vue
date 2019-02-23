<template>
  <SubHeader :links='subnav' :main='main' />
</template>

<script>
import SubHeader from '~/components/nav/subnavs/SubHeader'

export default {
  data() {
    return {
      main: {
        text: 'About',
        path: '/about'
      },
      subnav: [
        { text: 'Application Process', path: '/about/application' },
        { text: 'Success Framework', path: '/about/success' },
        { text: 'Team', path: '/about/team' },
      ]
    }
  },
  components: {
    SubHeader
  }
}
</script>