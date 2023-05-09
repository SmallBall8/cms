<template>
  <div class="panel-phone">
    <!--status-icon这个属性是用来根据状态展示小图标的（比如成功状态，失败状态等-->
    <el-form
      :model="phone"
      :rules="phoneRules"
      label-width="60px"
      size="large"
      status-icon
      ref="formRef"
    >
      <el-form-item label="手机号" prop="name">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="name">
        <div class="verify-code">
          <el-input v-model="phone.password" show-password />

          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus'
import type { IPhone } from '@/types/login'
import { reactive } from 'vue'

const phone = reactive<IPhone>({
  number: '',
  password: ''
})
const phoneRules: FormRules = {
  number: [
    { required: true, message: '必须输入手机信息', trigger: 'blur' },
    //{ min: 6, max: 20, message: '必须是6-20数字和字母的组合', trigger: 'change' }
    { pattern: /[0-9]{11}$/, message: '必须是11位数字', trigger: 'change' } //支持正则
  ],
  password: [
    { required: true, message: '必须输入密码信息', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}/, message: '必须是3位以上数字或字母组成', trigger: 'blur' }
  ]
}
</script>

<style lang="less" scoped>
.pannel-phone {
  color: red;
}
.verify-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
