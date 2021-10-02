---
title: 'JavaScript排序,冒泡,选择,插入,归并'
date: 2019-03-01 11:32:15
tags:
categories: 前端
column_id: 12
---

不过说到排序，最容易想到的就是冒泡排序，选择排序，插入排序了。

**冒泡排序**

依次比较相邻的两个元素，如果后一个小于前一个，则交换，这样从头到尾一次，就将最大的放到了末尾。

从头到尾再来一次，由于每进行一轮，最后的都已经是最大的了，因此后一轮需要比较次数可以比上一次少一个。虽然你还是可以让他从头到尾来比较，但是后面的比较是没有意义的无用功，为了效率，你应该对代码进行优化。

图片演示如下

![](http://pic1.zhoujie16.cn/006tKfTcly1g0n50274n9g30my075te6.gif)

代码实现：

```javascript
function bubbleSort(arr) {
	var len = arr.length;
	for (var i = 0; i < len - 1; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {		// 相邻元素两两对比
				var temp = arr[j + 1];		// 元素交换
				arr[j + 1] = arr[j];
				arr[j] = temp
			}
		}
	}
	return arr
}
```

**选择排序**

选择排序我觉得是最简单的了，大一学VB的时候，就只记住了这个排序方法，原理非常简单：每次都找一个最大或者最小的排在开始即可。

首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置 
再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。 
重复第二步，直到所有元素均排序完毕。 
动图演示：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0n51jmdukg30mj06wtil.gif)

代码演示：

```javascript
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
```

**插入排序**

插入排序也比较简单。就像打扑克一样，依次将拿到的元素插入到正确的位置即可。

1.将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。 
2.从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

动图演示：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0n52zq7kxg30mj0e1agh.gif)



代码示例：

```javascript
function insertionSort(arr) {
	var len = arr.length;
	var preIndex, current;
	for (var i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i];
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--
		}
		arr[preIndex + 1] = current
	}
	return arr
}
```

简单的代价是低效

上面三种都是非常简单的排序方法，简单的同时呢，效率也会比较低，还是拿这本书里的对比图来说明：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0n53x1k55j30hs0aumzj.jpg)

时间复杂度都高达O(n^2),而它们后面的一些排序算法时间复杂度基本都只有O(n log n)。

我的强迫症又犯了，我想要高效率一点的排序方法。

**归并排序**

简单把这本书的内容过了一遍，当时就理解了这个归并排序，因此这里就谈一下这个归并排序吧。

基本原理是分治法，就是分开并且递归来排序。

步骤如下：

1.申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列； 
2.设定两个指针，最初位置分别为两个已经排序序列的起始位置； 
3.比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置； 
4.重复步骤 3 直到某一指针达到序列尾； 
5.将另一序列剩下的所有元素直接复制到合并序列尾。

动图演示：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0n54fx733j30mj0e1dgf.jpg)

代码示例：

```javascript
function mergeSort(arr) {  // 采用自上而下的递归方法
	var len = arr.length;
	if (len < 2) {
		return arr
	}
	var middle = Math.floor(len / 2),
	left = arr.slice(0, middle),
	right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
	var result = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	while (left.length) result.push(left.shift());
	while (right.length) result.push(right.shift());
	return result
}
```

既然是个爱折腾的人，折腾了总得看看效果吧。

**效率测试**

由于我学这个来进行排序不是对简单数组，数组内都是对象，要对对象的某个属性进行排序，还要考虑升降序。

因此我的代码实现如下：

