<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/login">Login Page</router-link>
    <router-link to="/get">Get Test Page</router-link>
    <input class="btn btn-default" type="submit" value="Submit">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '메인 페이지'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
