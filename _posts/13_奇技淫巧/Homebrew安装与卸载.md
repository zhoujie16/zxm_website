---
title: Homebrew安装与卸载
date: 2019-12-16 15:48:45
tags:
categories: mac技巧
column_id: 13
---
# Homebrew卸载、安装与更改清华镜像

### 关于Homebrew

**macOS（或 Linux）缺失的软件包的管理器**

Homebrew官网：[https://brew.sh](https://brew.sh/index_zh-cn)

### 卸载

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```

### 安装

如果可以通过运行下面的代码完成安装，请跳过安装的步骤。

```cpp
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install
```

由于官方安装会出现连不上的问题，因此我们需要把安装指令修改一下，运行

```cpp
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install >> brew_instal
```

会在终端所在目录下生成一个brew_install的脚本，对它进行编辑，把`BREW_REPO`和`CORE_TAP_REPO`（若存在）修改为国内清华镜像源。

```bash
BREW_REPO = "https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git".freeze
CORE_TAP_REPO = "https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git".freeze
```

运行`brew_install`

```undefined
/usr/bin/ruby ./brew_install
```

如果出现下面对代码，可以不用等待，直接 ctrl+c 进行下一步操作，放心，国内的网是下载不下来的。

```csharp
==> Tapping homebrew/core
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
```

这就要我们手动创建目录，从清华大学开源镜像 clone

```
cd /usr/local/Homebrew/Library/Taps
mkdir homebrew
cd homebrew 
git clone git://mirrors.ustc.edu.cn/homebrew-core.git
git clone git://mirrors.ustc.edu.cn/homebrew-cask.git
```

把`homebrew`切换为清华镜像 

参考

[清华大学开源镜像]: https://mirror.tuna.tsinghua.edu.cn/help/homebrew/

```bash
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

brew update
```

最后使用`brew update`应该可以显示homebrew已经成功安装。