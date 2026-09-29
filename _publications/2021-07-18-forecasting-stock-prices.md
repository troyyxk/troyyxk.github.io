---
title: "Forecasting Stock Prices Using Stock Correlation Graph: A Graph Convolutional Network Approach"
collection: publications
badge: 'IJCNN|2021'
# category: conferences
permalink: /publication/2021-07-18-forecasting-stock-prices
image: /publications/paper_imgs/2021-07-18-forecasting-stock-prices.png
# venue: '2021 International Joint Conference on Neural Networks (IJCNN)'
paperurl: 'https://ieeexplore.ieee.org/document/9533510'
codeurl: 'https://github.com/troyyxk/gcgru_stock_prediction'
# Keep the publication card identical to the other entries: no auto-excerpt
# from the first paragraph of the article body (only `description` is shown).
excerpt_separator: ""
description: 'A graph convolutional network approach that leverages stock correlation graphs to forecast stock prices.'
---

<section class="paper-hero">
  <p class="paper-hero__venue">IJCNN 2021 &middot; IEEE</p>
  <h1 class="paper-hero__title">Forecasting Stock Prices Using Stock Correlation Graph</h1>
  <p class="paper-hero__subtitle">A Graph Convolutional Network Approach</p>
  <p class="paper-hero__authors">Xingkun Yin, Da Yan, Abdullateef Almudaifer, Sibo Yan, Yang Zhou</p>
  <div class="paper-hero__actions">
    <a class="paper-btn paper-btn--primary" href="https://ieeexplore.ieee.org/document/9533510"><i class="fa-solid fa-file-lines" aria-hidden="true"></i><span class="lang-en lang-inline">Paper (IEEE)</span><span class="lang-zh lang-inline">论文全文（IEEE）</span></a>
    <a class="paper-btn" href="https://github.com/troyyxk/gcgru_stock_prediction"><i class="fa-brands fa-github" aria-hidden="true"></i><span class="lang-en lang-inline">Code</span><span class="lang-zh lang-inline">代码</span></a>
    <a class="paper-btn" href="#citation"><i class="fa-solid fa-quote-right" aria-hidden="true"></i><span class="lang-en lang-inline">Citation</span><span class="lang-zh lang-inline">引用</span></a>
  </div>
</section>

<nav class="paper-toc" aria-label="Page sections">
  <a href="#the-problem">The Problem</a>
  <a href="#key-idea">Key Idea</a>
  <a href="#how-it-works">How It Works</a>
  <a href="#results">Results</a>
  <a href="#code">Code</a>
  <a href="#citation">Citation</a>
</nav>

## The Problem

Predicting where a stock price is heading matters for investment, and deep learning models have become a standard tool for it. Almost all of them are built the same way: take one stock's own history — its past prices, sometimes technical indicators or news — and train a sequence model to extrapolate it.

That framing throws away something obvious about markets. Stocks do not move independently. Two companies in the same sector, or two funds holding overlapping assets, tend to rise and fall together. If the model only ever looks at one stock's own past, it cannot use the fact that a *related* stock has already moved — even though that is exactly the kind of signal a trader would look at.

So the problem this work addresses is narrow and concrete: **existing sequence models leave the information carried by similar stocks unexplored.**

## Key Idea

The fix is to stop treating each stock as an isolated time series, and instead make the relationships between stocks part of the input.

<div class="paper-callout">
  <span class="paper-callout__label">The insight</span>
  <p>Which stocks move together is itself data. Compute it once from historical prices, turn it into a graph, and let every stock's prediction draw on its neighbours.</p>
  <p>The graph is built by taking the Pearson correlation of every pair of price sequences and then <strong>binarising</strong> it with a cutoff <strong>&tau; = 0.9</strong>, so that only the strongest links survive. Binarising matters: if every pair stays weakly connected, graph convolution averages everything together and the features become uninformative.</p>
</div>

## How It Works

![GCGRU model architecture](/publications/paper_imgs/2021-07-18-gcgru-model.jpg)

*Figure 1: The model. A shared GCN module turns each stock together with its highly correlated neighbours into a feature vector; those feature vectors are fed, in time order, into a per-stock GRU whose output predicts the next price.*

