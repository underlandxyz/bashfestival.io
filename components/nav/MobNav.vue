<template>
  <div id='side-menu'>
    <ul>
      <li v-for='item in data' :key='item.path'>
        <n-link :to='item.path'>{{item.text}}</n-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
#side-menu {
  background: var(--blue-dark);
  padding: 1em;
}
li {
  list-style: none;
}
a {
  padding: 0.5em;
  display: block;
  background: white;
  text-align: center;
  color: var(--blue-dark);
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  margin-top: 1em;
}
li:first-child a {
  margin-top: 0;
}
@media screen and (min-width: 1000px) {
  #side-menu {
    display: none;
  }
}
</style>
