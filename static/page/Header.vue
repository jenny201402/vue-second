<template>
    <div>
      <div>
        <button v-on:click="count++">you clicked me {{count}} times.</button>
      </div>
      <div id="components-demo">
        <button-counter></button-counter>
        <button-counter></button-counter>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
   data () {
     return {
       count:0
     }
   }
    }
</script>

<style scoped>

</style>
