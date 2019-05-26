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
    <div id="video" style="width:700px;height:360px;margin:0 auto;"></div>

    <p>本页观看需要在支持h5环境的浏览器上，视频格式需要是h5支持的mp4</p>
  </div>
</template>

<script>
  import '../../static/ckplayer/ckplayer.js'
  import Navigative from '@/components/Navigative';
  import Rest from '@/components/Rest';


  export default {
    name: "Home",
    components: {
      Navigative, Rest

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
mounted(){
  let videoObject = {
    container: '#video', //容器的ID或className
    variable: 'player',//播放函数名称
    autoplay:false,//自动播放
    poster:'../material/poster.jpg',//封面图片
    // advertisements:'website:package.json',//单独用一个json文件来配置广告
    adfront:'static/bet365.mp4',//前置广告文件路径列表,
    adfronttime:'10',//前置广告每个广告的播放时长
    // adfrontlink:'/prestrain.html',//前置广告的链接地址,
    video: [//视频地址列表形式
      ['http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4', 'video/mp4', '中文标清', 0],
      // ['http://img.ksbbs.com/asset/Mon_1703/d0897b4e9ddd9a5.mp4', 'video/mp4', '中文高清', 0],
      // ['http://img.ksbbs.com/asset/Mon_1703/eb048d7839442d0.mp4', 'video/mp4', '英文高清', 10],
      // ['http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4', 'video/mp4', '英文超清', 0],
    ],
  };
  let player = new ckplayer(videoObject);
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