<ol class="paper-steps">
  <li><strong>Build the stock correlation graph.</strong> From the training period's prices, compute the correlation matrix over all stocks and keep only edges above the cutoff &tau;. On the DOW universe this keeps 30.9% of edges; on the ETF universe only 19.8%, because ETFs already share a high base correlation of roughly 0.5 with each other.</li>
  <li><strong>Extract features with a shared GCN.</strong> At each time step the GCN runs over the graph, so a stock's feature vector is built from its own price <em>and</em> the prices of the stocks it is strongly correlated with. One GCN is shared across every stock and every time step.</li>
  <li><strong>Predict each stock with its own GRU.</strong> The sequence of GCN features for a given stock is fed into that stock's GRU to capture temporal dependence, and a dense layer outputs the next price. All the GRUs are trained together with the shared GCN, following multi-task learning: every stock has its own predictor, but the shared module is trained on all of them at once, which is what lets correlation-related market signals propagate properly through the graph.</li>
</ol>

![Illustration of graph convolution](/publications/paper_imgs/2021-07-18-gcgru-graph-conv.jpg)

*Figure 2: Graph convolution. Each stock aggregates information from the neighbours it is strongly correlated with, so the feature it feeds to its GRU reflects more than its own price history.*

## Results

The model is compared against a plain GRU baseline that sees only a single stock's price sequence — the same architecture with the graph removed, so any difference comes from using correlated stocks. Experiments use daily price data from 2010-11-22 to 2020-06-04: the first 80% (up to 2018-07-05) builds the correlation graph and trains the models, the rest is held out for testing. The two universes are the 30 Dow Jones stocks and the top 50 ETFs.

<div class="paper-stats">
  <div class="paper-stat"><span class="paper-stat__value">+4.7 pt</span><span class="paper-stat__label">&epsilon;-insensitive accuracy, averaged over the 10 products reported: 57.2% &rarr; 61.9%</span></div>
  <div class="paper-stat"><span class="paper-stat__value">10 / 10</span><span class="paper-stat__label">products where all four regression metrics improve (R&sup2;, RMSE, MAE, RE)</span></div>
  <div class="paper-stat"><span class="paper-stat__value">76.66%</span><span class="paper-stat__label">best &epsilon;-insensitive accuracy (GE), against 71.40% for the baseline</span></div>
  <div class="paper-stat"><span class="paper-stat__value">0.8682</span><span class="paper-stat__label">mean R&sup2;, against 0.8126 for the baseline</span></div>
</div>

**Table 1: Our model versus the GRU baseline on 6 DOW stocks and 4 ETFs.** "Accuracy" is price-direction classification; "Accuracy\*" is &epsilon;-insensitive accuracy, which does not count a prediction as wrong when the predicted price is within &epsilon; = $0.2 of the previous price. Best result in each pair is bold.

