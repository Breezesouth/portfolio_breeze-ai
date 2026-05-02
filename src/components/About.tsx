import skills from '../data/skills';

const About = () => (
  <section id="about" className="space-y-8 py-16">
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-400">关于我</p>
      <h2 className="text-3xl font-bold text-white">我的简介</h2>
      <p className="max-w-3xl text-slate-300">
        我是一名前端开发者，专注于构建现代个人作品集，兼顾性能、响应式布局与流畅动效。
      </p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/50 p-6">
        <h3 className="mb-4 text-xl font-semibold text-white">技能列表</h3>
        <ul className="grid gap-2 text-slate-300 sm:grid-cols-2">
          {skills.map((skill) => (
            <li key={skill} className="rounded-2xl bg-slate-900/80 px-4 py-3">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-950/50 p-6">
        <h3 className="mb-4 text-xl font-semibold text-white">我的专长</h3>
        <p className="text-slate-300">
          擅长 React + TypeScript 开发，使用 Tailwind CSS 打造可复用组件，保证移动端适配与简洁设计。
        </p>
      </div>
    </div>
  </section>
);

export default About;
