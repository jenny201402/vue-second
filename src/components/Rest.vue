<template>
  <div>
    <div type="button" id="hook-arguments-example" v-demo="message"></div>
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
  import Header from '../../static/page/Header';
  import Main from '../../static/page/Main';
  import Vue from 'vue'

    export default {
        name: "Rest",
      components :{
        Header,Main
      }
    }
 Vue.directive('demo', {
    bind: function (el, binding, vnode) {
      var s = JSON.stringify;
      el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value)
    }
  })

  new Vue({
    el: '#hook-arguments-example',
    data: {
      message: 'hello!'
    }
  })
</script>

<style scoped>

</style>
