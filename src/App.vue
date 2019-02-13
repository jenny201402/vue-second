<template>
  <!--<div id="app" style="background:rosybrown;height:100%;">-->
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="app">
      <p>
        <span><router-link to="/Home">Home</router-link></span>
        <span><router-link to="/Play">Play</router-link></span>
        <span><router-link to="/About">About</router-link></span>
      </p>
    </div>
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
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className="active";
  },
  data(){
    return{
      msg:'hello vue',
      customizeClass: 'active'
    }
  },
  beforeDestroy: function() {
    document.body.removeAttribute("class","active");
  }
}

</script>

<style lang="scss" scoped>
  @import 'common/common.scss';
  body{
    margin:0;
  }
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
