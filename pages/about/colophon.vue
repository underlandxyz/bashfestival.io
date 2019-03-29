<template>
  <div class='w content'>
    <h1 id="title">Colophon</h1>
    <p>This website is built by Underland. It's code is on <a href="https://github.com/underlandxyz/bashfestival.io">GitHub</a> and is built using Vue.js and Nuxt.js.</p>
    <p>We're using the <a href='https://rsms.me/inter/'>Inter typeface family</a> by <a href="https://twitter.com/rsms">Rasmus Andersson</a>.</p>
    <p>Illustrations of our mascot jamie the Jaberwock are by <a href="https://twitter.com/kmoneyus">Kelly Mahoney</a>.</p>
    <p>The stars animation on the homepage was inspired by <a href="https://codepen.io/Suburbanno/pen/OXZrvw">this CodePen by Suburbanno</a>.</p>
    <p>The wave animation on the homepage was inspired by <a href="https://codepen.io/plavookac/pen/QMwObb">this CodePen by plavookac</a>.</p>
    <p>Icons across the site are from both the <a href="https://www.streamlineicons.com/ux/">Steamline Illustrations UX pack</a> and <a href="https://fontawesome.com/">Font Awesome</a>.</p>
  </div>
</template>

<script>
export default {
  head () {
    return { title: `Colophon - ${this.$store.state.title}` }
  },
}
</script>