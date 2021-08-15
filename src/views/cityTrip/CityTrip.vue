<template>
  <div class="city-trip">
      <h2 class="title">出游攻略信息：</h2>
      <div>
          <p class="city">{{ fromInfo.city_name}}</p>
          <p>{{ fromInfo.high_in_desc}}</p>
          <p>{{ fromInfo.out_desc}}</p>
      </div>
      <div>
          <p class="city">{{ toInfo.city_name}}</p>
          <p>{{ toInfo.high_in_desc}}</p>
          <p>{{ toInfo.out_desc}}</p>
      </div>
  </div>
</template>

<script>
import secret from '../../api/secret';
export default {
    props:['from','to'],
    data(){
        return{
            fromInfo:{},
            toInfo:{}
        }
    },
    mounted(){
        let params={
            key:secret.key1,
            from:this.from,
            to:this.to
        };
        this.$api.getCityInfo(params).then(res=>{
            if(res.status ===200){
                if(!res.error_code){
                    this.fromInfo = res.data.result.from_info;
                    this.toInfo = res.data.result.to_info;
                    // console.log(this.fromInfo);
                    // console.log(this.toInfo);
                }
            }
        })
    }
}
</script>

<style lang='less' scoped>
.city-trip{
    color: #666;
    margin: 0.25rem 0.3rem;
    .title{
        font-size: 0.4rem ;
        font-weight: bold;
    }
    >div{
        p{
            font-size: 0.28rem;
            line-height: 0.4rem;
        }
        .city{
            font-size: 0.34rem;
            margin: 0.3rem 0;
        }
    }
}
</style>