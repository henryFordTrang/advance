<template>
    <div class="iosPad" ref="iosPad" :style="{height}">
    </div>
</template>
<script>
export default {
    name:'iosPad',
    data(){
        return{
            height:'',
        }
    },
    methods:{

    },
    created(){
        var _this=this;
        process.env.NODE_ENV=='development'?_this.height='20px':_this.height=(window.screen.height-window.screen.availHeight)+'px'
    }
}
</script>
<style lang="less" scoped>

</style>
