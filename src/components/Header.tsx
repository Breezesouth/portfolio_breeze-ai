const Header = () => (
  <header className="flex flex-col gap-4 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
    <div className="text-lg font-semibold tracking-wide text-white">个人作品集</div>
    <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
      <a href="#about" className="transition hover:text-white">关于</a>
      <a href="#projects" className="transition hover:text-white">项目</a>
      <a href="#contact" className="transition hover:text-white">联系</a>
    </nav>
  </header>
);

export default Header;
