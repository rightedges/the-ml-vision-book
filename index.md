---
layout: page
title: "ML Vision 101"
---

# ML Vision 101: A Narrative Journey into Machine Sight

Welcome to **ML Vision 101**. This is not a technical manual or a product guide—it is a narrative journey into the heart of how machines see, understand, and interact with our world.

Whether you are a software engineer looking to understand the "knobs" of deep learning, a curious student wondering how a car can "see" a stop sign, or an enthusiast exploring the future of technology, this book is built for you. 

## The Curriculum of Sight

We have structured this book as a cohesive, four-stage evolution of intelligence:

- **Stage 1: The First Pixel**: We begin at the atomic level. How does a silent grid of numbers become a picture? We explore the gap between human intuition and machine mathematics.
- **Stage 2: Identifying the World**: We look at the "Education" of the machine. Why is data called "experience"? We dive into the science of teaching a machine through consistent labeling and digital imagination.
- **Stage 3: The Architecture of Sight**: We step inside the digital brain. From the "Flashlights" of CNNs to the "Spotlights" of Transformers, we demystify how different neural networks organize information.
- **Stage 4: Vision in the Real World**: We bring it all to life. Moving from abstract models to the "Edge," we explore how real-time intelligence is changing our cameras from recording devices into understanding devices.

[Begin the Journey]({{ site.baseurl }}/chapters/1-introduction.html){: .btn }

## Chapters

{% for chapter in site.data.navigation.chapters %}
- [{{ chapter.title }}]({{ site.baseurl }}{{ chapter.url }}.html)
{% endfor %}
