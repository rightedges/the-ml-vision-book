import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ML Vision: The Roboflow Guide",
  description: "A comprehensive guide to building and deploying modern ML vision models.",
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chapters', link: '/chapters/1-introduction' },
      { text: 'Roboflow', link: 'https://roboflow.com' }
    ],
    sidebar: [
      {
        text: 'The Book',
        items: [
          { text: '1. Introduction', link: '/chapters/1-introduction' },
          { text: '2. Roboflow Basics', link: '/chapters/2-roboflow-basics' },
          { text: '3. PyTorch Implementation', link: '/chapters/3-implementation-pytorch' },
          { text: '4. Web Implementation', link: '/chapters/4-implementation-web' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/roboflow' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 William'
    }
  }
})
