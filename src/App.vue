<template>
  <div id="app">
    <transition :name="transitionName">
　　　　<router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-right'  // 默认动态路由变化为slide-right
    }
  },
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
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
  transition: all .8s ease;
  top: 0px;
.slide-left-enter,
.slide-right-leave-active
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
.slide-left-leave-active,
.slide-right-enter
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
</style>
