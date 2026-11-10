"use client";

import "./workshops.css";

const topics = [
  { number: "01", en: "Scientific knowledge and retrieval", zh: "科学知识与检索", detailEn: "Finding, organizing, and using research knowledge across complex tasks.", detailZh: "在复杂科研任务中获取、组织和使用知识。" },
  { number: "02", en: "Collaboration and self-evolution", zh: "协同与自进化", detailEn: "How multiple agents coordinate, reflect, and learn from research experience.", detailZh: "探索多智能体如何协作、反思并积累研究经验。" },
  { number: "03", en: "AI-native scientific discovery", zh: "AI 原生科学发现", detailEn: "Connecting scientific questions with planning and research workflows.", detailZh: "连接科学问题、任务规划与科研工作流。" },
  { number: "04", en: "Experiments and evidence", zh: "实验与证据验证", detailEn: "Bringing model outputs closer to reproducible experiments and evidence.", detailZh: "让模型输出走向可复现的实验与证据。" },
] as const;

const questions = [
  { number: "01", en: "How can retrieval, memory, and knowledge graphs become reliable research capabilities?", zh: "如何把检索、记忆与知识图谱转化为可靠的科研能力？" },
  { number: "02", en: "How can multiple agents plan, reflect, and improve through research experience?", zh: "多智能体如何规划、反思并从研究经验中持续进化？" },
  { number: "03", en: "How can model outputs connect to real experiments and reproducible scientific evidence?", zh: "如何将模型输出连接到真实实验与可复现的科学证据？" },
] as const;

const formats = [
  { en: "Research talks", zh: "研究报告" },
  { en: "Poster exchange", zh: "海报交流" },
  { en: "Roundtable discussion", zh: "专题圆桌" },
] as const;

export default function WorkshopsPreview({zh}: {zh: boolean}) {
  return <section className="workshops-page" aria-labelledby="workshops-title">
    <div className="workshops-inner">
      <header className="workshops-intro">
        <p className="workshops-breadcrumb">{zh ? "活动" : "Activities"}<span aria-hidden="true">/</span>Workshops</p>
        <h1 id="workshops-title">Workshops</h1>
        <p>{zh ? "围绕智能体原生科研开展学术交流。" : "Academic conversations on agent-native research."}</p>
      </header>

      <article className="workshop-event" aria-labelledby="workshop-event-title">
        <div className="workshop-event-main">
          <div className="workshop-event-label"><span>01 / {zh ? "筹备中" : "IN PLANNING"}</span><span>ANATIVE LAB · 2026</span></div>
          <h2 id="workshop-event-title">{zh ? "ANative 2026 学术研讨会" : "ANative 2026 Workshop"}</h2>
          <p className="workshop-theme">{zh ? "智能体原生科研：多智能体协同与科学发现" : "Agent-Native Research: Multi-Agent Collaboration for Scientific Discovery"}</p>
          <p className="workshop-description">{zh ? "围绕智能体如何获取知识、协同推理并执行研究任务，探讨从模型输出到可验证科学发现的路径。" : "Exploring how agents acquire knowledge, reason together, and carry out research tasks, from model outputs to verifiable scientific discovery."}</p>
          <a className="workshop-conference-link" href="/conference.html">{zh ? "查看研讨会详情" : "Explore the workshop"}<span aria-hidden="true">↗</span></a>
        </div>
        <dl className="workshop-facts">
          <div><dt>{zh ? "日期" : "DATE"}</dt><dd>{zh ? "2026年12月21日" : "21 December 2026"}</dd></div>
          <div><dt>{zh ? "会场" : "VENUE"}</dt><dd>{zh ? "华中科技大学" : "Huazhong University of Science and Technology"}</dd></div>
          <div><dt>{zh ? "嘉宾" : "SPEAKERS"}</dt><dd>{zh ? "待定" : "To be confirmed"}</dd></div>
          <div><dt>{zh ? "报名" : "REGISTRATION"}</dt><dd>{zh ? "待开放" : "Not open yet"}</dd></div>
        </dl>
      </article>

      <section className="workshop-topics" aria-labelledby="workshop-topics-title">
        <div className="workshop-topics-heading"><div><p>02 / {zh ? "拟讨论方向" : "PROPOSED THEMES"}</p><h2 id="workshop-topics-title">{zh ? "关注议题" : "Research themes"}</h2></div><span>{zh ? "议程待定" : "Programme to follow"}</span></div>
        <div className="workshop-topics-grid">{topics.map(topic => <div key={topic.number}><span>{topic.number}</span><h3>{zh ? topic.zh : topic.en}</h3><p>{zh ? topic.detailZh : topic.detailEn}</p></div>)}</div>
      </section>

      <section className="workshop-questions" aria-labelledby="workshop-questions-title">
        <div className="workshop-questions-heading"><p>03 / {zh ? "讨论问题" : "DISCUSSION QUESTIONS"}</p><h2 id="workshop-questions-title">{zh ? "我们期待讨论" : "Questions for the room"}</h2><span>{zh ? "拟议方向" : "Proposed topics"}</span></div>
        <ol>{questions.map(question => <li key={question.number}><span>{question.number}</span><p>{zh ? question.zh : question.en}</p></li>)}</ol>
      </section>

      <section className="workshop-formats" aria-label={zh ? "拟议交流形式" : "Planned formats"}>
        <div><span>04 / {zh ? "拟议形式" : "PLANNED FORMATS"}</span><p>{zh ? "计划结合报告、海报和圆桌讨论；具体议程待定。" : "A mix of talks, posters, and discussion is planned. The programme is not yet final."}</p></div>
        <ul>{formats.map((format, index) => <li key={format.en}><span>0{index + 1}</span>{zh ? format.zh : format.en}</li>)}</ul>
      </section>
    </div>
  </section>;
}
