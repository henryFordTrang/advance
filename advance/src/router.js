import Vue from 'vue'
import Router from 'vue-router'
import inout from './views/test1/inout.vue'
import animaTo from './views/test1/animaTo.vue'
Vue.use(Router)
export default new Router({
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