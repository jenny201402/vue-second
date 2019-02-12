<template>
  <div class="play">
    <li>
      <router-link to="/Play/Playss"><span type="button">Registered</span></router-link>
      <router-link to="/Play/Link"><span type="button">Login</span></router-link>
    </li>
    <router-view></router-view>
  </div>
</template>

<script>
  import Link from '@/components/Link'
  import Playss from '@/components/Playss'

  export default {
    name: "Play",
    components: {
      Playss, Link
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/common.scss';
</style>
