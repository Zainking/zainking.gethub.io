<template lang='jade'>
div#index
  img(v-bind:src='avatar')
  h1 Zain
  ul
    li
      a(href="https://blog.zain.red") 博客
    li
      router-link(to="/projects") 作品
    li
      router-link(to="/resume") 简历
    li
      router-link(to="/other") 其他
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
@media (max-width:640px)
  #index ul
    flex-direction: column;
    li
      margin: 10px auto;
      font-size: 1.3em;
@media (min-width:640px)
  #index ul
    min-width: 90%;
#index
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  img
    width: 200px;
  h1
    font-weight: 400;
    margin: 0 0 10px 0;
  ul
    list-style: none;
    padding: 0;
    display: flex;
    margin-top: 50px;
    li
      flex-grow: 1;
      text-align: center;
      position: realtive;
      left: -1em;
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
        transition: all 0.4s;
        display: inline-block;
        width: 100%;
        height: 100%;
    li:hover
      a
        color: $maincolor;
      a::before
        border-radius: 50%;

</style>
