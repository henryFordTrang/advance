<template>
  <div id="app">
    <transition :name="animaInOut">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="child-view"></router-view>
      </keep-alive>
    </transition>
    <transition :name="animaInOut">
        <router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import { mapGetters } from "vuex";
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return{
      animaInOut:'slide-left',
    }
  },
  watch:{
    $route(nv, ov) {
      console.log($route)
      switch(this.$router.anima){
        case 'level':this.animaInOut='';
        break;
        case 'go':this.animaInOut='slide-left';
        break;
        case 'back':this.animaInOut='slide-right';
        break;
      }
      // const toDepth = to.path.split("/").length;
      // const fromDepth = from.path.split("/").length;
      // if (to.path == "/") {
      //   this.direction = "slide-right";
      // } else if (from.path == "/") {
      //   this.direction = "slide-left";
      // }else{
      //   this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
      // }
      this.$router.anima = 'go'
    }
  },
  //computed:mapGetters(['device']),
  methods:{
    entry(){
      var _this=this;
      //console.log('----',_this.$router)
      _this.$router.replace('/inout')
    }
  },
  created(){
    this.$store.commit('ifIphone',trang.device())
    window.removeEventListener('load', this.entry, false)
    window.addEventListener('load', this.entry, false)
  }
}
</script>

<style>
html,body,#app{
  height:100%;
  width:100%;
}

.child-view { 
  width:100%;
  height:100%;
  transition:all .5s cubic-bezier(.55,0,.55,0);
} 
.slide-left-enter{
  transform: translate(100%, 0);
}
.slide-left-leave-active{
  transform: translate(-50%, 0);
}
.slide-right-enter{
  transform: translate(-100%, 0);
}
.slide-right-leave-active{
  transform: translate(50%, 0);
}

</style>
