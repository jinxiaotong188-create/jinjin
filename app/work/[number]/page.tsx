import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '../../projects';

type PageProps = { params: Promise<{ number: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ number: project.number }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { number } = await params;
  const project = projects.find((item) => item.number === number);
  if (!project) return {};
  return {
    title: `${project.title} · 金晓彤作品集`,
    description: project.summary,
    robots: { index: false, follow: false },
    openGraph: { title: project.title, description: project.summary, images: [] },
    twitter: { title: project.title, description: project.summary, images: [] },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { number } = await params;
  const index = projects.findIndex((item) => item.number === number);
  if (index < 0) notFound();

  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="detail-page" style={{ '--accent': project.accent } as React.CSSProperties}>
      <nav className="detail-nav" aria-label="项目导航">
        <a className="detail-back" href="/#work">← 返回目录</a>
        <div className="detail-switcher">
          {projects.map((item) => (
            <a key={item.number} href={`/work/${item.number}`} aria-current={item.number === project.number ? 'page' : undefined}>
              <span>{item.number}</span>{item.title}
            </a>
          ))}
        </div>
        <a className="detail-contact" href="mailto:1284528029@qq.com">联系我</a>
      </nav>

      <header className="detail-hero">
        <div className="detail-title">
          <span>PROJECT {project.number} / {String(projects.length).padStart(2, '0')}</span>
          <h1>{project.title}</h1>
          <p>{project.label}</p>
        </div>
        <figure><img src={project.image} alt={`${project.title}项目封面`} /></figure>
      </header>

      <section className="detail-summary" aria-label="项目简介">
        <p>{project.summary}</p>
        <div>{project.outcome.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="detail-gallery" aria-label={`${project.title}完整案例`}>
        {project.pages.map((page, pageIndex) => (
          <img key={page} src={`/${project.folder ?? 'portfolio'}/page-${String(page).padStart(2, '0')}.jpg`} alt={`${project.title}案例第 ${pageIndex + 1} 页`} loading={pageIndex < 2 ? 'eager' : 'lazy'} />
        ))}
      </section>

      <nav className="detail-pager" aria-label="前后项目">
        <a href={`/work/${previous.number}`}><small>← 上一个项目</small><strong>{previous.title}</strong></a>
        <a href={`/work/${next.number}`}><small>下一个项目 →</small><strong>{next.title}</strong></a>
      </nav>
    </main>
  );
}
