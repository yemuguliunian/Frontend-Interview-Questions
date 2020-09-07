---
title: XMLHttpRequest 实现下载文件
---

## 参考

-   [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

## 大概实现思路

```ts
interface DownloadParams {
    url: string;
    data?: object;
    method?: string;
    fileName?: string;
}

const download = ({ url, data = {}, fileName, method = 'POST' }: DownloadParams) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        // 业务
        // xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'blob';

        xhr.onload = function() {
            if (this.status == 200) {
                const a = document.createElement('a');
                const blob = this.response;
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
                a.click();
                window.URL.revokeObjectURL(url);
                resolve();
            }
            reject();
        };
        xhr.send(JSON.stringify(data));
    });
};
```
