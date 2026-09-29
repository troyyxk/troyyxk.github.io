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
  <ul class="hero__tags">
    <li><span class="lang-en lang-inline">LLM Memory</span><span class="lang-zh lang-inline">大模型记忆</span></li>
    <li><span class="lang-en lang-inline">Recursive Self-Improvement</span><span class="lang-zh lang-inline">递归自我改进</span></li>
    <li><span class="lang-en lang-inline">LLM Architecture</span><span class="lang-zh lang-inline">大模型架构</span></li>
    <li><span class="lang-en lang-inline">Video Generation</span><span class="lang-zh lang-inline">视频生成</span></li>
  </ul>
  <p class="hero__meta">
    <span class="lang-en lang-inline">Advised by Prof. <a href="https://hongyangdu.github.io/">Hongyang Du</a> &middot; HKU ECE</span>
    <span class="lang-zh lang-inline">导师：<a href="https://hongyangdu.github.io/">杜泓阳</a>教授 &middot; HKU ECE</span>
  </p>
  <div class="hero__actions">
    <a class="hero__btn hero__btn--primary" href="{{ base_path }}/publications/"><i class="fas fa-book-open" aria-hidden="true"></i><span class="lang-en lang-inline">Publications</span><span class="lang-zh lang-inline">论文发表</span></a>
    <a class="hero__btn" href="https://scholar.google.com/citations?user=iZxgsMUAAAAJ&amp;hl=zh-TW&amp;oi=sra"><i class="ai ai-google-scholar" aria-hidden="true"></i>Google Scholar</a>
    <a class="hero__btn" href="https://github.com/troyyxk"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a>
  </div>
</section>

<h2 id="about-me"><span class="lang-en lang-inline">About Me</span><span class="lang-zh lang-inline">关于我</span></h2>

<div class="about-summary lang-en lang-block">
<p>I am a second-year Ph.D. student at <a href="https://hongyangdu.github.io/nice/">NICE Lab</a>, Department of Electrical and Computer Engineering, The University of Hong Kong, fortunate to be advised by Professor <a href="https://hongyangdu.github.io/">Hongyang Du</a>.</p>
<p>My current research centres on <strong>LLM architecture</strong>, <strong>LLM memory</strong>, <strong>experience-driven model evolution</strong>, and <strong>video generation</strong>. I like problems that sit between systems efficiency and model capability &mdash; making large models cheaper to run without giving up what makes them useful.</p>
<p>What excites me most is the idea of models that keep evolving and thinking for themselves the way a human brain does &mdash; learning from experience long after training ends, instead of staying frozen the moment they are deployed.</p>
<p><u>I am always open to collaboration.</u> If any of the directions above overlaps with your work, please do get in touch.</p>
</div>

<div class="about-summary lang-zh lang-block">
<p>我是香港大学电机与计算机工程系 <a href="https://hongyangdu.github.io/nice/">NICE Lab</a> 的二年级博士研究生，很荣幸由 <a href="https://hongyangdu.github.io/">杜泓阳</a>教授指导。</p>
<p>目前的研究兴趣包括<strong>大模型架构</strong>、<strong>大模型记忆</strong>、<strong>经验驱动的模型演化</strong>与<strong>视频生成</strong>。我关注系统效率与模型能力之间的交叉问题：在不让模型失去价值的前提下，让大模型跑得更便宜。</p>
<p>最让我兴奋的，是让模型像人脑一样持续进化、自己思考 —— 在训练结束之后依然能从经验中不断学习，而不是在部署的那一刻就定型。</p>
<p><u>非常欢迎合作。</u>如果上面的方向与你的研究有交集，欢迎随时联系我。</p>
</div>

<h2 id="-research"><span class="lang-en lang-inline">Research Interests</span><span class="lang-zh lang-inline">研究方向</span></h2>

