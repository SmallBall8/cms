# 后台管理系统

后台管理系统相当于来操作后台相关数据
后台管理系统的核心功能：增删改查

## 一、技术栈介绍

见截图

## 二、创建vue项目

1.方式一：`Vue cli`（基于`webpack`，命令：`vue create`）
2.方式二：`create-vue`（基于`vite`工具，命令：`npm init vue@latest`）

### 1.文件的介绍

1..`vscode`下的`extensions.json`  
    需要安装的插件
2.`env.d.ts`
    类型声明文件
    比如如下声明以后`main.ts`中引入组件就会识别为组件，否则引入组件会报错

     declare module "*.vue"{
        import {DefineComponent} from 'vue'
    const component:DefineComponent
    
    export default component
    }```

### 2.项目配置

1.配置项目的`icon`
2.配置项目的标题
3.配置项目别名等（`vite`默认配置）
4.配置`tsconfig.json`

### 3.配置项目环境

1.安装`volar`和`volar+Ts`插件
    `vue language features`
    `typescript vue plugin(volar)`
2.配置`vue`文件模块，如上`env.d.ts`

### 4.配置项目代码规范

1.`EditorConfig`：有助于为不同`IDE`编辑器上处理同一项目的多个开发人员维护一致的编码风格

```
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

然后还需要在`vscode`安装插件 `EditorConfig for VScode`

2.`Prettier`:是一款强大的代码格式化工具，支持`js、ts、css、scss、less、jsx、angular、vue、JSON、markdown`等，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具

（1）安装prettier

`npm install prettier -D`

（2）配置`prettier`文件

* `useTabs`：使用tab缩进还是空格缩进，选择false；
* `tabWidth`：tab是空格的情况下，是几个空格，选择2个；
* `printWidth`：当行字符的长度，推荐80，也有人喜欢100或者120；
* `singleQuote`：使用单引号还是双引号，选择true，使用单引号；
* trailingComma：在多行输入的尾逗号是否添加，设置为 `none`，比如对象类型的最后一个属性后面是否加一个，；
* semi：语句末尾是否要加分号，默认值true，选择false表示不加；

```{
{
 "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

（3）创建创建`.prettierignore`忽略文件

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

（4）安装`prettier`插件



（5）`VSCode`中的配置

- settings =>format on save => 勾选上
- settings => editor default format => 选择 prettier

3. 使用`ESLint`检测，不符合规范的代码提示

   （1）在前面创建项目的时候，我们就选择了`ESLint`，所以`Vue`会默认帮助我们配置需要的`ESLint`环境。

   （2）在`vscode`中安装`ESLint`插件

   （3）解决`eslint`和`prettier`冲突的问题：

   安装插件：（vue在创建项目时，如果选择prettier，那么这两个插件会自动安装）

   ```shell
   npm install eslint-plugin-prettier eslint-config-prettier -D
   ```

   添加`prettier`插件：

   ```json
     extends: [
       "plugin:vue/vue3-essential",
       "eslint:recommended",
       "@vue/typescript/recommended",
       "@vue/prettier",
       "@vue/prettier/@typescript-eslint",
       'plugin:prettier/recommended'
     ],
   ```

   

   （4）`VSCode`中`eslint`的配置

   ```json
     "eslint.lintTask.enable": true,
     "eslint.alwaysShowStatus": true,
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact"
     ],
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
   ```

   

### 5.建立相关的文件

建立相关需要的文件夹

### 6.css样式的重置

如果不重置的话，浏览器就会加上一些默认样式

（1）方法一：normalize.css

`npm install normalize.css ` 

在main.ts中引入

`import 'normalize.css'`

（2）方法二：reset.css

在css文件夹中建立reset.css，然后在其他需要重置的css文件中引入

然后再reset.less中写自己想要重置的样式

### 7.路由配置

（1）安装路由

`npm install vue-router -D`

（2）在router的index中

```
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: []
})

