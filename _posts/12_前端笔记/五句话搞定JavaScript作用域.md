---
title: 五句话搞定JavaScript作用域
date: 2019-04-03 16:50:12
tags:
categories: 前端
column_id: 12
---

提示：此文针对ES5，不涉及ES2015（又称ES6）



JavaScript的作用域一直以来是前端开发中比较难以理解的知识点，对于JavaScript的作用域主要记住几句话，走遍天下都不怕。



**一、“JavaScript中无块级作用域”**



在Java或C#中存在块级作用域，即：大括号也是一个作用域。



```java
public static void main (){
    if(1==1){
        String name = "seven";
    }
    System.out.println(name);
}
// 报错
public static void Main()
{
    if(1==1){
        string name = "seven";
    }
    Console.WriteLine(name);
}
// 报错
```





在JavaScript语言中无块级作用域



```javascript
function Main(){
    if(1==1){
        var name = 'seven';
    }
    console.log(name);
}
// 输出： seven
```





补充：标题之所以添加双引号是因为JavaScript6中新引入了 let 关键字，用于指定变量属于块级作用域。



### **二、JavaScript采用函数作用域**



在JavaScript中每个函数作为一个作用域，在外部无法访问内部作用域中的变量。



```javascript
function Main(){
    var innerValue = 'seven';
}
 
Main();
 
console.log(innerValue);
 
// 报错：Uncaught ReferenceError: innerValue is not defined
```



###  

### **三、JavaScript的作用域链**



由于JavaScript中的每个函数作为一个作用域，如果出现函数嵌套函数，则就会出现作用域链。



```javascript
xo = 'alex';
 
function Func(){
    var xo = "seven";
    function inner(){
        var xo = 'alvin';
        console.log(xo);
    }
    inner();
}
Func();
// 输出结果  alvin
```





如上述代码则出现三个作用域组成的作用域链，如果出现作用域链后，那么寻找变量时候就会出现顺序，对于上述实例：



当执行console.log(xo)时，其寻找顺序为根据作用域链从内到外的优先级寻找，如果内层没有就逐步向上找，直到没找到抛出异常。



#### **四、JavaScript的作用域链执行前已创建**



JavaScript的作用域在被执行之前已经创建，日后再去执行时只需要按照作用域链去寻找即可。



示例一：



```javascript
xo = 'alex';
 
function Func(){
    var xo = "seven";
    function inner(){
        console.log(xo);
    }
    return inner;
}
 
var ret = Func();
ret();
// 输出结果： seven
```





上述代码，在函数被调用之前作用域链已经存在：

全局作用域 -> Func函数作用域 -> inner函数作用域 


当执行 ret() 时，由于其代指的是inner函数，此函数的作用域链在执行之前已经被定义为：全局作用域 -> Func函数作用域 -> inner函数作用域，所以，在执行 ret()  时，会根据已经存在的作用域链去寻找变量。



示例二：



```javascript
xo = 'alex';
 
function Func(){
    var xo = "eirc";
    function inner(){ 
        console.log(xo);
    }
    xo = 'seven';
    return inner;
}
 
var ret = Func();
ret();
// 输出结果： seven
```





上述代码和示例一的目的相同，也是强调在函数被调用之前作用域链已经存在：



全局作用域 -> Func函数作用域 -> inner函数作用域 


不同的时，在执行【var ret = Func();】时，Func作用域中的xo变量的值已经由 “eric” 被重置为 “seven”，所以之后再执行【ret();】时，就只能找到“seven”。



示例三：



```javascript
xo = 'alex';

function Bar(){
    console.log(xo);
}

function Func(){
    var xo = "seven";
    return Bar;
}
 
var ret = Func();
ret();
// 输出结果： alex
```





上述代码，在函数被执行之前已经创建了两条作用域链：



全局作用域 -> Bar函数作用域 
全局作用域 -> Func函数作用域 



当执行 ret()  时，ret代指的Bar函数，而Bar函数的作用域链已经存在：全局作用域 -> Bar函数作用域，所以，执行时会根据已经存在的作用域链去寻找。



### **五、声明提前**



在JavaScript中如果不创建变量，直接去使用，则报错：



```javascript
console.log(xxoo);
// 报错：Uncaught ReferenceError: xxoo is not defined
```





JavaScript中如果创建值而不赋值，则该值为 undefined，如：



```javascript
var xxoo;
console.log(xxoo);
// 输出：undefined
```





在函数内如果这么写：



```javascript
function Foo(){
    console.log(xo);
    var xo = 'seven';
}
 
Foo();
// 输出：undefined
```





上述代码，不报错而是输出 undefined，其原因是：JavaScript的函数在被执行之前，会将其中的变量全部声明，而不赋值。所以，相当于上述实例中，函数在“预编译”时，已经执行了var xo；所以上述代码中输出的是undefined。



原文链接： [**五句话搞定JavaScript作用域**](http://www.cnblogs.com/wupeiqi/p/5649402.html)
