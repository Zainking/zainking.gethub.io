<template lang='jade'>
div#gohref
</template>

<script>
export default {
  name: 'GoBlog',
  created () {
    var _this = this
    setTimeout(function () {
      if (_this.$route.params.href) {
        window.location.href = '//' + _this.$route.params.href
      } else {
        window.location.href = '/'
      }
    }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>

</style>
