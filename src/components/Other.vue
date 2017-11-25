<template lang='jade'>
div#other
  TopBar(title='其他')
  h3 友情链接
  ul.friendLink
    li
      router-link(to="/gohref/wulasite.me") QQ星
      br
      |可爱的GayGay星
    li
      router-link(to="/gohref/cateaf.com") 小礼服
      br
      |爱好是撸猫的萌汉子
    li
      router-link(to="/gohref/hcyue.me") 黄盖
      br
      |万Gay之首
  h3 功能
  ul
    li
      router-link(to="/gohref/comment.zain.red") 十条评论区
      br
      |这是一个只能保存最近10条留言的评论区板块
  p.tip 申请友情链接 访问次数 正在建设中...
</template>

<script>
export default {
  name: 'Other'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
$maincolor = #ffa500;
  h3
    font-weight: 400;
    background-color: $maincolor;
    padding: 5px;
  ul.friendLink
    display: flex;
    flex-wrap: wrap;
    li
      flex-grow: 1;
      min-width: 150px;
  ul
    list-style: none;
    padding: 0;
    margin: 10px 5px;
    li
      color: #555;
      margin: 10px 0;
      font-size: 0.9em;
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
  p
    color: #aaa;
  p.tip
    margin-top: 30px;
    text-align: right;
    font-size: 0.8em;
</style>
