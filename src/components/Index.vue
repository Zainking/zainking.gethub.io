<template lang='jade'>
div#index
  img(v-bind:src='avatar')
  h1 Zain King
  ul
    li
      a#blog(href="//blog.zain.red") 博客
    li
      router-link(to="/projects") 作品
    li
      router-link(to="/resume") 简历
</template>

<script>
import avatar from '@/assets/avatar.svg'
export default {
  name: 'Index',
  data () {
    return {
      avatar: avatar
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
$maincolor = #ffa500;
#index
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img
    width: 200px;
  h1
    font-weight: 400;
    margin: 0 0 20px 0;
  ul
    list-style: none;
    padding: 0;
    display: flex;
    min-width: 100%;
    li
      flex-grow: 1;
      text-align: center;
      a::before
        content: '';
        width: 0.5em;
        height: 0.5em;
        display: inline-block;
        margin-right: 0.2em;
        background-color: $maincolor;
      a
        text-decoration: none;
        color: #000;
      a:hover
        color: $maincolor;
</style>
