import Vue from 'vue'
import router from 'vue-router'
import inout from './views/test1/inout.vue'
import animaTo from './views/test1/animaTo.vue'
Vue.use(router)
export default new router({
    routes:[
        {
            path:'/inout',
            component:inout,
            meta:{
                keepAlive:false
            }
        },
        {
            path:'/animaTo',
            component:animaTo,
            meta:{
                keepAlive:false
            }
        }
    ]
})