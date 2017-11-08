参考网页：https://www.orcaso.io

### 网站分析
#### 1. 结构
  - 四大部分: Header + part-one + how-work + testimonial + pricing + f&q + footer
  - 共用样式:
    - 使用 sass 自定义网格系统
    - `.container`: 内容区域，通过媒体查询设置不同宽度，通过`min-width`控制
    - `.clearfix`: 清除浮动
    - `.part-title`: 每一部分的标题
    - `.btt`: box-shaow, border-radius, transition
    - `.contain`: 图片文字左右布局
  - Header:
    - top_header: 导航条 navbar, navbar-brand, navbar-nav, nav-item, nav-link
    - header_container: h1, h2, h3
  - part-one: title, p
  - how-work: contain: md-6, sm-12。pic_hide, text 
  - pricing: pricing_box

