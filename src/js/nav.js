import Vue from 'vue'
import Nav from '../components/Nav'
import router from '../router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#nav',
  router,
  components: { Nav },
  tempDir: '<Nav/>'
})
