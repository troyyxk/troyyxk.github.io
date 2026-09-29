---
title: "Ubiquitous Intelligence Via Wireless Network-Driven LLMs Evolution"
collection: publications
badge: 'npj Wireless Technology|2025'
# category: manuscripts
permalink: /publication/2025-01-01-ubiquitous-intelligence
image: /publications/paper_imgs/2025-01-01-ubiquitous-intelligence.png
venue: 'npj Wireless Technology'
paperurl: 'https://www.nature.com/articles/s44386-025-00010-7'
# Keep the publication card identical to the other entries: no auto-excerpt
# from the first paragraph of the article body (only `description` is shown).
excerpt_separator: ""
description: 'A paradigm where LLMs evolve within wireless network-driven ecosystems through continuous coordination between networks and models.'
---

<section class="paper-hero">
  <p class="paper-hero__venue">npj Wireless Technology &middot; 2025</p>
  <h1 class="paper-hero__title">Ubiquitous Intelligence</h1>
  <p class="paper-hero__subtitle"><span class="lang-zh lang-block">基于无线网络驱动的大模型演化</span>Via Wireless Network-Driven LLMs Evolution</p>
  <p class="paper-hero__authors">Xingkun Yin, Feiran You, Hongyang Du, Kaibin Huang</p>
  <div class="paper-hero__actions">
    <a class="paper-btn paper-btn--primary" href="https://www.nature.com/articles/s44386-025-00010-7"><i class="fa-solid fa-file-lines" aria-hidden="true"></i><span class="lang-en lang-inline">Paper (npj)</span><span class="lang-zh lang-inline">论文全文（npj）</span></a>
    <a class="paper-btn" href="#citation"><i class="fa-solid fa-quote-right" aria-hidden="true"></i><span class="lang-en lang-inline">Citation</span><span class="lang-zh lang-inline">引用</span></a>
  </div>
</section>

<nav class="paper-toc" aria-label="Page sections">
  <a href="#the-problem"><span class="lang-en lang-inline">The Problem</span><span class="lang-zh lang-inline">问题所在</span></a>
  <a href="#key-idea"><span class="lang-en lang-inline">Key Idea</span><span class="lang-zh lang-inline">核心思路</span></a>
  <a href="#how-it-works"><span class="lang-en lang-inline">How It Works</span><span class="lang-zh lang-inline">方法</span></a>
  <a href="#what-it-enables"><span class="lang-en lang-inline">What It Enables</span><span class="lang-zh lang-inline">它带来什么</span></a>
  <a href="#citation"><span class="lang-en lang-inline">Citation</span><span class="lang-zh lang-inline">引用</span></a>
</nav>

<h2 id="the-problem"><span class="lang-en lang-inline">The Problem</span><span class="lang-zh lang-inline">问题所在</span></h2>

<p><span class="lang-en lang-inline">Today's large language models live in data centres. Training and inference are concentrated in centralized clusters with high-performance accelerators, low-latency interconnects and deep memory hierarchies, because that is what large-batch optimisation and high-throughput inference have required.</span><span class="lang-zh lang-inline">今天的大模型住在数据中心里。训练与推理集中在拥有高性能加速器、低延迟互联和深层存储层级的集群中 —— 因为大 batch 优化与高吞吐推理一直要求如此。</span></p>

<p><span class="lang-en lang-inline">That architecture carries two costs. The first is a ceiling on how models improve. Current advances remain primarily focused on imitating humans and consuming human-created data, but human-generated text is finite, and it cannot supply breakthroughs in scientific and technological domains where no human-generated data exists. The second is a poor fit with deployment reality: routing everything through a remote cloud sits badly with the latency, personalization, privacy and energy demands of real applications.</span><span class="lang-zh lang-inline">这种架构有两重代价。其一是模型能力的上限：当前进展仍主要围绕「模仿人类、消费人类产生的数据」，但人类生成的文本是有限的，而且在那些本就不存在人类数据的科技领域，它无法提供突破。其二是与部署现实不匹配：什么都绕远路走云端，与真实应用对延迟、个性化、隐私与能耗的要求相冲突。</span></p>

