
<script>
export default {
    props:{
        list:{
            type:Array
        },
        activeName:{
            type:[String,Number],
            default:1
        }
    },
    render(){
        return(
            <div>
                {
                    this.list.map((ele,index)=>{
                        return (
                            <div key={index} style={{display:this.activeName == ele.name?'block':'none'}}>
                                { ele.vnode }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
</script>

<style>

</style>