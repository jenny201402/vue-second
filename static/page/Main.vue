<template>
  <div id="example">
    <p>original message: "{{examMessage}}"</p>
    <p>computed reversed message: "{{reversedMessage}}"</p>
  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Main"
    }

    var vm = new Vue({
      el:'#example',
      data: {
        examMessage: 'asdfg'
      },
      computed: {
        //计算熟悉的 getter
        reversedMessage: function () {
          //'this'指向 vm 实例
          return this.message.split('').reverse().join('');
        }
      }
    })

</script>

<style scoped>

</style>
