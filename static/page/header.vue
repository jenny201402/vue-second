<template>
    <div>
      <div id="components-demo">
        <button-counter></button-counter>
        <button-counter></button-counter>
        <button-counter></button-counter>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Header"
    }
    Vue.component('button-counter',{
      data:function () {
        return {
          count:0
        }
      },
       template:'<button v-on:click="count++">you clicked me {{count}} times.</button>'
  })

</script>

<style scoped>

</style>
