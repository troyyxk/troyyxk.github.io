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

<nav class="paper-toc" aria-label="Paper sections">
  <a href="#overview">Overview</a>
  <a href="#model-architecture">Model Architecture</a>
  <a href="#graph-convolution">Graph Convolution</a>
  <a href="#code">Code</a>
  <a href="#citation">Citation</a>
</nav>

## Overview

Deep learning models for stock price forecasting usually design sequence models over a single stock's own history, leaving the information carried by *similar* stocks under-explored. This work builds and uses a **stock correlation graph** — nodes are stocks, and edges connect highly price-correlated ones — and combines a **graph convolutional network (GCN)** with a **gated recurrent unit (GRU)**.

The GCN extracts features from the price of each stock together with the prices of its highly correlated peers. For each stock, the resulting sequence of features is fed into a GRU to capture temporal dependence. Training follows multi-task learning: every stock learns its own RNN-based sequence predictor, while all stocks share one GCN module, which improves GCN training so that correlation-related market signals propagate more effectively.

Across experiments on real stock price data, combining the GCN with the GRU improved accuracy by roughly **5%** over a GRU baseline that does not use similar stocks, confirming the value of the correlation graph.

### Abstract

Accurate forecasting of stock prices plays an important role in stock investment. With the advancement of AI in Fintech applications, various deep learning models have recently been developed for stock price forecasting. However, these models focus on designing sequence models to capture the temporal dependence from a stock's historical prices (and other information such as technical indicators and news), leaving the information from similar stocks underexplored. To fill this gap, we propose a novel deep learning approach for stock price forecasting, which builds and uses a stock correlation graph G where nodes are stocks and edges connect highly price-correlated stocks. Our model combines the graph convolutional network (GCN) and gated recurrent unit (GRU). Specifically, the GCN is used to extract features from the price of each stock and the prices of those highly similar stocks in G. For each stock, a sequence of these extracted features are then fed into a GRU model to capture temporal dependence. The model training follows the idea of multi-task learning, where each task learns its unique RNN-based sequence predictor for one stock, but all stocks share a common GCN module to improve GCN training to more effectively propagate correlation-related market signals. Our extensive experiments on real stock price data demonstrate that our approach consistently outperforms a GRU baseline that does not consider similar stocks during prediction, which verifies the effectiveness of using a stock correlation graph.

## Model Architecture

![GCGRU model architecture](/publications/paper_imgs/2021-07-18-gcgru-model.jpg)

*Figure 1: The GCGRU model. A shared GCN module extracts features for each stock together with its highly correlated peers from the stock correlation graph, and a per-stock GRU sequence predictor captures temporal dependence. All stocks share the GCN, so correlation-related market signals propagate across the graph during training.*

## Graph Convolution

![Illustration of graph convolution](/publications/paper_imgs/2021-07-18-gcgru-graph-conv.jpg)

*Figure 2: Graph convolution over the stock correlation graph. Each stock aggregates information from the neighbours it is highly price-correlated with, which lets the model use signals beyond a single stock's own price history.*

## Code

The implementation is released at [github.com/troyyxk/gcgru_stock_prediction](https://github.com/troyyxk/gcgru_stock_prediction).

**Dependencies:** TensorFlow, pandas, NumPy, scikit-learn, configparser.

Training runs end to end with:

```bash
python3 train.py
```

Hyper-parameters are set in `config.ini`:

- `data_addr` — path to the stock price data in use
- `adj_addr` — path to the adjacency matrix in use
- `s_index` — index of the stock to predict
- `lr` — learning rate
- `n_neurons` — number of neurons in the GRU layer
- `seq_len` — sequence length
- `n_epochs` — number of epochs
- `batch_size` — batch size
- `th` — threshold for ε-insensitive accuracy

The price data and the adjacency matrix follow a parallel layout, and the `[dataset]` and `[time duration]` parts must match between them:

```
./data/data/[dataset]/[dataset]_[time duration]_price.csv
./data/adj/[dataset]/[time duration]/[dataset]_[time duration]_[cut off]_01_corr.csv
```

For example `./data/data/dow/dow_1day_price.csv` with `./data/adj/dow/1day/dow_1day_090_01_corr.csv`.

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

The paper is also available on [IEEE Xplore](https://ieeexplore.ieee.org/document/9533510).
