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

（1）vite在一个特殊的import.meta.env对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建环境变量：

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

(2)vite使用dotenv从你的环境目录中的下列文件加载额外的环境变量

1.创建.env文件

`VITE_NAME=why`

2.就可以通过.env文件直接创建变量了

使用：

`console.log(import.meta.env)//输出的内容里会包含刚刚写的``VITE_NAME=why`