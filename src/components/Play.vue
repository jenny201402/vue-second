<template>
  <div class="play">
    <p>
         <router-link to="/Play/Playss"><span>playss</span></router-link>
    </p>
    <p>
        <router-link to="/Play/Link"><span>Link</span></router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  import Link from '@/components/Link'
  import Playss from '@/components/Playss'
    export default {
        name: "Play",
      components :{
        Playss,Link
      }
    }
</script>

<style scoped lang="scss">
  @import '../common/common.scss';
</style>
