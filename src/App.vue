<template>
  <div id="app">
    <!-- 插槽 -->
    <router-view/>
    
    <!-- 父子组件 生命周期执行顺序 -->
    <!-- <Parent/> -->
   
    <!-- 测试vant  -->
    <!-- <VueVant/> -->
  </div>
</template>

<script>
// import Parent from './views/Parent.vue';
import VueVant from './components/VueVant.vue'

export default {
  components:{
    // Parent,
    // MySwiper:()=>import('./components/mySwiper/MySwiper.vue')
    VueVant
  }
}
</script>
<style lang="less">


</style>
