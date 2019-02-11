<template>
  <div class="play">
    <router-link to="/Play/Playss">playss</router-link>
    <router-link to="/Play/Link">Link</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Link from '@/components/Link'
    export default {
        name: "Play",
      components :{
          Link
      }
    }
</script>

<style scoped>

</style>
