<template>
  <div>
    <div id="example">
      <p>original message: "{{examMessage}}"</p>
      <p>computed reversed message: "{{reversedMessage}}"</p>
    </div>
    <div v-if="" @click="handleToggle">点击切换</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: "Main",
    el: '#example',
    data() {
      return {
        examMessage: 'asdfg',
        val:false
      }
    },
    computed: {
/*      ...mapGetters([
        'changeBtn',
  ]),*/
      //计算熟悉的 getter
      reversedMessage: function () {
        //'this'指向 vm 实例
        return this.message.split('').reverse().join('');
      }
    },
    methods: {
      handleToggle(val) {

      }
    }
  }
</script>

<style scoped>

</style>
