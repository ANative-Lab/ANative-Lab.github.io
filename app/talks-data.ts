// Source: ../EvoAgentX-Talk合集汇总/EvoAgentX-Talk_20个视频标题与完整简介.md
// Keep the source collection order; it is not a verified chronological order.
// Titles and summaries are editorial display copy, not official paper titles.
// GitHub profiles below were linked from the speakers' own homepages.
export type TalkCategory = "Memory" | "Skills" | "Self-evolution" | "Agentic RL";
export type Talk = {
  id: string;
  cover: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  topics: string[];
  categories: TalkCategory[];
  series: "EvoAgentX Talk" | "ANative Talk";
  format?: "paper-walkthrough";
  speaker?: string;
  affiliation?: string;
  affiliationZh?: string;
  github?: string;
  homepage?: string;
  scholar?: string;
  papers?: string[];
};

export const talkCategories: TalkCategory[] = ["Memory", "Skills", "Self-evolution", "Agentic RL"];
export const talks: Talk[] = [
  {
    id: "BV1VoTD6QEm5", cover: "δ-mem", series: "EvoAgentX Talk",
    title: "δ-mem: Efficient Online Memory for LLMs", titleZh: "δ-mem：面向大语言模型的高效在线记忆模块",
    speaker: "张迪", affiliation: "Fudan University", affiliationZh: "复旦大学",
    topics: ["Memory"], categories: ["Memory"],
    summary: "A delta-rule memory module that preserves interaction history without expanding the context window or retraining the backbone.",
    summaryZh: "利用 delta-rule 在线记忆机制保留交互历史，无需扩大上下文窗口或重新训练骨干模型。",
  },
  {
    id: "BV1y7Ko6UE3v", cover: "MemSkill", series: "EvoAgentX Talk",
    title: "MemSkill: Evolving Memory Skills for Agents", titleZh: "MemSkill 驱动智能体记忆自主进化",
    speaker: "张昊臻", affiliation: "Nanyang Technological University", affiliationZh: "南洋理工大学",
    github: "https://github.com/ViktorAxelsen", homepage: "https://viktoraxelsen.github.io/",
    papers: ["https://arxiv.org/abs/2602.02474"], topics: ["Memory", "Self-evolution"], categories: ["Memory", "Self-evolution"],
    summary: "How agents learn, compose, and refine memory skills from experience to adapt to long-running interactions.",
    summaryZh: "智能体从经验中学习、组合和优化记忆技能，以适应长期交互。",
  },
  {
    id: "BV1y57P6cEAV", cover: "COS-PLAY", series: "EvoAgentX Talk",
    title: "COS-PLAY: Co-evolving Decisions and Skills", titleZh: "COS-PLAY：面向长程任务的决策与技能库智能体协同演化",
    speaker: "吴曦旸", github: "https://github.com/wuxiyang1996", homepage: "https://wuxiyang1996.github.io/",
    papers: ["https://arxiv.org/abs/2604.20987"], topics: ["Skills", "Self-evolution"], categories: ["Skills", "Self-evolution"],
    summary: "A decision agent and a skill-bank agent evolve together, turning task trajectories into reusable skills for long-horizon tasks.",
    summaryZh: "决策智能体与技能库智能体协同演化，将任务轨迹转化为可复用技能，支持长程任务。",
  },
  {
    id: "BV1KyEK6GEct", cover: "SkillOS", series: "EvoAgentX Talk",
    title: "SkillOS: Learning Skill Curation", titleZh: "SkillOS：自演化智能体的技能管理",
    speaker: "欧阳思如", homepage: "https://siruo2.notion.site/", papers: ["https://arxiv.org/abs/2605.06614"],
    topics: ["Skills", "Self-evolution"], categories: ["Skills", "Self-evolution"],
    summary: "A skill-curation framework for self-evolving agents, with reinforcement learning to improve how skills are managed and used.",
    summaryZh: "面向自进化智能体的技能管理框架，通过强化学习优化技能的管理与使用。",
  },
  {
    id: "BV19d5t6zEJx", cover: "Language agents", series: "EvoAgentX Talk",
    title: "The Next Chapter of Language Agents", titleZh: "语言智能体的下半场",
    speaker: "王鸿儒", affiliation: "University of Edinburgh", affiliationZh: "爱丁堡大学", homepage: "https://hrwise-nlp.github.io/",
    topics: ["Agent theory"], categories: [],
    summary: "From executing tasks to making decisions: a view of language agents as sequential decision-makers that learn over a lifetime.",
    summaryZh: "从任务执行转向智能决策，探讨作为序列决策主体、能够终身学习的语言智能体。",
  },
  {
    id: "BV1V2ozBCEZP", cover: "State reflection", series: "EvoAgentX Talk",
    title: "Learning through State Reflection", titleZh: "通过状态反思进行学习的智能体框架",
    speaker: "周辉池", homepage: "https://huichizhou.github.io/", topics: ["Memory", "Skills", "Self-evolution"], categories: ["Memory", "Skills", "Self-evolution"],
    summary: "From case-based reasoning to Momentum, exploring how memory and skill updates enable agents to improve without fine-tuning model parameters.",
    summaryZh: "从案例推理到 Momentum 系列，介绍无需微调模型参数、通过记忆和技能更新实现持续改进的方法。",
  },
  {
    id: "BV1jWDvBHEqp", cover: "EvoScientist", series: "EvoAgentX Talk",
    title: "EvoScientist: From Chat Models to Research Agents", titleZh: "EvoScientist：从对话模型到科研智能体",
    speaker: "张曦", affiliation: "EvoScientist", affiliationZh: "EvoScientist",
    // The existing ANative team page also identifies this speaker and homepage.
    homepage: "https://x-izhang.github.io/", topics: ["Scientific agents", "Agent systems"], categories: [],
    summary: "Inside EvoScientist: building research agents with multi-agent coordination, reusable skills, persistent memory, and context management.",
    summaryZh: "介绍 EvoScientist 的架构与开发实践，包括多智能体协作、技能、持久化记忆和上下文管理。",
  },
  {
    id: "BV1HxyfB1E8A", cover: "Agentic RL", series: "EvoAgentX Talk",
    title: "Agentic Reinforcement Policy Optimization", titleZh: "智能体强化策略优化",
    speaker: "董博士", topics: ["Agentic RL"], categories: ["Agentic RL"],
    papers: ["https://arxiv.org/abs/2507.19849", "https://arxiv.org/abs/2510.14545"],
    summary: "Two approaches to policy optimization for agents in multi-turn tool use and complex reasoning tasks.",
    summaryZh: "介绍多轮工具调用及复杂推理任务中的两种智能体策略优化方法。",
  },
  {
    id: "BV1Wun1ziE2Z", cover: "Agentic RL", series: "EvoAgentX Talk",
    title: "How Agentic RL Transforms LLMs into Automated Agents", titleZh: "Agentic RL 如何将大语言模型转化为自主智能体",
    speaker: "张桂斌", affiliation: "National University of Singapore", affiliationZh: "新加坡国立大学", topics: ["Agentic RL"], categories: ["Agentic RL"],
    summary: "A survey of how reinforcement learning equips LLMs with planning, reasoning, tool use, memory, and self-improvement capabilities.",
    summaryZh: "系统介绍强化学习如何赋予大语言模型规划、推理、工具调用、记忆和自我改进能力。",
  },
  {
    id: "BV1kSbKz5E1o", cover: "Genetic programming", series: "EvoAgentX Talk",
    title: "Genetic Programming: From Evolutionary Algorithms to the LLM Era", titleZh: "遗传编程：从进化算法到 LLM 时代",
    speaker: "张恒哲", affiliation: "Victoria University of Wellington", affiliationZh: "惠灵顿维多利亚大学",
    scholar: "https://scholar.google.com/citations?hl=en&user=hYyeZMUAAAAJ", topics: ["Evolutionary computation"], categories: [],
    summary: "Tracing genetic programming from program synthesis to LLM-guided algorithm discovery, with comparisons of evolutionary and language-model approaches.",
    summaryZh: "回顾遗传编程的发展，比较进化算法与大语言模型的方法，并介绍自动算法发现中的融合应用。",
  },
  {
    id: "BV1NqNQ6qEUS", cover: "Self-evolving recommenders", series: "EvoAgentX Talk", format: "paper-walkthrough",
    title: "Self-Evolving Recommendation Systems: End-to-End Autonomous Optimization", titleZh: "自进化推荐系统：端到端自主优化",
    papers: ["https://arxiv.org/abs/2602.10226"], topics: ["Self-evolution", "Recommender systems"], categories: ["Self-evolution"],
    summary: "A paper walkthrough of a dual-loop agent system for automating model development, offline evaluation, and online experimentation in recommendation.",
    summaryZh: "论文解读：通过双环智能体系统，自动完成推荐模型开发、离线评估与在线实验。",
  },
  {
    id: "BV1xvK264E6Y", cover: "Agent harnesses", series: "EvoAgentX Talk",
    title: "Taming Nondeterminism in Agent Systems", titleZh: "驯服智能体系统中的非确定性：从 Skill 编译器到 Harness 原生生态系统",
    topics: ["Skills", "Agent systems"], categories: ["Skills"],
    summary: "From skill compilation to agent harnesses, exploring engineering approaches to more reliable, controllable, and reproducible agent execution.",
    summaryZh: "从技能编译到 Agent Harness，介绍提升智能体执行可靠性、可控性和可复现性的工程方法。",
  },
  {
    id: "BV14PGA6nE12", cover: "MemEye", series: "EvoAgentX Talk",
    title: "MemEye: Evaluating Visual Memory in Multimodal Agents", titleZh: "MemEye：多模态智能体视觉记忆评测框架",
    papers: ["https://arxiv.org/abs/2605.15128"], topics: ["Memory", "Evaluation"], categories: ["Memory"],
    summary: "A framework for diagnosing long-term visual memory in multimodal agents across perception granularity and reasoning complexity.",
    summaryZh: "从视觉感知粒度和推理复杂度两个维度，评估多模态智能体的长期视觉记忆。",
  },
  {
    id: "BV11DuT69EWJ", cover: "Continual Harness", series: "EvoAgentX Talk",
    title: "Continual Harness: Online Adaptation for Self-Improving Agents", titleZh: "Continual Harness：自进化智能体的在线适应框架",
    topics: ["Self-evolution", "Agent systems"], categories: ["Self-evolution"],
    summary: "Exploring online adaptation and feedback loops that help foundation agents learn and improve throughout deployment.",
    summaryZh: "探讨通过在线适应和反馈闭环，让基础智能体在运行过程中持续学习与改进。",
  },
  {
    id: "BV1TigE6oEJe", cover: "Agentic recommenders", series: "EvoAgentX Talk",
    title: "Self-Evolving Agentic Recommenders: Progress and Safety", titleZh: "自进化智能体推荐系统：研究进展与安全性",
    speaker: "王宗威", topics: ["Self-evolution", "Recommender systems", "Safety"], categories: ["Self-evolution"],
    summary: "Research progress in self-evolving agentic recommendation, with a focus on the safety and reliability of continual learning and optimization.",
    summaryZh: "梳理自进化智能体推荐系统的研究进展，以及持续学习和优化过程中的安全性、可靠性问题。",
  },
  {
    id: "BV15ntt66EPE", cover: "SkillNet", series: "EvoAgentX Talk",
    title: "SkillNet: Composable Skill Networks for Agents", titleZh: "SkillNet：构建可编排的智能体技能网络",
    topics: ["Skills", "Agent systems"], categories: ["Skills"],
    summary: "Organizing agent skills into a structured network for retrieval, routing, and composition, with SkillNet-Fabric and SkillNet-Gym.",
    summaryZh: "将智能体技能组织成结构化网络，支持检索、路由和组合，并介绍 SkillNet-Fabric 与 SkillNet-Gym。",
  },
  {
    id: "BV1zTbF6zErw", cover: "EvoArena / EvoMem", series: "EvoAgentX Talk",
    title: "EvoArena and EvoMem: Agents in Evolving Environments", titleZh: "EvoArena 与 EvoMem：动态演化环境中的智能体与记忆",
    topics: ["Memory", "Evaluation", "Self-evolution"], categories: ["Memory", "Self-evolution"],
    summary: "Evaluating agents across evolving environments and tracking memory changes through a patch-based approach inspired by version control.",
    summaryZh: "评估智能体对持续变化环境的适应能力，并通过类似版本控制的补丁式记忆记录知识演化。",
  },
  {
    id: "BV1U6YM6XEcr", cover: "EnvHarness", series: "EvoAgentX Talk",
    title: "EnvHarness: Evolving Environments for Agent Training", titleZh: "EnvHarness：让环境随着智能体的训练一起进化",
    speaker: "Chengsong Huang", affiliation: "Washington University in St. Louis", affiliationZh: "圣路易斯华盛顿大学",
    topics: ["Agent training", "Self-evolution"], categories: ["Self-evolution"],
    summary: "A programmable wrapper that adapts environments around agent weaknesses through changes to initial states, interaction contracts, and task chains.",
    summaryZh: "通过可编程包装层调整初始状态、交互契约和任务链，让环境围绕智能体的能力短板持续演化。",
  },
  {
    id: "BV1Snh96jE1m", cover: "SkillWiki", series: "ANative Talk",
    title: "SkillWiki: From Skill Collections to Governable Skill Ecosystems", titleZh: "SkillWiki：从技能集合到可治理的智能体技能生态",
    speaker: "黄鼎丞", affiliation: "Harbin Institute of Technology", affiliationZh: "哈尔滨工业大学",
    topics: ["Skills", "Agent systems"], categories: ["Skills"],
    summary: "Turning scattered agent skills into reusable, verifiable, and versioned assets through connected knowledge, execution feedback, and governance.",
    summaryZh: "连接技能的知识来源、执行反馈与治理机制，使零散技能成为可复用、可验证、可版本化的资产。",
  },
  {
    id: "BV1CnJX6ME8M", cover: "GAMER", series: "ANative Talk",
    title: "GAMER: Experience Reuse for Agentic Inference-Time Scaling", titleZh: "GAMER：从无状态试错到经验复用的智能体推理时扩展",
    speaker: "郑旭", affiliation: "Florida International University", affiliationZh: "佛罗里达国际大学",
    papers: ["https://arxiv.org/abs/2607.27415"], topics: ["Memory", "Inference-time scaling"], categories: ["Memory"],
    summary: "An action-centric graph memory that reuses successes and failures to guide agent decisions during inference-time scaling.",
    summaryZh: "通过以动作为中心的图记忆复用成功和失败经验，为智能体推理时扩展提供决策指导。",
  },
];

export const collectionUrl = "https://space.bilibili.com/3493105294641286/lists/8507087?type=season";
export function recordingUrl(talk: Pick<Talk, "id">): string {
  return `https://www.bilibili.com/video/${talk.id}/`;
}
export function filterTalks(items: Talk[], query: string, category: TalkCategory | "All" = "All"): Talk[] {
  const terms = query.normalize("NFKC").toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  return items.filter(talk => {
    if (category !== "All" && !talk.categories.includes(category)) return false;
    const text = [talk.title, talk.titleZh, talk.speaker, talk.affiliation, talk.affiliationZh,
      talk.summary, talk.summaryZh, ...talk.topics, talk.series,
      talk.format === "paper-walkthrough" ? "paper walkthrough 论文解读" : ""].join(" ").normalize("NFKC").toLocaleLowerCase();
    return terms.every(term => text.includes(term));
  });
}
