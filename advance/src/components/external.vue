<template>
  <div class="page-view">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'external'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .page-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
  }
</style>
