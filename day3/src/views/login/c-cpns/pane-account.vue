<template>
  <div class="pane-account">
    <!--status-icon这个属性是用来根据状态展示小图标的（比如成功状态，失败状态等-->
    <el-form
      :model="account"
      :rules="accountRules"
      label-width="60px"
      size="large"
      status-icon
      ref="formRef"
    >
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="name">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import { accountLoginRequest } from '@/service/login/login'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'

//1.定义account数据
// interface IAccount {
//   name: string
//   password: string
// }
//？？表示如果前面拿不到，就拿后面的空字符串
const account = reactive<IAccount>({
  name: localCache.getCache(CACHE_NAME) ?? '',
  password: localCache.getCache(CACHE_PASSWORD) ?? ''
})

//2.定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入帐号信息', trigger: 'blur' },
    //{ min: 6, max: 20, message: '必须是6-20数字和字母的组合', trigger: 'change' }
    { pattern: /[a-z0-9]{6,20}$/, message: '必须是6-20数字和字母的组合', trigger: 'change' } //支持正则
  ],
  password: [
    { required: true, message: '必须输入密码信息', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}/, message: '必须是3位以上数字或字母组成', trigger: 'blur' }
  ]
}

//3.执行账号的登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction(isRemPwd: boolean) {
  //console.log('pane-account login action function exection', account.name, account.password)
  formRef.value?.validate((valid) => {
    if (valid) {
      //console.log('验证成功， 登录操作')

      //1.获取用户输入的帐号的密码
      const name = account.name
      const password = account.password

      //2.向服务器发送网络请求（携带帐号和网络）,但是网络请求另行封装比较好
      // accountLoginRequest({ name, password }).then((res) => {
      //   console.log(res)
      // })
      loginStore.LoginAccountAction({ name, password }).then((res) => {
        //3.判断是否需要记住密码
        if (isRemPwd) {
          localCache.setCache(CACHE_NAME, name)
          localCache.setCache(CACHE_PASSWORD, password)
        } else {
          localCache.removeCache(CACHE_NAME)
          localCache.removeCache(CACHE_PASSWORD)
        }
      })
    } else {
      //console.log('验证失败')
      ElMessage.error('Oops, 请您输入正确的格式后再操作.！！！')
    }
  }) //？表示有值的时候调用，没值的时候不执行
}

//暴露出去
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.pane-account {
  color: red;
}
</style>
