export type Project = {
  number: string;
  title: string;
  label: string;
  image: string;
  accent: string;
  summary: string;
  outcome: string[];
  pages: number[];
  folder?: string;
};

const pageRange = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

export const projects: Project[] = [
  {
    number: '01', title: '作者标记链路设计', label: 'B端 · PC端 · UX设计', image: '/portfolio/page-04.jpg', accent: '#3979f6',
    summary: '将分散在线下表格与群聊中的作者标记流程搬到线上，围绕“看得清、用得爽、不出错”搭建多角色协作工作台。',
    outcome: ['节省人力成本 7pd/月', '业务做功时效性提升'], pages: pageRange(5, 21),
  },
  {
    number: '02', title: '任务平台改版设计', label: 'B端 · PC端 · UX设计', image: '/portfolio/page-22.jpg', accent: '#7f72ec',
    summary: '结合业务访谈、用户调研与竞品分析，重构任务配置和执行链路，并引入 AI 辅助封面推荐与内容填写。',
    outcome: ['封面使用率 +31.2pp', '任务 badcase 率 0%', '任务拦截率 98%'], pages: pageRange(24, 43),
  },
  {
    number: '03', title: 'PC发布链路改版设计', label: '数据分析 · PC端 · 交互设计', image: '/portfolio/page-44.jpg', accent: '#f69b69',
    summary: '通过数据、用户反馈和竞品研究定位发布阻塞点，减少操作步骤，提升信息填写和发布效率。',
    outcome: ['供稿量 +32%', '供稿作者数 +6.9%', 'DAU +8%'], pages: pageRange(45, 65),
  },
  {
    number: '04', title: 'CNY运营活动设计', label: 'C端 · 运营活动 · 交互设计', image: '/portfolio/page-66.jpg', accent: '#f15b52',
    summary: '围绕春节运营活动的内容线体验，建立统一框架、优化内容分发形式，并通过激励机制提高用户参与度。',
    outcome: ['活动总 V 完成度 743%', '爆款直播完成度 150%', '爆款视频完成度 183%'], pages: pageRange(67, 88),
  },
  {
    number: '05', title: 'AI生成界面实践', label: 'AI · B端 · 设计提效', image: '/ai-practice/cover-ai.png', accent: '#6384ec',
    summary: '基于公司标准化 B 端组件与 Figma AI，将设计组件库整理、AI 学习训练与界面生成方法沉淀为可复用 skill。',
    outcome: ['基础页面生成提效', '沉淀界面生成 skill'], pages: [1], folder: 'ai-practice',
  },
];
