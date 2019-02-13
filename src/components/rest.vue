<rest>
<template slot="header">
  <div>
    <a v-bind:href="url" class="header">
      <slot></slot>
    </a>
  </div>
</template>
  <template slot="header">
    <div>
      <a v-bind:href="url" class="main">
        <slot></slot>
      </a>
    </div>
  </template>
  <template slot="header">
    <div>
      <a v-bind:href="url" class="footer">
        <slot></slot>
      </a>
    </div>
  </template>
</rest>

<script>
  import header from '../../static/page/header';
  import main from '../../static/page/main';
  import footer from '../../static/page/footer';

    export default {
        name: "rest",
      components :{
          header,main,footer
      }
    }
</script>

<style scoped>

</style>
