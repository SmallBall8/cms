<template>
  <div class="login-pannel">
    <!--顶部的标题-->
    <h1 class="title">鸿源后台管理系统</h1>

    <!--中间的tabs切换-->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <!--账号登录的Pane-->
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <pane-account ref="accountRef" />
          <!--要将他绑定在子组件上-->
        </el-tab-pane>

        <!--手机登录的Pane-->
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <pane-phone ref="phoneRef" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />

      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" size="large" @click="handleLoginBtnClick">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'
import { localCache } from '@/utils/cache'

const activeName = ref('account')
const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false) //默认不记住密码
const accountRef = ref<InstanceType<typeof PaneAccount>>()
const phoneRef = ref<InstanceType<typeof PanePhone>>()

watch(isRemPwd, (newValue) => {
  //console.log(newValue)
  localCache.setCache('isRemPwd', newValue)
})

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    //1.获取子组件的实例

    //2.调用子组件的方法
    accountRef.value?.loginAction(isRemPwd.value)
  } else {
    console.log('用户在手机登陆')
  }
}
</script>

<style lang="less" scoped>
.login-pannel {
  width: 330px;
  margin-bottom: 150px;
  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
    --el-button-size: 50px !important;
  }
}
</style>