```javascript
/**
 * [归并排序]
 * @param  {[Array]} arr   [要排序的数组]
 * @param  {[String]} prop  [排序字段，用于数组成员是对象时，按照其某个属性进行排序，简单数组直接排序忽略此参数]
 * @param  {[String]} order [排序方式 省略或asc为升序 否则降序]
 * @return {[Array]}       [排序后数组，新数组，并非在原数组上的修改]
 */

var mergeSort = (function() {
    // 合并
    var _merge = function(left, right, prop) {
        var result = [];
        // 对数组内成员的某个属性排序
        if (prop) {
            while (left.length && right.length) {
                if (left[0][prop] <= right[0][prop]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }
        } else {
            // 数组成员直接排序
            while (left.length && right.length) {
                if (left[0] <= right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }
        } 

        while (left.length)
            result.push(left.shift());
        while (right.length)
            result.push(right.shift());
        return result;
    };

    var _mergeSort = function(arr, prop) { // 采用自上而下的递归方法
        var len = arr.length;
        if (len < 2) {
            return arr;
        }

        var middle = Math.floor(len / 2),
            left = arr.slice(0, middle),
            right = arr.slice(middle);
        return _merge(_mergeSort(left, prop), _mergeSort(right, prop), prop);
    };

 

    return function(arr, prop, order) {
        var result = _mergeSort(arr, prop);
        if (!order || order.toLowerCase() === 'asc') {
            // 升序
            return result;
        } else {
            // 降序
            var _ = [];
            result.forEach(function(item) {
                _.unshift(item);
            });
            return _;
        }
    };
})();
```

需要对哪个属性进行排序是不确定，可以随意指定，因此写成了参数。有由于不想让这些东西在每次循环都进行判断，因此代码有点冗余。

关于降序的问题，也没有加入参数中，而是简单的升序后再逆序输出。原因是不想让每次循环递归里都去判断条件，所以简单处理了。

下面就是见证效率的时候了，一段数据模拟：

```javascript
var getData = function() {
	return Mock.mock({
		"list|1000": [{
			name: '@cname',
			age: '@integer(0,500)'
		}]
	}).list
};
```

上面使用Mock进行了模拟数据，关于Mock ： http://mockjs.com/

实际测试来啦：

```javascript
// 效率测试
var arr = getData();
console.time('归并排序');
mergeSort(arr, 'age');
console.timeEnd('归并排序');
console.time('冒泡排序');
for (var i = 0, l = arr.length; i < l - 1; ++i) {
    var temp;
    for (var j = 0; j < l - i - 1; ++j) {
        if (arr[j].age > arr[j + 1].age) {
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.timeEnd('冒泡排序');
```

进行了五次，效果如下：

```
// 归并排序: 6.592ms
// 冒泡排序: 25.959ms

// 归并排序: 1.334ms
// 冒泡排序: 20.078ms

// 归并排序: 1.085ms
// 冒泡排序: 16.420ms

// 归并排序: 1.200ms
// 冒泡排序: 16.574ms

// 归并排序: 2.593ms
// 冒泡排序: 12.653ms
```

最低4倍，最高近16倍的效率之差还是比较满意的。

虽然1000条数据让前端排序的可能性不大，但是几十上百条的情况还是有的。另外由于node，JavaScript也能运行的服务端了，这个效率的提升也还是有用武之地的。

**一点疑问**

归并排序里面使用了递归，在《数据结构与算法 JavaScript 描述》中，作者给出了自下而上的迭代方法。但是对于递归法，作者却认为：

> However, it is not possible to do so in JavaScript, as the recursion goes too deep for the language to handle. 

然而，在 JavaScript 中这种方式不太可行，因为这个算法的递归深度对它来讲太深了。 
gitbook上这本书的作者对此有疑问，我也有疑问。

归并中虽然用了递归，但是他是放在return后的呀。关于在renturn后的递归是有尾递归优化的呀。

关于尾递归优化是指：本来外层函数内部再调用一个函数的话，由于外层函数需要等待内层函数返回后才能返回结果，进入内层函数后，外层函数的信息，内存中是必须记住的，也就是调用堆栈。而内部函数放在return关键字后，就表示外层函数到此也就结束了，进入内层函数后，没有必要再记住外层函数内的所有信息。

上面是我的理解的描述，不知道算不算准确。chrome下已经可以开启尾递归优化的功能了，我觉得这个递归是不该影响他在JavaScript下的使用的。

**最后**

有兴趣的话，推荐读读这本书，进行排序的时候，可以考虑一些更高效的方法。

不过需要注意的是，这些高效率的排序方法，一般都需要相对较多的额外内存空间，需要权衡一下。

另外，非常小规模的数据就没有必要了。一是影响太小，而是我们人的效率问题，一分钟能从头写个冒泡、选择、插入的排序方法，而换成是归并排序呢？