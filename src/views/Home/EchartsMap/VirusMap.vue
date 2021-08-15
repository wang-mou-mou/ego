<template>
  <div style="width: 7rem; height: 8rem">
    <!-- 自己写 tab 切换 -->
    <!-- <div class="navbar">
      <div @click="show = true" :class="{ active: show }">国内地图</div>
      <div @click="show = false" :class="{ active: !show }">国外疫情</div>
    </div> -->
    <!-- 国内地图容器 -->
    <!-- <div id="main" style="width: 7rem; height: 7rem" v-show="show"></div> -->
    <!-- 国外疫情地图 -->
    <!-- <div id="main2" style="width: 7rem; height: 7rem" v-show="!show"></div> -->


     <Tabs :activeName='activeName' :changeTab="changeTab">
      <Tab label='国内疫情' name=1>
          <div id="main" style="width: 7rem; height: 7rem" ></div>
      </Tab>
      <Tab label='国外疫情' name=2>
          <div id="main2" style="width: 7rem; height: 7rem" ></div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // show:true,//显示
      // active:'active',//高亮选中
      activeName: 1,
    };
  },
  methods: {
    changeTab(name) {
      this.activeName = name;
    },
  },
  mounted() {
    // 请求国内疫情接口数据
    this.$api.getChinaData().then((res) => {
      // console.log(res.data.retdata);
      // 接口的数据
      let arr = res.data.retdata;
      // 数组对象 容器
      let list = [];
      for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.name = arr[i].xArea;
        obj.value = arr[i].curConfirm;
        list.push(obj);
      }
      // console.log(list);
      // 使用地图
      this.$echarts.chinaMap("main", list);
    });

    // 请求国外疫情数据
    this.$api.getForeignData().then((res) => {
      // console.log(res.data.retdata);
      let arr = res.data.retdata;
      // 数组对象 容器
      let list = [];
      for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.name = arr[i].xArea;
        obj.value = arr[i].curConfirm;
        list.push(obj);
      }
      // console.log(list);
      this.$echarts.worldMap("main2", list);
    });
  },
};
</script>

<style lang='less' scoped>
.navbar {
  display: flex;
  line-height: 0.5rem;
  border-bottom: 1px solid rgb(219, 218, 218);
  > div {
    flex: 1;
    text-align: center;
    font-size: 0.32rem;
    margin: 0.1rem;
    border-right: 1px solid #eee;
  }
  > div:last-child {
    border: none;
  }
  .active {
    color: #41b883;
  }
}
</style>