export default router
```

（3）在main.ts中引入



在写组件的时候，刚开始的那一部分每次都要写，这样我可以自己定义。

在https://snippet-generator.app/?description=vue3+typescript&tabtrigger=tsvue&snippet=%3Ctemplate%3E%0A++%3Cdiv+class%3D%22%24%7B1%3Ahome%7D%22%3E%0A++++%3Ch2%3E%24%7B1%3Ahome%7D%3C%2Fh2%3E%0A++%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript+setup+lang%3D%22ts%22%3E%3C%2Fscript%3E%0A%0A%3Cstyle+lang%3D%22less%22+scoped%3E%0A.%24%7B1%3Ahome%7D+%7B%0A%7D%0A%3C%2Fstyle%3E%0A&mode=vscode网站中，

左侧赋值自己的代码，赋值右侧的，进入vscode中，打开首选项，搜索vue.json，复制进去即可

现在写好了main和login组件，现在就应该去配置路由

#### 一些自己需要注意的

（1）`<router-view>`相当于是展示地址的那个链接的组件，刚进来的时候展示的是刚开始定义的默认的

（2）`<router-lint to="/main">登录</router-link>`

相当于点了页面上的登录就会跳转到指定的这个地址。

#### 防止用户在地址栏乱输地址，我们需要搞一个notfound页面

### 8.状态管理

#### 1.`vuex`

目前依然使用较多的状态管理库

#### 2.`pinia`

强烈推荐，未来趋势的状态管理库

##### （1）使用

1.安装：`npm install pinia`

2.使用：

​	在store文件夹下

```
import {createPinia} from 'pinia'
const pinia = createPinia()
export default pinia
```

​	在main.ts中引入

```
import pinia from './store'
app.use(pinia)
```

​	在main.ts中使用

```
<h2>main:{{ counterStore.counter }}-{{ counterStore.doubleCounter }}</h2>
```

### 9.`axios`发送请求

#### 1.安装

`npm install axios`

#### 2.区分development和production环境

可能会有一些变量在开发环境下和生产环境下是不一样的

比如说服务器地址，开发环境可能用的是：`coderwhy.dev/api/users/list`

而生产环境下可能是 `coderwhy.prod/api/users/list`

**解决方法**

（1）可以写两个`base_url`，在开发环境下注释掉生产环境的。反之同理。**但这种方法太依赖人为了**。太危险了，可能会把一些重要的信息泄漏

(2)用if判断

```
let base_url = ""
if(production){
	base_url="http://codercba.prod:8000"
}else{
	base_url="http://codercba.dev:8000"
}
```

但是并没有production这个变量

在vite中提供了环境变量

vite在一个特殊的import.meta.env对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建环境变量：

```javascript
import.meta.env.MODE:{string}应用运行的模式
import.meta.env.PROD:{boolean}应用是否运行在生产环境
import.meta.env.DEV:{boolean}应用是否运行在开发环境（永远与import.meta.env.PROD相反）
import.meta.env.SSR:{boolean}应用是否运行在server上
```

所以上面的方法二可以写成

```
let base_url = ""
if(import.meta.env.MODE===’production‘){
	base_url="http://codercba.prod:8000"
}else{
	base_url="http://codercba.dev:8000"
}
```

(3)vite使用dotenv从你的环境目录中的下列文件加载额外的环境变量

也就是自己去创建环境变量的文件，推荐使用第三种

1.创建.env文件

`VITE_NAME=why`

2.就可以通过.env文件直接创建变量了

使用：

`console.log(import.meta.env)//输出的内容里会包含刚刚写的``VITE_NAME=why`

### 10.`element-plus`集成

1.`elementUI`针对`vue2`

2.`element-plus`针对`vue`

#### 使用

1.集成

进入网站

```
https://element-plus.gitee.io/zh-CN/guide/installation.html
```

安装

`npm install element-plus --save`

引入（1）全局引入，很方便，但是如果用的很少，全部引入就会导致包很大

