# Revelry Engine Sample Models

This repository is used to aggregate models for demonstration purposes with the Revelry Engine GLTF Renderer.

It contains scripts to automatically generate a model index in ESM format from the models here as well as from the [glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets) project.

### To generate model index

### Prequisites

- deno 2.1.4+

##### Generate index

```
deno run -A --unstable generate.js
```

### Type Checking

Generate Deno Types

```
deno types > lib.deno.d.ts
```

Download vendor libraries

```
deno cache --vendor generate.js
```
