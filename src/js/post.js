import Vue from 'vue'
import Post from '../components/Post'
import router from '../router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#post',
  router,
  components: { Post },
  tempDir: '<Post/>'
})
