import { projects, type Project } from './projects';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article id={`project-card-${project.number}`} className="project-card" style={{ '--accent': project.accent } as React.CSSProperties}>
      <a className="project-button" href={`/work/${project.number}`} aria-label={`查看${project.title}完整案例`}>
        <div className="project-visual"><img src={project.image} alt={`${project.title}项目封面`} /></div>
        <div className="project-meta"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.label}</p></div><span className="project-arrow">↗</span></div>
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell">
        <div className="nav-links"><a href="#about">关于我</a></div>
        <a className="brand" href="#top" aria-label="返回首页">Jinxiaotong<br />Design Portfolio</a>
        <div className="nav-actions"><a className="contact-link" href="#work">项目</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker"><p className="eyebrow">INTERACTION DESIGN</p><span>SELECTED WORKS<br />2023—2026</span></div>
        <div className="hero-title-wrap"><h1>个人作品集</h1><span>JXT<br />PORTFOLIO</span></div>
        <div className="hero-bottom">
          <p>你好，我是金晓彤。专注于 B 端平台、创作工具与运营活动体验，用设计连接用户与业务。</p>
          <div className="hero-chips"><span><i className="dot blue" />UX设计</span><span><i className="dot violet" />用户研究</span><span><i className="dot green" />数据分析</span></div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2 className="about-heading">个人简介</h2>
        <div className="about-layout">
          <div className="about-content">
            <div className="about-copy">
              <p>我是金晓彤，今年27岁，拥有工业设计与设计学背景。目前在快手运营设计中心工作，聚焦运营后台、创作工具与运营活动体验。擅长从复杂业务中梳理关键问题，通过用户研究、数据分析、交互与 UI 设计推动方案落地。</p>
            </div>
          </div>
          <figure className="profile-frame"><img className="profile-photo" src="/profile-square.jpg" alt="金晓彤的个人照片" /></figure>
        </div>
        <dl className="experience timeline">
          <div><dt>2016—2020</dt><dd>南京林业大学<br />工业设计 · 本科</dd></div>
          <div><dt>2020—2023</dt><dd>北京科技大学<br />设计学 · 硕士</dd></div>
          <div><dt>2021.08—2022.01</dt><dd>新浪新闻<br />交互设计实习生</dd></div>
          <div><dt>2022.05—2023.06</dt><dd>快手社交、商业生态<br />交互设计实习生</dd></div>
          <div><dt>2023.07—至今</dt><dd>快手运营设计中心<br />交互设计师</dd></div>
        </dl>
      </section>

      <section className="work-section" id="work">
        <header className="section-heading"><div><p>SELECTED WORK · 2023—2026</p><span>点击项目，查看完整案例</span></div><h2>解决真实问题的<br /><em>设计实践</em></h2></header>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
      </section>

      <footer>
        <div><p>有合适的项目或机会？</p><div className="footer-title">欢迎<em>来聊</em></div></div>
        <span>© 2026 金晓彤</span>
      </footer>
    </main>
  );
}
