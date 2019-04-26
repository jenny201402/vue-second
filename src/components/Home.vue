<template>
  <div class="home">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <navigative v-bind:href="url" class="nav-link">
      <slot></slot>
    </navigative>
    <rest></rest>
    <!--<input type="number" placeholder="TRUTH" v-model="myNum" v-on:input="numChange">-->
    <!--<input type="number" placeholder="TRUTH" @blur="numChange" :value="myNum">-->

<!--    <div id="num">
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ msg }}</p>
      <br>
      <textarea v-model="msg" placeholder="add multiple lines"></textarea>
    </div>-->

  </div>
</template>

<script>
  import Navigative from '@/components/Navigative';
  import Rest from '@/components/Rest';
  import Layout from '@/components/Layout';
  import Vue from 'vue'

  export default {
    name: "Home",
    components: {
      Navigative, Rest,Layout

    },
    data() {
      return {
        myNum: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },

    methods: {
      numChange(event){
        this.myNum = Number(event.target.value).toFixed(2);
      }
    }
  }
/*var num = 2;
  alert(num.toFixed(2))*/
/*  new Vue({
    el: '#num',
    data: {
      msg:[]
    }
  })*/
</script>

<style scoped>
  @import '../common/common.scss';
</style>
