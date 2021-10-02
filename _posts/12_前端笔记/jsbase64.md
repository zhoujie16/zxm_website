---
title: jsbase64
date: 2019-08-23 14:17:16
tags:
categories: 前端
column_id: 12
---

```javascript
const CryptoJS = require('crypto-js')

function base64Encode(str) {
  const parseStr = CryptoJS.enc.Utf8.parse(str);
  const base64 = CryptoJS.enc.Base64.stringify(parseStr);
  return base64
}

function base64Decode(str){
  const words = CryptoJS.enc.Base64.parse(str);
  const parseStr = words.toString(CryptoJS.enc.Utf8);
  return parseStr
}

module.exports = {
  base64Encode,
  base64Decode
}
```