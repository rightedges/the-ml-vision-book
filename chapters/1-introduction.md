---
layout: page
title: Foundations
---

# Chapter 1: Foundations of ML Vision

To understand machine learning vision, we must first ask a fundamental question: **How does a computer see?**

## Biological vs. Computer Vision

When you look at a cat, your brain processes light hitting your retina into complex shapes, patterns, and concepts. A computer, however, sees nothing but a grid of numbers.

### The Pixel Grid
Every digital image is a three-dimensional array (or **tensor**) of numbers:
- **Height** and **Width**: The resolution of the image.
- **Channels**: Usually 3 (Red, Green, Blue).

At its most basic level, Computer Vision is the math required to turn this grid of numbers into a semantic understanding (e.g., "This grid contains a cat").

## What is a "Model"?

In the context of ML Vision, a **Model** is a mathematical function that has been "trained" to recognize patterns.

Imagine a complex mathematical equation with millions of knobs (called **parameters** or **weights**). 
1. **Training**: We show the equation millions of images. Every time it's wrong, we turn the knobs slightly to get closer to the right answer.
2. **Inference**: Once the knobs are set, we can show it a new image, and the math will output a probability (e.g., "98% likely to be a cat").

## From Pixels to Tensors

In modern AI, we don't just work with pixels. we transform them into **Tensors**. 
- A **Scalar** is a single number.
- A **Vector** is a list of numbers.
- A **Matrix** is a grid of numbers.
- A **Tensor** is the generalized form of all the above.

Vision models use multi-dimensional tensors to represent color, depth, and spatial relationships all at once.

---

> [!NOTE]
> Understanding that a model is just "optimized math" is the first step to mastering Computer Vision. In the next chapter, we will explore the specific tasks we ask these models to perform.
