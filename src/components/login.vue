<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="box">
      <h2> 로그인 박스 </h2>

      <form>
        <div class="form-group">
          <input type="text" class="form-control" v-model="id" placeholder="ID">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" v-model="pw" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-default" v-on:click="inputHandler">제출</button>
      </form>

      <div v-if="hasResult">
        <h1>{{status}}</h1>
        <h1>{{data}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '로그인 페이지',
      id: '',
      pw: '',
      status: '',
      data: []
    }
  },
  computed: {
    hasResult: function () {
      return this.status === 'SUCCESS'
    }
  },
  methods: {
    inputHandler: function () {
      console.log(this.id)
      console.log(this.pw)
      const baseURI = 'http://127.0.0.1:8080/auth'
      this.$http.post(`${baseURI}/login`, {
        id: this.id,
        pw: this.pw
      })
        .then((result) => {
          this.data = result.data.data
          this.msg = result.data.msg
          this.status = result.data.status
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.box {
  margin: 10px;
  border: solid deeppink 1px;
}
</style>
