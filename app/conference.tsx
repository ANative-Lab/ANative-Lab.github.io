"use client";

import { useEffect, useState } from "react";
import "./conference.css";

const people = [
  {
    name: "Zaiqiao Meng", nameZh: "蒙在桥", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Professor, Huazhong University of Science and Technology",
    titleZh: "华中科技大学教授",
    bio: "Researches LLM agents, multi-agent collaboration, self-evolution, and systems for autonomous scientific discovery.",
    bioZh: "研究大语言模型智能体、多智能体协同与自进化，以及面向自主科学发现的智能系统。",
    photo: "/team/zaiqiao.webp", url: "https://mengzaiqiao.howone.app/",
  },
  {
    name: "Iadh Ounis", nameZh: "Iadh Ounis", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Professor of Information Retrieval · Head of School of Computing Science, University of Glasgow",
    titleZh: "格拉斯哥大学信息检索教授、计算机科学学院院长",
    bio: "Works on information retrieval, recommender systems, and large-scale search, including the Terrier research platform.",
    bioZh: "研究信息检索、推荐系统和大规模搜索技术，领导 Terrier 研究团队。",
    photo: "/conference/iadh-ounis.jpg", url: "https://www.gla.ac.uk/schools/computing/staff/iadhounis/",
  },
  {
    name: "Ke Yuan", nameZh: "袁可", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Professor, University of Glasgow",
    titleZh: "格拉斯哥大学教授",
    bio: "Applies machine learning to computational pathology, cancer evolution, and biomedical research.",
    bioZh: "利用机器学习、病理图像和基因组数据研究癌症演化及生物医学问题。",
    photo: "/conference/ke-yuan.jpg", url: "https://www.gla.ac.uk/schools/cancersciences/staff/keyuan/",
  },
  {
    name: "Zhaochun Ren", nameZh: "任昭春", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Associate Professor, Leiden University",
    titleZh: "莱顿大学副教授",
    bio: "Studies generative and conversational information retrieval, language models, and agents for complex information needs.",
    bioZh: "研究生成式与对话式信息检索、大语言模型，以及处理复杂信息需求的智能体。",
    photo: "/conference/zhaochun-ren.jpeg", url: "https://renzhaochun.github.io/",
  },
  {
    name: "Xi Zhang", nameZh: "张曦", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "PhD Researcher, University of Glasgow",
    titleZh: "格拉斯哥大学博士研究生",
    bio: "Builds self-evolving agents and automated research systems that learn alongside human scientists.",
    bioZh: "研究自进化智能体与自动科研系统，构建能够与研究者共同进化的 AI 科学家。",
    photo: "/team/xi.webp", url: "https://x-izhang.github.io/",
  },
  {
    name: "Zhaohan Meng", nameZh: "孟昭含", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "PhD Researcher, University of Glasgow · Visiting Research Scholar, Harvard Medical School",
    titleZh: "格拉斯哥大学博士研究生 · 哈佛医学院访问研究学者",
    bio: "Studies scientific agents, biomedical AI, and knowledge-driven approaches to drug discovery.",
    bioZh: "研究面向科学发现的智能体、生物医学 AI，以及知识驱动的药物发现。",
    photo: "/conference/zhaohan-meng.jpg", url: "https://zhaohanm.github.io/",
  },
  {
    name: "Qiang Zhang", nameZh: "张强", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Assistant Professor, Zhejiang University",
    titleZh: "浙江大学国际联合学院长聘教轨助理教授",
    bio: "Studies large models, agents, knowledge graphs, and AI for molecular and protein research.",
    bioZh: "研究大模型、智能体、知识图谱，以及面向分子与蛋白质研究的人工智能。",
    photo: "/conference/qiang-zhang.jpg", url: "https://person.zju.edu.cn/zhangqiang",
  },
  {
    name: "Fajie Yuan", nameZh: "原发杰", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Assistant Professor, Westlake University",
    titleZh: "西湖大学助理教授",
    bio: "Develops protein language models and AI methods for life science.",
    bioZh: "研究蛋白质语言模型与面向生命科学的人工智能方法。",
    photo: "/conference/fajie-yuan.jpg", url: "https://en.westlake.edu.cn/faculty/fajie-yuan.html",
  },
  {
    name: "Peijie Zhou", nameZh: "周沛劼", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Assistant Professor, Peking University",
    titleZh: "北京大学助理教授",
    bio: "Studies computational systems biology and single-cell models of complex biological systems.",
    bioZh: "研究计算系统生物学与复杂生物系统的单细胞建模。",
    photo: "/conference/peijie-zhou.jpg", url: "https://www.aais.pku.edu.cn/info/1653/3721.htm",
  },
  {
    name: "Zhikang Wang", nameZh: "王智康", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Assistant Professor, Fudan University",
    titleZh: "复旦大学助理教授",
    bio: "Works on spatial omics and computational pathology.",
    bioZh: "研究空间组学与计算病理学。",
    photo: "/conference/zhikang-wang.jpg", url: "https://faculty.fudan.edu.cn/WangZhikang/zh_CN/index.htm#skxx",
  },
  {
    name: "Xiao Wang", nameZh: "王晓", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Lecturer, University of International Business and Economics",
    titleZh: "对外经济贸易大学讲师",
    bio: "Works on information retrieval, retrieval-augmented generation, and natural language processing.",
    bioZh: "研究智能信息检索、检索增强生成与自然语言处理。",
    photo: "/conference/xiao-wang.jpg", url: "https://saids.uibe.edu.cn/szdw/zzjs/rgznx/bbcda9b87835473c834d39bd0bb39849.htm",
  },
  {
    name: "Siwei Liu", nameZh: "刘思危", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Assistant Professor, University of Aberdeen",
    titleZh: "阿伯丁大学助理教授",
    bio: "Studies LLM multi-agent collaboration and biomedical graph learning.",
    bioZh: "研究大语言模型多智能体协作与生物医学图学习。",
    photo: "/team/siwei.webp", url: "https://tedsiweiliu.github.io/",
  },
  {
    name: "Haibin Ling", nameZh: "凌海滨", role: "Invited Speaker", roleZh: "特邀报告嘉宾",
    title: "Chair Professor · IEEE Fellow, Westlake University",
    titleZh: "西湖大学讲席教授、IEEE Fellow",
    bio: "Studies computer vision, medical image analysis, and AI for Science.",
    bioZh: "研究计算机视觉、医学影像分析与科学人工智能。",
    photo: "/conference/haibin-ling.jpg", url: "https://www.westlake.edu.cn/faculty/haibin-ling.html#1",
  },
] as const;

