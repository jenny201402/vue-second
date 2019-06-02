<template>
  <div url="/profile">
    <div>
        <div v-for="ice in combine" v-model="combine">
          {{ice}}
        </div>
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
                {name:'alphalan'},
                {name:'alphalan'},
                {name:'alphalan'},
                {name:'alphalan'},
                {name:'alphalan'},
                {name:'alphalan'},
                {name:'alphalan'},
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
            ],
            combine:[],

          }
      },
      methods: {
          getBind(){
            for(let i = 1; i <= this.country.length; i++){
              this.combine.push(this.country[i-1].name);
              if(i % 4 === 0){
                this.combine.push(this.putInside[i/4 -1].put);
              }
            }
          },

      },
      mounted(){
        this.getBind();
      },
    }
</script>

<style scoped>

</style>