| Stock | Model | Accuracy | Accuracy* | R² | RMSE | MAE | RE |
|:------|:------|---------:|----------:|---:|-----:|----:|---:|
| AA | GRU | 0.5400 | 0.6178 | 0.9885 | 0.8748 | 0.7403 | 0.0415 |
| AA | **Ours** | 0.5332 | **0.6545** | **0.9918** | **0.6228** | **0.5258** | **0.0282** |
| AIG | GRU | 0.5011 | 0.5606 | 0.9825 | 1.2375 | 0.8064 | 0.0219 |
| AIG | **Ours** | 0.4897 | **0.5812** | **0.9875** | **1.0443** | **0.6980** | **0.0191** |
| GE | GRU | 0.4691 | 0.7140 | 0.9553 | 0.3751 | 0.2764 | 0.0318 |
| GE | **Ours** | **0.5057** | **0.7666** | **0.9630** | **0.3416** | **0.2484** | **0.0287** |
| T | GRU | 0.5423 | 0.6018 | 0.8290 | 1.5636 | 1.0971 | 0.0321 |
| T | **Ours** | **0.5515** | **0.6888** | **0.8767** | **1.3278** | **0.8952** | **0.0259** |
| WBA | GRU | 0.4966 | 0.4989 | 0.9583 | 2.0606 | 1.3332 | 0.0228 |
| WBA | **Ours** | 0.4966 | **0.5355** | **0.9756** | **1.5750** | **1.0629** | **0.0186** |
| XOM | GRU | 0.5217 | 0.5240 | 0.7459 | 5.5159 | 4.0886 | 0.0731 |
| XOM | **Ours** | 0.5195 | **0.5584** | **0.8544** | **4.1763** | **2.3925** | **0.0496** |
| EEM | GRU | 0.5059 | 0.5216 | -0.1335 | 2.8253 | 2.2704 | 0.0543 |
| EEM | **Ours** | **0.5235** | **0.5431** | **0.1770** | **2.4073** | **1.8982** | **0.0454** |
| EWZ | GRU | 0.4706 | 0.5569 | 0.9790 | 0.9790 | 0.6599 | 0.0192 |
| EWZ | **Ours** | 0.4608 | **0.5765** | **0.9806** | **0.9102** | **0.6423** | **0.0187** |
| XME | GRU | 0.5431 | 0.5804 | 0.9848 | 0.5478 | 0.4156 | 0.0167 |
| XME | **Ours** | 0.5353 | **0.6824** | **0.9872** | **0.5031** | **0.3736** | **0.0149** |
| XRT | GRU | 0.5137 | 0.5471 | 0.8367 | 1.8077 | 1.2016 | 0.0277 |
| XRT | **Ours** | **0.5157** | **0.6039** | **0.8885** | **1.4936** | **0.9630** | **0.0218** |

### What the numbers say

<ol class="paper-steps">
  <li><strong>Adding the graph helps, and it helps almost everywhere.</strong> The &epsilon;-insensitive accuracy improves on all 10 products, by 2.0 points at the low end (EWZ) and 10.2 points at the high end (XME). The gain comes from the correlation graph and nothing else — the baseline is the same architecture with the graph removed.</li>
  <li><strong>Regression improves consistently, not just on average.</strong> R&sup2;, RMSE, MAE and relative error all improve on all 10 products. Mean R&sup2; rises from 0.8126 to 0.8682, and mean relative error falls from 0.0341 to 0.0271.</li>
  <li><strong>Plain direction accuracy is a misleading metric here.</strong> Both models sit near 50% on it, and the baseline sometimes wins. The reason is that daily prices barely move: if the price is $60 today and the model predicts $59.9 rather than $60.1, the direction is scored wrong even though the price is essentially right. That is exactly why the &epsilon;-insensitive metric is reported alongside it, and why the gap only shows up there.</li>
  <li><strong>The cutoff is a real hyper-parameter.</strong> &tau; = 0.9 gave the best accuracy for almost all stocks. Too low and graph convolution over-smooths; too high and genuinely correlated stocks stop contributing.</li>
</ol>

## Code

The implementation is released at [github.com/troyyxk/gcgru_stock_prediction](https://github.com/troyyxk/gcgru_stock_prediction), written with TensorFlow, pandas, NumPy, scikit-learn and configparser. Training runs with `python3 train.py`; the hyper-parameters live in `config.ini` (learning rate 10<sup>&minus;3</sup> with Adam, sequence length k = 60 days, GCN output width 128, batch size 128, 100 epochs). The price data and the adjacency matrix follow a parallel directory layout, so switching dataset or time duration means changing one matching pair of paths.

## Citation

If you find this work useful, please consider citing it:

```bibtex
@inproceedings{yin2021forecasting,
  title     = {Forecasting Stock Prices Using Stock Correlation Graph:
               A Graph Convolutional Network Approach},
  author    = {Yin, Xingkun and Yan, Da and Almudaifer, Abdullateef and
               Yan, Sibo and Zhou, Yang},
  booktitle = {2021 International Joint Conference on Neural Networks (IJCNN)},
  pages     = {1--8},
  year      = {2021},
  doi       = {10.1109/IJCNN52387.2021.9533510}
}
```

The published version is available on [IEEE Xplore](https://ieeexplore.ieee.org/document/9533510).
