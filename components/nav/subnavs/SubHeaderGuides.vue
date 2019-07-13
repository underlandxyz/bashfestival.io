<template>
  <SubHeader :links='subnav' :main='main' />
</template>

<script>
import SubHeader from '~/components/nav/subnavs/SubHeader'

export default {
  data() {
    return {
      main: {
        text: 'Guides',
        path: '/guides'
      },
      subnav: [
        { text: 'Packing List', path: '/guides/packing' },
        { text: 'Challenges', path: '/guides/challenges' },
        { text: 'Technical Resources', path: '/guides/resources' },
        { text: 'Videos', path: '/guides/videos' },
        { text: 'Sleeping', path: '/guides/sleeping' },
      ]
    }
  },
  components: {
    SubHeader
  }
}
</script>