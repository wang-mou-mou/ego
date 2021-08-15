<template>
  <div>
    <h2>城市：{{ cityname }}</h2>
    <!-- 地图容器 -->
    <div id="main" style="width: 7rem; height: 8rem"></div>
  </div>
</template>

<script>
export default {
  props: ["cityname"],
  mounted() {
    // 请求城市 疫情数据
    this.$api.getCityData({ cityName: this.cityname }).then((res) => {
      console.log(res.data.retdata.subList);
      let arr = res.data.retdata.subList;
      let data = [];
      for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.name = arr[i].city;
        obj.value = arr[i].confirm;
        data.push(obj);
      }
      // 城市地图
      this.$echarts.cityMap("main", this.cityname,data);
    });

    this.$echarts.worldMap('main2')
  },
};
</script>

<style>
</style>