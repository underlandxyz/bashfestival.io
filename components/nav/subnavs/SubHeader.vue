<template>
  <div id="subheader">
    <nav>
      <n-link :to='main.path' class='main'>{{main.text}}</n-link>
      <n-link 
        v-for='link in links' 
        :key='link.path'
        :to='link.path'>{{link.text}}</n-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: [ 'links', 'main' ]
}
</script>

<style lang="scss" scoped>
#subheader {
  background: var(--blue-light);
  padding: 1em;
  margin-bottom: 4em;
  font-size: 0.75em;
  line-height: 1.5;
  a {
    color: white;
    text-transform: uppercase;
    margin-right: 1em;
    text-decoration: none;
    &.main {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 1000px) {
    text-align: center;
    margin-bottom: 3em;
    a {
      padding: 0.5em;
      display: inline-block;
      color: white;
      font-weight: bold;
    }
  }
}
</style>
