<template>
  <div>
    <p class="title">截至 {{toTime(virusCount.modifyTime)}} 全国数据统计</p>
    <ul class="count-box">
      <li>
        <p class="yesterday">较昨日<span>{{changeNum(virusCount.currentConfirmedIncr)}}</span></p>
        <p><span>{{ virusCount.currentConfirmedCount}}</span></p>
        <p><strong>现有确诊</strong></p>
      </li>
      <li>
        <p class="yesterday">较昨日<span>{{changeNum(virusCount.confirmedIncr)}}</span></p>
        <p><span>{{ virusCount.confirmedCount}}</span></p>
        <p><strong>累计确诊</strong></p>
      </li>
      <li>
        <p class="yesterday">较昨日<span>{{ changeNum(virusCount.suspectedIncr)}}</span></p>
        <p><span>{{ virusCount.suspectedCount}}</span></p>
        <p><strong>累计境外输入</strong></p>
      </li>
      <li>
        <p class="yesterday">较昨日<span>{{ changeNum(virusCount.curedIncr)}}</span></p>
        <p><span>{{ virusCount.curedCount}}</span></p>
        <p><strong>累计治愈</strong></p>
      </li>
      <li>
        <p class="yesterday">较昨日<span>{{ changeNum(virusCount.deadIncr)}}</span></p>
        <p><span>{{ virusCount.deadCount}}</span></p>
        <p><strong>累计死亡</strong></p>
      </li>
      <li>
        <p class="yesterday">较昨日<span>{{ changeNum(virusCount.seriousIncr)}}</span></p>
        <p><span>{{ virusCount.seriousCount}}</span></p>
        <p><strong>现有无症状</strong></p>
      </li>
    </ul>
  </div>
</template>

<script>
import changeTime from '../../../utils/time';
export default {
    props:{
        virusCount:{
            type:Object,
            default:()=>{}
        }
    },
    methods:{
        // 正数前面补个 +
        changeNum(num){
            return num>0?'+'+num:num;
        },
        toTime(timestamp){
            return changeTime(timestamp);
        }
    }
};
</script>


<style lang='less' scoped>
.title{
    padding:0.2rem 0.35rem 0.1rem;
    color: #666;
    font-size: 0.3rem;
}
.count-box{
    margin:0.15rem 0.35rem;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 0 3px 3px rgba(110, 108, 108, 0.1);
    padding-top: 0.45rem;
    border-radius: 0.08rem;
    >li:nth-child(1){
        span{
            color: #F74C31;
        }
    }
    >li:nth-child(2){
        span{
            color: #F78207;          
        }
    }
    >li:nth-child(3){
        span{
            color: #A25A4E;          
        }
    }
    >li:nth-child(4){
        span{
            color: #AE212C;          
        }
    }
    >li:nth-child(5){
        span{
            color: #5D7092;          
        }
    }
    >li:nth-child(6){
        span{
            color: #28B7A3;          
        }
    }
    li{
         margin-bottom: 0.5rem;
        width: 33.33%;
        text-align: center;
        .yesterday{
            color: #666;
            font-size: 0.24rem;
        }
        >p:nth-child(2){
            margin:0.1rem 0;
            font-size: 0.4rem;
            span{
                font-weight: bold;
            }
        }
        strong{
             font-weight: bold;
        }
        >p:nth-child(3){
            font-size: 0.24rem;
        }
    }
}
</style>