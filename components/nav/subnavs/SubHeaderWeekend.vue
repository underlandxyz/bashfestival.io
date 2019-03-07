<template>
  <SubHeader :links='subnav' :main='main' />
</template>

<script>
import SubHeader from '~/components/nav/subnavs/SubHeader'

export default {
  data() {
    return {
      main: {
        text: 'Weekend',
        path: '/weekend'
      },
      subnav: [
        // { text: 'Packing List', path: '/weekend/packing' },
        { text: 'Venue', path: '/weekend/venue' },
        // { text: 'Schedule', path: '/weekend/schedule' },
        // { text: 'Sleeping', path: '/weekend/sleeping' },
      ]
    }
  },
  components: {
    SubHeader
  }
}
</script>