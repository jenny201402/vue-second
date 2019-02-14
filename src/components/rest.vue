<template>
    <div type="button" id="hook-arguments-example" v-demo=""></div>
</template>

<script>
  import header from '../../static/page/header';

    export default {
        name: "rest",
      components :{
          header
      }
    }
  Vue.directive('demo', {
    bind: function (el, binding, vnode) {
      var s = JSON.stringify;
      el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
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
