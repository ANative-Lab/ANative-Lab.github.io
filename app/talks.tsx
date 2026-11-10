"use client";

import { useRef, useState } from "react";
import { collectionUrl, filterTalks, recordingUrl, talkCategories, talks } from "./talks-data";
import type { Talk, TalkCategory } from "./talks-data";
import "./talks.css";

const pageSize = 5;
const topicLabels: Record<string, string> = {
  Memory: "记忆", Skills: "技能", "Self-evolution": "自进化", "Agentic RL": "智能体强化学习",
  "Agent theory": "智能体理论", "Scientific agents": "科研智能体", "Agent systems": "智能体系统",
  "Evolutionary computation": "进化计算", "Recommender systems": "推荐系统", Safety: "安全性",
  Evaluation: "评测", "Agent training": "智能体训练", "Inference-time scaling": "推理时扩展",
};

function PlayIcon() {
  return <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3 1.5 10 6l-7 4.5z" /></svg>;
}
function GitHubIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.09.67-3.74-1.31-3.74-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.49 0-1.21.44-2.2 1.15-2.98-.12-.28-.5-1.41.1-2.94 0 0 .94-.3 3.05 1.14a10.65 10.65 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.6 5.2-5.08 5.48.4.35.76 1.02.76 2.06V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" /></svg>;
}
function GlobeIcon() {
  return <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><circle cx="9" cy="9" r="6.5" /><ellipse cx="9" cy="9" rx="2.8" ry="6.5" /><path d="M2.5 9h13M4 5.2h10M4 12.8h10" /></svg>;
}
function CoverArt({variant}: {variant: number}) {
  return <svg className="talk-cover-art" viewBox="0 0 170 110" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    {variant === 0 && <><path d="M15 20h36v25h35v25h35v25h30M15 44h36m0 26h35m0 25h35" /><circle cx="51" cy="20" r="4" /><circle cx="86" cy="45" r="4" /><circle cx="121" cy="70" r="4" /></>}
    {variant === 1 && <><circle cx="93" cy="52" r="34" /><ellipse cx="93" cy="52" rx="50" ry="16" transform="rotate(-35 93 52)" /><path d="m88 17 7 1-4 7m-34 41-5-5 8-2" /><circle cx="93" cy="52" r="8" /></>}
    {variant === 2 && <><path d="M25 29h34l24 22 25-22h32M25 78h34l24-27 25 27h32" /><rect x="18" y="20" width="18" height="18" rx="3" /><rect x="18" y="69" width="18" height="18" rx="3" /><circle cx="83" cy="51" r="10" /><rect x="132" y="20" width="18" height="18" rx="3" /><rect x="132" y="69" width="18" height="18" rx="3" /></>}
    {variant === 3 && <><rect x="56" y="13" width="33" height="24" rx="4" /><rect x="98" y="13" width="33" height="24" rx="4" /><rect x="56" y="46" width="33" height="24" rx="4" /><rect x="98" y="46" width="33" height="24" rx="4" /><path d="m68 24 4 4 6-8m32 37 4 4 6-8" /></>}
    {variant === 4 && <><circle cx="87" cy="49" r="31" /><circle cx="87" cy="49" r="17" /><path d="M19 49h37m62 0h35M87 4v14m0 62v19m-5-55 12 5-12 5z" /><circle cx="22" cy="49" r="5" /><circle cx="150" cy="49" r="5" /></>}
  </svg>;
}
function TalkRow({talk, zh}: {talk: Talk; zh: boolean}) {
  const title = zh ? talk.titleZh : talk.title;
  const watch = zh ? "观看录像" : "Watch recording";
  const affiliation = zh ? (talk.affiliationZh ?? talk.affiliation) : talk.affiliation;
  const variant = talks.indexOf(talk) % 5;
  return <article className="talk-row" aria-labelledby={`talk-${talk.id}`} data-talk-id={talk.id}>
    <a className={`talk-cover talk-cover-${variant}`} href={recordingUrl(talk)} target="_blank" rel="noopener noreferrer" aria-label={`${watch}: ${title}`}>
      <span className="talk-cover-series">{talk.series}</span><CoverArt variant={variant} />
      <strong>{talk.cover}</strong><span className="talk-cover-subtitle">{talk.format === "paper-walkthrough" ? (zh ? "论文解读" : "Paper walkthrough") : (zh ? "演讲录像" : "Recorded talk")}</span>
      <span className="talk-cover-play"><PlayIcon /></span>
    </a>
    <div className="talk-copy">
      <div className="talk-topics">{talk.topics.map(topic => zh ? (topicLabels[topic] ?? topic) : topic).join(" / ")}{talk.format === "paper-walkthrough" && <span className="talk-format">{zh ? "论文解读" : "Paper walkthrough"}</span>}</div>
      <h2 id={`talk-${talk.id}`}>{title}</h2>
      {(talk.speaker || affiliation || talk.github || talk.homepage || talk.scholar) && <div className="talk-speaker">
        {talk.speaker && <span className="talk-speaker-name">{talk.speaker}</span>}
        {(talk.github || talk.homepage || talk.scholar) && <span className="talk-author-links">
          {talk.github && <a href={talk.github} target="_blank" rel="noopener noreferrer" aria-label={`${talk.speaker ?? ""} GitHub`}><GitHubIcon /><span>GitHub</span></a>}
          {talk.homepage && <a href={talk.homepage} target="_blank" rel="noopener noreferrer" aria-label={`${talk.speaker ?? ""} ${zh ? "个人主页" : "homepage"}`}><GlobeIcon /><span>{zh ? "个人主页" : "Homepage"}</span></a>}
          {talk.scholar && <a href={talk.scholar} target="_blank" rel="noopener noreferrer" aria-label={`${talk.speaker ?? ""} Google Scholar`}><GlobeIcon /><span>Scholar</span></a>}
        </span>}
        {affiliation && <span className="talk-affiliation">{affiliation}</span>}
      </div>}
      <p className="talk-summary">{zh ? talk.summaryZh : talk.summary}</p>
    </div>
    <div className="talk-actions"><a className="talk-watch" href={recordingUrl(talk)} target="_blank" rel="noopener noreferrer"><PlayIcon />{watch}</a>
      {talk.papers && <div className="talk-paper-links">{talk.papers.map((paper, index) => <a key={paper} className="talk-paper" href={paper} target="_blank" rel="noopener noreferrer" aria-label={`${zh ? "论文" : "Paper"}${talk.papers!.length > 1 ? ` ${index + 1}` : ""}: ${title}`}>{zh ? "阅读论文" : "Read paper"}{talk.papers!.length > 1 ? ` ${index + 1}` : ""}<span aria-hidden="true">↗</span></a>)}</div>}
    </div>
  </article>;
}

