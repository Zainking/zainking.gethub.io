<template lang='jade'>
div#projects
  TopBar(title='实验室')
  ul
    li(v-for='(item, idx) in projects')
      router-link.projects(v-bind:to="'/laboratory/' + idx") {{item.name}}
      p {{item.info}}
      div.tag
        span(v-for='span in item.technicalStack') {{span}}
</template>

<script>
import projects from '@/assets/laboratory.json'
export default {
  name: 'Laboratory',
  data () {
    return {
      projects: projects
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
$maincolor = #ffa500;
@media (max-width:640px)
  li
    text-align: center;
    margin: 100px 0;
    a
      padding: 10px 20px;
      margin: 20px 0;
    p
      clear: both;
@media (min-width: 640px)
  li
    margin: 20px 0;
    a::before
      display: inline-block;
      width: 0.5em;
      height: 0.5em;
      background-color: $maincolor;
      content: '';
      position: relative;
      right: 0.2em;
    a:hover::before
      border-radius: 50%;
    .tag span
      float: right;
ul
  list-style: none;
  li
    overflow: auto;
    a
      text-decoration: none;
      color: #000;
      position: relative;
      left: 0.4em;
      font-size: 1rem;
      transition: all 0.4s;
    a:hover
      color: $maincolor;
    p
      color: #555;
      border-bottom: 1px solid #f4f4f4;
      font-size: 0.9em;
      margin: 10px 0 0 0;
      padding-bottom: 10px;
    div.tag
      span
        color: #555;
        background-color: #f4f4f4;
        display: inline-block;
        margin: 5px;
        font-size: 0.8em;
        padding: 5px 10px;
        border-radius: 10px;
        letter-spacing: 0;
        transition: all 0.4s;
      span:hover
        background-color: $maincolor;
        color: #000;
</style>
