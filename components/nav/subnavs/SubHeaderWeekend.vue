<template>
  <SubHeader :links='subnav' :main='main' />
</template>

<script>
import SubHeader from '~/components/nav/subnavs/SubHeader'

export default {
  data() {
    return {
      main: {
        text: 'Weekend Finale',
        path: '/weekend'
      },
      subnav: [
        { text: 'Venue', path: '/weekend/venue' },
        { text: 'Schedule', path: '/weekend/schedule' },
        { text: 'Access Scheme', path: '/weekend/access' },
      ]
    }
  },
  components: {
    SubHeader
  }
}
</script>