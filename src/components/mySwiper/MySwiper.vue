<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" >
        <template v-for="(ele,index) in arr">
            <swiper-slide :key="index">
                <img :src="ele.image" alt="" style="width:100%">
            </swiper-slide>
        </template>
    
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 自配 按钮 -->
    <div class="btn">
      <template v-for="(ele, index) in arr">
        <span
          :key="index"
          @click="changeSwiper(index)"
          :class="{ active: num === index }"
        >
          {{ ele.title }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>

export default {
    props:{
        arr:{
            type:Array,
            // default:[]
        }
    },
  name: "carrousel",
  data() {
    let that = this;
    return {
      //   swiper配置项
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,//自动播放
        autoplay: {
            disableOnInteraction: false,
             delay: 3000,
             stopOnLastSlide: false,
        },
        loop:true,//循环
        on: {
            // 切屏触发事件
            // 传入this
          slideChangeTransitionEnd: function () {
            // console.log('activeIndex----',this.activeIndex);
            // console.log('realIndex----',this.realIndex);
            that.num = this.realIndex;
          },
        },
      },
      num: 1, //高亮
    };
  },
  methods: {
    changeSwiper(index) {
      //   高亮
      this.num = index;
      //   切屏
      this.swiper.slideTo(index + 1, 800, false);
    },
  },
  //   计算属性---
  computed: {
    // swiper实例
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    //切到第三个屏
    //   this.swiper.slideTo(3, 1000, false)
  },
};
</script>

<style lang='less' scoped>
.swiper-container {
  min-height: 2rem;
}

.btn {
  display: flex;
  justify-content: space-around;
  span {
    text-align: center;
    vertical-align: middle;
    background: #eee;
    height: 1rem;
    width: 1rem;
    padding: 0.1rem;
    // 实现文字 水平 垂直居中
    display: flex;
    align-items: center;
    justify-content: center;
    color:#777
  }
  .active {
    background: #f1f5ff;
    color: #4169e2;
  }
}
</style>