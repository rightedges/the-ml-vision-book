---
layout: page
title: "ML Vision: The Roboflow Guide"
---

# Master Modern Computer Vision

Welcome to the comprehensive guide to building and deploying modern ML vision models. This book uses **Roboflow** as its foundation and explores implementation paths in **PyTorch** and the **Web**.

## What's Inside?

- **Modern Vision Models**: Deep dive into YOLOv8, RF-DETR, and more.
- **PyTorch Integration**: Custom training loops and inference engines.
- **Web Deployment**: Real-time inference in the browser with `roboflow.js`.

[Get Started]({{ '/chapters/1-introduction.html' | relative_url }}){: .btn }

## Chapters

{% for chapter in site.data.navigation.chapters %}
- [{{ chapter.title }}]({{ chapter.url | append: '.html' | relative_url }})
{% endfor %}
