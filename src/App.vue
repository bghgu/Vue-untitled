<template>
  <div id="app">

    <div class="box1">
      <img src="./assets/logo.png">
      <h1>untitled project</h1>
      <p>여기 까지가 app.vue 영역</p>
    </div>

    <div class="box">
      <p>여기서 부터 라우팅 영역</p>
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box1 {
  border: solid blue 1px;
}
.box {
  border: solid black 1px;
}
</style>
