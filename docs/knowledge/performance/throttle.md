---
title: 节流函数
---

# 节流函数(throttle)

> 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数

**适用场景**

-   scroll 事件滚动时调用函数，限制访问频率

以之前学习虚拟列表写的一个组件为示例：

大致实现原理是通过滚动时计算开始下标和结束下标从而控制显示的列表数据，大幅度减少渲染的节点。

滚动过程中会频繁的触发计算函数，我们想限制频率，这时节流函数([throttle](https://www.lodashjs.com/docs/lodash.throttle))就派上了用场

<iframe
    src="https://codesandbox.io/embed/rc-virtual-list-i5u9t?fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rc-virtual-list"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
