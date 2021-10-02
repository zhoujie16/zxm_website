---
title: 创建React Native应用程序
date: 2019-07-26 18:06:56
tags:
categories: react
---

2个脚手架工具

- ### Expo CLI

  它们允许您在不安装和配置Xcode或Android Studio的情况下启动项目。Expo CLI在您的本地计算机上设置开发环境，您可以在几分钟内开始编写React Native应用程序。

  ```shell
  # Node 10 或更高版本
  
  # 安装教脚手架
  npm install -g expo-cli
  
  # 初始化项目
  expo init AwesomeProject
  
  cd AwesomeProject
  
  # 启动一个开发服务器
  npm start # you can also use: expo start
  ```

  在iOS或Android手机上安装[Expo](https://expo.io/)客户端应用程序，并连接到与计算机相同的无线网络。在Android上，使用Expo应用程序扫描终端的QR码以打开您的项目。在iOS上，按照屏幕上的说明获取链接。

  

  ### 注意事项

  因为在使用Expo创建项目时不构建任何本机代码，所以除了React Native API和Expo客户端应用程序中可用的组件之外，不可能包含自定义本机模块。

  如果您知道最终需要包含自己的本机代码，那么Expo仍然是一个很好的入门方式。在这种情况下，您最终只需要“ [弹出](https://docs.expo.io/versions/latest/expokit/eject) ”以创建自己的本机构建。如果确实弹出，则需要“React Native CLI快速入门”说明继续处理项目。

  Expo CLI将您的项目配置为使用Expo客户端应用程序支持的最新React Native版本。在React Native版本发布稳定后大约一周，Expo客户端应用程序通常会获得对给定React Native版本的支持。您可以查看[此文档](https://docs.expo.io/versions/latest/sdk/#sdk-version)以了解支持的版本。

  如果您将React Native集成到现有项目中，则需要跳过Expo CLI并直接设置本机构建环境。选择“React Native CLI Quickstart”，以获取有关为React Native配置本机构建环境的说明。

  

- ### React Native CLI

  它需要Xcode或Android Studio才能开始。如果您已经安装了这些工具之一，那么您应该能够在几分钟内启动并运行。如果未安装它们，您应该花费大约一个小时来安装和配置它们。

```shell
# MacOS 命令 ；Node 8.3或更高版本

# 安装依赖项
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8

# 安装教脚手架
npm install -g react-native-cli

# 初始化项目
react-native init AwesomeProject

# 如果要使用特定的React Native版本启动新项目，可以使用以下--version参数
react-native init AwesomeProject --version X.XX.X
react-native init AwesomeProject --version react-native@next

# 运行react-native run-ios
cd AwesomeProject
react-native run-ios
# 运行react-native run-ios 指定设备
react-native run-ios --simulator "iPhone 7 Plus"
```