export default function TalksArchive({zh}: {zh: boolean}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<TalkCategory | "All">("All");
  const [page, setPage] = useState(1);
  const resultsHeading = useRef<HTMLDivElement>(null);
  const filtered = filterTalks(talks, query, category);
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, pages);
  const start = (current - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);
  const reset = () => {setQuery(""); setCategory("All"); setPage(1);};
  const changePage = (next: number) => {
    setPage(next);
    resultsHeading.current?.scrollIntoView({block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
  };
  return <section className="talks-archive" aria-labelledby="talks-heading">
    <div className="talks-inner">
      <div className="talks-intro"><div><p className="talks-breadcrumb">{zh ? "活动" : "Activities"}<span aria-hidden="true">/</span>{zh ? "演讲" : "Talks"}</p><h1 id="talks-heading">{zh ? "学术演讲" : "Talks"}</h1><p className="talks-lede">{zh ? "现场报告与研究者的学术对话。" : "Seminars and research conversations with the people behind the work."}</p><p className="talks-series">{zh ? "现场报告 · EvoAgentX Talk 与 ANative Talk 系列" : "In-person seminars · EvoAgentX Talk and ANative Talk series"}</p></div>
        <a className="talks-collection" href={collectionUrl} target="_blank" rel="noopener noreferrer">{zh ? "在哔哩哔哩查看合集" : "View collection on Bilibili"}<span aria-hidden="true">↗</span></a>
      </div>
      <article className="talks-feature" aria-labelledby="talks-feature-title">
        <a className="talks-feature-image" href="/evoscientist-seminar.html" aria-label={zh ? "查看 EvoScientist 现场报告" : "View the EvoScientist seminar"}><img src="/talks/2026-08-18/seminar-room-edited.jpg" width="1600" height="1200" alt={zh ? "基于 EvoScientist 报告现场照片合成的听众场景" : "Edited composite of the EvoScientist seminar with a fuller audience"} /><span className="talks-feature-image-note">{zh ? "合成图片" : "Edited image"}</span></a>
        <div className="talks-feature-copy"><p className="talks-feature-eyebrow">01 / {zh ? "现场报告" : "IN-PERSON SEMINAR"}<span><time dateTime="2026-08-18">18 AUG 2026</time></span></p><h2 id="talks-feature-title"><a href="/evoscientist-seminar.html">EvoScientist: Towards Self-Evolving AI Scientists</a></h2><p className="talks-feature-speaker">{zh ? "张曦 · EvoScientist 创始人" : "Xi Zhang · Founder, EvoScientist"}</p><p className="talks-feature-summary">{zh ? "从科研智能体到持续进化的 AI 科学家：分享 EvoMemory、AutoSkills 与多智能体协作的设计。" : "From research agents to self-evolving AI scientists, with a look at EvoMemory, AutoSkills, and multi-agent collaboration."}</p><a className="talks-feature-link" href="/evoscientist-seminar.html">{zh ? "查看现场报告" : "View seminar"}<span aria-hidden="true">↗</span></a></div>
      </article>
      <div className="talks-toolbar"><div className="talks-filters" role="group" aria-label={zh ? "按主题筛选" : "Filter by topic"}>
        {(["All", ...talkCategories] as const).map(value => <button type="button" key={value} className={category === value ? "is-selected" : ""} aria-pressed={category === value} onClick={() => {setCategory(value); setPage(1);}}>{value === "All" ? (zh ? "全部" : "All talks") : (zh ? topicLabels[value] : value)}</button>)}
      </div><label className="talks-search"><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.3" stroke="currentColor" strokeWidth="1.3" /><path d="m12 12 5 5" stroke="currentColor" strokeWidth="1.3" /></svg><input type="search" value={query} onChange={event => {setQuery(event.target.value); setPage(1);}} placeholder={zh ? "搜索演讲或讲者" : "Search talks or speakers"} aria-label={zh ? "搜索演讲或讲者" : "Search talks or speakers"} aria-controls="talks-results" /></label></div>
      <div className="talks-results-heading" ref={resultsHeading}><h2>{zh ? "往期录像" : "Recorded talks"}</h2><span role="status" aria-live="polite" aria-atomic="true">{zh ? `${filtered.length} 个视频` : `${filtered.length} recording${filtered.length === 1 ? "" : "s"}`}</span></div>
      <div id="talks-results">{visible.length ? visible.map(talk => <TalkRow key={talk.id} talk={talk} zh={zh} />) : <div className="talks-no-results"><h2>{zh ? "没有找到匹配的演讲" : "No matching talks"}</h2><p>{zh ? "试试其他关键词，或清除筛选条件。" : "Try another keyword or clear the filters to see all recordings."}</p><button type="button" onClick={reset}>{zh ? "清除搜索与筛选" : "Clear search and filters"}</button></div>}</div>
      {filtered.length > 0 && <div className="talks-pagination"><span>{zh ? `第 ${start + 1}–${start + visible.length} 个，共 ${filtered.length} 个` : `Showing ${start + 1}–${start + visible.length} of ${filtered.length} talks`}</span>{pages > 1 && <nav aria-label={zh ? "演讲分页" : "Talks pagination"}><button type="button" disabled={current === 1} onClick={() => changePage(current - 1)} aria-label={zh ? "上一页" : "Previous page"}>←</button>{Array.from({length: pages}, (_, i) => i + 1).map(number => <button type="button" key={number} className={current === number ? "is-current" : ""} aria-current={current === number ? "page" : undefined} aria-label={zh ? `第 ${number} 页` : `Page ${number}`} onClick={() => changePage(number)}>{number}</button>)}<button type="button" disabled={current === pages} onClick={() => changePage(current + 1)} aria-label={zh ? "下一页" : "Next page"}>{zh ? "下一页" : "Next"} →</button></nav>}</div>}
    </div>
  </section>;
}