<p><span class="lang-en lang-inline">Meanwhile, the wireless edge is sitting on something the cloud does not have — a continuous, environment-grounded stream of interaction from heterogeneous devices that is largely untapped.</span><span class="lang-zh lang-inline">与此同时，无线边缘手里握着云端没有的东西 —— 来自异构设备、扎根于真实环境、持续不断的交互数据流，而这些几乎完全没有被利用。</span></p>

<h2 id="key-idea"><span class="lang-en lang-inline">Key Idea</span><span class="lang-zh lang-inline">核心思路</span></h2>

<p><span class="lang-en lang-inline">The usual picture is that LLMs are a service and wireless networks are the pipe that carries them. This paper proposes that the two should instead <strong>co-evolve</strong>.</span><span class="lang-zh lang-inline">通常的图景是：大模型是一项服务，无线网络是输送它的管道。本文提出，二者应当<strong>协同演化</strong>。</span></p>

<div class="paper-callout">
  <span class="paper-callout__label"><span class="lang-en lang-inline">The insight</span><span class="lang-zh lang-inline">核心洞见</span></span>
  <p><span class="lang-en lang-inline">If intelligence and connectivity develop together, they stop being separate layers. Wireless networks become the substrate for system-orchestrated lifelong learning, and the models in turn make the network more adaptive and responsive.</span><span class="lang-zh lang-inline">如果智能与连接一起演进，它们就不再是两个割裂的层次。无线网络成为「系统编排式终身学习」的底座，而模型反过来让网络更自适应、更灵敏。</span></p>
  <p><span class="lang-en lang-inline">The result is <strong>ubiquitous intelligence</strong> — intelligence that resides <em>within</em> the wireless infrastructure and is dynamically coordinated across varied devices, rather than being summoned from a distant data centre.</span><span class="lang-zh lang-inline">其结果就是<strong>泛在智能</strong> —— 智能<em>驻留于</em>无线基础设施之中，在各类设备之间动态协同，而不是每次都要从遥远的数据中心召唤。</span></p>
</div>

<h2 id="how-it-works"><span class="lang-en lang-inline">How It Works</span><span class="lang-zh lang-inline">方法</span></h2>

![Ubiquitous intelligence framework](/publications/paper_imgs/2025-01-01-ubiquitous-intelligence.png)

<p><span class="lang-en lang-inline"><em>Figure 1: The co-evolution of LLMs and wireless networks, with intelligence distributed across cloud, edge and device tiers rather than concentrated in a central facility.</em></span><span class="lang-zh lang-inline"><em>图 1：大模型与无线网络的协同演化 —— 智能分布在云、边缘与设备各层，而不是集中在某个中心设施里。</em></span></p>

<p><span class="lang-en lang-inline">The co-evolution runs in two directions at once.</span><span class="lang-zh lang-inline">这种协同演化同时朝两个方向展开。</span></p>

<ol class="paper-steps">
  <li><span class="lang-en lang-inline"><strong>Network for LLMs.</strong> The wireless infrastructure supplies the learning substrate. Edge computing and decentralized learning move computation closer to where the data is produced; device-to-device links let peers exchange reasoning tasks and intermediate knowledge without going through a central server; edge caching, predictive prefetching and opportunistic clustering keep retrieval low-latency.</span><span class="lang-zh lang-inline"><strong>网络服务于大模型。</strong>无线基础设施提供学习底座。边缘计算与去中心化学习把计算搬到数据产生的地方；设备间（D2D）链路让对等节点无需经过中心服务器即可交换推理任务与中间知识；边缘缓存、预测式预取与机会式聚类则让检索保持低延迟。</span></li>
  <li><span class="lang-en lang-inline"><strong>LLMs for the network.</strong> The models drive back the other way. Dense radio access, multi-access edge computing, heterogeneous terminals and latency-aware scheduling form a dynamic substrate on which inference tasks are allocated to the most suitable model for the task's characteristics and the available resources.</span><span class="lang-zh lang-inline"><strong>大模型反哺网络。</strong>模型反向驱动。密集无线接入、多接入边缘计算、异构终端与延迟感知调度共同构成一个动态底座，推理任务据此被分配到最适合其任务特征与可用资源的模型上。</span></li>
  <li><span class="lang-en lang-inline"><strong>Orchestration ties the two together.</strong> Rather than broadcasting the same update to every model, system-orchestrated adaptation applies only the relevant subset of experience to each model according to its size and function — avoiding redundant updates and keeping the whole system efficient. Global consistency and coordination are maintained across the cloud, edge and device tiers.</span><span class="lang-zh lang-inline"><strong>编排把两者绑在一起。</strong>系统编排式适配不会把同一份更新广播给所有模型，而是按每个模型的规模与职能，只施加它所需要的那部分经验 —— 避免冗余更新、保持整体高效。全局一致性与协同则在云、边缘、设备各层之间维持。</span></li>
