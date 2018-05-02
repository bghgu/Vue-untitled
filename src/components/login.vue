<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="box">
      <h2> 로그인 박스 </h2>
      <form>
        <div>
          <label>ID</label>
          <input type="text" v-model="id" @change="inputHandler" placeholder="ID"/>
        </div>
        <div>
          <label>PW</label>
          <input type="text" v-model="pw" @change="inputHandler" placeholder="PW"/>
        </div>
        <button type="submit" class="btn btn-default">제출</button>
      </form>
    </div>
    <h1>ID : {{id}}</h1>
    <h1>PW : {{pw}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '로그인 페이지',
      id: '',
      pw: ''
    }
  },
  methods: {
    inputHandler: async function () {
      console.log(this.id)
      console.log(this.pw)
    }
  }
}
</script>

<style scoped>
.box {
  margin: 10px;
  border: solid blue 1px;
}
</style>
