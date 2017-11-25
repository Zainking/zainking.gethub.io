<template lang='jade'>
div#topbar
  a(href="javascript:;" @click="$router.go(-1)") &lt; 返回
  p {{title}}
</template>

<script>
export default {
  name: 'topbar',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
$maincolor = #ffa500;
#topbar
  text-align: center;
  position: realtive;
  line-height: 3;
  a
    position: absolute;
    left: 0;
    text-decoration: none;
    color: #888;
  a:hover
    color: $maincolor;
  p
    font-weight: 700;
</style>