</ol>

<p><span class="lang-en lang-inline">The paradigm is organised around four principles:</span><span class="lang-zh lang-inline">这一范式围绕四条原则组织：</span></p>

<ul>
  <li><span class="lang-en lang-inline"><strong>Continuous Intelligence Ascension</strong> — sustained, ongoing enhancement of capability rather than a model frozen at the end of training.</span><span class="lang-zh lang-inline"><strong>持续智能跃升</strong> —— 能力持续、不间断地增强，而不是训练结束后就冻结。</span></li>
  <li><span class="lang-en lang-inline"><strong>System-Orchestrated Intelligence Adaption</strong> — selective refinement of heterogeneous LLMs, applying only the experience subsets each model needs, with inference routed to whichever model fits the task.</span><span class="lang-zh lang-inline"><strong>系统编排式智能适配</strong> —— 对异构模型做选择性精炼，只施加各自需要的经验子集；推理则路由给最契合任务的模型。</span></li>
  <li><span class="lang-en lang-inline"><strong>Permeable Semantic Networking</strong> — networks that exchange not just raw data but the meaning contained in messages and services. Because LLMs are pre-trained to align with human intent, they can interpret, generate and abstract meaning across modalities, turning the network from a passive transport medium into adaptive, context-aware infrastructure.</span><span class="lang-zh lang-inline"><strong>可渗透的语义网络</strong> —— 网络交换的不只是原始数据，还有消息与服务中承载的「含义」。由于大模型经过与人类意图对齐的预训练，它们能跨模态地理解、生成与抽象语义，从而把网络从被动的传输媒介变为自适应、具备上下文感知的基础设施。</span></li>
  <li><span class="lang-en lang-inline"><strong>Ubiquitous Coherence Communications</strong> — LLM reasoning converts disordered information flows into structured, refined knowledge, so that networks evolve from chaotic to organised, from redundant to essential, and from diffuse to convergent.</span><span class="lang-zh lang-inline"><strong>泛在一致性通信</strong> —— 大模型的推理把无序的信息流转化为结构化、精炼过的知识，于是网络从混乱走向有序、从冗余走向必要、从发散走向收敛。</span></li>
</ul>

<h2 id="what-it-enables"><span class="lang-en lang-inline">What It Enables</span><span class="lang-zh lang-inline">它带来什么</span></h2>

<p><span class="lang-en lang-inline">This is a position paper: its contribution is the framework and the case for it, established through analysis rather than benchmark results. What the paradigm is argued to deliver, and the open problems it leaves, are both worth stating plainly.</span><span class="lang-zh lang-inline">这是一篇立场/展望论文：它的贡献在于提出框架并论证其合理性，靠的是分析而非基准结果。因此，这个范式被论证能带来什么、又留下了哪些未解问题，都值得如实说清楚。</span></p>

<p><span class="lang-en lang-inline"><strong>What it changes</strong></span><span class="lang-zh lang-inline"><strong>它改变了什么</strong></span></p>

