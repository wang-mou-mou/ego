<template>
  <div>
      <!-- 疫情图片 -->
      <img src="../../assets/images/1.jpg" alt="疫情图" style="width:100%">
      <!-- 病毒信息 -->
      <VirusInfo :virusInfo='virusInfo'/>
      <!-- 数据统计 -->
      <VirusCount :virusCount='virusCount'/>
      <!-- 疫情地图 -->
      <VirusMap/>

      <!-- 疫情数据分析图 -->
      <MySwiper v-if="virusImg.length>0" :arr='virusImg'/>

      <!-- 城市选择 级联Cascader -->
      <VueCascader/>
  </div>
</template>

<script>

export default {
  data(){
    return{
      virusInfo:{},//疫情信息
      virusCount:{},//疫情数据
      virusImg:[],//疫情数据分析图
    }
  },
  // 生命周期函数
  created(){
    // 请求疫情信息数据
    this.$api.getVirusInfo().then(res=>{
      // console.log(res.data);

      let desc = res.data.newslist[0].desc;
      let {note1,note2,note3,remark1,remark2,remark3,currentConfirmedCount,confirmedCount,suspectedCount,curedCount,deadCount,seriousCount,suspectedIncr,currentConfirmedIncr,confirmedIncr,deadIncr,seriousIncr,modifyTime} =desc;
      // 存入疫情信息数据
      this.virusInfo = {note1,note2,note3,remark1,remark2,remark3};

      // 存入疫情数据
      this.virusCount = {currentConfirmedCount,confirmedCount,suspectedCount,curedCount,deadCount,seriousCount,suspectedIncr,currentConfirmedIncr,confirmedIncr,deadIncr,seriousIncr,modifyTime}
    })

    // 请求疫情数据分析图 
    this.$api.getVirusImg().then(res=>{
      if(res.status === 200){
        this.virusImg = res.data.result;
         console.log(this.virusImg);
      }
    })
  },
  // methods:{
    
  // },
  components:{
    VirusInfo:()=>import('./virus/VirusInfo.vue'),//疫情信息
    VirusCount:()=>import('./virus/VirusCount.vue'),//疫情数据展示
    VirusMap:()=>import('./EchartsMap/VirusMap.vue'),//疫情地图
    MySwiper:()=>import('../../components/mySwiper/MySwiper.vue'),//疫情数据分析图 轮播
    VueCascader:()=>import('./VueCascader.vue'),//城市选择 vant-级联
  }
}
</script>

<style>

</style>