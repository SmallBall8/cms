# 后台管理系统
后台管理系统相当于来操作后台相关数据
后台管理系统的核心功能：增删改查

## 技术栈介绍
见截图

## 创建vue项目
1.方式一：Vue cli（基于webpack，命令：vue create）
2.方式二：create-vue（基于vite工具，命令：npm init vue@latest）

### 文件的介绍
1..vscode下的extensions.json  
    需要安装的插件
2.env.d.ts
    类型声明文件
    比如如下声明以后main.ts中引入组件就会识别为组件，否则引入组件会报错
    ```
    declare module "*.vue"{
    import {DefineComponent} from 'vue'

    const component:DefineComponent

    export default component
    }```

### 项目配置
1.配置项目的icon
2.配置项目的标题
3.配置项目别名等（vite默认配置）
4.配置tsconfig.json

### 配置项目环境
1.安装volar和volar+Ts插件
    vue language features
    typescript vue plugin(volar)
2.配置vue文件模块，如上env.d.ts

### 配置项目代码规范
1.EditorConfig：有助于为不同IDE编辑器上处理同一项目的多个开发人员维护一致的编码风格
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
2.Prettier