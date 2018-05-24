<template>
  <div id="app" v-if="!isIE">
    <transition>
　　　　<router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isIE: false
    }
  },
  created () {
    const UA = navigator.userAgent
    this.isIE = UA.indexOf('Trident') !== -1
    if (this.isIE) {
      document.write('本网站不支持IE')
    }
  }
}
</script>

<style lang='stylus'>
@media (min-width:640px)
  html
    overflow-x: hidden;
*
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color:transparent;
#app
  margin:0 auto;
  max-width: 640px;
  width: 100%;
  font-family:"Microsoft Yahei","SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-size: 0.95em;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
.Router
  position: absolute;
  max-width: 640px;
  width: 100%;
  top: 0px;
</style>
