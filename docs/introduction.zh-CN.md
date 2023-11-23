---
title: 背景介绍
order: -1
group:
  path: /quick-start
  order: 0
nav:
  title: 使用文档
  path: /graphin
  order: 1
---

## 📖 背景介绍

随着大数据时代的到来，数据分析对于企业而言变得越来越重要。传统的 OLAP 图表分析，已经在商业领域展露头脚，帮助企业经营决策，这就是大家熟知的“BI”（Business Intelligence）。近些年来，5G + IoT 技术已经逐渐从概念走向应用，这会产生一种新的数据 —— 关联数据。想象一下，在你的家庭中，WiFi 和 5G 连接着你家的电冰箱，空调，洗衣机，也连接着你的手机，电脑，通过手机电脑可能也连接着你的社交账号，出门导航的信息也在同步着你的位置。未来的世界一定是一个互联共通的世界，我们都生活在一张巨大的拓扑图中。

因此如何对这些关系数据进行加工处理，如何对这张数据拓扑网进行分析，就成为一件非常有挑战性的事情。这个分析的过程也被叫做图分析（Graph Analysis）。

目前图分析已经被广泛被用在金融反欺诈，公共安全，基础设施监控，智慧医疗等领域。在这个过程中，我们需要一个强大的图计算引擎，解决数据合规，挖掘问题。也需要相应的图算法去解决图的构建，分析问题。最后在前端，我们需要一个图可视化引擎，为我们提供可视化分析能力，发现潜在的价值。Graphin 就是在这样的背景下诞生的，将这些图关系数据进行可视化呈现，并对其进行分析探索。

## 💡 命名由来

Graphin 取名意为 Graph Insight（图的分析洞察），是一个基于 G6 封装的 React 组件库。简单，高效，开箱即用。它的 Logo 是一个石墨烯（Graphene），意为蕴藏未来的潜力。

## 🚀 产品定位

图可视化，在应用领域可以分层为「图分析」与「图编辑」，上文中的[背景介绍](#背景介绍)其实是图分析的背景介绍

- 图分析：对图进行布局分析，可视化探索。典型的产品有：[cambridge-intelligence](https://cambridge-intelligence.com/)，[TigerGraph](https://testdrive.tigergraph.com)，[Linkurio](https://crunchbase.linkurio.us/demo/)，[Gephi](https://gephi.org/) ，[Palantir](https://www.palantir.com/)，[Neo4j](https://neo4j.com/product/)。
- 图编辑：对图进行编辑、连线，流程管理。典型的产品有：[draw.io](https://www.draw.io/)，[mxGraph](https://github.com/jgraph/mxgraph)，[ggEditor](http://ggeditor.com/)。

Graphin 的技术底盘是 [G6](https://github.com/antvis/g6) + React，G6 在 v3.1 版本之前，是一个图可视化渲染引擎，所以它对图分析与图编辑场景都支持。全面就意味着可能是全面的平庸。从 v3.1 开始，G6 把图编辑场景剥离，专心做图分析，图编辑场景交给 [X6](https://x6.antv.vision/) 去 承接，利用 React 强大的组件生态，简单的编程模型，大大降低用户的使用门槛。
Graphin 在产品能力上对标 [ReGraph](https://cambridge-intelligence.com/regraph/) ，未来希望能够服务关系分析、知识图谱、金融反欺诈、物流安全，基础设施监控等众多图分析领域。

## 💼 解决方案

AntV 是蚂蚁集团全新一代数据可视化解决方案。Graphin 作为其产品矩阵的一环，希望能够在关系数据的探索上找到一条道路，能够帮助开发者提效，为业务赋能。因此在 2020 年 11.22 号的 AntV 开源日上，我们推出了《AntV 图可视分析解决方案》以及其[子应用领域](https://graphin.antv.vision/solution/database/graph-database)解决方案白皮书，抛砖引玉，希望与大家一起讨论前行。

```jsx
/**
 * inline: true
 */

import React from 'react';

export default () => {
  return (
    <div style={{ height: '900px' }}>
      <embed
        title="visualization for graph "
        height="100%"
        width="100%"
        src="https://gw.alipayobjects.com/os/bmw-prod/c8ddbda8-c742-4c11-9c68-3783dd5954b9.pdf"
        type="application/pdf"
      />
    </div>
  );
};
```

## 🎬 其他资源

- [【分享】图释万物 - AntV 图可视分析解决方案](https://www.bilibili.com/video/BV15h411y7AT)
- [【专栏】图可视化知多少](https://www.yuque.com/antv/g6-blog)
