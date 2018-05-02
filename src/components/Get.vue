<template>
  <div>
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
    <button v-on:click="searchTerm">글 불러오기</button>
    <h1>{{status}}</h1>
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
      const baseURI = 'http://bghgu.tk:3000'
      this.$http.get(`${baseURI}/info/vote`)
        .then((result) => {
          this.posts = result.data.data
          this.msg = result.data.msg
          this.status = result.data.status
          console.log(this.posts)
        })
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 560px;
  }

  .box {
    border: solid blue 1px;
  }
</style>
