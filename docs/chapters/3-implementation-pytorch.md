# Chapter 3: PyTorch Implementation

In this chapter, we'll dive into the code required to run inference using a model trained on Roboflow within a PyTorch environment.

## The Roboflow Inference SDK

The easiest way to integrate Roboflow models into your Python application is using the `inference-sdk`.

### Installation

```bash
pip install inference-sdk
```

### Basic Inference Code

Here is how you can perform inference on a local image:

```python
from inference_sdk import InferenceHTTPClient

# Initialize the client
CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key="YOUR_ROBOFLOW_API_KEY"
)

# Perform inference
result = CLIENT.infer("path/to/your/image.jpg", model_id="your-model-id/version")

# Access predictions
for prediction in result["predictions"]:
    print(f"Detected: {prediction['class']} with confidence {prediction['confidence']}")
```

## Custom PyTorch Datasets

If you want to train your own models using PyTorch's native tools, you can download your Roboflow dataset in the `YOLOv8` or `COCO` format.

```python
import torch
from torch.utils.data import DataLoader
# ... load your dataset here ...
```

### Why use PyTorch for ML Vision?

1.  **Flexibility**: You can define custom loss functions and architectures.
2.  **Performance**: Leveraging GPU acceleration with CUDA.
3.  **Ecosystem**: Integration with libraries like `torchvision`, `albumentations`, and `clearml`.

> [!IMPORTANT]
> Always ensure your input image size matches the size used during model training (e.g., 640x640).
