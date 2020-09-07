---
title: 数据类型
---

## 参考

-   [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
-   [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
-   [Object.prototype.toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

## 数据类型

`javascript` 包含 5 种基本数据类型，1 个引用类型，如下

-   原始类型
    -   Boolean
    -   Null
    -   Undefined
    -   Number
    -   String
-   和 Object

## 判断数据类型

### typeof

无法区别 `object` `array` 和 `null` 三种类型的值，都返回 `object`

```js
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof ''); // string
console.log(typeof undefined); // undefined

console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object

console.log(typeof function() {}); // function
```

### Object.prototype.toString.call()

可以精准判断数据类型

```js
Object.prototype.toString.call(1);
// [object Number]

Object.prototype.toString.call(true);
// [object Boolean]

Object.prototype.toString.call('');
// [object String]

Object.prototype.toString.call(undefined);
// [object Undefined]

Object.prototype.toString.call(null);
// [object Null]

Object.prototype.toString.call([]);
// [object Array]

Object.prototype.toString.call({});
// [object Object]

Object.prototype.toString.call(function() {});
// [object Function]
```
