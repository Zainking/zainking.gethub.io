<template lang='jade'>
div#topbar
  a(href="javascript:;" @click="goBack") &lt; 返回
  p {{title}}
</template>

<script>
export default {
  name: 'topbar',
  props: ['title'],
  methods: {
    goBack () {
      if (
        navigator.userAgent.indexOf('MSIE') >= 0 &&
        navigator.userAgent.indexOf('Opera') < 0
      ) {  // IE
        if (history.length > 0) {
          window.history.go(-1)
        } else {
          window.opener = null
          window.close()
        }
      } else { // 非IE浏览器
        if (
          navigator.userAgent.indexOf('Firefox') >= 0 ||
          navigator.userAgent.indexOf('Opera') >= 0 ||
          navigator.userAgent.indexOf('Safari') >= 0 ||
          navigator.userAgent.indexOf('Chrome') >= 0 ||
          navigator.userAgent.indexOf('WebKit') >= 0
        ) {
          if (window.history.length > 1) {
            window.history.go(-1)
          } else {
            window.opener = null
            window.close()
          }
        } else { // 未知的浏览器
          window.history.go(-1)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
$maincolor = #ffa500;

#topbar {
  text-align: center;
  position: realtive;
  line-height: 3;

  a {
    position: absolute;
    left: 0;
    text-decoration: none;
    color: #888;
  }

  a:hover {
    color: $maincolor;
  }

  p {
    font-weight: 700;
  }
}
</style>
