---
layout: page
title: Chapter
---

# Chapter 4: Web Implementation

Bringing Vision models to the web allows for real-time interaction without server-side latency. Roboflow provides a seamless JavaScript library for this.

## Getting Started with `roboflow.js`

You can include the SDK via CDN or npm.

### Using CDN

```html
<script src="https://cdn.roboflow.com/0.2.26/roboflow.js"></script>
```

### Initializing the Model

```javascript
const rf = roboflow.auth({
  publishable_key: "YOUR_PUBLISHABLE_KEY"
});

rf.load({
  model: "your-model-id",
  version: "1"
}).then(model => {
  // Model is ready
  model.detect(imageElement).then(predictions => {
    console.log(predictions);
  });
});
```

## Creating a Real-Time Camera Viewer

To create a real-time experience, you can hook into the `requestAnimationFrame` loop and pass the `<video>` element to the `detect` function.

```javascript
function predict() {
  model.detect(video).then(predictions => {
    renderPredictions(predictions);
    requestAnimationFrame(predict);
  });
}
```

### Performance Optimization

- **Offscreen Rendering**: Use `OffscreenCanvas` for heavy drawing operations.
- **Model Quantization**: Roboflow uses TensorFlow.js under the hood, benefit from quantized weights for faster load times.

---

> [!CAUTION]
> Browsers have limits on WebGL memory. Be sure to dispose of unused textures if you are manually handling TensorFlow.js tensors.
