---
title: 防抖动函数
---

# 防抖动函数(debounce)

> 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

**适用场景**

-   文本输入的验证，连续输入文字后发送 AJAX 请求进行验证，验证一次就好
-   搜索和远程数据结合

我们拿 [vue](https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8) 官网侦听器的示例来举例：

如果每次用户输入都发出请求响应，这样导致请求的频率太快，我们希望的是在用户输入完毕才会发出请求，这里就可以通过防抖动函数([debounce](https://www.lodashjs.com/docs/lodash.debounce))来实现

<iframe
    src="https://codesandbox.io/embed/vue--yushx?fontsize=14&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="vue-watch"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
