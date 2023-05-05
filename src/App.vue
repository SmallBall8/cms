<template>
  <div class="app">
    <h2>App</h2>
    <router-link to="/main">主要</router-link>
    <router-link to="/login">登录</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
interface IKUN {
  name: string
}
const ikun: IKUN = { name: 'kobe' }
console.log(ikun)
</script>

<style scoped></style>
