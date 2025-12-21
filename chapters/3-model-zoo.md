---
layout: page
title: The Model Zoo
---

# Chapter 3: The Model Zoo

Choosing an architecture is a balance between **Latency** (speed) and **Accuracy** (precision). Let's explore the pillars of modern vision.

## 1. ResNet (The Foundation)
**Residual Networks** solved the "vanishing gradient" problem. By using "skip connections," they allowed networks to become hundreds of layers deep without losing signal. Most modern models use a modified ResNet as their "Backbone."

## 2. The YOLO Pipeline (The Speed Kings)
**You Only Look Once (YOLO)** revolutionized detection by processing the entire image in a single pass.
- **YOLOv8/v10**: The current state-of-the-art for real-time applications. They use a "Cross-Stage Partial Network" (CSP) to maximize feature extraction while minimizing compute.
- **Benefit**: Ideal for drones, mobile apps, and autonomous vehicles where every millisecond counts.

## 3. DETR (The Transformer Revolution)
**Detection Transformer (DETR)** treats object detection as a "set prediction" problem.
- **Mechanism**: Instead of sliding windows or anchors, it uses Global Attention to look at every pixel simultaneously.
- **Benefit**: Superior at handling large objects and complex overlaps, though typically slower than YOLO.

## 4. SAM (Segment Anything Model)
A breakthrough from Meta AI. **SAM** is a foundation model for segmentation.
- **Capability**: It can segment *anything* it sees, even objects it has never encountered before.
- **Benefit**: It serves as a "Zero-Shot" engine, allowing for instant high-precision masking without custom training.

---

### Which model for which user?
| Need | Recommended Model |
| :--- | :--- |
| Real-time mobile detection | YOLOv8-Nano |
| Medical Imaging Precision | DETR or ResNet-152 |
| General Content Tagging | SAM |
