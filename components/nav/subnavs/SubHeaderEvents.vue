<template>
  <SubHeader :links='subnav' :main='main' />
</template>

<script>
import SubHeader from '~/components/nav/subnavs/SubHeader'

export default {
  data() {
    return {
      main: {
        text: 'Week Events',
        path: '/events'
      },
      subnav: [
        { text: 'Bristol', path: '/events/bristol' },
        { text: 'Sheffield', path: '/events/sheffield' },
        { text: 'Plymouth', path: '/events/plymouth' },
        { text: 'Southampton', path: '/events/southampton' },
        { text: 'London', path: '/events/london' },
        // { text: 'Birmingham', path: '/events/birmingham' }
        // { text: 'Success Framework', path: '/about/success' },
        // { text: 'Team', path: '/about/team' },
        // { text: 'FAQ', path: '/about/faq' },
        // { text: 'Press', path: '/about/press' },
      ]
    }
  },
  components: {
    SubHeader
  }
}
</script>