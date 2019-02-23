<template>
  <SubHeader :links='subnav' :main='main' />
</template>

<script>
import SubHeader from '~/components/nav/subnavs/SubHeader'

export default {
  data() {
    return {
      main: {
        text: 'The Week',
        path: '/week'
      },
      subnav: [
        { text: 'Regional Hubs', path: '/week/hubs' },
        { text: 'Challenges', path: '/week/challenges' },
        { text: 'Resources', path: '/week/resources' },
      ]
    }
  },
  components: {
    SubHeader
  }
}
</script>