<div class="research-focus">
  <h3><span class="lang-en lang-inline">LLM Architecture</span><span class="lang-zh lang-inline">大模型架构</span></h3>
  <p><span class="lang-en lang-inline">Efficient architectures and inference-time acceleration for large language and diffusion transformers.</span><span class="lang-zh lang-inline">面向大语言模型与扩散 Transformer 的高效架构与推理加速。</span></p>
  <h3><span class="lang-en lang-inline">LLM Memory</span><span class="lang-zh lang-inline">大模型记忆</span></h3>
  <p><span class="lang-en lang-inline">Memory representation, retrieval and realignment for models that operate in dynamic, changing environments.</span><span class="lang-zh lang-inline">面向动态环境的记忆表示、检索与对齐。</span></p>
  <h3><span class="lang-en lang-inline">Experience-Driven Evolution</span><span class="lang-zh lang-inline">经验驱动的模型演化</span></h3>
  <p><span class="lang-en lang-inline">Post-deployment and experience scaling: how models keep improving after training through autonomous interaction and shared experience.</span><span class="lang-zh lang-inline">部署后演化与经验扩展：模型如何通过自主交互与经验共享，在训练之后持续变强。</span></p>
  <h3><span class="lang-en lang-inline">Video Generation</span><span class="lang-zh lang-inline">视频生成</span></h3>
  <p><span class="lang-en lang-inline">Cross-request reuse and compatibility-guided acceleration for text-to-video diffusion transformers.</span><span class="lang-zh lang-inline">文本到视频扩散 Transformer 的跨请求复用与兼容性引导加速。</span></p>
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

<h2 id="-news"><span class="lang-en lang-inline">News</span><span class="lang-zh lang-inline">新闻动态</span></h2>

<ul class="news-list">
  <li>
    <span class="news-list__date">2026.11</span>
    <span class="news-list__text">
      <span class="rs-tag"><span class="lang-en lang-inline">Project</span><span class="lang-zh lang-inline">项目</span></span>
      <span class="lang-en lang-inline">Completed <strong>Ascend Supernode Cloud-based Multimodal Inference Acceleration Technology</strong> (HK$1.30M, Dec 2025 &ndash; Nov 2026) as Core Researcher.</span><span class="lang-zh lang-inline">作为核心研究员，完成<strong>昇腾超节点云端多模态推理加速技术</strong>项目（HK$1.30M，2025.12 – 2026.11）。</span>
    </span>
  </li>
  <li>
    <span class="news-list__date">2026.09</span>
    <span class="news-list__text">
      <span class="rs-tag"><span class="lang-en lang-inline">Paper</span><span class="lang-zh lang-inline">论文</span></span>
      <span class="lang-en lang-inline"><a href="https://arxiv.org/abs/2601.19249">GLOVE: Global Verifier for LLM Memory-Environment Realignment</a> was accepted to <strong>NeurIPS 2026</strong>!</span><span class="lang-zh lang-inline">论文<a href="https://arxiv.org/abs/2601.19249">GLOVE: Global Verifier for LLM Memory-Environment Realignment</a>被 <strong>NeurIPS 2026</strong> 接收！</span>
    </span>
  </li>
  <li>
    <span class="news-list__date">2025.11</span>
    <span class="news-list__text">
      <span class="rs-tag"><span class="lang-en lang-inline">Paper</span><span class="lang-zh lang-inline">论文</span></span>
      <span class="lang-en lang-inline"><a href="https://www.nature.com/articles/s44386-025-00010-7">Ubiquitous Intelligence Via Wireless Network-Driven LLMs Evolution</a> was accepted to <strong>npj Wireless Technology</strong>!</span><span class="lang-zh lang-inline">论文<a href="https://www.nature.com/articles/s44386-025-00010-7">Ubiquitous Intelligence Via Wireless Network-Driven LLMs Evolution</a>被 <strong>npj Wireless Technology</strong> 接收！</span>
    </span>
  </li>
  <li>
    <span class="news-list__date">2025.08</span>
    <span class="news-list__text">
      <span class="rs-tag"><span class="lang-en lang-inline">Milestone</span><span class="lang-zh lang-inline">里程碑</span></span>
      <span class="lang-en lang-inline">Started my Ph.D. at The University of Hong Kong! Expected to graduate at July 2029.</span><span class="lang-zh lang-inline">入学香港大学攻读博士学位，预计 2029 年 7 月毕业。</span>
    </span>
  </li>
</ul>

<h2 id="-contact"><span class="lang-en lang-inline">Contact</span><span class="lang-zh lang-inline">联系方式</span></h2>

<div class="about-summary lang-en lang-block">
<p>Email: <a href="mailto:yinxingkun@connect.hku.hk">yinxingkun [at] connect [dot] hku [dot] hk</a><br />
Address: Department of Electrical and Computer Engineering, The University of Hong Kong, Pokfulam, Hong Kong SAR</p>
<p>As always, GLHF! <em>(Good luck, have fun!)</em></p>
</div>

<div class="about-summary lang-zh lang-block">
<p>邮箱：<a href="mailto:yinxingkun@connect.hku.hk">yinxingkun [at] connect [dot] hku [dot] hk</a><br />
地址：香港特别行政区 薄扶林 香港大学 电机与计算机工程系</p>
<p>As always, GLHF! <em>（Good luck, have fun!）</em></p>
</div>
