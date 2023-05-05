## Overview

[uniapp-TypeScript-vue3](https://github.com/EatMyOneFoot/uniapp-TypeScript-vue3) 是 UNI-APP 前端解决方案的一个十分简单的基础模版，偶尔会添加一些在工作中用过的组件进来  
它使用[vue-cli](https://cli.vuejs.org/zh/config/)创建，
接入了[TypeScript](https://www.typescriptlang.org/)，
配置了[uview-plus(vue3)](https://uiadmin.net/uview-plus/)  
uview-plus 是 uni-app 生态专用的 UI 框架(vue3 版本的 uView)，整合了非常多组件，功能丰富、文档清晰，但不支持 nvue。当然你也可以选择其他的[全端兼容 ui 库](https://ask.dcloud.net.cn/article/35489)

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.2.45-brightgreen.svg" alt="vue">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-4.9.4-brightgreen.svg" alt="typescript">
  </a>
  <a href="https://pinia.web3doc.top/">
    <img src="https://img.shields.io/badge/pinia-2.0.33-brightgreen.svg" alt="pinia">
  </a>
  <a href="https://uniapp.dcloud.io/api/README">
    <img src="https://img.shields.io/badge/uniApp-HBuilderX版本3.1.4-blue.svg" alt="uniApp">
  </a>
  <a href="https://uiadmin.net/uview-plus/">
    <img src="https://img.shields.io/badge/uviewPlus-1.8.3-brightgreen.svg" alt="uview-plus">
  </a>
</p>

## Project Structure

```bash
├── index.html                 # index.html template
├── src                        # main source code
│   ├── api                    # api service
│   ├── components             # global components
│   ├── pages                  # views
│   ├── static                 # module assets like fonts, images (processed by webpack)
│   ├── store                  # pinia store
│   ├── utils                  # global utils
│   ├── App.vue                # main app component
│   ├── main.ts                # app entry file
│   ├── manifest.json          # 5 + mobile App setting file
│   ├── pages.json             # Global configuration file
│   ├── sfc.d.ts               # type definition shims
│   └── uni.scss               # Global SCSS
├── package.json               # package.json
├── tsconfig.json              # typescript config
└── vite.config.ts             # vue-cli config
```

## Project setup

```
yarn install
```

## Problem

- 因为项目是使用 vue-cli 创建的，所以打包 App 的时候可能会出现弹窗提示："当前项目的 cli 版本和云打包服务器的 cli 版本不一致，有可能出现兼容性问题请升级项目的 cli 版本后重新打包或继续打包"
  - <img width="320px" height="240px" src="https://raw.githubusercontent.com/EatMyOneFoot/uniApp-TypeScript/master/src/static/20210703110525.png">
  - [DCloud 社区给的解决方法](https://ask.dcloud.net.cn/article/35627)
  - 我一般是直接批量修改 package.json 中 uni 相关依赖为指定的版本号('^2.0.0-31420210305001' 改为对应的版本号) 然后重新 yarn install
  - [官方文档](https://uniapp.dcloud.net.cn/quickstart-cli.html)
