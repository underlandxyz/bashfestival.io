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
        { text: 'Success Framework', path: '/about/success' },
        { text: 'Team', path: '/about/team' },
        { text: 'FAQ', path: '/about/faq' },
        { text: 'Press', path: '/about/press' },
      ]
    }
  },
  components: {
    SubHeader
  }
}
</script>