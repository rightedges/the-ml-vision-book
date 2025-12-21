---
layout: page
title: "Foundations of ML Vision"
---

# Foundations of ML Vision

Computer Vision is shifting from a specialized research field to a foundational tier of modern software. This book explores the core principles of how machines perceive, process, and understand the visual world—without reliance on specific platforms.

## What You Will Learn

- **Machine Perception**: The transition from Pixels to Tensors and the mathematics of seeing.
- **The Data Blueprint**: The science of ground truth, annotation rigor, and augmentation logic.
- **The Model Zoo**: Deep dives into the architectures that define the field (YOLO, DETR, ResNet, and SAM).
- **Edge Deployment**: How to move from model files to high-performance production intelligence.

[Start Reading]({{ site.baseurl }}/chapters/1-introduction.html){: .btn }

## Curriculum

{% for chapter in site.data.navigation.chapters %}
- [{{ chapter.title }}]({{ site.baseurl }}{{ chapter.url }}.html)
{% endfor %}
