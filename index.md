---
layout: page
title: "Foundations of ML Vision"
---

# Foundations of ML Vision

Computer Vision is shifting from a specialized research field to a foundational tier of modern software. This book explores the core principles of how computers see, process, and understand the visual world.

## Conceptual Core

- **First Principles**: Understanding pixels, tensors, and the math of "models."
- **Computer Science of Vision**: The transition from hand-crafted features to deep learning.
- **Architecture**: A deep dive into CNNs and Transformers.
- **Deployment**: The engineering of high-performance edge intelligence.

[Start Reading]({{ site.baseurl }}/chapters/1-introduction.html){: .btn }

## Curriculum

{% for chapter in site.data.navigation.chapters %}
- [{{ chapter.title }}]({{ site.baseurl }}{{ chapter.url }}.html)
{% endfor %}
