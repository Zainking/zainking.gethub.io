<template lang='jade'>
div#resume
  TopBar(title='简历')
  img.avatar(v-bind:src='me')
  h3.name {{resume.name}}
  p.infomation {{resume.college}} | {{resume.birthday}} | {{resume.city}}
  h3.title 技能列表
  ul
    li(v-for="item in resume.skill")
      span.skillName {{item[0]}}
      span.skillLevel {{item[1]}}
  h3.title 工作经历
  ul
    li(v-for="item in resume.workExperience")
      p.itemTitle {{item[0]}}
      p.workTime {{item[1]}}
      p.itemInfo {{item[2]}}
  router-link.projects(to="/projects") 查看我的项目 &gt;&gt;
  h3.title 其他经历
  ul
    li(v-for="item in resume.other")
      p.itemTitle {{item[0]}}
      p.itemInfo {{item[1]}}
  h3.title(v-bind:src='wechat') 微信
  img.wechat(v-bind:src='wechat')
</template>

<script>
import me from '@/assets/me.jpg'
import wechat from '@/assets/wechat.png'
import resume from '@/assets/resume.json'
export default {
  name: 'Resume',
  data () {
    return {
      me,
      resume,
      wechat
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
$maincolor = #ffa500;
#resume
  ul
    list-style: none;
  .avatar
    width: 150px;
    height: 150px;
    // background-color: #eee;
    border-radius: 50%;
    padding: 5px;
    border: 3px solid #eee;
    display: block;
    margin: 0 auto;
    transition: all 2s;
  .wechat
    width: 200px;
    padding: 5px;
    display: block;
    margin: 0 auto;
  .avatar:hover
    border-color: $maincolor;
  h3
    font-size: 1.2em;
    font-weight: 400;
  h3.name
    text-align: center;
    margin: 10px 0;
  h3.title
    background-color: $maincolor;
    padding: 5px;
  .infomation
    text-align: center;
    color: #777;
    margin-bottom: 20px;
  ul
    padding-left: 5px;
    margin-bottom: 50px;
    li
      line-height: 2;
      .skillLevel
        float: right;
      .skillName, .skillLevel
        font-size: 0.9em;
      .itemTitle
        font-weight: 700;
        margin-top:10px;
      .itemInfo
        font-size: 0.9em;
        margin-bottom: 30px;
        text-indent: 2em;
      .workTime
        font-size: 0.8em;
        color: #888;
  .projects
    display: block;
    color: #777;
    font-size: 1.5em;
    text-align: center;
    padding: 20px;
    text-decoration: none;
    transition: all 0.4s;
    margin-bottom: 30px;
  .projects:hover
    color: $maincolor;
</style>
