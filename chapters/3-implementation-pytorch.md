---
layout: page
title: Architecture & Training
---

# Chapter 3: Architecture and Training

Once you have your data, you need an architecture to process it. Modern ML Vision is dominated by two main philosophies: **CNNs** and **Transformers**.

## 1. Convolutional Neural Networks (CNNs)
For decades, CNNs (like **YOLOv8** and **YOLOv5**) have been the gold standard.
- **How they work**: They use small "filters" that slide across the image to detect features like edges -> shapes -> objects.
- **Strength**: Extremely fast and efficient at recognizing spatial patterns.

## 2. Vision Transformers (ViT)
The new frontier. Architectures like **RF-DETR** use the "Attention" mechanism originally designed for language (like ChatGPT).
- **How they work**: Instead of filters, they look at the whole image at once and determine which parts are "attending" to each other.
- **Strength**: Better at understanding global context and complex relationships.

## The Training Loop

Training is the process of minimizing **Loss**. 
- **Loss** is a number that represents how "wrong" the model is.
- Through **Backpropagation**, we update the model's weights to make that number as small as possible.

### Implementation with PyTorch

In a production environment, you might use the Roboflow SDK to handle the heavy lifting, but the underlying logic remains:

```python
import torch

# A theoretical inference step
model.eval()
with torch.no_grad():
    prediction = model(input_tensor)
    # The math happens here!
```

## Choosing your Model
- **Speed requirement?** Use YOLOv8.
- **High precision in complex scenes?** Use RF-DETR.
- **Extreme low power?** Use YOLOv5-Nano.
