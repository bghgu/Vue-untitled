<template>
  <div id="app">

    <Nav></Nav>
    <Post class="post"></Post>
    <div class="box1">
      <img src="./assets/logo.png">
      <h1>untitled project</h1>
      <p>여기 까지가 app.vue 컴포넌트</p>
    </div>

    <div class="box">
      <p>여기서 부터 라우팅 영역</p>
      <router-view/>
    </div>

  </div>
</template>

<script>
import Nav from './components/Nav'
import Post from './components/Post'
export default {
  name: 'App',
  components: {Post, Nav}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: solid violet 1px;
}
.nav {
  border: solid salmon 1px;
}
.post {
  margin-left: 25%;
}
.box1 {
  border: solid blue 1px;
}
.box {
  padding: 10px;
  border: solid black 1px;
}
</style>
