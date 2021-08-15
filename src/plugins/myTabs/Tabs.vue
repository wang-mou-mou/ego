<template>
  <div>
      <!-- 导航 -->
      <div class="nav">
          <slot></slot>
      </div>

      <!-- 内容 -->
      <Content :list='list' :activeName='activeName'/>
  </div>
</template>

<script>
import Content from './Content.vue'
export default {
    data(){
        return{
            list:[],//tab内vnode的容器
        }
    },
    props:{
        activeName:{
            type:[String,Number],
            default:1
        }
    },
    mounted(){
        console.log('tabs---activeName',this.activeName);
        console.log('vcode--------s',this.$slots);
        console.log('tab',this.$slots.default[0].child.$slots.default);
        let arr = this.$slots.default;
        let list =[];
        for (let i = 0; i < arr.length; i++) {
            let obj={};
            obj.name = arr[i].child.name;//tab的标记
            obj.vnode = arr[i].child.$slots.default;//tab包裹的内容，虚拟dom
            list.push(obj)        
        }
        // console.log(list);
        this.list = list;
    },
    components:{
        Content
    }
}
</script>

<style lang='less' scoped>
.nav{
    display: flex;
    border-bottom: 1px solid #ddd;
    >div{
        flex: 1;
        text-align: center;
        border-right: 1px solid #ccc;
        margin: 0.15rem 0;
        font-size: 0.31rem;
        padding: 0.05rem;
    }
    >div:last-child{
        border: none;
    }
}
</style>