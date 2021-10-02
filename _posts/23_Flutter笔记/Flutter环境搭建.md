---
title: Flutter环境搭建(Mac)
date: 2019-06-15 01:02:33
tags:
categories: flutter
column_id: 23
---



### 下载Flutter SDK包

这里推荐去官网下载就好，我挂了梯子，速度并不慢。

网址：https://flutter.io/setup-macos/



### 配置环境变量

压缩包下载好以后，找个位置进行解压。这个位置很重要，因为下面配置环境变量的时候要用到。比如你配置到了根目录下的app文件夹。

1.打开终端工具（这个我就不用写了吧），使用vim进行配置环境变量，命令如下：

```text
vim ~/.bash_profile
```

在打开的文件里增加一行代码，意思是配置flutter命令在任何地方都可以使用。

```text
export PATH=/app/flutter/bin:$PATH
```

提示：这行命令你要根据你把压缩包解压的位置来进行编写，写的是你的路径，很有可能不跟文章一样。

配置完成后，需要用`source`命令重新加载一下 ，具体命令如下：

```text
source ~/.bash_profile
```

完成这部以后，就算我们flutter的安装工作完成了，但是这还不能进行开发。可以使用命令来检测一下，是否安装完成了。

```text
flutter -h
```

出现下面的结果，说明到目前为止，我们安装一切顺利。

![](http://pic1.zhoujie16.cn/006tNc79ly1g416ievl0zj30pp0ji420.jpg)





### 检查开发环境

到上边为止，我们安装好了Flutter，但是还不具备开发环境。开发还需要很多软件和插件的支持，那到底需要哪些插件和软件那？我们可以使用Flutter为我们提供的命令来进行检查：

```text
flutter doctor
```

如果你英文很好，你应该可以很容易读出上面的检测结果，有很多条目都没有通过。需要我们安装检测结果一条条进行安装，直到满足开发环境。（如果有[!]x标志，表示本行检测没有通过，就需要我们设置或者安装相应的软件了。）

有可能你的Android studio也没有安装，那么你要先安装这个编辑器，安装好后，可以顺便下载Android SDK。

Android Studio下载地址：[http://www.android-studio.org/](http://www.android-studio.org/)



下载Android SDK的时候，记得搭上梯子，否则你会等到天荒地老（祝君一切顺利）。

如果你有安装，那么第一步要作的是允许协议（android-licenses）。允许方法就是在终端运行如下命令：

```text
flutter doctor --android-licenses
```

然后让你输入Y/N的时候，一路Y就可以了（至于啥意思，我也没仔细看，大概就和安装软件的下一步下一步是一样的，你按N是不能成功的）。



这不完成后，我们再使用`flutter doctor`进行检测后，会看到还是有很多x。大概如下：

```text
  To install, run:
    brew install --HEAD libimobiledevice
    brew install ideviceinstaller
✗ ios-deploy not installed. To install:
    brew install ios-deploy
✗ CocoaPods not installed.
    CocoaPods is used to retrieve the iOS platform side's plugin code that responds to your plugin usage on the Dart side.
    Without resolving iOS dependencies with CocoaPods, plugins will not work on iOS.
    For more info, see https://flutter.io/platform-plugins
  To install:
    brew install cocoapods
    pod setup
```

其实大概意思就是我们需要这些软件，Flutter推荐你用brew命令进行安装。

我们可以直接在终端里输入下列命令（每输完一个都要等一会，等待软件包安装完成）

```text
brew install --HEAD libimobiledevice
brew install ideviceinstaller
brew install ios-deploy
brew install cocoapods
pod setup
```

安装完这些，我大概花了1个半小时左右，我这是百兆光纤还加了梯子。

这个大问题解决以后，我们还需要为Android Studio安装一下Flutter插件（这个有可能你安装过，如果出现下面的提示，说明你还没有安装）

```text
✗ Flutter plugin not installed; this adds Flutter specific functionality.
✗ Dart plugin not installed; this adds Dart specific functionality.
```

打开Android Stuido 软件，然后找到Plugin的配置，搜索Flutter插件。





安装完成后，你需要重新启动一下Android Studio软件。

我做到这里环境就全部OK了，只有一个没有找到调试设备了，因为我没有调试的手机硬件，所以出现这个提示,不用管它。

```text
[!] Connected devices
    ! No devices available
```

### [#](http://jspang.com/posts/2019/01/20/flutter-base.html#pub源的配置)Pub源的配置

如果你没有梯子，一个人人都知道的原因，你还需要在环境变量里配置一下Pub源，不然你是无法进行使用的。

运行：

```text
vim ~/.bash_profile
```

增加两行配置

```text
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

重新加载环境变量

```text
source ~/.bash_profile
```

希望大家都能安装成功，这只是我的安装过程，不敢保证全部正确，但是我尽量详细的描述了我Mac的搭建过程，希望可以帮助到Flutter的爱好者。

环境安装完成 检测结果如下图：

![](http://pic1.zhoujie16.cn/006tNc79ly1g416nb4nejj30pe07lgmy.jpg)



手机模拟器可打开Xcode的模拟器或者安卓的AVD虚拟机(超级卡，卡到你怀疑人生)