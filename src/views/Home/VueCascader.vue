<template>
  <div>
    <p class="title">疫情期间出行防疫政策</p>
    <van-field
      v-model="startCityVal"
      is-link
      readonly
      label="出发城市"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>

    <van-field
      v-model="endCityVal"
      is-link
      readonly
      label="到达城市"
      placeholder="请选择所在地区"
      @click="show2 = true"
    />
    <van-popup v-model="show2" round position="bottom">
      <van-cascader
        v-model="cascaderValue2"
        title="请选择所在地区"
        :options="options"
        @close="show2 = false"
        @finish="onFinish2"
      />
    </van-popup>

    <van-button type="primary" block @click="toCityTrip">点击查询</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      startCityVal: "", //出发城市 ipt
      endCityVal: "", //出发城市 ipt
      cascaderValue: "",
      cascaderValue2: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],

      fromCode: "", //出发城市id
      toCode: "", //到达城市id
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions }) {
      this.show = false;
      this.startCityVal = selectedOptions
        .map((option) => option.text)
        .join("/");
      console.log("from----", value);
      this.fromCode = value;
    },
    onFinish2({ value, selectedOptions }) {
      this.show2 = false;
      this.endCityVal = selectedOptions.map((option) => option.text).join("/");
      console.log("to---", value);
      this.toCode = value;
    },
    // 点击查询按钮 跳转至城市出行页面
    toCityTrip() {
      console.log(this.fromCode);
      console.log(this.toCode);
      if (this.fromCode && this.toCode) {
        // 路由跳转
        this.$router.push({
          name: "CityTrip",
          params: {
            from: this.fromCode,
            to: this.toCode,
          },
        });
      }else{
        window.confirm('请选择出发和达到城市')
      }
    },
  },
  // 生命周期函数
  mounted() {
    this.$api.getCitys().then((res) => {
      console.log(res);
      if (res.status === 200) {
        let data = res.data.result;
        let cityArr = [];
        data.forEach((ele) => {
          let obj = {};
          obj.text = ele.province;
          obj.value = ele.province_id;
          obj.children = [];
          // 遍历内层数组
          ele.citys.forEach((item) => {
            let obj1 = {};
            obj1.text = item.city;
            obj1.value = item.city_id;
            obj.children.push(obj1);
          });

          cityArr.push(obj);
        });

        // console.log(cityArr);
        // 赋值给级联城市数据
        this.options = cityArr;
      }
    });
  },
};
</script>

<style lang='less' scoped>
.title {
  margin: 0.2rem;
  font-size: 0.33rem;
  color: #666;
  font-weight: bold;
}
.van-button {
  font-size: 0.32rem;
  width: 95%;
  margin: 0 auto;
}
</style>