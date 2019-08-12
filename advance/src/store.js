import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        ifIphone:0,//0 安卓,1 苹果, 2 PC
    },
    getters:{
        ifIphone:state=>state.ifIphone,
    },
    mutations:{
        ifIphone:(state,value)=>state.ifIphone=value,
    },
    actions:{

    }
})