---
title: 打印
---

## 参考

-   [Print.js](https://github.com/crabbly/Print.js)
-   [vuePlugs_printjs](https://github.com/xyl66/vuePlugs_printjs)
-   [html2canvas](https://github.com/niklasvh/html2canvas)
-   [canvas2image](https://github.com/hongru/canvas2image)
-   [contentWindow](https://developer.mozilla.org/pl/docs/Web/API/HTMLIFrameElement/contentWindow)

## 网页打印

可直接使用 [window.print()](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/print)，亦可使用插件

```js
window.print();
```

## 局部打印

大概思路为通过动态创建 `iframe` 来打印。一种方式是把需打印的元素写入`iframe`，亦可通过 `html2canvas` 把 `dom` 元素转为 `canvas`，再转为图片写入 `iframe` 中调用 `iframe.contentWindow.print()`

## 遇到的问题

### html2canvas 转换图片清晰度问题

以下为一个解决方案，`html2canvas` 版本号 `1.0.0.rc.5`

```js
import html2canvas from 'html2canvas';

const html2Image = content => {
    const width = content.offsetWidth;
    const height = content.offsetHeight;

    const canvas = document.createElement('canvas');
    const scale = window.devicePixelRatio;
    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.getContext('2d').scale(scale, scale);
    const opts = {
        scale,
        canvas,
        width,
        height,
    };
    html2canvas(content, opts).then(function(canvas) {
        const context = canvas.getContext('2d');
        // 关闭抗锯齿
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        // Canvas2Image 需额外引入 https://github.com/hongru/canvas2image
        // 亦可直接使用 canvas.toDataURL()
        const img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
    });
};
```

### 标签打印机清晰度问题

标签打印机清晰度影响因素

-   字号 - `16px` 以上
-   字体
-   字色 - 推荐 `#000`

不推荐使用 html2Canvas 再转为图片打印标签，最终以图片形式打印出来的标签显示模糊
