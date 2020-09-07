(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{363:function(t,a,s){"use strict";s.r(a);var n=s(18),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/crabbly/Print.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Print.js"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/xyl66/vuePlugs_printjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuePlugs_printjs"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/niklasvh/html2canvas",target:"_blank",rel:"noopener noreferrer"}},[t._v("html2canvas"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/hongru/canvas2image",target:"_blank",rel:"noopener noreferrer"}},[t._v("canvas2image"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/pl/docs/Web/API/HTMLIFrameElement/contentWindow",target:"_blank",rel:"noopener noreferrer"}},[t._v("contentWindow"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"网页打印"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网页打印"}},[t._v("#")]),t._v(" 网页打印")]),t._v(" "),s("p",[t._v("可直接使用 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-TW/docs/Web/API/Window/print",target:"_blank",rel:"noopener noreferrer"}},[t._v("window.print()"),s("OutboundLink")],1),t._v("，亦可使用插件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"局部打印"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部打印"}},[t._v("#")]),t._v(" 局部打印")]),t._v(" "),s("p",[t._v("大概思路为通过动态创建 "),s("code",[t._v("iframe")]),t._v(" 来打印。一种方式是把需打印的元素写入"),s("code",[t._v("iframe")]),t._v("，亦可通过 "),s("code",[t._v("html2canvas")]),t._v(" 把 "),s("code",[t._v("dom")]),t._v(" 元素转为 "),s("code",[t._v("canvas")]),t._v("，再转为图片写入 "),s("code",[t._v("iframe")]),t._v(" 中调用 "),s("code",[t._v("iframe.contentWindow.print()")])]),t._v(" "),s("h2",{attrs:{id:"遇到的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[t._v("#")]),t._v(" 遇到的问题")]),t._v(" "),s("h3",{attrs:{id:"html2canvas-转换图片清晰度问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html2canvas-转换图片清晰度问题"}},[t._v("#")]),t._v(" html2canvas 转换图片清晰度问题")]),t._v(" "),s("p",[t._v("以下为一个解决方案，"),s("code",[t._v("html2canvas")]),t._v(" 版本号 "),s("code",[t._v("1.0.0.rc.5")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" html2canvas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html2canvas'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("html2Image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canvas'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scale "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("html2canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭抗锯齿")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozImageSmoothingEnabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitImageSmoothingEnabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msImageSmoothingEnabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageSmoothingEnabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Canvas2Image 需额外引入 https://github.com/hongru/canvas2image")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 亦可直接使用 canvas.toDataURL()")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Canvas2Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("convertToImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"标签打印机清晰度问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签打印机清晰度问题"}},[t._v("#")]),t._v(" 标签打印机清晰度问题")]),t._v(" "),s("p",[t._v("标签打印机清晰度影响因素")]),t._v(" "),s("ul",[s("li",[t._v("字号 - "),s("code",[t._v("16px")]),t._v(" 以上")]),t._v(" "),s("li",[t._v("字体")]),t._v(" "),s("li",[t._v("字色 - 推荐 "),s("code",[t._v("#000")])])]),t._v(" "),s("p",[t._v("不推荐使用 html2Canvas 再转为图片打印标签，最终以图片形式打印出来的标签显示模糊")])])}),[],!1,null,null,null);a.default=e.exports}}]);