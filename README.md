# 个人作品集网站

一个现代化的个人作品集网站，使用 React + TypeScript + Tailwind CSS 构建。

## 🚀 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **主题**: 深色主题 + 渐变色强调

## ✨ 特性

- 🎨 深色主题设计
- 📱 完全响应式布局
- ⚡ 快速加载和流畅动画
- 🔧 TypeScript 类型安全
- 🎯 组件化架构

## 🏗️ 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.tsx      # 导航栏
│   ├── Hero.tsx        # 首页英雄区域
│   ├── About.tsx       # 关于我
│   ├── Projects.tsx    # 项目展示
│   ├── Contact.tsx     # 联系方式
│   └── Footer.tsx      # 页脚
├── data/               # 数据文件
│   ├── projects.ts     # 项目数据
│   └── skills.ts       # 技能数据
├── App.tsx             # 主应用组件
└── main.tsx            # 应用入口
```

## 🛠️ 本地开发

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用。

### 构建生产版本

```bash
npm run build
```

## 📦 部署

### GitHub Pages

1. 安装 gh-pages 包：
```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 中添加部署脚本：
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. 构建并部署：
```bash
npm run build
npm run deploy
```

### Vercel

1. 连接 GitHub 仓库到 Vercel
2. Vercel 会自动检测并构建项目
3. 部署完成后获取生产链接

## 🎯 组件说明

### Hero 组件
- 大标题和简介展示
- 渐变头像卡片
- 行动按钮（查看项目、联系我）

### Projects 组件
- 项目卡片网格布局
- 项目截图展示
- 技术栈标签
- 外部链接跳转

### About 组件
- 个人简介
- 技能列表展示

### Contact 组件
- 邮箱和 GitHub 链接
- 社交媒体链接

## 🎨 设计特色

- **深色主题**: 背景色 `#0a0a0a`，文字 `#ffffff`
- **渐变强调**: 紫色到粉色的渐变色
- **流畅动画**: 平滑的滚动和悬停效果
- **移动优先**: 响应式设计确保移动端体验

## 📄 许可证

MIT License

## 👨‍💻 作者

Breeze South

---

⭐ 如果这个项目对你有帮助，请给它一个 star！