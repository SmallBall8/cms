<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './c-cpns/login-pannel.vue'
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;

  //居中
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('../../assets/img/login-bg.svg');
}
</style>
