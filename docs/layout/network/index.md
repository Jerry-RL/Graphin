---
title: 网图布局
order: 2
group:
  path: /layout
  title: 布局方案
  order: 2
nav:
  title: 使用文档
  path: /graphin
  order: 1
---

## 快速使用

网图布局的用法非常简单，只要指定`<Graphin layout={{type:"xxx"}} />`即可.可以粘贴下面的代码，快速体验～

```jsx | pure
import React from 'react';
import Graphin, { Utils } from '@antv/graphin';

const data = Utils.mock(10)
  .circle()
  .graphin();

export default () => {
  return <Graphin data={data} layout={{ type: 'grid' }}></Graphin>;
};
```

## 布局预览

以下是 Graphin 基于 G6 布局内置的 10 种网图布局，按照使用场景的频次排序如下。

> 注意 ⚠️ ：以下数据均来自同一份数据，因此有些布局间的差异可能没有那么大，真实业务场景下，数据搭配合适的布局，效果会很明显，同时为了浏览方便，取消了画布的可缩放功能，可以点击最下方的右下角图标`</>`展开查看详细代码

<code src='./index.tsx'>
