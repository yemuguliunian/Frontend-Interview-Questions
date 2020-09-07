---
title: Scoped CSS
---

## 参考

-   [Scoped CSS|Vue-Loader](https://vue-loader.vuejs.org/zh/guide/scoped-css.html)

## 深度作用选择器

如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 >>> 操作符：

```html
<style scoped>
    .a >>> .b {
        /* ... */
    }
</style>
```

预处理器 less

```html
<style scoped lang="less">
    @deep: ~'>>>';
    .a {
        @{deep} .b {
            /* ... */
        }
    }
</style>
```

亦可使用 /deep/

> 谷歌控制台对于/deep/警告，提示将要被移除。故不推荐使用此方法

```html
<style scoped lang="less">
    .a {
        /deep/ .b {
            /* ... */
        }
    }
</style>
```
