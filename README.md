# Revelry Engine Sample Models

This repository is used to aggergate models for demonstration purposes with the Revelry Engine GLTF Renderer.

It contains scripts to automatically generate a model index in ESM format from the models here as well as from the [glTF-Sample-Models](https://github.com/KhronosGroup/glTF-Sample-Models) project.

### To generate model index

### Prequisites

- deno

##### Generate KTX2 textures and index

```
deno run -A --unstable generate.js
```