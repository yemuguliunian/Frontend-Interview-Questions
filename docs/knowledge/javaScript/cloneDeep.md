---
title: 浅拷贝与深拷贝
---

## 浅拷贝

浅拷贝是按位拷贝对象，它会创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是内存地址（引用类型），拷贝的就是内存地址 ，因此如果其中一个对象改变了这个地址，就会影响到另一个对象。即默认拷贝构造函数只是对对象进行浅拷贝复制(逐个成员依次拷贝)，即只复制对象空间而不复制资源。

## 深拷贝

### 推荐使用第三方工具库 lodash.cloneDeep

[lodash.cloneDeep](https://www.lodashjs.com/docs/latest#_clonedeepvalue)

```js
var objects = [{ a: 1 }, { b: 2 }];

var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```

### 使用递归的方式实现深拷贝

```js
const getTag = value => {
    return Object.prototype.toString.call(value);
};

const arrayTag = '[object Array]';
const objectTag = '[object Object]';

// 此处只考虑数组和对象
let cloneableTags = {};
cloneableTags[arrayTag] = cloneableTags[objectTag] = true;

function cloneDeep(source) {
    let target;
    const tag = getTag(source);
    if (cloneableTags[tag]) {
        target = Array.isArray(source) ? [] : {};
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                if (typeof source[key] !== 'object') {
                    target[key] = source[key];
                } else {
                    target[key] = cloneDeep(source[key]);
                }
            }
        }
    } else {
        target = source;
    }
    return target;
}
```
