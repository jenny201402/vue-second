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
    <div id="hook-argument" v-demo:foo.a.b="message"></div>
  </div>
</template>

<script>
  import navigative from '@/components/navigative';
  import rest from '@/components/rest';

  export default {
    name: "Home",
    components: {
      navigative, rest

    },
    data() {
      return {
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
  }
  Vue.directive('demo', {
    bind: function (el, binding, vnode) {
      var s = JSON.stringify
      el.innerHTML =
        'name:' + s(binding.name) + '<br>' + 'value:' + s(binding.value) + '<br>' + 'expression:' + s(binding.expression) + '<br>' + 'argument:' + s(binding.arg) + '<br>' + 'modefiers:' + s(binding.modefiers) + '<br>' + 'vnode keys:' + Object.keys(vnode).join(',')
    }
  })
  new Vue({
    el: '#hook-argument',
    data: {
      message:'hello!'
    }
  })
</script>

<style scoped>
  @import '../common/common.scss';
</style>
