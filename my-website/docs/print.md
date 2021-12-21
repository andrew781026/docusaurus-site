
# 列印功能 ( PrintCtrl.print )

## 緣起

需求 = 用前端直接叫出列印的選單 & 指定列印內容為 "對帳總表"

![列印對應總表](/img/tutorial/print-issue.gif)

## 快速開始

- 前置準備

要列印的目標 html 為單獨的一頁 , 所以在使用 `PrintCtrl.print` 之前 ,
請先確認目標頁面有沒有符合 A4 格式 ,

---

下方以 `列印對帳總表` 為例 , 可以發現用 `右鍵 > 列印` , 呈現出來的 A4 格式符合預期

![列印前須確認 , html 內容是否符合 A4 大小](/img/tutorial/print-check.gif)


- 相關套件

此功能引用了 3 個第三方套件 [print.js](https://printjs.crabbly.com/) . [html2canvas](https://html2canvas.hertzen.com/) . [jsPdf](https://github.com/parallax/jsPDF)

所以如果要使用 , 請引入下方 js 跟 css 來做使用

```html
<!-- local 的版本 -->
<script src="/js/jspdf-2.4.0.min.js" type="text/javascript"></script>
<script src="/js/html2canvas-1.3.3.min.js" type="text/javascript"></script>
<script src="/js/print.min.js" type="text/javascript"></script>
<link href="/css/print.min.css" rel="stylesheet"/>
<script src="/js/form_common.js" type="text/javascript"></script>

<!-- cdn 的版本 -->
<script src="https://unpkg.com/jspdf@2.4.0/dist/jspdf.umd.min.js" type="text/javascript"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js" type="text/javascript"></script>
<script src="https://printjs-4de6.kxcdn.com/print.min.js" type="text/javascript"></script>
<link href="https://printjs-4de6.kxcdn.com/print.min.css" rel="stylesheet"/>
<script src="/js/form_common.js" type="text/javascript"></script>
```

- 開箱使用

```javascript
// 使用 get 列印
new window.PrintCtrl().print({ url: '/print_vendor_summary_statement.html' })

// 使用 post 列印
new window.PrintCtrl().getHtmlString({
    url: '/print_vendor_summary_statement.html',
    data: { snos: '8913038,' },
    method: 'post',
})
    .then(htmlStr => new window.PrintCtrl().print({htmlStr}))
    .catch(console.error)
```

- 說明

其實 `PrintCtrl().print` 只是對 3 個套件做包裝 , 讓列印的呼叫更簡單方便 ,

包裝的內容如下 :
1.建立一個 iframe 將 body 內容塞入 or 用 url 準備好要列印的 html 內容
2.藉由 html2canvas 將 iframe 裡面的 .main 區塊做截圖處理
3.將剛剛的圖片 , 塞入 pdf 中並將其設定成 A4 的 1 頁
4.打開 列印介面 並將剛剛的 pdf 當成要列印的內容
