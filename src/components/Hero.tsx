const Hero = () => (
  <section id="hero" className="flex flex-col gap-10 py-16 lg:flex-row lg:items-center lg:justify-between">
    <div className="max-w-2xl space-y-6">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-400">欢迎来到我的作品集</p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        我是前端开发者，专注于 React + TypeScript
      </h1>
      <p className="max-w-xl text-slate-300">
        构建简洁、高性能的网页体验，采用深色主题和 Tailwind CSS，支持移动端与流畅交互。
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
        >
          查看项目
        </a>
        <a
          href="#contact"
          className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-300 transition hover:border-white hover:text-white"
        >
          联系我
        </a>
      </div>
    </div>
    <div className="rounded-3xl bg-slate-900/70 p-8 shadow-glow">
      <div className="h-80 w-full rounded-3xl bg-gradient-to-br from-violet-600/30 via-transparent to-slate-900"></div>
    </div>
  </section>
);

export default Hero;
