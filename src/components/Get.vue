<template>
  <div>
    <router-link to="/">Main Page</router-link>
    <h1>{{msg}}</h1>
    <div v-if="hasResult">
      <div class="box" v-for="post in posts" v-bind:key="post.voteId">
        <h1>{{post.voteName}}</h1>
        <p>투표 시작 시간 : {{post.startTime}}</p>
        <p>투표 종료 시간 : {{post.endTime}}</p>
        <p>현재 투표율 : {{post.votePercent}}%</p>
        <p>투표한 사람수 : {{post.allVoter}}%</p>
      </div>
    </div>
    <h1>{{status}}</h1>
    <button type="button" class="btn btn-primary" v-on:click="searchTerm">투표 정보 조회</button>
  </div>
</template>

<script>
export default {
  name: 'Get',
  data () {
    return {
      msg: 'Get Test',
      posts: [],
      data: [],
      status: ''
    }
  },
  computed: {
    hasResult: function () {
      return this.status === 'SUCCESS'
    }
  },
  methods: {
    searchTerm: function () {
      const baseURI = 'http://127.0.0.1:8080'
      this.$http.get(`${baseURI}/auth`)
        .then((result) => {
          console.log(result.data)
          this.posts = result.data.data
          this.msg = result.data.msg
          this.status = result.data.status
        })
    }
  }
}
</script>

<style scoped>
  .box {
    border: solid blue 1px;
    margin: 60px;
  }
</style>
