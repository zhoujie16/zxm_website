---
title: iptables 统计 端口 流量
date: 2020-01-16 13:10:01
tags:
categories:
column_id: 24


---



### 添加统计端口

```
iptables -I INPUT -p tcp --dport 8080
iptables -I OUTPUT -p tcp --sport 8080
```

### 移除统计端口

```
iptables -D INPUT -p tcp --dport 8080
iptables -D OUTPUT -p tcp --sport 8080
```

### 移除规则

```
# 1、先列出规则号
iptables -nvL INPUT --line-numbers
iptables -nvL OUTPUT --line-numbers
 
# 2、删除第n号规则
iptables -D INPUT 1
iptables -D OUTPUT 3
```



### 保存iptables，否则重启服务器就没了

```
service iptables save
```



### 查看统计数据

```
# 查看某个端口的
iptables -nv -L OUTPUT | grep 8080
iptables -nv -L INPUT | grep 8080

# 查看全部流出
iptables -n -v -t filter -L OUTPUT

# 查看全部流入
iptables -n -v -t filter -L INPUT

# 查看所有
iptables -L -v -n -x
```

### 统计数据写入文件

```sh
#!/bin/bash
# 这是一个利用iptables进行端口流量统计的脚本
# 首先请保证已经在iptables规则中加入了要监控的端口
 
# 需要统计的端口
PORTS=(all 700)
 
# 打印分割线
echo "************分割线************"
 
# 打印日期
time=`date`
timeStamp=`date +%s`    

echo ${time} ${timeStamp}
 
# 统计iptables的INPUT链
echo "------------------------------"
echo "INPUT TOTAL:"
for PORT in ${PORTS[@]};
do
    iptables -nvx -L INPUT | grep $PORT
done
 
# 统计iptables的OUTPUT链
echo "------------------------------"
echo "OUTPUT TOTAL:"
for PORT in ${PORTS[@]};
do
    iptables -nvx -L OUTPUT | grep $PORT
done
 
# 输出换行
echo -e "\n"
# 重置数据
#iptables -Z INPUT
#iptables -Z OUTPUT
#mv /home/ss_vpn/total.txt /home/ss_vpn/total_logs/$(date -d "today" +"%Y-%m-%d_%H:%M:%S").txt
```



### 重置所有端口的统计数据

```
iptables -Z INPUT
iptables -Z OUTPUT
```

