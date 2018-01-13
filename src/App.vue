<template>
  <div id="app">
    <div>
       <router-link to="/">首页</router-link> 
       <router-link to="/store">仓库</router-link> 
       <router-link to="/login">登录页面</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
