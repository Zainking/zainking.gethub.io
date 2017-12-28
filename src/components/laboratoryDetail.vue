<template lang='jade'>
div#projectDetail
  TopBar(:title='item.name')
  img.prev(v-bind:src='item.imgUrl')
  p.detail {{item.detail}}
  ul.tips
    li(v-if="item.isNeedUser") 这个项目全部或部分功能需要一个您无法获得的注册用户才能体验
    li(v-if="!item.sourceCode") 这个项目因为代码未同步到GitHub或存在保密需求所以未开放源码
    li(v-if="!item.link") 这个项目可能无法集中或实时预览，需要您通过源码预览
  div.btnbox
    a(v-bind:href="item.sourceCode" v-if="item.sourceCode") 源代码
    a(v-bind:href="item.link" v-if="item.link") 在线预览
</template>

<script>
import projects from '@/assets/laboratory.json'
export default {
  name: 'LaboratoryDetail',
  data () {
    return {
      item: projects[this.$route.params.id]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
$maincolor = #ffa500;
#projectDetail
  img.prev
    width: 90%;
    display: block;
    margin: 0 auto;
  p.detail
    font-size: 0.9em;
    color: #555;
    text-indent: 2em;
  ul.tips
    margin: 20px 0;
    list-style: none;
    li
      font-size: 0.8em;
      color: #aaa;
    li:before
      color: $maincolor;
      content: '●'
  .btnbox
    display: flex;
    justify-content: space-around;
    a
      text-decoration: none;
      color: #000;
      position: relative;
      left: 0.4em;
      font-size: 1rem;
      transition: all 0.4s;
    a::before
      display: inline-block;
      width: 0.5em;
      height: 0.5em;
      background-color: $maincolor;
      content: '';
      position: relative;
      right: 0.2em;
    a:hover
      color: $maincolor;
    a:hover::before
      border-radius: 50%;
</style>
