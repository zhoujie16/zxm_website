---
title: git cherry-pick 教程
date: 2021-02-09 23:00:22
tags:
author: 周小米
column_id: 13
---

# git cherry-pick 教程

git cherry-pick 命令的作用，就是将指定的提交（commit）应用于其他分支。

```
git cherry-pick <commitHash>
```

Cherry pick 支持一次转移多个提交

```
git cherry-pick <HashA> <HashB>
```

如果想要转移一系列的连续提交，可以使用下面的简便语法。

```
git cherry-pick A..B
```
