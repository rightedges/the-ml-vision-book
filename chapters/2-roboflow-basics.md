---
layout: page
title: Vision Tasks
---

# Chapter 2: Computer Vision Tasks

Not all vision problems are the same. We generally categorize them into a hierarchy of complexity.

## The Hierarchy of Vision

### 1. Classification
**"What is in this image?"**
The model outputs a single label for the entire image. 
*Example: Is this an X-ray of a healthy lung or one with pneumonia?*

### 2. Object Detection
**"What is in this image, and where is it?"**
The model identifies specific objects and draws a **Bounding Box** around them.
*Example: Detecting cars, pedestrians, and traffic lights for an autonomous vehicle.*

### 3. Instance Segmentation
**"What is in this image, where is it, and exactly which pixels belong to it?"**
Instead of a box, the model creates a pixel-perfect **Mask**.
*Example: Identifying the exact boundary of a tumor in medical imaging.*

## The Science of Data Preparation

To train these models, we need ground truth data. This is where **Annotation** comes in.

### Why Quality Trumps Quantity
A model is only as good as the data it learns from (**Garbage In, Garbage Out**).
- **Labeling Consistency**: If you label "Soda Can" in one image and "Coke" in another, the model's math will never converge.
- **Spatial Precision**: A bounding box that is too large includes "noise" (the background), making the model less accurate.

## Implementation Tool: Roboflow
While the concepts above are universal, tools like **Roboflow** provide the infrastructure to manage this science:
- **Centralized Annotation**: Ensuring team-wide consistency.
- **Version Control**: Snapshotting your "Science" so you can repeat experiments.

---

> [!TIP]
> Before you start labeling, define a strict "Labeling Guide" to ensure every object is marked the same way every time.
