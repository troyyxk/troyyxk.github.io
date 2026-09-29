---
permalink: /
title: "Academic Homepage"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<div hidden data-page-title-en="Xingkun Yin | Academic Homepage" data-page-title-zh="尹星锟 | 学术主页"></div>

<section class="hero">
  <h1 class="hero__name">Xingkun Yin<span class="hero__name-zh">尹星锟</span></h1>
  <p class="hero__role">
    <span class="lang-en lang-inline">First-year Ph.D. Student, NICE Lab &middot; Department of Electrical and Electronic Engineering, The University of Hong Kong</span>
    <span class="lang-zh lang-inline">香港大学 电机电子工程系 NICE Lab 博士研究生（一年级）</span>
  </p>
  <p class="hero__meta">
    <span class="lang-en lang-inline">Advised by Prof. <a href="https://hongyangdu.github.io/">Hongyang Du</a> &middot; Hong Kong SAR</span>
    <span class="lang-zh lang-inline">导师：<a href="https://hongyangdu.github.io/">Hongyang Du</a> 教授 &middot; 中国香港</span>
  </p>
  <div class="hero__actions">
    <a class="hero__btn hero__btn--primary" href="mailto:yinxingkun@connect.hku.hk"><i class="fas fa-envelope" aria-hidden="true"></i>Email</a>
    <a class="hero__btn" href="https://scholar.google.com/citations?user=iZxgsMUAAAAJ&amp;hl=zh-TW&amp;oi=sra"><i class="ai ai-google-scholar" aria-hidden="true"></i>Google Scholar</a>
    <a class="hero__btn" href="https://github.com/troyyxk"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a>
    <a class="hero__btn" href="{{ base_path }}/publications/"><i class="fas fa-book-open" aria-hidden="true"></i><span class="lang-en lang-inline">Publications</span><span class="lang-zh lang-inline">论文发表</span></a>
  </div>
</section>

<h2 id="about-me"><span class="lang-en lang-inline">About Me</span><span class="lang-zh lang-inline">关于我</span></h2>

<div class="about-summary lang-en lang-block">
<p>I am a first-year Ph.D. student at <a href="https://hongyangdu.github.io/nice/">NICE Lab</a>, Department of Electrical and Electronic Engineering, The University of Hong Kong, fortunate to be advised by Professor <a href="https://hongyangdu.github.io/">Hongyang Du</a>.</p>
<p>My current research centres on <strong>LLM architecture</strong>, <strong>LLM memory</strong>, <strong>experience-driven model evolution</strong>, and <strong>video generation</strong>. I like problems that sit between systems efficiency and model capability &mdash; making large models cheaper to run without giving up what makes them useful.</p>
<p><u>I am always open to collaboration.</u> If any of the directions above overlaps with your work, please do get in touch.</p>
</div>

<div class="about-summary lang-zh lang-block">
<p>我是香港大学电机电子工程系 <a href="https://hongyangdu.github.io/nice/">NICE Lab</a> 的一年级博士研究生，很荣幸由 <a href="https://hongyangdu.github.io/">Hongyang Du</a> 教授指导。</p>
<p>目前的研究兴趣包括<strong>大模型架构</strong>、<strong>大模型记忆</strong>、<strong>经验驱动的模型演化</strong>与<strong>视频生成</strong>。我关注系统效率与模型能力之间的交叉问题：在不让模型失去价值的前提下，让大模型跑得更便宜。</p>
<p><u>非常欢迎合作。</u>如果上面的方向与你的研究有交集，欢迎随时联系我。</p>
</div>

<h2 id="-news"><span class="lang-en lang-inline">News</span><span class="lang-zh lang-inline">新闻动态</span></h2>

