# Tab 切換 ( tab_controls )

## 緣起

scm3 跟 ecm 有許多需要 Tab 切換的功能 , 因此前端團隊製作了 `tab_controls` 元件

## 快速開始

將下方的 css 跟 js 引入到 html 中 , 即可開始使用 `tab_controls` 元件

```html
<!-- 引用 jquery -->
<script src="/js/jQuery.js" type="text/javascript"></script>

<!-- 引入 filter-select.js & 其樣式 -->
<link rel="stylesheet" href="/css/app.css" />
<link rel="stylesheet" href="/css/form.css" />
<link rel="stylesheet" href="/js/form_common.js" />
```

### 使用 tab-controls

✳ 下方 tab-controls 在 pug 的格式

```pug
  .container-body.tab-controls
    .rows.flex
      ul.tab-option
        li.in.mr10.select-none 標題1
        li.mr10.select-none 標題2
    .tab-box.pt-0
      p tabbox內容文字123
    .tab-box.pt-0
      p tabbox內容文字456
```

### tab-controls scss 樣式

```scss
.tab-option {
  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 80px;
    line-height: 30px;
    transition: all 0.3s;

    & + li {
      margin-left: 1em;
    }

    &.in {
      color: $primarycolor;
      // border-bottom: 2px solid $primarycolor;
    }

    &:not(.in) {
      cursor: pointer;
      // border-bottom: 2px solid $gray;
    }

    &::after {
      content: "";
      height: 3px;
      width: 100%;
      background-color: $gray;
    }

    &:not(.in):hover {
      background-color: lighten($primarycolor, 40%);
    }

    &:not(.in):hover::after {
      animation: tabBottom 0.3s forwards;
    }

    &.in::after {
      background-color: $primarycolor;
    }
  }
}

@keyframes tabBottom {
  0% {
    width: 100%;
    background-color: $gray;
  }
  10% {
    width: 0;
    background-color: lighten($primarycolor, 20%);
  }
  100% {
    width: 100%;
    background-color: lighten($primarycolor, 20%);
  }
}
```

### 在 form_common.js 引用的程式碼

```js
// Tab 切換
$(".tab-controls").on("click", ".tab-option > li", function () {
  const idx = $(this).index();
  $(this).parent("ul").find("li").removeClass("in");
  $(this).addClass("in");
  const boxs = $(this).parents(".tab-controls").find(".tab-box");
  boxs.addClass("hide");
  boxs.eq(idx).removeClass("hide");
  $(this).trigger("customTabSwitch");
});
// Tab Initialize
$(".tab-controls")
  .find(".tab-option > li")
  .each(function () {
    if ($(this).hasClass("in")) {
      const idx = $(this).index();
      const boxs = $(this).parents(".tab-controls").find(".tab-box");
      boxs.addClass("hide");
      boxs.eq(idx).removeClass("hide");
      $(this).trigger("customTabSwitch");
    }
  });
```

### 🔹 JS 常用方法

```javascript title="JS 中的一些設定"
$(".tab-controls").on("customTabSwitch", ".tab-option > li", function () {
  const inputDom = $('input[name="xxxx"]');
  if ($(this).html() === "標題1") {
    inputDom.prop("disabled", true);
  } else {
    inputDom.prop("disabled", false);
  }
});
```
