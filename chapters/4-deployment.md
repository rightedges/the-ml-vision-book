---
layout: page
title: Deployment & Edge
---

# Chapter 4: Architecting for Scale

The final stage of any vision project is moving from a `.pt` or `.h5` file to a production environment. This is where "Model Engineering" begins.

## The Deployment Spectrum

### Cloud Inference (The Powerhouse)
Used when the model is too heavy for a local device or requires massive GPU clusters.
- **Tools**: NVIDIA Triton, TorchServe.
- **Use Case**: Analyzing massive satellite imagery or processing security feeds in bulk.

### Edge Intelligence (The Frontline)
The model lives on the user's hardware.
- **Real-time Performance**: No round-trip to a server.
- **Privacy**: User data never leaves the device.

## Optimization Formats

To run on the edge, we often convert models into specialized formats:
1. **ONNX (Open Neural Network Exchange)**: A universal format that works across different frameworks (PyTorch, TensorFlow).
2. **TensorRT**: An NVIDIA-specific optimizer for maximum speed on Jetson/RTX hardware.
3. **CoreML**: Apple's framework for hardware-accelerated inference on iPhones and Macs.

## Deployment Strategies

### Browser-based (WASM/WebGL)
Using frameworks like **TensorFlow.js** or **ONNX Runtime Web**, we can run models in any modern browser. This enables instant-on vision features without an app store download.

### Mobile and IoT
Deploying "Quantized" models (reducing precision to 8-bit) allows complex vision to run on low-power ARM processors with minimal battery impact.

---

> [!CAUTION]
> Always verify that your optimization step (like Quantization) hasn't significantly degraded your model's accuracy on edge cases.