<ul class="news-list">
{% assign pubs = site.publications | reverse %}
{% for post in pubs limit:6 %}
  {% assign fname = post.path | split: "/" | last %}
  {% assign ny = fname | slice: 0, 4 %}
  {% assign nm = fname | slice: 5, 2 %}
  {% if post.paperurl %}{% assign plink = post.paperurl %}{% else %}{% assign plink = base_path | append: post.url %}{% endif %}
  <li>
    <span class="news-list__date">{{ ny }}.{{ nm }}</span>
    <span class="news-list__text">
      <span class="rs-tag"><span class="lang-en lang-inline">Paper</span><span class="lang-zh lang-inline">论文</span></span>
      <a href="{{ plink }}">{{ post.title }}</a>{% if post.venue %} &middot; <em>{{ post.venue }}</em>{% endif %}
    </span>
  </li>
{% endfor %}
</ul>

<h2 id="-research"><span class="lang-en lang-inline">Research Interests</span><span class="lang-zh lang-inline">研究方向</span></h2>

<div class="research-focus-grid">
  <div class="research-focus-item">
    <h3><span class="lang-en lang-inline">LLM Architecture</span><span class="lang-zh lang-inline">大模型架构</span></h3>
    <p><span class="lang-en lang-inline">Efficient architectures and inference-time acceleration for large language and diffusion transformers.</span><span class="lang-zh lang-inline">面向大语言模型与扩散 Transformer 的高效架构与推理加速。</span></p>
  </div>
  <div class="research-focus-item">
    <h3><span class="lang-en lang-inline">LLM Memory</span><span class="lang-zh lang-inline">大模型记忆</span></h3>
    <p><span class="lang-en lang-inline">Memory representation, retrieval and realignment for models that operate in dynamic, changing environments.</span><span class="lang-zh lang-inline">面向动态环境的记忆表示、检索与对齐。</span></p>
  </div>
  <div class="research-focus-item">
    <h3><span class="lang-en lang-inline">Experience-Driven Evolution</span><span class="lang-zh lang-inline">经验驱动的模型演化</span></h3>
    <p><span class="lang-en lang-inline">Post-deployment and experience scaling: how models keep improving after training through autonomous interaction and shared experience.</span><span class="lang-zh lang-inline">部署后演化与经验扩展：模型如何通过自主交互与经验共享，在训练之后持续变强。</span></p>
  </div>
  <div class="research-focus-item">
    <h3><span class="lang-en lang-inline">Video Generation</span><span class="lang-zh lang-inline">视频生成</span></h3>
    <p><span class="lang-en lang-inline">Cross-request reuse and compatibility-guided acceleration for text-to-video diffusion transformers.</span><span class="lang-zh lang-inline">文本到视频扩散 Transformer 的跨请求复用与兼容性引导加速。</span></p>
  </div>
</div>

<h2 id="-publications"><span class="lang-en lang-inline">Selected Publications</span><span class="lang-zh lang-inline">代表性论文</span></h2>

{% assign selected = site.publications | reverse %}
{% for post in selected limit:3 %}
  {% include archive-single.html type="list" %}
{% endfor %}

<div class="rs-more">
  <p>
    <span class="lang-en lang-inline">See the complete list of publications, with abstracts and links.</span>
    <span class="lang-zh lang-inline">完整论文列表（含摘要与链接）请见论文发表页面。</span>
  </p>
  <a class="hero__btn" href="{{ base_path }}/publications/"><i class="fas fa-arrow-right" aria-hidden="true"></i><span class="lang-en lang-inline">All Publications</span><span class="lang-zh lang-inline">全部论文</span></a>
</div>

<h2 id="-contact"><span class="lang-en lang-inline">Contact</span><span class="lang-zh lang-inline">联系方式</span></h2>

<div class="about-summary lang-en lang-block">
<p>Email: <a href="mailto:yinxingkun@connect.hku.hk">yinxingkun [at] connect [dot] hku [dot] hk</a><br />
Address: Department of Electrical and Electronic Engineering, The University of Hong Kong, Pokfulam, Hong Kong SAR</p>
<p>As always, GLHF! <em>(Good luck, have fun!)</em></p>
</div>

<div class="about-summary lang-zh lang-block">
<p>邮箱：<a href="mailto:yinxingkun@connect.hku.hk">yinxingkun [at] connect [dot] hku [dot] hk</a><br />
地址：香港特别行政区 薄扶林 香港大学 电机电子工程系</p>
<p>As always, GLHF! <em>（Good luck, have fun!）</em></p>
</div>
