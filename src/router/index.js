import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

Vue.use(VueRouter)

const router =  new VueRouter({
    routes: [
        { path: '/', component: Dashboard},
        { path: '/login', component: Login}
    ]
})

export default router