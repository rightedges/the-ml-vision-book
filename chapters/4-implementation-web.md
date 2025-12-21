---
layout: page
title: Deployment & Edge
---

# Chapter 4: Edge Intelligence

A model is useless if it sits on a researcher's laptop. To provide value, it must be **Deployed**.

## Cloud vs. Edge Deployment

### Cloud Deployment
Your application sends an image to a server, the server runs the math, and sends back the result.
- **Pros**: Unlimited computing power.
- **Cons**: Latency, high cost, and privacy concerns.

### Edge Deployment
The model runs directly on the device (your phone, a camera, or a browser).
- **Pros**: Real-time speed, works offline, maximum privacy.
- **Cons**: Limited battery and processing power.

## The Web as an Edge Device

With **roboflow.js** and **TensorFlow.js**, the browser becomes a powerful vision engine. We can leverage the user's GPU (via WebGL) to run detections in real-time.

```javascript
// Loading a model to run locally on the client's machine
model.load().then(m => {
  m.detect(videoElement); // Zero server latency
});
```

## Optimization: Quantization

To fit large models on edge devices, we use **Quantization**. This involves reducing the precision of the model's numbers (e.g., from 32-bit to 8-bit). This makes the model smaller and faster with only a tiny hit to accuracy.

---

> [!NOTE]
> The future of ML Vision is "Intelligence at the Source"—models that live inside the sensors themselves.
