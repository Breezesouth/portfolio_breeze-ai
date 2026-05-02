const Hero = () => (
  <section id="hero" className="flex flex-col gap-10 rounded-[2rem] bg-slate-950/80 px-6 py-16 shadow-glow backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between lg:px-10">
    <div className="space-y-6 lg:max-w-2xl">
      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">欢迎来到我的作品集</p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        我是前端开发者，专注于 React + TypeScript
      </h1>
      <p className="max-w-xl text-slate-300">
        构建简洁、高性能的网页体验，采用深色主题与渐变强调色，确保移动端适配与流畅交互。
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
        >
          查看项目
        </a>
        <a
          href="#contact"
          className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-300 transition hover:border-violet-500 hover:text-white"
        >
          联系我
        </a>
      </div>
    </div>

    <div className="relative flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-slate-800 via-slate-900 to-[#0a0a0a] p-6 shadow-glow lg:w-96">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-violet-500/20 via-transparent to-fuchsia-500/10" />
      <div className="relative flex flex-col items-center gap-6 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 text-center shadow-2xl">
        <div className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-4xl font-bold text-white shadow-xl">
          BS
        </div>
        <div className="space-y-3">
          <p className="text-xl font-semibold text-white">你好，我是 Breeze</p>
          <p className="text-sm leading-6 text-slate-300">
            专注于前端开发，打造现代化作品集，强调深色主题与渐变交互体验。
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