​		（2）按需引入，用到哪个组件就使用哪个

​		（3）自动导入的插件

`unplugin-vue-components`和`unplugin-auto-import`

然后参考element官方进行配置，就可以直接使用

## 三、登录页面

### 1.搭建页面

##### （1）让app占满整个屏幕

因为这个div它的高度默认是auto，是靠内容填充的

可以在app中设置样式

```
.app {
  height: 100vh;
  width: 100vw;
  background-color: skyblue;
}
```

如果是login想要占满整个屏幕的话，可以直接下面那这样。因为它的父元素是100。（也就是说使用这种方法的话，要求其父元素是百分之百）

```
.login {
  width: 100%;
  height:100%;
}
```



##### （2）样式覆盖

用变量来重写一些ul框架

### 2.正式写登录页面

**1**.当用户没登陆的时候，应该是登录页面

**2**.在login页面，将其居中（flex），设置background

**3**.将登录页面封装成子组件

​	（1）在login文件夹下新建c-cpns，是当前的子组件，所以放在这个文件夹下即可。如果是公共的，那么需要放在component

​	（2）在这个文件夹下新建login-pannel.vue

​	（3）在logn-pannel.vue中写页面

**4**.如果不需要element-ui给的样式该怎么办，比如这里我觉得登录按钮的size不合适

​	（1）在控制台中拿到变量 `--el-button-size`

​	（2）在common.less中

**5**.然后开始写tabs（就是账号登录和手机登录的切换）

​	（1）按照element-plus修改自己想要的样式

​	（2）比如在手机登录里面，前面是有一个小手机符号的，但是tabs中并没有提供这个属性，那么我们可以使用插槽

```
<el-tab-pane label="账号登录">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
</el-tab-pane>
```

​	（3）先安装icon 

​	`npm install @element-plus/icons-vue`

​	图标的全局注册。但是因为他是全局的， 那么我们可以在src下新建一个文件夹global

**6**.因为手机登录和账号登录是不同的接口，所以我需要点击立即登录，能识别出来到底是点的账号登录还是手机登录

```
<el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
```

```
const activeName = ref('phone')//表示默认是phone
```

​	（1）在这个ui组件中，每一个小的按钮有专属的name，使用双向绑定的`activeName`来看现在是哪一个在用。

​	（2）然后在点击登录绑定事件

```javascript
function handleLoginBtnClick() {
  if(activeName.value === "account"){
    console.log("用户在账号登陆")
  }else{
    console.log("用户在手机登陆")
  }
```

**7**.账号登录下的输入框

做完样式后，需要进行下一步

输入账号，如果我没有输入的话或者只输入了两个字符，鼠标一离开，就应该给一个提示，《必须是6-20个字母或数字》，等一系列的规则

所以要有表单验证功能

（1）定义校验规则

```javascript
import type { FormRules } from 'element-plus'


const accountRules: FormRules = {
  name: [
  { required: true, message: '必须输入帐号信息', trigger: 'blur' },
  //{ min: 6, max: 20, message: '必须是6-20数字和字母的组合', trigger: 'change' }
    { pattern: /[a-z0-9]{6,20}$/, message: '必须是6-20数字和字母的组合', trigger: 'change' } //支持正则
  ]
}
```

（2）



```JS
<el-form :model="account" :rules="accountRules" label-width="60px" size="large">
      <el-form-item label="帐号" prop="name"> 
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="account.password" show-password />
      </el-form-item>
 </el-form>
```

直接只加上：rules是没有用的，因为相当于绑定到form上面了，所以要在帐号那里写`prop="name"`

### 3.登录以后将帐号密码传递给服务器

![图一](E:\2023\web\vue_learning\14_coderwhy\图片\图一.PNG)

因为数据是在pane-account组件中，但是我的点击登录事件是在login-panel组件中。

1.解决方法：

（1）将子组件的值传给父组件，那么逻辑会在父组件中写，不建议

