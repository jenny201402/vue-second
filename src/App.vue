<template>
  <div id="app" class="app">
    <!--<img src="./assets/logo.png">-->
    <p>
      <span><router-link to="/Home">Home</router-link></span>
      <span><router-link to="/Play">Play</router-link></span>
      <span><router-link to="/About">About</router-link></span>
    </p>
    <router-view/>
  </div>
</template>

<script>
  import Home from '@/components/Home'
  import Play from '@/components/Play'
  import About from '@/components/About'
export default {
  name: 'App',
  components :{
    Home,Play,About
  }
}
</script>

<style lang="scss" scoped>
  @import 'common/common.scss';
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
