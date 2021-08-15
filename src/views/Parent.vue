<template>
  <div>
      <h1>父子组件 生命周期函数执行顺序</h1>
      <h2>Parent </h2>
      <hr>
        <Son/>
  </div>
</template>

<script>
// 普通引入方式  生命周期执行顺序
//  1 P--------beforeCreate
//  2 P--------created
//  3 P-----------beforeMount
//  1 Son--------beforeCreate
//  2 Son--------created
//  3 Son-----------beforeMount
//  4 Son----------mounted
//  4 P----------mounted
// import Son from './Son.vue'
export default {
    components:{
        // 异步加载 生命周期执行顺序
        //  1 P--------beforeCreate
        //  2 P--------created
        //  3 P-----------beforeMount
        //  4 P----------mounted
        //  1 Son--------beforeCreate
        //  2 Son--------created
        //  3 Son-----------beforeMount
        //  4 Son----------mounted
        Son:()=>import('./Son.vue')
    },
    beforeCreate(){
        console.log('1 P--------beforeCreate');
    },
    created(){
        console.log('2 P--------created');
    },
    beforeMount(){
        console.log('3 P-----------beforeMount');
    },
    mounted(){
        console.log('4 P----------mounted');
    }
}
</script>

<style>

</style>