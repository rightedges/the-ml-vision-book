---
layout: page
title: Machine Perception
---

# Chapter 1: Machine Perception

Computer Vision (CV) is the science of enabling machines to "see"—not as a human does, but through the lens of mathematics and high-dimensional data.

## The Evolution of Sight

### Classical Computer Vision
In the era of traditional software engineering (OpenCV), we used "hand-crafted features." Engineers wrote specific algorithms to find edges, corners, or specific colors. If the lighting changed, the software broke.

### Deep Learning
Modern vision relies on **Connectionism**. Instead of defining what a cat looks like, we build a "neural network" and show it thousands of cats. The network learns the features itself, ranging from simple edges in the first layers to complex concepts (like ears or fur patterns) in the deeper layers.

## The Tensor: The Atom of Vision

To a computer, an image is not a picture; it is a **Tensor**.

Standard images are represented as 3D Tensors: `[Height, Width, Channels]`.
- **Spatial Dimensions**: The pixels across $(x, y)$.
- **Depth Dimension**: The color channels $(R, G, B)$.

When we process an image, we are performing linear algebra on these tensors at massive scales.

---

> [!NOTE]
> We have moved from **Programming** (defining rules) to **Training** (defining goals). In the next chapter, we will look at the science of the data used for that training.
