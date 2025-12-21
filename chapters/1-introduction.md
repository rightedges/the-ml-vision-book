---
layout: page
title: Chapter
---

# Chapter 1: Introduction to ML Vision

Computer Vision (CV) is the field of Artificial Intelligence that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs.

## The Evolution of Vision Models

In the early days, computer vision relied on hand-crafted features (like SIFT or HOG). Today, we use **Deep Learning** and **Convolutional Neural Networks (CNNs)** or **Vision Transformers (ViTs)** to automatically learn features from data.

### Why Roboflow?

Building a vision model from scratch is hard. You need to:
1.  Collect thousands of images.
2.  Annotate them accurately.
3.  Preprocess and augment the data.
4.  Train a complex model.
5.  Deploy it to a scaleable environment.

**Roboflow** simplifies this entire pipeline, allowing you to focus on the problem you're solving rather than the infrastructure.

## Basic Use Case: Object Detection

The most common starting point in ML Vision is **Object Detection**. Unlike classification (which tells you *what* is in an image), object detection tells you *what* and *where* (using bounding boxes).

> [!NOTE]
> In the next chapter, we will see how to build a basic Object Detection model using Roboflow Universe and custom data.
