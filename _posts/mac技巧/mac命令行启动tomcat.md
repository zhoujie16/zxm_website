---
title: mac命令行启动tomcat
date: 2017-10-09 12:16:17
tags:
categories: mac技巧
---
1、检查安装环境
      可以在shell终端运行如下命令查看是否安装了java，以及JDK的版本：
      Java -version
      如果没有安装，请到https://www.java.com/en/download/下载安装

2、开始安装Tomcat
     下载链接：http://tomcat.apache.org/
     可以下载tar.gz文件，8.X版本，文件夹名称是apache-tomcat-8.5.9.tar.gz

3、终端操作
   3.1、将apache-tomcat-8.5.9.tar.gz文件移动到/usr/local/下
            sudo mv /Users/feng/Downloads/apache-tomcat-8.5.9.tar.gz /usr/local/
   3.2、解压缩在/usr/local/目录
            sudo cd /usr/local/
            tar zxvf apache-tomcat-8.5.9.tar.gz .
   3.3、建立链接，方便维护使用
            sudo ln -s /usr/local/apache-tomcat-8.5.9 /Library/Tomcat
   3.4、使自己成为目录的持有者
            sudo chown -R 你的系统用户名 /Library/Tomcat
   3.5、允许bin目录下程序运行
            sudo chmod 755 /Library/Tomcat/bin/*.sh
   完成
   
4、启动Tomcat
   命令行启动：
   /Library/Tomcat/bin/startup.sh

   若出现如下提示则表示安装并运行成功： 
   Using CATALINA_BASE: /Library/Tomcat 
   Using CATALINA_HOME: /Library/Tomcat 
   Using CATALINA_TMPDIR: /Library/Tomcat/temp 
   Using JRE_HOME: /System/Library/Frameworks/JavaVM.framework/Versions/CurrentJDK/Home 

  （有时候到这一步了还是依然无法访问8080，有可能是tomcat版本的问题，换成7.0.65版本就OK）

   停止tomcat：
   shutdown.sh (如果不能停止使用killall -9 java 命令杀死进程，用ps -ef| grep java再验证下是否全部杀掉了进程)

5、打开浏览器，输入 http://localhost:8080/ 
      回车之后如果看到Apache Tomcat，表示已经成功运行Tomcat 

6、配置Tomcat启动脚本：
   6.1、在/usr/bin目录下，使用vi创建tomcat文件，添加如下命令：

#!/bin/bash

case $1 in
start)
sh /Library/Tomcat/bin/startup.sh
;;
stop)
sh /Library/Tomcat/bin/shutdown.sh
;;
restart)
sh /Library/Tomcat/bin/shutdown.sh
sh /Library/Tomcat/bin/startup.sh
;;
*)
echo “Usage: start|stop|restart”
;;
esac

exit 0

   6.2、赋予文件执行权限：
            chmod 777 tomcat

   6.3、将这个文件放置到终端包含的路径中，例如/usr/bin，而后便可以在终端中简单地输入tomcat start和tomcat stop启用tomcat了。
           快捷命令如下：
           1）tomcat start 
   2)  tomcat stop
       3)  tomcat restart 
