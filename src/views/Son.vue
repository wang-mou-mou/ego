<template>
  <div>
      <h4>Son</h4>
  </div>
</template>

<script>
export default {
    beforeCreate(){
        console.log('1 Son--------beforeCreate');
    },
    created(){
        console.log('2 Son--------created');
    },
    beforeMount(){
        console.log('3 Son-----------beforeMount');
    },
    mounted(){
        console.log('4 Son----------mounted');
    }
}
</script>

<style>

</style>