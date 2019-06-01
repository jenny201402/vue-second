<template>
  <div url="/profile">
    <div>
        <div v-for="name in country"></div>
        <div v-for="put in putInside"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Navigative",
      data(){
          return{
            country: [
                {name:'china'},
                {name:'england'},
                {name:'america'},
                {name:'korean'},
                {name:'japanese'},
                {name:'arilan'},
                {name:'arben'},
                {name:'alphalan'},
              ],
            putInside: [
              {put:'1'},
              {put:'2'},
              {put:'3'},
              {put:'4'},
              {put:'5'},
              {put:'6'},
              {put:'7'},
            ]
          }
      },
      methods: {},
      mounted(){
          console.log()
      },
    }
</script>

<style scoped>

</style>
