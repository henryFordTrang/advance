import Vue from 'vue'
import App from './App.vue'
import vant from 'vant'
import 'vant/lib/index.css';
import router from './router';
import store from './store.js';
import exterWra from './components/external.vue'
import scroller from './components/scroller.vue'
import iosPad from './components/iosToppad.vue'
import {imyourmom,basicUrl} from './util/utils.js';
Vue.use(vant);
Vue.component(exterWra.name,exterWra)
Vue.component(scroller.name,scroller)
Vue.component(iosPad.name,iosPad)
Vue.config.productionTip = false
router.anima = 'go'
window._util={imyourmom,basicUrl}
new Vue({
  methods:{
    back(){
      
    },
    toastLoading (options) {      
      let option = Object.assign({
        duration   : 0,
        mask       : true,
        forbidClick: true,
        loadingType: 'spinner',
        message    : '加载中...'
      }, options || {})
      this.$toast.loading(option)
    },
    toastClear () {
      this.$toast.clear()
    }
  },
  created(){   
    this.toastLoading();
  },
  mounted(){
    this.toastClear();    
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
