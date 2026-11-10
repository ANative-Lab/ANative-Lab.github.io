"use client";

import "./blog.css";

const posts = [
  {
    title: "RSI That Builds RSI",
    author: "Xi Zhang",
    category: "Self-evolving intelligence",
    categoryZh: "自进化智能",
    date: "2026-11-01",
    summary: "Research can deliver more than an algorithm or a paper. This essay explores how it could build systems that keep improving after they are put to work.",
    summaryZh: "科研成果可以不止于算法或论文。这篇文章探讨如何构建投入使用后仍能持续改进的系统。",
    image: "/blog/rsi-that-builds-rsi.jpg",
    url: "https://xizhang.ai/blog/rsi-builds-rsi/",
    linkedinUrl: "https://www.linkedin.com/pulse/rsi-builds-xi-zhang-85j6e/",
  },
  {
    title: "Next Action Is All You Need",
    category: "AI Agents",
    categoryZh: "AI 智能体",
    date: "2026-10-06",
    summary: "Models have learned to do things. We are still preparing data for chatbots.",
    summaryZh: "模型已经学会行动，但我们仍在为聊天机器人准备数据。",
    image: "/blog/next-action.webp",
    url: "https://xizhang.ai/blog/next-action/",
  },
  {
    title: "Harness Vibe Research",
    category: "Vibe Research",
    categoryZh: "Vibe Research",
    date: "2026-03-04",
    summary: "Autonomy is earned, not installed.",
    summaryZh: "自主能力是逐步获得的，不是安装后就有的。",
    image: "/blog/vibe-research.webp",
    url: "https://xizhang.ai/blog/vibe-research/",
  },
  {
    title: "The Law of AI Agents",
    category: "AI Agents",
    categoryZh: "AI 智能体",
    date: "2025-08-08",
    summary: "A new paradigm for AI agents.",
    summaryZh: "关于 AI 智能体的一种新范式。",
    image: "/blog/agentlaw.webp",
    url: "https://xizhang.ai/blog/agentlaw/",
  },
  {
    title: "AI Agents Is Not AI's Agent",
    category: "AI Agents",
    categoryZh: "AI 智能体",
    date: "2025-07-26",
    summary: "Rethinking agency: today's AI agents work for us; who will work for them?",
    summaryZh: "重新思考智能体的主体性：今天它们为我们工作，谁又会为它们工作？",
    image: "/blog/agents-not-agent.webp",
    url: "https://xizhang.ai/blog/blog4/",
  },
  {
    title: "Libra - What about next?",
    category: "Biomedical Multimodal LLM",
    categoryZh: "生物医学多模态模型",
    date: "2025-04-25",
    summary: "Beyond temporal comparison: future directions in radiology AI modeling.",
    summaryZh: "超越时间对比，探索放射影像 AI 模型的未来方向。",
    image: "/blog/libra-next.webp",
    url: "https://xizhang.ai/blog/libra-blog3/",
  },
  {
    title: "Libra - Structural Logic",
    category: "Biomedical Multimodal LLM",
    categoryZh: "生物医学多模态模型",
    date: "2025-04-15",
    summary: "How model architecture shapes temporal reasoning in radiology imaging analysis.",
    summaryZh: "模型架构如何影响放射影像分析中的时间推理能力。",
    image: "/blog/libra-structure.webp",
    url: "https://xizhang.ai/blog/libra-blog2/",
  },
  {
    title: "Libra - Temporal Insight",
    category: "Biomedical Multimodal LLM",
    categoryZh: "生物医学多模态模型",
    date: "2025-04-05",
    summary: "Why temporal information matters in radiology diagnosis and how Libra uses it.",
    summaryZh: "时间信息为何对放射影像诊断重要，以及 Libra 如何利用它。",
    image: "/blog/libra-temporal.webp",
    url: "https://xizhang.ai/blog/libra-blog1/",
  },
] as const;

function postDate(date: string, zh: boolean) {
  const [year, month, day] = date.split("-");
  if (zh) return `${year}.${month}.${day}`;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[Number(month) - 1]} ${Number(day)}, ${year}`;
}

export default function BlogArchive({ zh }: { zh: boolean }) {
  const [featured, ...more] = posts;
  return <section className="blog-archive" id="blog" aria-labelledby="blog-title">
    <div className="blog-inner">
      <header className="blog-intro">
        <div>
          <span className="blog-kicker">ANATIVE LAB / WRITING</span>
          <h1 id="blog-title">Blog</h1>
        </div>
        <p>{zh ? "关于智能体、自进化系统与科研未来的观点。" : "Perspectives on agents, self-evolving systems, and the future of research."}</p>
      </header>
      <div className="blog-list-heading">
        <span>{zh ? "文章" : "ARTICLES"}</span>
        <span>{String(posts.length).padStart(2, "0")} / ANATIVE LAB</span>
      </div>
      <article className="blog-entry blog-featured" aria-labelledby="blog-featured-title">
        <a className="blog-cover" href={featured.url} target="_blank" rel="noopener noreferrer" aria-label={`${zh ? "阅读文章" : "Read article"}: ${featured.title}`}>
          <img src={featured.image} width="960" height="540" alt={zh ? `文章《${featured.title}》的封面` : `Cover for ${featured.title}`} />
        </a>
        <div className="blog-copy">
          <div className="blog-entry-meta"><span>{zh ? "精选文章" : "FEATURED ARTICLE"}</span><span>{zh ? featured.categoryZh : featured.category}</span></div>
          <h2 id="blog-featured-title"><a href={featured.url} target="_blank" rel="noopener noreferrer">{featured.title}</a></h2>
          <p className="blog-author">{zh ? "作者" : "By"} <strong>{featured.author}</strong><time dateTime={featured.date}>{postDate(featured.date, zh)}</time></p>
          <p className="blog-summary">{zh ? featured.summaryZh : featured.summary}</p>
          <div className="blog-featured-links">
            <a className="blog-read" href={featured.url} target="_blank" rel="noopener noreferrer">{zh ? "阅读原文" : "Read article"}<span aria-hidden="true">↗</span></a>
            <a className="blog-alt-link" href={featured.linkedinUrl} target="_blank" rel="noopener noreferrer">{zh ? "LinkedIn 版本" : "Also on LinkedIn"} ↗</a>
          </div>
        </div>
      </article>
      <div className="blog-more-heading"><h2>{zh ? "更多文章" : "More writing"}</h2><span>{String(more.length).padStart(2, "0")} / XI ZHANG</span></div>
      <div className="blog-more-grid">
        {more.map((post, index) => <article className="blog-compact" key={post.url} aria-labelledby={`blog-post-${index + 2}`}>
          <a className="blog-compact-cover" href={post.url} target="_blank" rel="noopener noreferrer" aria-label={`${zh ? "阅读文章" : "Read article"}: ${post.title}`}>
            <img src={post.image} width="960" height="540" loading="lazy" decoding="async" alt={zh ? `文章《${post.title}》的封面` : `Cover for ${post.title}`} />
          </a>
          <div className="blog-compact-copy">
            <div className="blog-compact-meta"><time dateTime={post.date}>{postDate(post.date, zh)}</time><span>{zh ? post.categoryZh : post.category}</span></div>
            <h3 id={`blog-post-${index + 2}`}><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a></h3>
            <p>{zh ? post.summaryZh : post.summary}</p>
            <a className="blog-compact-read" href={post.url} target="_blank" rel="noopener noreferrer">{zh ? "阅读原文" : "Read article"} ↗</a>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
