---
sidebar_position: 4
---

# 日期選單 ( date_picker )

日期選單使用 [bootstrap-datetimepicker](https://getdatepicker.com/4/Options/#defaultDate) 套件 , 並且在其之上進行加工

## 快速開始

### 引入第三方套件

將下方的 css 跟 js 引入到 html 中 , 即可開始使用 `date_picker` 元件

```html
  <!-- 引用 jquery -->
  <script src="/js/jQuery.js" type="text/javascript"></script>

  <!-- 引用 bootstrap-datetimepicke -->
  <link rel="stylesheet" href="/css/bootstrap-datetimepicker.min.css">
  <script src="/js/bootstrap.min.js"></script>
  <script src="/js/moment.min.js"></script>
  <script src="/js/bootstrap-datetimepicker.min.js"></script>

  <!-- 引入 form_common.js -->
  <script src="/js/form_common.js"></script>
```

### 使用 datePicker

datePicker 的 html 基本格式為 `<input type="text" data-date-format>`

✳ 下方列表一些常用的 html 格式

🟢 限制最小日期

設定最小日期為明天 ( today+1 天 )

```html
<input data-date-format="YYYY-MM-DD" type="text" data-min-date='+1' placeholder="開始日期" autocomplete="off">
```

![最小日期](date-picker/min-date.png)

🟢 只能選擇月份

```html
<input data-date-format="YYYY-MM" type="text" placeholder="開始日期" autocomplete="off">
```

🟢 一組起訖日

當同一個 HTML 元素中放多個 `<input type="text" data-date-format>` 就會自動認定為一組的起迄日

```html title="起訖日 LIMIT - 起日不能大於迄日 , 迄日不能小於起日"
<div>
  <input data-date-format="YYYY-MM-DD" type="text" name="start_date" placeholder="開始日期" autocomplete="off">
  <input data-date-format="YYYY-MM-DD" type="text" name="end_date" placeholder="開始日期" autocomplete="off">
</div>
```

🟢 起訖日限制範圍

設定起訖日不能大於 180 天 ( data-range-date 只有放在 end_date 上才會生效 )

```html
<div>
  <input data-date-format="YYYY-MM-DD" type="text" name="start_date" placeholder="開始日期" autocomplete="off">
  <input data-date-format="YYYY-MM-DD" type="text" name="end_date" data-range-date="+180" placeholder="開始日期" autocomplete="off">
</div>
```

🟢 其他 JS 中常用的設定

```javascript title="JS 中的一些設定"
// 詳細的日期計算請參考 : https://momentjs.com/docs/#/manipulating/
$('start_date').data('DateTimePicker').minDate(moment().subtract(2, 'y')) // 起始日的最小日期為 2 年前
$('end_date').data('DateTimePicker').maxDate(moment().add(6, 'd')) // 結束日的最大日期為 6 天後
$('start_date').data('DateTimePicker').date(moment()) // 起始日的預設日期為今天
```

### HTML 屬性

#### 🟢 data-date-format

設定顯示的日期格式 , 下表是對照表

| 格式 | 顯示 |
|--|--|
| YYYY-MM-DD | 2021-04-08 |
| HH:mm:ss.SSS | 16:07:09.057 |

詳細的日期格式對照 , 請參考 [moment 官方文件](https://momentjs.com/docs/)

#### 🟢 data-min-date

設定用於切換到 create mode 的 value 值

#### 🟢 placeholder

輸入框的 placeholder , nodata mode 時會顯示

#### 🟢 data-value

- 類型 : String

下拉選單中的被選中的項目值

#### 🟢 data-json

- 類型 : Array< { value , text } >

下拉選單中的可選項目 `value` = 項目值 , `text` = 項目文字

#### 🟢 data-mode

- 類型 : String : 'create' . 'nodata' . 'edit' . 'view'

下拉選單目前的狀態  `create` = 自由輸入文字 , `nodata` = 沒有選擇任何選項, `edit` = 篩選中 , `view` = 查看目前選擇向

### 方法

|||
|--|--|
|||
