<template>
    <div>
        <van-button type="info" @click="backAnima">危险按钮</van-button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        backAnima(){
            trang.scan();
            return;
            this.$router.replace('/inout')
        },

    }
}
</script>
