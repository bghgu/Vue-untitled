<template>
  <div id="nav">
    <div class="row">
      <div class="col-xs-4 col-md-4, logo">로고</div>
      <div class="col-xs-4 col-md-4, search">
        <input type="text" class="form-control" v-model="search" placeholder="검색">
      </div>
      <div class="col-xs-4 col-md-4, icon">아이콘들</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.out {
  padding-left: 10px;
  padding-right: 10px;
  background: #dcff94;
}
.logo {
  border: solid black 1px;
  overflow: hidden;
  white-space: nowrap;
}
.search {
  border: solid black 1px;
}
.icon {
  border: solid black 1px;
  overflow: hidden;
  white-space: nowrap;
}
</style>
