---
title: 计算属性和侦听器
---

## 计算属性

**适用场景**:

一个数据受多个数据影响

### 官网例子

```html
<div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello',
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('');
        },
    },
});
```

<font color="red">注: </font>

-   `reversedMessage` 不能在组件的 `props` 和 `data` 中定义，否则会报错。
-   没对计算属性进行使用，不会触发 `computed`

## 侦听器

**适用场景**:

一个数据影响多个数据

需要在数据变化时执行异步或开销较大的操作时，使用侦听器
