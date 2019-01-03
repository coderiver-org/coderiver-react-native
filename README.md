![](https://avatars2.githubusercontent.com/u/46118421?s=400&u=428a96d53bb16788f49da9f39c08187755222644&v=4)


# Coderiver

> 操作前请先阅读README

## 任务清单地址

开发任务请在清单里认领。

[清单地址](https://www.teambition.com/project/5c19c0675f925300191243f5/tasks/scrum/5c19c0675f92530019124400)

## 设计稿地址（蓝湖）

[https://lanhuapp.com/url/eVm4n]( https://lanhuapp.com/url/eVm4n)

## api mock 地址（easy-mock）

[https://www.easy-mock.com/project/5c2d7e63873e4126e1daa237](https://www.easy-mock.com/project/5c2d7e63873e4126e1daa237)

## 产品原型

[原型地址](https://shimo.im/docs/2QrSUcSoHVQwEMlO/)

## 技术选型

- 脚手架：react-native-cli
- UI 框架：teaset
- 状态管理：mobx
- 规范：eslint

## 项目目录

```
├── api           // 网络请求相关
├── assets        // 资源相关
├── components    // 组件
├── config        // 通用配置项
├── container     // 容器组件
│   └── index.js  // navigator组件
├── dao           // 存储操作相关
├── store         // 状态操作相关
├── style         // 样式
└── utils         // 工具相关
```

## 项目分层

本项目使用代码分层如上表目录，再次详细说明下，

- `api` 目录为后台接口目录，像里面传递请求参数，向外部提供 Promise 对象

```
export const example = param => {
  return fetch ('/api/example', {
    method: 'post',
    body: JSON.stringify(param)
  })
}
```

- `assets` 目录提供静态资源，字体 图片等

- `components` 目录提供通用组件

- `config` 目录提供全局配置变量等

- `container` 目录提供容器组件

- `dao` 目录提供存储相关逻辑 // asyncStorage

- `store` 目录提供业务逻辑 // 接口数据处理，用户操作等

- `style` 目录提供通用样式

- `utils` 目录提供通用工具函数


## 项目启动

``` bash
  git clone xxx
  cd coderiver-react-native
  git checkout develop
  yarn
  react-native run-ios
  # or react-native run-andriod
```

## 开发新功能

``` bask
 git checkout -b feature/新功能 dev
 Coding...
 git add .
 git commit -m xxx
 git pull --rebase origin dev
 git push origin feature/新功能
 在github上面发起merge请求。
```

## 发现/修复bug

开发过程，发现bug。在 Issues 上面描述出来，并打上 bug 标签。

描述模版如下：

```
bug 标题:

bug 描述:

bug 截图:

期望效果:

```

bug 修复遵循相关性原则，即谁接手的功能，谁修复相关 bug。

bug 修复流程

```
  git checkout -b bugfix/bug 标题
  Coding...
  git add .
  git commit -m bug 标题
  git pull --rebase origin dev
  git push origin bugfix/bug 标题
  在github上面发起 merge 请求。
  请求受理后，即可关掉 bug Issues
```

## API 命名规范

- 网络请求前缀 `fetch `，// 命名可参考后台 API 命名

- 用户操作前缀 `handle`

- 表单提交前缀 `submit`

- 判读变量前缀 `is`

- 数组变量后缀 `List` 负数命名

- 数组迭代变量 `item`

- ID 相关变量，ID 字母全部大写

## 开发规范

- 组件以文件夹形式展现。使用 index.js 作为组件入口，引用文件夹路径即可使用组件。

- 组件文件夹使用大驼峰命名，其他文件夹使用中划线命名

- style 对象始终放在最后声明。如果 style 太长，则应在同文件夹创建 style.js 文件。

- 项目采用分层架构，具体分层在上面的文件目录，在对应层写对应函数，避免写超出相应职责的函数。

- 提交 commit 避免无意义提交，避免提交无意义的修改。

- 提交代码之前先 pull，保证最新，pull 时加上 `--rebase` 参数

- pr 遵循最小原则，一次只提交一个功能点，有利于保证代码质量。

- 每个功能点 commit 一次，若多次修改，请合并成一个commit。

## 尾巴

大家相识一场时缘分，能与大佬一起共事更是我的幸运，希望大家可以在这个开源项目中，互相学习，共同成长。我也会以开源的代码质量要求自己。请大家多多加油。
