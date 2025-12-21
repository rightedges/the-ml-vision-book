---
layout: page
title: Chapter
---

# Chapter 2: Roboflow Basics

Building a successful vision model starts with high-quality data. In this chapter, we'll walk through the process of creating a project in Roboflow.

## Step 1: Create a Project

Login to [Roboflow](https://roboflow.com) and create a new project. For this guide, we'll assume an **Object Detection** project type.

## Step 2: Image Acquisition

You can upload your own images or leverage **Roboflow Universe**, a community repository of over 200,000 datasets.

## Step 3: Annotation

Annotation is the process of labeling images. Roboflow provides a powerful web-based tool:
- **Bounding Boxes**: For object detection.
- **Polygons**: For instance segmentation.
- **Keypoints**: For pose estimation.

## Step 4: Preprocessing and Augmentation

To make your model robust, you need to apply transformations:
- **Preprocessing**: Grayscale, Resize, Auto-Orient.
- **Augmentation**: Rotation, Blur, Noise, Cutout. 

> [!TIP]
> Use **Augmentation** to artificially increase the size of your dataset and prevent overfitting.

## Step 5: Generating a Version

Once you're happy with your dataset, "Generate" a version. This locks the images and annotations so you can train against a consistent snapshot.

---

### Exploration: The Model Zoo

Roboflow supports many model architectures:
- **YOLOv8**: The current industry standard for speed and accuracy.
- **RF-DETR**: Roboflow's optimization of the DETR architecture.
- **YOLOv5**: A battle-tested classic.

In the next chapter, we'll look at how to take this data and train a model using **PyTorch**.