（2）当父组件去点击这个按钮的时候，去执行子组件的某些方法

​		在父组件中要先获取子组件的实例，再调用它的方法

2.**注意：**

```javascript
function loginAction(xxx?: string) {
  console.log('pane-account login action function exection', xxx)
     formRef.value?.validate() //？表示有值的时候调用，没值的时候不执行
}
```

**加上问号表示可选传参，不加问号表示必传参数**，//？表示有值的时候调用，没值的时候不执行

3.不太理解的一个难点

`const accountRef = ref<InstanceType<typeof PaneAccount>>()`

`InstanceType`表示获取组件实例

4.以上已经完成：点击登陆以后，控制台输出我刚刚输入的帐号和密码。但是有一个问题是，当我输入的校验不通过的时候点击立即登录，他还是会输出。

这种情况应该给一些提示，比如，请输入正确的帐号密码

（1）引入element-plus

```javascript
import type { FormRules, ElForm } from 'element-plus'
```

（2）

```javascript
const formRef = ref<InstanceType<typeof ElForm>>()
```

这相当于，ElForm是element-plus里面的，我实例了以下。

（3）验证

```javascript
function loginAction(xxx?: string) {
  //console.log('pane-account login action function exection', account.name, account.password)
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('验证成功， 登录操作')
    } else {
      console.log('验证失败')
    }
  }) //？表示有值的时候调用，没值的时候不执行
}
```

5.然后，当验证成功的时候，传给后台。不成功的时候应该有个弹窗提示

引入element_plus的弹窗提示

```javascript
ElMessage.error('Oops, 请您输入正确的格式后再操作.！！！')
    }
```

因为这是再逻辑里面引入的，所以还需要导入

```javascript
import { ElMessage } from 'element-plus'
```

但是出现了问题，在网页中并没有显示样式，原因是这个没有样式。解决方法如下：

（1）将样式全部引入，也就是前面的全局引入（在main.ts中）

```
针对ElMessage和ElLoading等组件引入样式
```

（2）针对ElMessage和ElLoading等组件引入样式(在main.ts中)

```javascript
//0.针对ElMessage和ElLoading等组件引入样式
import 'element-plus/theme-chalk/el-message.css'
```

（3）使用插件

```javascript
 npm i -D vite-plugin-style-import
```

然后在vite.config.ts中

```javascript
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
```

```javascript
createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name: string) => {
            name = name.substring(3, name.length)
            return `element-plus/es/ccomponents/${name}/style/index`
          }
        }
      ]
    })
```

### 4.正式进行登录操作

1.向服务器发请求（携带帐号和网络），但是网络请求另行封装比较好

```javascript
accountLoginRequest({ name, password }).then((res) => {
        console.log(res)
      })
```

2.但是一般情况下，我们是不会把数据放在某个组件的（这里是指帐号和密码），一般这些数据会保存到pinia

3.将发送请求也封装在pinia中，那么在组件中只需要调用以下pinia中的actyion即可

此时，这些token相当于是保存在pinia中，就是内存，一刷新可能就没有有了，所以我们需要想办法保存token

### 5.可以优化的细节

1.应该对store和service请求里面的account进行类型限制`{ name: string; password: string }`

因为多个地方需要用到，所以这里就可以直接全部封装到types中

2.学会使用postman对接口进行测试

### 6.永久保存token，防止一刷新没有token，又要重新登录

**1**.可以使用`localStorage`和`sessionStorage`

**2**这里选择`localStorage`

```javascript
//2.对信息进行本地缓存
      localStorage.setItem('token', this.token)
```

**3**那么可以在state中设置token

```javascript
state: () => ({
    id: '',
    token: localStorage.getItem('token') ?? '',  //表示下次登录得时候看有没有localstorage,没有的话就''
    name: ''
  }),
```

**4**因为这个可能经常需要用到，我们可以把他封装到一个公共文件中

这里新建立utils文件夹，可以封装一个类cache，这样可以把所有的方法封装在一起
