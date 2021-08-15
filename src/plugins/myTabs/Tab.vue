<template>
  <div :class="{active:name == activeName}" @click="changeActiveName(name)">
      {{label}}
  </div>
</template>

<script>
export default {
    mounted(){
        // console.log('tab----',this.$parent.$parent);
        // console.log('activeName----',this.$parent.$parent.activeName);
    },
    methods:{
        changeActiveName(name){
            this.$parent.$parent.changeTab(name)
            // console.log(name);
        }
    },

    // 计算属性 数据更新 自动记录
    computed:{
        activeName(){
            return this.$parent.$parent.activeName
        }
    },
    props:{
        label:{
            type:String,
            default:'tab'
        },
        name:{
            type:[String,Number],
            default:1
        }
    }
}
</script>

<style lang='less'>
.active{
    color: #41B883;
}
</style>