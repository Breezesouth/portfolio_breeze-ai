import projects from '../data/projects';

const Projects = () => (
  <section id="projects" className="space-y-8 py-16">
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-400">项目展示</p>
      <h2 className="text-3xl font-bold text-white">精选项目</h2>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.name}
          className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/50 transition hover:-translate-y-1 hover:border-violet-500"
        >
          <div className="h-48 bg-slate-800/70"></div>
          <div className="space-y-4 p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-200">
                {project.stack}
              </span>
            </div>
            <p className="text-slate-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-violet-300 transition hover:text-violet-100"
            >
              查看详情 →
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
