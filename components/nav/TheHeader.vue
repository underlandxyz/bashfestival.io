<template>
  <div>
    <header>
      <div id="notice-line">
        <span class="dates">August 5-11, 2019. {{hubNumber}} regional locations, with a finale in Birmingham.</span>
        <div class="meta">
          <n-link to='/policies/conduct'>Code of Conduct</n-link>
          <n-link to='/contact'>Contact Us</n-link>
          <n-link to='/support/sponsor'>Sponsor BASH Festival of Code</n-link>
          <a  href='https://underland.xyz'>An event by Underland</a>
        </div>
      </div>
      <div id="core">
        <nav>
          <n-link to='/' class='brand'>
            <h1>BASH Festival of Code</h1>
          </n-link>
          <div class="inner">
            <n-link v-for='link in nav' :key='link.path' :to='link.path' :class='link.class'>{{link.text}}</n-link>
          </div>
        </nav>
        <n-link to='/tickets' class="cta btn apply">Get Free Tickets</n-link>
        <div id="mob-menu" @click='menuToggle'>Menu <i class="fa fa-bars"></i></div>
      </div>
    </header>
    <transition name="fade">
      <MobNav :data='nav' v-if='showNav' @closed='menuToggle' />
    </transition>
  </div>
</template>

<script>
import MobNav from '@/components/nav/MobNav';

export default {
  data() {
    return {
      showNav: false,
      nav: [
        { text: 'The Week', path: '/week', class:'bold' },
        { text: 'Weekend', path: '/weekend', class:'bold' },
        { text: 'About', path: '/about', class:'minor' },
        { text: 'Support', path: '/support', class:'minor' },
        { text: 'Policies', path: '/policies', class:'minor' }
      ]
    }
  },
  methods: {
    menuToggle() {
      this.showNav = !this.showNav
    },
  },
  computed: {
    hubNumber() {
      return this.$store.state.hubs.length;
    }
  },
  watch:{
    $route (to, from){
      this.showNav = false;
    }
  },
  components: {
    MobNav
  }
}
</script>

<style lang="scss" scoped>
#notice-line {
  background: var(--blue-dark);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  font-size: 0.8em;
  * {
    color: #ccc;
  }
  .meta a {
    margin-left: 1em;
    text-decoration: none;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
}

#core {
  background: var(--blue);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.8em;
  * {
    color: white;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    a {
      text-decoration: none;
      padding: 1.5em 1.25em;
      display: inline-block;
      border-right: 1px solid rgba(248,237,235,.1);
      &.brand {
        h1 {
          font-size: 1em;
          text-transform: uppercase;
        }
      }
      &.bold {
        text-transform: uppercase;
        font-weight: bold;
      }
      &.minor {
        border-right: 0;
      }
    }
    .inner .nuxt-link-active {
      background: var(--blue-light);
      border-right: 0;
    }
  }
  .cta {
    background: var(--pink-dark);
    color: white;
    display: flex;
    align-items: center;
    padding: 1.5em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
  }
  #mob-menu {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    .inner,
    .cta {
      display: none;
    }
    #mob-menu {
      display: block;
      padding: 1.5em;
      text-transform: uppercase;
      cursor: pointer;
      i {
        margin-left: 0.5em;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>