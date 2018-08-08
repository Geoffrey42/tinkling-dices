import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Posts from '../components/Posts'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: HelloWorld
        },
        {
            path: '/posts',
            name: 'posts',
            component: Posts
        }
    ]
})
