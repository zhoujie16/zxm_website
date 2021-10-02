---
title: Mongodb备份脚本centos
date: 2019-04-09 14:41:52
tags:
categories: 前端
column_id: 12
---

#### 创建Mongodb数据库备份目录

```
mkdir -p /home/backup/mongod_bak/mongod_bak_now

mkdir -p /home/backup/mongod_bak/mongod_bak_list
```

#### 新建Mongodb数据库备份脚本

```
#!/bin/sh

DUMP=/www/server/mongodb/bin/mongodump #mongodump备份文件执行路径

OUT_DIR=/home/backup/mongod_bak/mongod_bak_now #临时备份目录

TAR_DIR=/home/backup/mongod_bak/mongod_bak_list #备份存放路径

DATE=`date +%Y_%m_%d` #获取当前系统时间

DB_USER=username #数据库账号

DB_PASS=password #数据库密码

DAYS=7 #DAYS=7代表删除7天前的备份，即只保留最近7天的备份

TAR_BAK="mongod_bak_$DATE.tar.gz" #最终保存的数据库备份文件名

cd $OUT_DIR

rm -rf $OUT_DIR/*

mkdir -p $OUT_DIR/$DATE

$DUMP -u $DB_USER -p $DB_PASS -o $OUT_DIR/$DATE #备份全部数据库

tar -zcvf $TAR_DIR/$TAR_BAK $OUT_DIR/$DATE #压缩为.tar.gz格式

find $TAR_DIR/ -mtime +$DAYS -delete #删除7天前的备份文件
```



#### Mongodb数据库恢复

--drop参数：恢复数据之前删除原来的数据，避免数据重复

--noIndexRestore参数：恢复数据时不创建索引

--dir参数：数据库备份目录

-d参数：后面跟要恢复的数据库名称

```
#恢复全部数据库：
mongorestore -u $DB_USER -p $DB_PASS --authenticationDatabase "admin" --noIndexRestore --dir /home/backup/mongod_bak/mongod_bak_now/2019_04_09/

#恢复单个数据库
mongorestore -u $DB_USER -p $DB_PASS --authenticationDatabase "admin" --noIndexRestore -d dbname --dir /home/backup/mongod_bak/mongod_bak_now/2019_04_09/
```

