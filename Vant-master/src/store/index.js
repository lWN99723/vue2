import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import model from './modules/model'
import footer from './modules/footer'
import bankcard from './modules/bankcard'
import createLogger from '../plugins/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state:{
    count:0
  },
  getters:{
    count: state => {
      return state.count += 100;
    }
  },
  modules: {
    cart,
    model,
    footer,
    bankcard
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
