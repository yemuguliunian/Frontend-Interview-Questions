---
title: hasOwnProperty 和 indexOf 的性能对比
---

# hasOwnProperty 和 indexOf 的性能对比

先看下以下代码

```js
let arr = [];
for (let i = 1; i <= 1000000; i++) {
    arr[i] = i;
}

console.time('indexOf');
arr.indexOf(1000000);
console.timeEnd('indexOf');

// indexOf: 1.259033203125ms

console.time('includes');
arr.includes(1000000);
console.timeEnd('includes');

// includes: 1.175048828125ms

console.time('hasOwnProperty');
arr.hasOwnProperty(1000000);
console.timeEnd('hasOwnProperty');

// hasOwnProperty: 0.01123046875ms
```

`indexOf` 做的事情就是遍历整个数组，找到需要访问的数的位置，然后返回它的下标，数组越长，查询的元素越靠后，所耗时间越多

`includes` 方法用来判断一个数组是否包含一个指定的值，如果是返回 `true`，否则 `false`。本质上也是遍历数组
