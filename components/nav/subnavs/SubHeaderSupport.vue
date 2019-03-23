<template>
  <SubHeader :links='subnav' :main='main' />
</template>

<script>
import SubHeader from '~/components/nav/subnavs/SubHeader'

export default {
  data() {
    return {
      main: {
        text: 'Support',
        path: '/support'
      },
      subnav: [
        { text: 'Mentor', path: '/support/mentor' },
        { text: 'Weekend Volunteer', path: '/support/volunteer' },
        { text: 'Sponsor', path: '/support/sponsor' },
        { text: 'Talk', path: '/support/talk' },
      ]
    }
  },
  components: {
    SubHeader
  }
}
</script>