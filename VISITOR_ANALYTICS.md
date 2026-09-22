# 访客统计设置说明

给 <https://troyyxk.github.io/> 加上「谁在什么时候来看过我」的记录功能。

---

## 0. 先理解一件事：为什么必须用第三方服务

这个站点是 **GitHub Pages 托管的静态网站**，没有服务端程序，也不提供访问日志。
所以网页自己**不可能**知道访客的 IP —— 必须由一段 JS 把访客信息发给某个「接收方」。

因此这里装了 **两个** 免费服务，各管一件事：

| 服务 | 记录什么 | 你能看到什么 | 能看到真实 IP 吗 |
| --- | --- | --- | --- |
| **StatCounter** | 时间戳、IP、ISP 运营商、来源页、停留时长、浏览路径、屏幕/系统信息、是否机器人 | 私有后台（只有你登录后能看） | ✅ **能** |
| **Umami** | 访问量、来源、浏览器/系统、国家/城市/地区 | 私有后台 + **可公开分享**的地图页面 | ❌ 不能（隐私设计，只存 IP 派生的哈希） |

> 为什么不用 Umami 一个搞定？因为 Umami 和 GoatCounter 这类隐私优先工具**故意不保存原始 IP**
> （见 [Umami 文档](https://docs.umami.is/docs/sessions)、[GoatCounter 隐私政策](https://www.goatcounter.com/help/privacy)）。
> 想要真实 IP，只能用 StatCounter 这类传统统计，或自建 Matomo。

---

## 1. 注册 StatCounter（负责记录真实 IP）

1. 打开 <https://statcounter.com/sign-up/> 注册一个免费账号。
2. 添加项目（Add Project / 新建 Project）：
   - **Website URL** 填 `https://troyyxk.github.io`
   - 其他选项随意，**Counter 选 Invisible**（页面上不显示计数器图标）
3. 记录两个值（登录后 → 项目名右侧的**扳手 🔧 图标** → 左侧菜单 **Security Code**）：
   - **Project ID**：一串纯数字，例如 `12345678`
   - **Security Code**：一串字母数字，例如 `a1b2c3d4`

## 2. 注册 Umami Cloud（负责公开的城市/地区地图）

1. 打开 <https://cloud.umami.is/signup> 注册（**Hobby 套餐永久免费**）。
2. **Add website** → Domain 填 `troyyxk.github.io`。
3. 点该网站的 **Edit** 按钮，在 **Tracking code** 区域找到 `data-website-id` 的值，
   形如 `3f0a1b2c-1234-5678-9abc-0123456789ab`。
4. 同一个 Edit 页面里找到 **Share URL** → 点 **Add**：
   - 勾选你想公开的视图（建议**只勾 Overview / Sessions / Realtime** 这类聚合视图）
   - 保存后会生成一个形如 `https://cloud.umami.is/share/AbCdEfGh` 的公开链接

---

## 3. 把值填进 `_config.yml`

打开根目录的 `_config.yml`，找到 `analytics:` 这一段，把上面拿到的值填进去：

```yaml
analytics:
  provider: "custom"          # ← 已经帮你改好了，不要改回 "false"

  statcounter:
    project: "12345678"                 # ← 你的 Project ID
    security: "a1b2c3d4"                # ← 你的 Security Code
    invisible: true                     # 保持 true，页面上不显示计数器

  umami:
    website_id: "3f0a1b2c-1234-5678-9abc-0123456789ab"   # ← 你的 website id
    src: "https://cloud.umami.is/script.js"
    domains: ""                         # 留空 = 自动用站点域名
    share_url: "https://cloud.umami.is/share/AbCdEfGh"   # ← 你的 Share URL
```

保存后提交：

```bash
git add _config.yml
git commit -m "enable visitor analytics"
git push
```

GitHub Pages 会在 1～2 分钟后自动重新构建。

> 两个服务都可以只填一个：只填 StatCounter 就只记录 IP，只填 Umami 就只看城市分布。
> 两个都不填时，页面**不会输出任何统计代码**。

---

## 4. 验证是否生效

1. 等 GitHub Pages 构建完成，用浏览器打开 <https://troyyxk.github.io/>。
2. 按 `F12` 打开开发者工具 → **Network** 面板，刷新页面，搜索 `statcounter` 或 `umami`：
   - 应该能看到 `counter.js` 和 `script.js` 被加载
3. 或者直接看后台：
   - StatCounter：**Live update / 实时访客**，正常的话几秒内就会出现你自己这次访问
   - Umami：**Realtime** 面板

### 在 StatCounter 后台哪里看 IP

- 左侧 **Summary** → 下方 **Recent Visitor Activity**（最近访客活动）：每一行右侧会显示 IP、ISP、位置、停留时长
- 左侧 **Visitor Paths**（访客路径）：按访客展开，可以看到同一个 IP 的完整浏览轨迹
- 官方说明：<https://statcounter.com/ip-address-tracker/>

> ⚠️ 免费版只保留**最近 500 次浏览**的明细（log size 500），更早的明细会被滚动覆盖，
> 汇总图表则不限量。如果你的站流量较大又需要长期保留明细，需要在 StatCounter 里升级。

---

## 5. （可选）把访客统计页放进顶部导航栏

已经创建好了一个页面 `_pages/visitors.html`，地址是 `/visitors/`，
它会把 Umami 的公开仪表盘（含城市/地区地图）嵌进来展示。

默认**没有**放进导航栏。想让它出现在顶部菜单，编辑 `_data/navigation.yml`，
把最后两行的注释去掉即可：

```yaml
  - title: "Visitors"
    url: /visitors/
```

---

## 6. 常见问题

**Q：为什么我本地 `jekyll serve` 的访问也被算进去了？**
Umami 已经通过 `data-domains` 限制只统计线上域名，本地预览不会被计入。
StatCounter 是按项目 URL 绑定的，本地一般也不会误记；如果发现被记了，
在 StatCounter 后台 `Configuration → Ignore your own visits` 里设置忽略你自己。

**Q：广告拦截插件（uBlock / AdBlock）会不会让统计失效？**
会。统计脚本常被拦截规则屏蔽，这部分访客统计不到，属于正常现象，所有统计工具都一样。

**Q：数据会不会被公开？**
不会。StatCounter 后台是私有的。Umami 默认也是私有的，只有你自己主动生成的
**Share URL** 才是公开的 —— 而且 Share URL 里**看不到 IP**，只有聚合后的国家/城市和访问量。

**Q：访问量突然很高，是不是被刷了？**
很可能是爬虫/机器人。StatCounter 能区分 bot 和真人（会显示 ISP 与是否启用 JS），
可以在报表里过滤掉。

**Q：我在意隐私合规（GDPR / 个人信息保护法）怎么办？**
记录 IP 在法律上属于处理个人数据。目前按你的要求**没有**添加额外的告知横幅。
站内已存在的 `/terms/` 页面里本来就有隐私政策章节，提到会记录日志文件和 IP，可以视作一种说明。
如需进一步加强，可以：给统计脚本加一个「同意后才加载」的开关，或改用不存 IP 的方案（只用 Umami）。

**Q：可以换成完全自己掌控数据的方案吗？**
可以。自建 [Matomo](https://matomo.org/) 能同时拿到真实 IP 和城市地图，数据 100% 自己掌控，
但需要一台公网服务器跑 PHP + MySQL，并且要在后台关闭 IP 匿名化才能看到完整 IP。

---

## 7. 相关文件

| 文件 | 作用 |
| --- | --- |
| `_config.yml` | `analytics` 段：填写两个服务的 ID |
| `_includes/analytics-providers/custom.html` | 实际的统计代码（由上面的配置驱动） |
| `_pages/visitors.html` | 公开的 `/visitors/` 聚合展示页面 |
| `_data/navigation.yml` | 控制 `/visitors/` 是否出现在顶部导航栏 |
