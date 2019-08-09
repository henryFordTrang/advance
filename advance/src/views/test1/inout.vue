<template>
  <external>
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
    </scroller>
  </external>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toAnima() {
      console.log(trang.aliPay(), "----");
      trang.innerOpen(trang.aliPay());
      //window.location.href='https://sj.qq.com/myapp/detail.htm?apkName=com.eg.android.AlipayGphone';
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

