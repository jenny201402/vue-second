<template>
  <div>
    <div type="button" id="hook-arguments-example" v-demo="message"></div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <Addel></Addel>
    <Slot></Slot>
    <Formvalidate></Formvalidate>
    <Breadcrumb></Breadcrumb>
  </div>
</template>

<script>
  import Header from '../../static/page/Header';
  import Main from '../../static/page/Main';
  import Footer from '../../static/page/Footer';
  import Addel from '../../static/page/Addel';
  // import Slot from '../../static/page/Slot';
  import Formvalidate from '../../static/page/Formvalidate';
  import Breadcrumb from '../../static/view/Breadcrumb/Breadcrumb';
  import Vue from 'vue'

    export default {
        name: "Rest",
      components :{
        Header,Main,Addel,Footer,Formvalidate,Breadcrumb
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

</script>

<style scoped>

</style>
