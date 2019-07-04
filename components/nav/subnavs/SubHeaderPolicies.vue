<template>
  <SubHeader :links='subnav' :main='main' />
</template>

<script>
import SubHeader from '~/components/nav/subnavs/SubHeader'

export default {
  data() {
    return {
      main: {
        text: 'Policies',
        path: '/policies'
      },
      subnav: [
        { text: 'Code of Conduct', path: '/policies/conduct' },
        { text: 'Health & Safety', path: '/policies/health-safety' },
        { text: 'Safeguarding', path: '/policies/safeguarding' },
        { text: 'Privacy', path: '/policies/privacy' },
        { text: 'Incident Response', path: '/policies/incident-response' },
      ]
    }
  },
  components: {
    SubHeader
  }
}
</script>