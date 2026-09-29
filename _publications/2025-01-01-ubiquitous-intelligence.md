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
  <p class="paper-hero__subtitle">Via Wireless Network-Driven LLMs Evolution</p>
  <p class="paper-hero__authors">Xingkun Yin, Feiran You, Hongyang Du, Kaibin Huang</p>
  <div class="paper-hero__actions">
    <a class="paper-btn paper-btn--primary" href="https://www.nature.com/articles/s44386-025-00010-7"><i class="fa-solid fa-file-lines" aria-hidden="true"></i><span class="lang-en lang-inline">Paper (npj)</span><span class="lang-zh lang-inline">论文全文（npj）</span></a>
    <a class="paper-btn" href="#citation"><i class="fa-solid fa-quote-right" aria-hidden="true"></i><span class="lang-en lang-inline">Citation</span><span class="lang-zh lang-inline">引用</span></a>
  </div>
</section>

<nav class="paper-toc" aria-label="Page sections">
  <a href="#the-problem">The Problem</a>
  <a href="#key-idea">Key Idea</a>
  <a href="#how-it-works">How It Works</a>
  <a href="#what-it-enables">What It Enables</a>
  <a href="#citation">Citation</a>
</nav>

## The Problem

Today's large language models live in data centres. Training and inference are concentrated in centralized clusters with high-performance accelerators, low-latency interconnects and deep memory hierarchies, because that is what large-batch optimisation and high-throughput inference have required.

That architecture carries two costs. The first is a ceiling on how models improve. Current advances remain primarily focused on imitating humans and consuming human-created data, but human-generated text is finite, and it cannot supply breakthroughs in scientific and technological domains where no human-generated data exists. The second is a poor fit with deployment reality: routing everything through a remote cloud sits badly with the latency, personalization, privacy and energy demands of real applications.

Meanwhile, the wireless edge is sitting on something the cloud does not have — a continuous, environment-grounded stream of interaction from heterogeneous devices that is largely untapped.

## Key Idea

The usual picture is that LLMs are a service and wireless networks are the pipe that carries them. This paper proposes that the two should instead **co-evolve**.

<div class="paper-callout">
  <span class="paper-callout__label">The insight</span>
  <p>If intelligence and connectivity develop together, they stop being separate layers. Wireless networks become the substrate for system-orchestrated lifelong learning, and the models in turn make the network more adaptive and responsive.</p>
  <p>The result is <strong>ubiquitous intelligence</strong> — intelligence that resides <em>within</em> the wireless infrastructure and is dynamically coordinated across varied devices, rather than being summoned from a distant data centre.</p>
</div>

## How It Works

![Ubiquitous intelligence framework](/publications/paper_imgs/2025-01-01-ubiquitous-intelligence.png)

*Figure 1: The co-evolution of LLMs and wireless networks, with intelligence distributed across cloud, edge and device tiers rather than concentrated in a central facility.*

The co-evolution runs in two directions at once.

<ol class="paper-steps">
  <li><strong>Network for LLMs.</strong> The wireless infrastructure supplies the learning substrate. Edge computing and decentralized learning move computation closer to where the data is produced; device-to-device links let peers exchange reasoning tasks and intermediate knowledge without going through a central server; edge caching, predictive prefetching and opportunistic clustering keep retrieval low-latency.</li>
  <li><strong>LLMs for the network.</strong> The models drive back the other way. Dense radio access, multi-access edge computing, heterogeneous terminals and latency-aware scheduling form a dynamic substrate on which inference tasks are allocated to the most suitable model for the task's characteristics and the available resources.</li>
  <li><strong>Orchestration ties the two together.</strong> Rather than broadcasting the same update to every model, system-orchestrated adaptation applies only the relevant subset of experience to each model according to its size and function — avoiding redundant updates and keeping the whole system efficient. Global consistency and coordination are maintained across the cloud, edge and device tiers.</li>
</ol>

The paradigm is organised around four principles:

- **Continuous Intelligence Ascension** — sustained, ongoing enhancement of capability rather than a model frozen at the end of training.
- **System-Orchestrated Intelligence Adaption** — selective refinement of heterogeneous LLMs, applying only the experience subsets each model needs, with inference routed to whichever model fits the task.
- **Permeable Semantic Networking** — networks that exchange not just raw data but the meaning contained in messages and services. Because LLMs are pre-trained to align with human intent, they can interpret, generate and abstract meaning across modalities, turning the network from a passive transport medium into adaptive, context-aware infrastructure.
- **Ubiquitous Coherence Communications** — LLM reasoning converts disordered information flows into structured, refined knowledge, so that networks evolve from chaotic to organised, from redundant to essential, and from diffuse to convergent.

## What It Enables

This is a position paper: its contribution is the framework and the case for it, established through analysis rather than benchmark results. What the paradigm is argued to deliver, and the open problems it leaves, are both worth stating plainly.

**What it changes**

- **A way past the data ceiling.** By letting models collect experience directly from their environment instead of waiting for more human-written text, capability growth is no longer bounded by the size of the human corpus.
- **Learning where the work happens.** Distributed, context-aware and adaptive learning across cloud, edge and device tiers lets models keep evolving while meeting demands for low latency, personalization, privacy and energy efficiency.
- **Networks that get better, not just bigger.** Semantic-level exchange and model-driven organisation move communication from chaotic to organised and from redundant to essential — the network improves as a consequence of the intelligence running on it.

**What remains open**

- **Global model consistency** — keeping distributed and selectively updated models coherent with one another.
- **Communication efficiency and latency management** — exchanging experience and coordinating updates over constrained wireless links.
- **Security and robustness** — distributed learning in open wireless environments exposes models to adversarial and unreliable inputs.
- **Efficient knowledge representation** — representing diverse experience compactly enough to move between tiers.
- **Scalable experience exchange** — making the sharing of learned experience work as the number of participating devices grows.

## Citation

If you find this work useful, please consider citing it:

```bibtex
@article{yin2025ubiquitous,
  title   = {Ubiquitous Intelligence via Wireless Network-Driven LLMs Evolution},
  author  = {Yin, Xingkun and You, Feiran and Du, Hongyang and Huang, Kaibin},
  journal = {npj Wireless Technology},
  year    = {2025}
}
```

The published version is available at [npj Wireless Technology](https://www.nature.com/articles/s44386-025-00010-7), with a preprint at [arXiv:2509.08400](https://arxiv.org/abs/2509.08400).
