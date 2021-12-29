# [YSDT 重構案 - 前端文件](https://andrew781026.github.io/docusaurus-site/)

使用 [docusaurus](https://docusaurus.io/) 建立文件網站

### 啟動文件檔案

```shell
~$ cd my-website
~$ npm i -g yarn
~$ yarn install
~$ npm run start
```

### 部屬文件檔案

在 `.github\workflows\web.yml` 檔案中 , 有定義 github-action 的執行 Job

因此只要有任何的 git push 或 pull request 到 main 分支中 , 都會讓 github-action 的執行 Job - redeploy gh-pages

### 站內搜尋

使用 [docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) 作站內搜尋