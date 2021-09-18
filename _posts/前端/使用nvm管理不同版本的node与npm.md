---
title: 使用nvm管理不同版本的 node与npm
date: 2019-03-02 12:45:30
tags:
categories: 前端
---

在我们的日常开发中经常会遇到这种情况：手上有好几个项目，每个项目的需求不同，进而不同项目必须依赖不同版的 NodeJS 运行环境。如果没有一个合适的工具，这个问题将非常棘手。

[nvm](https://github.com/creationix/nvm) 应运而生，nvm 是 Mac 下的 node 管理工具，有点类似管理 Ruby 的 rvm，如果需要管理 Windows 下的 node，官方推荐使用 [nvmw](https://github.com/hakobera/nvmw) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows)。不过，nvm-windows 并不是 nvm 的简单移植，他们也没有任何关系。但下面介绍的所有命令，都可以在 nvm-windows 中运行。

------

## nvm 与 n 的区别

node 版本管理工具还有一个是 TJ大神的 [n](https://github.com/tj/n) 命令，n 命令是作为一个 node 的模块而存在，而 nvm 是一个独立于 node/npm 的外部 shell 脚本，因此 n 命令相比 nvm 更加局限。

由于 npm 安装的模块路径均为 **/usr/local/lib/node_modules**，当使用 n 切换不同的 node 版本时，实际上会共用全局的 node/npm 目录。 因此不能很好的满足『按不同 node 版本使用不同全局 node 模块』的需求。

------

## 卸载全局安装的 node/npm

#### 如果不是通过brew安装的

```bash
lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom \| while read i; do sudo rm /usr/local/${i}done

sudo rm -rf /usr/local/lib/node \

    /usr/local/lib/node_modules \

    /var/db/receipts/org.nodejs.*
```

#### 如果是通过[官方网站](https://nodejs.org/en/)安装的执行下面命令

```bash
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
```

## Windows 安装

首先最重要的是：一定要卸载已安装的 NodeJS，否则会发生冲突。然后下载 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 最新安装包，直接安装即可。

------

## OS X/Linux 安装

与 Windows 不同，我们并不一定要先卸载原有的 NodeJS。当然我们推荐还是先卸载掉比较好。另外，你还需要 C++ 编译器，Linux 发行版一般不用担心，像 Ubuntu 都可以直接用 **build-essential** 套件，OS X 的话，可以用 **X-Code** 的命令行工具。运行这个命令即可：

```
xcode-select --install
```

在 Linux 中：（如果是 Debian 发行版）

```
sudo apt-get install build-essential
```

然后我们可以使用

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

或者

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

从远程下载 **install.sh** 脚本并执行。注意这个版本年数字 **v0.33.0** 会随着项目开发而变化。随时通过[官方最新安装命令](https://github.com/creationix/nvm#install-script)来检查最新安装版本是有好处的。

### 配置mac环境变量

1. 启动终端Terminal

2. 进入当前用户的home目录

```
输入cd ~
```

3. 创建.bash_profile

```
输入touch .bash_profile
```

4. 编辑.bash_profile文件

```
输入open -e .bash_profile
```

5. 保存文件，关闭.bash_profile

6. 更新刚配置的环境变量

```
输入source .bash_profile
```

------

## 在项目中使用不同版本的 Node

我们可以通过创建项目目录中的 **.nvmrc** 文件来指定要使用的 Node 版本。之后在项目目录中执行 **nvm use** 即可。**.nvmrc** 文件内容只需要遵守上文提到的语义化版本规则即可。另外还有个工具叫做 [avn](https://github.com/wbyoung/avn)，可以自动化这个过程。

------

## 在多环境中，npm该如何使用呢？

每个版本的 Node 都会自带一个不同版本的 npm，可以用 **npm -v** 来查看 npm 的版本。全局安装的 npm 包并不会在不同的 Node 环境中共享，因为这会引起兼容问题。它们被放在了不同版本的目录下，例如 **~/.nvm/versions/node/<version>/lib/node_modules</version>** 这样的目录。这刚好也省去我们在 Linux 中使用 **sudo** 的功夫了。因为这是用户的主文件夹，并不会引起权限问题。

但问题来了，我们安装过的 npm 包，都要重新再装一次？幸运的是，我们有个办法来解决我们的问题，运行下面这个命令，可以从特定版本导入到我们将要安装的新版本 Node：

```
nvm install v5.0.0 --reinstall-packages-from=4.2
```

------

## 其他命令

```
nvm install <version> ## 安装指定版本，可模糊安装，如：安装v4.4.0，既可nvm install v4.4.0，又可nvm install 4.4

nvm uninstall <version> ## 删除已安装的指定版本，语法与install类似

nvm use <version> ## 切换使用指定的版本node

nvm which <version> ## 确认某个版本Node的路径

nvm ls ## 列出所有安装的版本

nvm ls-remote ## 列出所以远程服务器的版本（官方node version list）

nvm current ## 显示当前的版本

nvm alias <name> <version> ## 给不同的版本号添加别名

nvm unalias <name> ## 删除已定义的别名

nvm reinstall-packages <version> ## 在当前版本node环境下，重新全局安装指定版本号的npm包
```



快捷命令：

- **nvm install node** 安装最新版 Node
- **nvm install iojs** 安装最新版 iojs
- **nvm install unstable** 安装最新不稳定版本的 Node