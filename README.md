## RN 脚手架

RN 自用脚手架，包含 eslint，git 钩子等，目前集合了基于 fetch 的网络库 mobx 状态管理。

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

## 项目启动

``` bash
  git clone xxx
  cd ReactNativeCli
  yarn
  react-native run-ios
  # or react-native run-andriod
```

## 开发规范

- 组件以文件夹形式展现。使用 index.js 作为组件入口，引用文件夹路径即可使用组件。

- 组件文件夹使用大驼峰命名，其他文件夹使用中划线命名

- style 对象始终放在最后声明。如果 style 太长，则应在同文件夹创建 style.js 文件。

- 项目采用分层架构，具体分层在上面的文件目录，在对应层写对应函数，避免写超出相应职责的函数。

- 提交 commit 避免无意义提交，避免提交无意义的修改。

- 提交代码之前先 pull，保证最近，pull 时加上 `--rebase` 参数

- pr 遵循最小原则，一次只提交一个功能点，有利于保证代码质量。

## 尾巴

大家相识一场时缘分，能与大佬一起共事更是我的幸运，希望大家可以在这个开源项目中，互相学习，共同成长。我也会以开源的代码质量要求自己。请大家多多加油。
