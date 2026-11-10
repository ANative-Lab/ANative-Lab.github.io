"use client";

import "./evoscientist-seminar.css";

const mediaRoot = "/talks/2026-08-18";

export default function EvoScientistSeminar({zh}: {zh: boolean}) {
  return <article className="seminar-page" aria-labelledby="seminar-title">
    <div className="seminar-inner">
      <nav className="seminar-breadcrumb" aria-label={zh ? "面包屑导航" : "Breadcrumb"}>
        <a href="/talks.html">{zh ? "演讲" : "Talks"}</a><span aria-hidden="true">/</span><span>EvoScientist</span>
      </nav>

      <header className="seminar-header">
        <div className="seminar-heading">
          <p className="seminar-kicker">ANATIVE LAB / IN-PERSON SEMINAR / 2026</p>
          <h1 id="seminar-title">EvoScientist: Towards Self-Evolving AI Scientists</h1>
          <p className="seminar-subtitle">{zh ? "让 AI 科学家自我进化：从一次性执行到持续进化。" : "From one-off research execution to continuous evolution."}</p>
        </div>
        <dl className="seminar-meta">
          <div><dt>{zh ? "讲者" : "SPEAKER"}</dt><dd>{zh ? "张曦 · EvoScientist 创始人" : "Xi Zhang · Founder, EvoScientist"}</dd></div>
          <div><dt>{zh ? "时间" : "DATE & TIME"}</dt><dd><time dateTime="2026-08-18T10:00:00">{zh ? "2026 年 8 月 18 日 · 10:00–11:00" : "August 18, 2026 · 10:00–11:00"}</time></dd></div>
          <div><dt>{zh ? "地点" : "VENUE"}</dt><dd>{zh ? "华中科技大学 · 新计算机大楼 2035 会议室" : "Room 2035, New Computer Science Building · HUST"}</dd></div>
        </dl>
      </header>

      <figure className="seminar-hero">
        <img src={`${mediaRoot}/seminar-room-edited.jpg`} width="1600" height="1200" alt={zh ? "基于 EvoScientist 报告现场照片合成的听众场景" : "Edited composite of the EvoScientist seminar with a fuller audience"} />
        <figcaption>{zh ? "报告现场合成图片" : "Edited composite of the seminar"}<span>01 / 03</span></figcaption>
      </figure>

      <div className="seminar-content">
        <section className="seminar-overview" aria-labelledby="seminar-overview-title">
          <p className="seminar-section-label">01 / {zh ? "报告简介" : "ABOUT THE TALK"}</p>
          <h2 id="seminar-overview-title">{zh ? "从科研智能体到持续进化的 AI 科学家" : "From research agents to self-evolving AI scientists"}</h2>
          <p>{zh ? "报告介绍 EvoScientist 如何把想法、实验、分析与写作连接成科研工作流，并通过 EvoMemory 与 AutoSkills 积累跨任务经验。张曦还分享了多智能体协作和上下文管理的设计。" : "Xi Zhang introduces EvoScientist's approach to connecting ideation, experiments, analysis, and writing in a research workflow. The seminar covers multi-agent collaboration, EvoMemory, AutoSkills, and ways to carry experience across research tasks."}</p>
        </section>
        <aside className="seminar-resources" aria-labelledby="seminar-resources-title">
          <p className="seminar-section-label">02 / {zh ? "相关资料" : "RESOURCES"}</p>
          <h2 id="seminar-resources-title">{zh ? "继续阅读" : "Explore further"}</h2>
          <a href={`${mediaRoot}/EvoScientist-Xi-Zhang-slides.pptx`} download>{zh ? "下载报告幻灯片" : "Download slides"}<span aria-hidden="true">↓</span></a>
          <a href="https://github.com/EvoScientist/EvoScientist" target="_blank" rel="noopener noreferrer">EvoScientist GitHub<span aria-hidden="true">↗</span></a>
          <a href="https://x-izhang.github.io/" target="_blank" rel="noopener noreferrer">{zh ? "讲者个人主页" : "Speaker homepage"}<span aria-hidden="true">↗</span></a>
        </aside>
      </div>

      <section className="seminar-gallery-section" aria-labelledby="seminar-gallery-title">
        <div className="seminar-gallery-heading"><div><p className="seminar-section-label">03 / {zh ? "现场照片" : "PHOTO JOURNAL"}</p><h2 id="seminar-gallery-title">{zh ? "报告现场" : "From the seminar"}</h2></div><span>02 / PHOTOS</span></div>
        <div className="seminar-gallery">
          <figure><a href={`${mediaRoot}/seminar-room-edited.jpg`} target="_blank" rel="noopener noreferrer" aria-label={zh ? "打开报告现场图片" : "Open seminar composite"}><img src={`${mediaRoot}/seminar-room-edited.jpg`} width="1600" height="1200" loading="lazy" decoding="async" alt={zh ? "听众较多的 EvoScientist 报告现场图片" : "EvoScientist seminar composite with a fuller audience"} /></a><figcaption><span>02</span>{zh ? "报告现场" : "At the seminar"}</figcaption></figure>
          <figure><a href={`${mediaRoot}/speaker-poster.jpg`} target="_blank" rel="noopener noreferrer" aria-label={zh ? "打开活动海报照片" : "Open event poster photo"}><img src={`${mediaRoot}/speaker-poster.jpg`} width="1000" height="1333" loading="lazy" decoding="async" alt={zh ? "活动海报与现场合影" : "Event poster and a photo taken at the venue"} /></a><figcaption><span>03</span>{zh ? "活动海报" : "Event poster"}</figcaption></figure>
        </div>
      </section>
      <a className="seminar-back" href="/talks.html"><span aria-hidden="true">←</span>{zh ? "返回全部演讲" : "Back to all talks"}</a>
    </div>
  </article>;
}
