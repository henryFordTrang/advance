<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <van-button type="default">默认按钮</van-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>   
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  watch:{
    '$route'(nv,ov){
      console.log(nv,'-----',ov)
    }
  },
  mounted(){
    console.log(this)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
