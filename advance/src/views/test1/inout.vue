<template>
  <external>
    <iosPad v-if="ifIphone==1"></iosPad>
    <van-nav-bar
      title="测试"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <scroller>
      <van-button type="info" @click="toAnima">危险按钮</van-button>
      <div class="ref" ref="reftest"></div>
    </scroller>
  </external>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {};
  },
  computed:mapGetters(['ifIphone']),
  methods: {
    toAnima() {
      var _this=this;
      
      return;
      this.$router.replace("/animaTo");
    },
    onClickLeft(){

    },
    onClickRight(){

    },
  }
};
</script>
<style scoped>
.ref{
  height:100px;
  width:100px;
  background-color:yellowgreen;
}
</style>


