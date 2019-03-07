<template>
  <div id='menu'>
    <div id="hide" @click='closeNav'>Close Menu <i class="fa fa-times"></i></div>
    <ul>
      <li v-for='item in data' :key='item.path'>
        <n-link :to='item.path'>{{item.text}}</n-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    closeNav() {
      this.$emit('closed');
    }
  }
}
</script>

<style lang="scss" scoped>
#menu {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  background: white;
  position: fixed;
  padding: 1em;
  width: 300px;
  border-left: 1px solid lightgrey;
}
#hide {
  text-align: right;
  padding: 0 0 1em 1em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  i {
    margin-left: 0.5em;
  }
}
li {
  list-style: none;
}
a {
  padding: 1em;
  display: block;
  background: var(--blue);
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 1em;
}
</style>
