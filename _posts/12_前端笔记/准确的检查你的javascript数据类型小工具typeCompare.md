---
title: 准确的检查你的javascript数据类型小工具typeCompare
date: 2019-07-01 15:37:55
tags:
categories: 前端
column_id: 12
---

更简单，准确的检查你的javascript数据类型
一个简单的小工具

[**type-compare**](https://github.com/reming0227/type-compare)

```javascript
npm install type-compare --save
```

```javascript
import typeCompare from 'type-compare';
// result true
typeCompare(null, 'null'); // true
typeCompare(undefined, 'undefined'); // true
typeCompare(true, 'boolean'); // true
typeCompare(123, 'number'); // true
typeCompare('123', 'string'); // true
typeCompare(Symbol(), 'symbol'); // true
typeCompare(new Array(), 'array'); // true
typeCompare(new Object(), 'object.object'); // true
typeCompare(new Number(), 'object.number'); // true
typeCompare(new String(), 'object.string'); // true
typeCompare(new Set(), 'object.set'); // true
typeCompare(new Map(), 'object.map'); // true
// result false
typeCompare(undefined, 'null'); // false
typeCompare(null, 'undefined'); // false
typeCompare('true', 'boolean'); // false
typeCompare('123', 'number'); // false
typeCompare(123, 'string'); // false
typeCompare(new Object(), 'array'); // false
typeCompare(new Array(), 'object'); // false
typeCompare(new Number('123'), 'object.string'); // false
typeCompare(new String(123), 'object.number'); // false
typeCompare(new Set(), 'object.object'); // false
typeCompare(new Map(), 'object.object'); // false
```