const familyName = (name: string) => name.split(" ").at(-1) ?? name;
const leadershipRank = (title: string) =>
  title.includes("Head of School") || title.includes("Dean") ? 0 : 1;
const academicRank = (title: string) => {
  if (title.startsWith("Chair Professor")) return 0;
  if (title.startsWith("Professor")) return 1;
  if (title.startsWith("Reader") || title.startsWith("Associate Professor")) return 2;
  if (title.startsWith("Assistant Professor")) return 3;
  if (title.startsWith("Lecturer")) return 4;
  if (title.startsWith("PhD Researcher")) return 5;
  return 6;
};
const orderedPeople = [...people].sort((a, b) =>
  leadershipRank(a.title) - leadershipRank(b.title) ||
  academicRank(a.title) - academicRank(b.title) ||
  familyName(a.name).localeCompare(familyName(b.name), "en") ||
  a.name.localeCompare(b.name, "en")
);

const themes = [
  { title: "Scientific knowledge and retrieval", titleZh: "科学知识与检索" },
  { title: "Collaboration and self-evolution", titleZh: "协同与自进化" },
  { title: "AI-native scientific discovery", titleZh: "AI 原生科学发现" },
  { title: "Experiments and evidence", titleZh: "实验与证据验证" },
] as const;

export default function Conference() {
  const [zh, setZh] = useState(false);

  useEffect(() => {
    document.documentElement.lang = zh ? "zh-CN" : "en";
  }, [zh]);

  const t = (en: string, cn: string) => zh ? cn : en;

  return <div className="conference-site">
    <header className="conference-nav">
      <a className="conference-brand" href="/index.html" aria-label="ANative Lab home">
        <img src="/brand/anative-mark.png" width="44" height="44" alt="" />
        <span>ANative <b>Lab</b></span>
      </a>
      <nav className="conference-nav-links" aria-label={t("Workshop navigation", "研讨会导航")}>
        <a href="#overview">{t("Overview", "简介")}</a>
        <a href="#people">{t("Organizer & Participants", "组织方与参会人员")}</a>
        <a href="#programme">{t("Programme", "议程")}</a>
        <a href="#attend">{t("Attend", "参会")}</a>
      </nav>
      <div className="conference-nav-actions">
        <a href="/index.html" aria-label={t("Return to ANative Lab", "返回 ANative Lab 首页")} title={t("Return to ANative Lab", "返回 ANative Lab 首页")}>{t("Return to ANative Lab", "返回 ANative Lab 首页")}</a>
        <button type="button" onClick={() => setZh(value => !value)} aria-label={t("Switch to Chinese", "切换至英文")}>{zh ? "EN" : "中文"}</button>
      </div>
    </header>

    <main>
      <section className="conference-hero" aria-labelledby="conference-title">
        <div className="conference-hero-content">
          <p className="conference-edition">ANative Lab · 2026</p>
          <h1 id="conference-title">{zh ? <>ANative <span>学术研讨会</span></> : "ANative Workshop"}</h1>
          <p className="conference-hero-theme">{t("Agent-Native Research: Multi-Agent Collaboration for Scientific Discovery", "智能体原生科研：多智能体协同与科学发现")}</p>
          <a className="conference-hero-link" href="#people">{t("Meet the participants", "了解参会人员")} <span aria-hidden="true">↘</span></a>
        </div>
      </section>

      <section className="conference-facts" aria-label={t("Workshop information", "研讨会信息")}>
        <div><dt>{t("Date", "日期")}</dt><dd>{t("21 December 2026", "2026年12月21日")}</dd></div>
        <div><dt>{t("Venue", "地点")}</dt><dd>{t("Huazhong University of Science and Technology, Wuhan", "华中科技大学，武汉")}</dd></div>
        <div><dt>{t("Format", "形式")}</dt><dd>{t("Academic workshop", "学术研讨会")}</dd></div>
        <div><dt>{t("Registration", "报名")}</dt><dd>{t("Not open yet", "暂未开放")}</dd></div>
      </section>

      <section className="conference-overview" id="overview" aria-labelledby="conference-overview-title">
        <div className="conference-section-head">
          <h2 id="conference-overview-title">{t("Research focus", "会议主题")}</h2>
        </div>
        <div className="conference-overview-body">
          <p>{t("How can agents acquire scientific knowledge, reason together, and carry out research that produces evidence? This workshop brings those questions into one conversation, from information systems to real scientific practice.", "智能体如何获取科学知识、协同推理，并完成能产生证据的科研任务？本次研讨会把信息系统与真实科研实践中的问题放到同一场对话中。")}</p>
          <ul className="conference-theme-list">{themes.map(theme => <li key={theme.title}>{zh ? theme.titleZh : theme.title}</li>)}</ul>
        </div>
      </section>

      <section className="conference-people" id="people" aria-labelledby="conference-people-title">
        <div className="conference-people-intro">
          <h2 id="conference-people-title">{t("Organizer & Participants", "组织方与参会人员")}</h2>
          <p>{t("The programme and presentation details will be announced when confirmed.", "具体议程与报告信息确认后公布。")}</p>
        </div>
        <div className="conference-organizer">
          <img src="/brand/anative-mark.png" width="58" height="58" alt="" />
          <div className="conference-organizer-name">
            <span>{t("Organized by", "主办方")}</span>
            <strong>ANative Lab</strong>
          </div>
          <a href="/index.html">{t("Visit ANative Lab", "访问 ANative Lab")}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="conference-people-list">
          {orderedPeople.map(person => <article className="conference-person" key={person.name}>
            <img className="conference-person-photo" src={person.photo} width="112" height="112" alt={t(`Portrait of ${person.name}`, `${person.nameZh}的照片`)} loading="lazy" />
            <div className="conference-person-info">
              <div className="conference-person-heading">
                <h3><a href={person.url} target="_blank" rel="noopener noreferrer">{zh ? person.nameZh : person.name}<span aria-hidden="true">↗</span></a></h3>
                <span className="conference-person-role">{zh ? person.roleZh : person.role}</span>
              </div>
              {person.name !== person.nameZh && <p className="conference-person-secondary">{zh ? person.name : person.nameZh}</p>}
              <p className="conference-person-title">{zh ? person.titleZh : person.title}</p>
              <p className="conference-person-bio">{zh ? person.bioZh : person.bio}</p>
            </div>
          </article>)}
        </div>
      </section>

      <section className="conference-programme" id="programme" aria-labelledby="conference-programme-title">
        <div>
          <p className="conference-kicker">{t("Programme", "会议议程")}</p>
          <h2 id="conference-programme-title">{t("A focused conversation, with the details to follow.", "聚焦核心问题，详细议程随后公布。")}</h2>
        </div>
        <div className="conference-programme-note">
          <span>{t("Coming soon", "即将公布")}</span>
          <p>{t("The final schedule, talks, and session information will be added here once confirmed.", "正式时间表、报告题目和分会信息确认后，将在这里更新。")}</p>
        </div>
      </section>

      <section className="conference-attend" id="attend" aria-labelledby="conference-attend-title">
        <div className="conference-attend-title"><p>{t("Attend", "参会")}</p><h2 id="conference-attend-title">{t("Plan to join the conversation.", "期待与你现场交流。")}</h2><p>{t("We will share the final programme and participation details here as they are confirmed.", "会议议程与参会方式确认后将在此更新。")}</p></div>
        <dl className="conference-attend-facts">
          <div><dt>{t("Date", "日期")}</dt><dd>{t("21 December 2026", "2026年12月21日")}</dd></div>
          <div><dt>{t("Venue", "地点")}</dt><dd>{t("Huazhong University of Science and Technology, Wuhan", "华中科技大学，武汉")}</dd></div>
          <div><dt>{t("Contact", "联系")}</dt><dd>{t("To be announced", "待公布")}</dd></div>
        </dl>
      </section>
    </main>

    <footer className="conference-footer">
      <span>ANative Lab</span>
      <p>{t("Agent-Native Research: Multi-Agent Collaboration for Scientific Discovery", "智能体原生科研：多智能体协同与科学发现")}</p>
      <a href="/index.html">{t("Return to ANative Lab", "返回 ANative Lab 首页")}</a>
    </footer>
  </div>;
}
