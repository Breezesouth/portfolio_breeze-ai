const Contact = () => (
  <section id="contact" className="space-y-8 py-16">
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-400">联系方式</p>
      <h2 className="text-3xl font-bold text-white">保持联络</h2>
      <p className="max-w-2xl text-slate-300">
        若想合作或了解更多，请通过邮箱或 GitHub 与我联系。
      </p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <a
        href="mailto:hello@example.com"
        className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 text-white transition hover:border-violet-500"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">邮箱</p>
        <p className="mt-3 text-lg font-semibold">hello@example.com</p>
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 text-white transition hover:border-violet-500"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">GitHub</p>
        <p className="mt-3 text-lg font-semibold">github.com/yourname</p>
      </a>
    </div>
  </section>
);

export default Contact;
