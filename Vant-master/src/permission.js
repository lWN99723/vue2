import router from './router'
import store from './store'


router.beforeEach((to, from, next)=> {
    store.dispatch('footer/selected', to.path)
    next()
})