<ul>
  <li><span class="lang-en lang-inline"><strong>A way past the data ceiling.</strong> By letting models collect experience directly from their environment instead of waiting for more human-written text, capability growth is no longer bounded by the size of the human corpus.</span><span class="lang-zh lang-inline"><strong>绕过数据天花板的一条路。</strong>让模型直接从环境中采集经验，而不是等更多人类撰写的文本，能力增长就不必再受人类语料规模的限制。</span></li>
  <li><span class="lang-en lang-inline"><strong>Learning where the work happens.</strong> Distributed, context-aware and adaptive learning across cloud, edge and device tiers lets models keep evolving while meeting demands for low latency, personalization, privacy and energy efficiency.</span><span class="lang-zh lang-inline"><strong>学习发生在业务所在之处。</strong>跨越云、边缘与设备各层的分布式、上下文感知、自适应学习，使模型在持续演化的同时，满足低延迟、个性化、隐私与能效的要求。</span></li>
  <li><span class="lang-en lang-inline"><strong>Networks that get better, not just bigger.</strong> Semantic-level exchange and model-driven organisation move communication from chaotic to organised and from redundant to essential — the network improves as a consequence of the intelligence running on it.</span><span class="lang-zh lang-inline"><strong>网络变好，而不只是变大。</strong>语义层面的交换与模型驱动的组织，让通信从混乱走向有序、从冗余走向必要 —— 网络因为跑在其上的智能而变好。</span></li>
</ul>

<p><span class="lang-en lang-inline"><strong>What remains open</strong></span><span class="lang-zh lang-inline"><strong>仍然未解的问题</strong></span></p>

<ul>
  <li><span class="lang-en lang-inline"><strong>Global model consistency</strong> — keeping distributed and selectively updated models coherent with one another.</span><span class="lang-zh lang-inline"><strong>全局模型一致性</strong> —— 让分布式、且被选择性地更新过的各个模型彼此保持协调。</span></li>
  <li><span class="lang-en lang-inline"><strong>Communication efficiency and latency management</strong> — exchanging experience and coordinating updates over constrained wireless links.</span><span class="lang-zh lang-inline"><strong>通信效率与延迟管理</strong> —— 在受限的无线链路上交换经验、协调更新。</span></li>
  <li><span class="lang-en lang-inline"><strong>Security and robustness</strong> — distributed learning in open wireless environments exposes models to adversarial and unreliable inputs.</span><span class="lang-zh lang-inline"><strong>安全与鲁棒性</strong> —— 在开放的无线环境中做分布式学习，会让模型暴露于对抗性与不可靠的输入。</span></li>
  <li><span class="lang-en lang-inline"><strong>Efficient knowledge representation</strong> — representing diverse experience compactly enough to move between tiers.</span><span class="lang-zh lang-inline"><strong>高效的知识表示</strong> —— 把多样化的经验表示得足够紧凑，以便在各层之间流转。</span></li>
  <li><span class="lang-en lang-inline"><strong>Scalable experience exchange</strong> — making the sharing of learned experience work as the number of participating devices grows.</span><span class="lang-zh lang-inline"><strong>可扩展的经验交换</strong> —— 让经验共享在参与设备数量增长时仍然可行。</span></li>
</ul>

<h2 id="citation"><span class="lang-en lang-inline">Citation</span><span class="lang-zh lang-inline">引用</span></h2>

<p><span class="lang-en lang-inline">If you find this work useful, please consider citing it:</span><span class="lang-zh lang-inline">如果这项工作对您有帮助，欢迎引用：</span></p>

```bibtex
@article{yin2025ubiquitous,
  title   = {Ubiquitous Intelligence via Wireless Network-Driven LLMs Evolution},
  author  = {Yin, Xingkun and You, Feiran and Du, Hongyang and Huang, Kaibin},
  journal = {npj Wireless Technology},
  year    = {2025}
}
```

<p><span class="lang-en lang-inline">The published version is available at <a href="https://www.nature.com/articles/s44386-025-00010-7">npj Wireless Technology</a>, with a preprint at <a href="https://arxiv.org/abs/2509.08400">arXiv:2509.08400</a>.</span><span class="lang-zh lang-inline">正式发表版本见 <a href="https://www.nature.com/articles/s44386-025-00010-7">npj Wireless Technology</a>，预印本见 <a href="https://arxiv.org/abs/2509.08400">arXiv:2509.08400</a>。</span></p>
