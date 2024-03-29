/** Revelry Engine Sample Models **/
const BASE_KHRONOS_SAMPLE_URL        = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/4ca0667/2.0/';
const BASE_KHRONOS_SAMPLE_SOURCE_URL = 'https://github.com/KhronosGroup/glTF-Sample-Models/tree/4ca0667/2.0/';
const BASE_SAMPLE_SOURCE_URL         = 'https://github.com/revelryengine/sample-models/tree/main/';

function link(path, root = import.meta.url) { return new URL(path, root).toString(); }

export const index = [
    {
        name: '2CylinderEngine',
        group: 'Khronos',
        screenshot: link('./2CylinderEngine/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./2CylinderEngine', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./2CylinderEngine/glTF/2CylinderEngine.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./2CylinderEngine/glTF-Binary/2CylinderEngine.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./2CylinderEngine/glTF-Draco/2CylinderEngine.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./2CylinderEngine/glTF-Embedded/2CylinderEngine.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'ABeautifulGame',
        group: 'Khronos',
        screenshot: link('./ABeautifulGame/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ABeautifulGame', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ABeautifulGame/glTF/ABeautifulGame.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AlphaBlendModeTest',
        group: 'Khronos',
        screenshot: link('./AlphaBlendModeTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AlphaBlendModeTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AlphaBlendModeTest/glTF/AlphaBlendModeTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AlphaBlendModeTest/glTF-Binary/AlphaBlendModeTest.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./AlphaBlendModeTest/glTF-Embedded/AlphaBlendModeTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AnimatedCube',
        group: 'Khronos',
        screenshot: link('./AnimatedCube/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnimatedCube', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnimatedCube/glTF/AnimatedCube.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AnimatedMorphCube',
        group: 'Khronos',
        screenshot: link('./AnimatedMorphCube/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnimatedMorphCube', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnimatedMorphCube/glTF/AnimatedMorphCube.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AnimatedMorphCube/glTF-Binary/AnimatedMorphCube.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Quantized': link('./AnimatedMorphCube/glTF-Quantized/AnimatedMorphCube.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AnimatedMorphSphere',
        group: 'Khronos',
        screenshot: link('./AnimatedMorphSphere/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnimatedMorphSphere', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnimatedMorphSphere/glTF/AnimatedMorphSphere.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AnimatedMorphSphere/glTF-Binary/AnimatedMorphSphere.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AnimatedTriangle',
        group: 'Khronos',
        screenshot: link('./AnimatedTriangle/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnimatedTriangle', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnimatedTriangle/glTF/AnimatedTriangle.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./AnimatedTriangle/glTF-Embedded/AnimatedTriangle.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AntiqueCamera',
        group: 'Khronos',
        screenshot: link('./AntiqueCamera/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AntiqueCamera', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AntiqueCamera/glTF/AntiqueCamera.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AntiqueCamera/glTF-Binary/AntiqueCamera.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AttenuationTest',
        group: 'Khronos',
        screenshot: link('./AttenuationTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AttenuationTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AttenuationTest/glTF/AttenuationTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AttenuationTest/glTF-Binary/AttenuationTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Avocado',
        group: 'Khronos',
        screenshot: link('./Avocado/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Avocado', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Avocado/glTF/Avocado.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./Avocado/glTF-Binary/Avocado.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./Avocado/glTF-Draco/Avocado.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Quantized': link('./Avocado/glTF-Quantized/Avocado.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'BarramundiFish',
        group: 'Khronos',
        screenshot: link('./BarramundiFish/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./BarramundiFish', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./BarramundiFish/glTF/BarramundiFish.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./BarramundiFish/glTF-Binary/BarramundiFish.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./BarramundiFish/glTF-Draco/BarramundiFish.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'BoomBox',
        group: 'Khronos',
        screenshot: link('./BoomBox/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./BoomBox', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./BoomBox/glTF/BoomBox.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./BoomBox/glTF-Binary/BoomBox.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./BoomBox/glTF-Draco/BoomBox.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'BoomBoxWithAxes',
        group: 'Khronos',
        screenshot: link('./BoomBoxWithAxes/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./BoomBoxWithAxes', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./BoomBoxWithAxes/glTF/BoomBoxWithAxes.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Box',
        group: 'Khronos',
        screenshot: link('./Box/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Box', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Box/glTF/Box.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./Box/glTF-Binary/Box.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./Box/glTF-Draco/Box.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./Box/glTF-Embedded/Box.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Box With Spaces',
        group: 'Khronos',
        screenshot: link('./Box With Spaces/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Box With Spaces', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Box With Spaces/glTF/Box With Spaces.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'BoxAnimated',
        group: 'Khronos',
        screenshot: link('./BoxAnimated/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./BoxAnimated', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./BoxAnimated/glTF/BoxAnimated.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./BoxAnimated/glTF-Binary/BoxAnimated.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./BoxAnimated/glTF-Embedded/BoxAnimated.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'BoxInterleaved',
        group: 'Khronos',
        screenshot: link('./BoxInterleaved/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./BoxInterleaved', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./BoxInterleaved/glTF/BoxInterleaved.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./BoxInterleaved/glTF-Binary/BoxInterleaved.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./BoxInterleaved/glTF-Embedded/BoxInterleaved.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'BoxTextured',
        group: 'Khronos',
        screenshot: link('./BoxTextured/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./BoxTextured', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./BoxTextured/glTF/BoxTextured.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./BoxTextured/glTF-Binary/BoxTextured.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./BoxTextured/glTF-Embedded/BoxTextured.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'BoxTexturedNonPowerOfTwo',
        group: 'Khronos',
        screenshot: link('./BoxTexturedNonPowerOfTwo/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./BoxTexturedNonPowerOfTwo', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./BoxTexturedNonPowerOfTwo/glTF/BoxTexturedNonPowerOfTwo.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./BoxTexturedNonPowerOfTwo/glTF-Binary/BoxTexturedNonPowerOfTwo.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./BoxTexturedNonPowerOfTwo/glTF-Embedded/BoxTexturedNonPowerOfTwo.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'BoxVertexColors',
        group: 'Khronos',
        screenshot: link('./BoxVertexColors/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./BoxVertexColors', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./BoxVertexColors/glTF/BoxVertexColors.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./BoxVertexColors/glTF-Binary/BoxVertexColors.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./BoxVertexColors/glTF-Embedded/BoxVertexColors.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'BrainStem',
        group: 'Khronos',
        screenshot: link('./BrainStem/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./BrainStem', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./BrainStem/glTF/BrainStem.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./BrainStem/glTF-Binary/BrainStem.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./BrainStem/glTF-Draco/BrainStem.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./BrainStem/glTF-Embedded/BrainStem.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Meshopt': link('./BrainStem/glTF-Meshopt/BrainStem.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Buggy',
        group: 'Khronos',
        screenshot: link('./Buggy/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Buggy', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Buggy/glTF/Buggy.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./Buggy/glTF-Binary/Buggy.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./Buggy/glTF-Draco/Buggy.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./Buggy/glTF-Embedded/Buggy.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Cameras',
        group: 'Khronos',
        screenshot: link('./Cameras/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Cameras', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Cameras/glTF/Cameras.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./Cameras/glTF-Embedded/Cameras.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CesiumMan',
        group: 'Khronos',
        screenshot: link('./CesiumMan/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CesiumMan', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CesiumMan/glTF/CesiumMan.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CesiumMan/glTF-Binary/CesiumMan.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./CesiumMan/glTF-Draco/CesiumMan.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./CesiumMan/glTF-Embedded/CesiumMan.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CesiumMilkTruck',
        group: 'Khronos',
        screenshot: link('./CesiumMilkTruck/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CesiumMilkTruck', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CesiumMilkTruck/glTF/CesiumMilkTruck.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CesiumMilkTruck/glTF-Binary/CesiumMilkTruck.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./CesiumMilkTruck/glTF-Draco/CesiumMilkTruck.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./CesiumMilkTruck/glTF-Embedded/CesiumMilkTruck.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'ClearCoatCarPaint',
        group: 'Khronos',
        screenshot: link('./ClearCoatCarPaint/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ClearCoatCarPaint', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ClearCoatCarPaint/glTF/ClearCoatCarPaint.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./ClearCoatCarPaint/glTF-Binary/ClearCoatCarPaint.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'ClearCoatTest',
        group: 'Khronos',
        screenshot: link('./ClearCoatTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ClearCoatTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ClearCoatTest/glTF/ClearCoatTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./ClearCoatTest/glTF-Binary/ClearCoatTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'ClearcoatWicker',
        group: 'Khronos',
        screenshot: link('./ClearcoatWicker/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ClearcoatWicker', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ClearcoatWicker/glTF/ClearcoatWicker.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./ClearcoatWicker/glTF-Binary/ClearcoatWicker.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Corset',
        group: 'Khronos',
        screenshot: link('./Corset/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Corset', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Corset/glTF/Corset.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./Corset/glTF-Binary/Corset.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./Corset/glTF-Draco/Corset.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Cube',
        group: 'Khronos',
        screenshot: link('./Cube/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Cube', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Cube/glTF/Cube.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'DamagedHelmet',
        group: 'Khronos',
        screenshot: link('./DamagedHelmet/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./DamagedHelmet', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./DamagedHelmet/glTF/DamagedHelmet.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./DamagedHelmet/glTF-Binary/DamagedHelmet.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./DamagedHelmet/glTF-Embedded/DamagedHelmet.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'DragonAttenuation',
        group: 'Khronos',
        screenshot: link('./DragonAttenuation/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./DragonAttenuation', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./DragonAttenuation/glTF/DragonAttenuation.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./DragonAttenuation/glTF-Binary/DragonAttenuation.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Meshopt': link('./DragonAttenuation/glTF-Meshopt/DragonAttenuation.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Duck',
        group: 'Khronos',
        screenshot: link('./Duck/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Duck', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Duck/glTF/Duck.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./Duck/glTF-Binary/Duck.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./Duck/glTF-Draco/Duck.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./Duck/glTF-Embedded/Duck.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Quantized': link('./Duck/glTF-Quantized/Duck.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'EmissiveStrengthTest',
        group: 'Khronos',
        screenshot: link('./EmissiveStrengthTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./EmissiveStrengthTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./EmissiveStrengthTest/glTF/EmissiveStrengthTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./EmissiveStrengthTest/glTF-Binary/EmissiveStrengthTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'EnvironmentTest',
        group: 'Khronos',
        screenshot: link('./EnvironmentTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./EnvironmentTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./EnvironmentTest/glTF/EnvironmentTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-IBL': link('./EnvironmentTest/glTF-IBL/EnvironmentTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'FlightHelmet',
        group: 'Khronos',
        screenshot: link('./FlightHelmet/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./FlightHelmet', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./FlightHelmet/glTF/FlightHelmet.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Fox',
        group: 'Khronos',
        screenshot: link('./Fox/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Fox', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Fox/glTF/Fox.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./Fox/glTF-Binary/Fox.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'GearboxAssy',
        group: 'Khronos',
        screenshot: link('./GearboxAssy/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./GearboxAssy', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./GearboxAssy/glTF/GearboxAssy.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./GearboxAssy/glTF-Binary/GearboxAssy.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./GearboxAssy/glTF-Draco/GearboxAssy.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./GearboxAssy/glTF-Embedded/GearboxAssy.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'GlamVelvetSofa',
        group: 'Khronos',
        screenshot: link('./GlamVelvetSofa/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./GlamVelvetSofa', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./GlamVelvetSofa/glTF/GlamVelvetSofa.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./GlamVelvetSofa/glTF-Binary/GlamVelvetSofa.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'InterpolationTest',
        group: 'Khronos',
        screenshot: link('./InterpolationTest/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./InterpolationTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./InterpolationTest/glTF/InterpolationTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./InterpolationTest/glTF-Binary/InterpolationTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'IridescenceDielectricSpheres',
        group: 'Khronos',
        screenshot: link('./IridescenceDielectricSpheres/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./IridescenceDielectricSpheres', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./IridescenceDielectricSpheres/glTF/IridescenceDielectricSpheres.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'IridescenceLamp',
        group: 'Khronos',
        screenshot: link('./IridescenceLamp/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./IridescenceLamp', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./IridescenceLamp/glTF/IridescenceLamp.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./IridescenceLamp/glTF-Binary/IridescenceLamp.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'IridescenceMetallicSpheres',
        group: 'Khronos',
        screenshot: link('./IridescenceMetallicSpheres/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./IridescenceMetallicSpheres', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./IridescenceMetallicSpheres/glTF/IridescenceMetallicSpheres.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'IridescenceSuzanne',
        group: 'Khronos',
        screenshot: link('./IridescenceSuzanne/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./IridescenceSuzanne', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./IridescenceSuzanne/glTF/IridescenceSuzanne.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./IridescenceSuzanne/glTF-Binary/IridescenceSuzanne.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'IridescentDishWithOlives',
        group: 'Khronos',
        screenshot: link('./IridescentDishWithOlives/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./IridescentDishWithOlives', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./IridescentDishWithOlives/glTF/IridescentDishWithOlives.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./IridescentDishWithOlives/glTF-Binary/IridescentDishWithOlives.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Lantern',
        group: 'Khronos',
        screenshot: link('./Lantern/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Lantern', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Lantern/glTF/Lantern.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./Lantern/glTF-Binary/Lantern.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./Lantern/glTF-Draco/Lantern.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Quantized': link('./Lantern/glTF-Quantized/Lantern.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'LightsPunctualLamp',
        group: 'Khronos',
        screenshot: link('./LightsPunctualLamp/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./LightsPunctualLamp', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./LightsPunctualLamp/glTF/LightsPunctualLamp.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./LightsPunctualLamp/glTF-Binary/LightsPunctualLamp.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'MaterialsVariantsShoe',
        group: 'Khronos',
        screenshot: link('./MaterialsVariantsShoe/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MaterialsVariantsShoe', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./MaterialsVariantsShoe/glTF-Binary/MaterialsVariantsShoe.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'MeshPrimitiveModes',
        group: 'Khronos',
        screenshot: link('./MeshPrimitiveModes/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MeshPrimitiveModes', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MeshPrimitiveModes/glTF/MeshPrimitiveModes.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./MeshPrimitiveModes/glTF-Embedded/MeshPrimitiveModes.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'MetalRoughSpheres',
        group: 'Khronos',
        screenshot: link('./MetalRoughSpheres/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MetalRoughSpheres', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MetalRoughSpheres/glTF/MetalRoughSpheres.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./MetalRoughSpheres/glTF-Binary/MetalRoughSpheres.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./MetalRoughSpheres/glTF-Embedded/MetalRoughSpheres.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'MetalRoughSpheresNoTextures',
        group: 'Khronos',
        screenshot: link('./MetalRoughSpheresNoTextures/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MetalRoughSpheresNoTextures', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MetalRoughSpheresNoTextures/glTF/MetalRoughSpheresNoTextures.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./MetalRoughSpheresNoTextures/glTF-Binary/MetalRoughSpheresNoTextures.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'MorphPrimitivesTest',
        group: 'Khronos',
        screenshot: link('./MorphPrimitivesTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MorphPrimitivesTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MorphPrimitivesTest/glTF/MorphPrimitivesTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./MorphPrimitivesTest/glTF-Binary/MorphPrimitivesTest.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./MorphPrimitivesTest/glTF-Draco/MorphPrimitivesTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'MorphStressTest',
        group: 'Khronos',
        screenshot: link('./MorphStressTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MorphStressTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MorphStressTest/glTF/MorphStressTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./MorphStressTest/glTF-Binary/MorphStressTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'MosquitoInAmber',
        group: 'Khronos',
        screenshot: link('./MosquitoInAmber/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MosquitoInAmber', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MosquitoInAmber/glTF/MosquitoInAmber.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./MosquitoInAmber/glTF-Binary/MosquitoInAmber.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'MultiUVTest',
        group: 'Khronos',
        screenshot: link('./MultiUVTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MultiUVTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MultiUVTest/glTF/MultiUVTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./MultiUVTest/glTF-Binary/MultiUVTest.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./MultiUVTest/glTF-Embedded/MultiUVTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'MultipleScenes',
        group: 'Khronos',
        screenshot: link('./MultipleScenes/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MultipleScenes', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MultipleScenes/glTF/MultipleScenes.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./MultipleScenes/glTF-Embedded/MultipleScenes.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'NegativeScaleTest',
        group: 'Khronos',
        screenshot: link('./NegativeScaleTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./NegativeScaleTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./NegativeScaleTest/glTF/NegativeScaleTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./NegativeScaleTest/glTF-Binary/NegativeScaleTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'NormalTangentMirrorTest',
        group: 'Khronos',
        screenshot: link('./NormalTangentMirrorTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./NormalTangentMirrorTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./NormalTangentMirrorTest/glTF/NormalTangentMirrorTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./NormalTangentMirrorTest/glTF-Binary/NormalTangentMirrorTest.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./NormalTangentMirrorTest/glTF-Embedded/NormalTangentMirrorTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'NormalTangentTest',
        group: 'Khronos',
        screenshot: link('./NormalTangentTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./NormalTangentTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./NormalTangentTest/glTF/NormalTangentTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./NormalTangentTest/glTF-Binary/NormalTangentTest.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./NormalTangentTest/glTF-Embedded/NormalTangentTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'OrientationTest',
        group: 'Khronos',
        screenshot: link('./OrientationTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./OrientationTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./OrientationTest/glTF/OrientationTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./OrientationTest/glTF-Binary/OrientationTest.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./OrientationTest/glTF-Embedded/OrientationTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'ReciprocatingSaw',
        group: 'Khronos',
        screenshot: link('./ReciprocatingSaw/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ReciprocatingSaw', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ReciprocatingSaw/glTF/ReciprocatingSaw.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./ReciprocatingSaw/glTF-Binary/ReciprocatingSaw.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./ReciprocatingSaw/glTF-Draco/ReciprocatingSaw.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./ReciprocatingSaw/glTF-Embedded/ReciprocatingSaw.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'RecursiveSkeletons',
        group: 'Khronos',
        screenshot: link('./RecursiveSkeletons/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./RecursiveSkeletons', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./RecursiveSkeletons/glTF/RecursiveSkeletons.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./RecursiveSkeletons/glTF-Binary/RecursiveSkeletons.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'RiggedFigure',
        group: 'Khronos',
        screenshot: link('./RiggedFigure/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./RiggedFigure', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./RiggedFigure/glTF/RiggedFigure.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./RiggedFigure/glTF-Binary/RiggedFigure.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./RiggedFigure/glTF-Draco/RiggedFigure.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./RiggedFigure/glTF-Embedded/RiggedFigure.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'RiggedSimple',
        group: 'Khronos',
        screenshot: link('./RiggedSimple/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./RiggedSimple', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./RiggedSimple/glTF/RiggedSimple.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./RiggedSimple/glTF-Binary/RiggedSimple.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./RiggedSimple/glTF-Draco/RiggedSimple.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./RiggedSimple/glTF-Embedded/RiggedSimple.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SciFiHelmet',
        group: 'Khronos',
        screenshot: link('./SciFiHelmet/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SciFiHelmet', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SciFiHelmet/glTF/SciFiHelmet.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SheenChair',
        group: 'Khronos',
        screenshot: link('./SheenChair/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SheenChair', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SheenChair/glTF/SheenChair.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./SheenChair/glTF-Binary/SheenChair.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SheenCloth',
        group: 'Khronos',
        screenshot: link('./SheenCloth/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SheenCloth', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SheenCloth/glTF/SheenCloth.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SimpleInstancing',
        group: 'Khronos',
        screenshot: link('./SimpleInstancing/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SimpleInstancing', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SimpleInstancing/glTF/SimpleInstancing.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./SimpleInstancing/glTF-Binary/SimpleInstancing.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SimpleMeshes',
        group: 'Khronos',
        screenshot: link('./SimpleMeshes/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SimpleMeshes', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SimpleMeshes/glTF/SimpleMeshes.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./SimpleMeshes/glTF-Embedded/SimpleMeshes.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SimpleMorph',
        group: 'Khronos',
        screenshot: link('./SimpleMorph/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SimpleMorph', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SimpleMorph/glTF/SimpleMorph.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./SimpleMorph/glTF-Embedded/SimpleMorph.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SimpleSkin',
        group: 'Khronos',
        screenshot: link('./SimpleSkin/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SimpleSkin', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SimpleSkin/glTF/SimpleSkin.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./SimpleSkin/glTF-Embedded/SimpleSkin.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SimpleSparseAccessor',
        group: 'Khronos',
        screenshot: link('./SimpleSparseAccessor/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SimpleSparseAccessor', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SimpleSparseAccessor/glTF/SimpleSparseAccessor.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./SimpleSparseAccessor/glTF-Embedded/SimpleSparseAccessor.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SpecGlossVsMetalRough',
        group: 'Khronos',
        screenshot: link('./SpecGlossVsMetalRough/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SpecGlossVsMetalRough', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SpecGlossVsMetalRough/glTF/SpecGlossVsMetalRough.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./SpecGlossVsMetalRough/glTF-Binary/SpecGlossVsMetalRough.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SpecularTest',
        group: 'Khronos',
        screenshot: link('./SpecularTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SpecularTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SpecularTest/glTF/SpecularTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./SpecularTest/glTF-Binary/SpecularTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Sponza',
        group: 'Khronos',
        screenshot: link('./Sponza/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Sponza', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Sponza/glTF/Sponza.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'StainedGlassLamp',
        group: 'Khronos',
        screenshot: link('./StainedGlassLamp/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./StainedGlassLamp', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./StainedGlassLamp/glTF/StainedGlassLamp.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-JPG-PNG': link('./StainedGlassLamp/glTF-JPG-PNG/StainedGlassLamp.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-KTX-BasisU': link('./StainedGlassLamp/glTF-KTX-BasisU/StainedGlassLamp.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Suzanne',
        group: 'Khronos',
        screenshot: link('./Suzanne/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Suzanne', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Suzanne/glTF/Suzanne.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TextureCoordinateTest',
        group: 'Khronos',
        screenshot: link('./TextureCoordinateTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TextureCoordinateTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TextureCoordinateTest/glTF/TextureCoordinateTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./TextureCoordinateTest/glTF-Binary/TextureCoordinateTest.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./TextureCoordinateTest/glTF-Embedded/TextureCoordinateTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TextureEncodingTest',
        group: 'Khronos',
        screenshot: link('./TextureEncodingTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TextureEncodingTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TextureEncodingTest/glTF/TextureEncodingTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./TextureEncodingTest/glTF-Binary/TextureEncodingTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TextureLinearInterpolationTest',
        group: 'Khronos',
        screenshot: link('./TextureLinearInterpolationTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TextureLinearInterpolationTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TextureLinearInterpolationTest/glTF/TextureLinearInterpolationTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./TextureLinearInterpolationTest/glTF-Binary/TextureLinearInterpolationTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TextureSettingsTest',
        group: 'Khronos',
        screenshot: link('./TextureSettingsTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TextureSettingsTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TextureSettingsTest/glTF/TextureSettingsTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./TextureSettingsTest/glTF-Binary/TextureSettingsTest.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./TextureSettingsTest/glTF-Embedded/TextureSettingsTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TextureTransformMultiTest',
        group: 'Khronos',
        screenshot: link('./TextureTransformMultiTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TextureTransformMultiTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TextureTransformMultiTest/glTF/TextureTransformMultiTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./TextureTransformMultiTest/glTF-Binary/TextureTransformMultiTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TextureTransformTest',
        group: 'Khronos',
        screenshot: link('./TextureTransformTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TextureTransformTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TextureTransformTest/glTF/TextureTransformTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'ToyCar',
        group: 'Khronos',
        screenshot: link('./ToyCar/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ToyCar', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ToyCar/glTF/ToyCar.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./ToyCar/glTF-Binary/ToyCar.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TransmissionRoughnessTest',
        group: 'Khronos',
        screenshot: link('./TransmissionRoughnessTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TransmissionRoughnessTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TransmissionRoughnessTest/glTF/TransmissionRoughnessTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./TransmissionRoughnessTest/glTF-Binary/TransmissionRoughnessTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TransmissionTest',
        group: 'Khronos',
        screenshot: link('./TransmissionTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TransmissionTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TransmissionTest/glTF/TransmissionTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./TransmissionTest/glTF-Binary/TransmissionTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Triangle',
        group: 'Khronos',
        screenshot: link('./Triangle/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Triangle', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Triangle/glTF/Triangle.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./Triangle/glTF-Embedded/Triangle.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TriangleWithoutIndices',
        group: 'Khronos',
        screenshot: link('./TriangleWithoutIndices/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TriangleWithoutIndices', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TriangleWithoutIndices/glTF/TriangleWithoutIndices.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./TriangleWithoutIndices/glTF-Embedded/TriangleWithoutIndices.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'TwoSidedPlane',
        group: 'Khronos',
        screenshot: link('./TwoSidedPlane/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TwoSidedPlane', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TwoSidedPlane/glTF/TwoSidedPlane.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Unicode❤♻Test',
        group: 'Khronos',
        screenshot: link('./Unicode❤♻Test/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./Unicode❤♻Test', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Unicode❤♻Test/glTF/Unicode❤♻Test.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./Unicode❤♻Test/glTF-Binary/Unicode❤♻Test.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'UnlitTest',
        group: 'Khronos',
        screenshot: link('./UnlitTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./UnlitTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./UnlitTest/glTF/UnlitTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./UnlitTest/glTF-Binary/UnlitTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'VC',
        group: 'Khronos',
        screenshot: link('./VC/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./VC', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./VC/glTF/VC.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./VC/glTF-Binary/VC.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./VC/glTF-Draco/VC.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./VC/glTF-Embedded/VC.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'VertexColorTest',
        group: 'Khronos',
        screenshot: link('./VertexColorTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./VertexColorTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./VertexColorTest/glTF/VertexColorTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./VertexColorTest/glTF-Binary/VertexColorTest.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./VertexColorTest/glTF-Embedded/VertexColorTest.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'WaterBottle',
        group: 'Khronos',
        screenshot: link('./WaterBottle/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./WaterBottle', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./WaterBottle/glTF/WaterBottle.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./WaterBottle/glTF-Binary/WaterBottle.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./WaterBottle/glTF-Draco/WaterBottle.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'Barrel',
        group: 'Revelry Engine',
        screenshot: link('./Barrel/screenshot.png'),
        source: link('./Barrel', BASE_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Barrel/glTF/barrel.gltf'),
            'glTF-Binary': link('./Barrel/glTF-Binary/barrel.glb'),
        },
    },
    {
        name: 'Jack-o-Lantern',
        group: 'Revelry Engine',
        screenshot: link('./Jack-o-Lantern/screenshot.png'),
        source: link('./Jack-o-Lantern', BASE_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./Jack-o-Lantern/glTF/jack-o-lantern.gltf'),
        },
    },
    {
        name: 'LowPoly',
        group: 'Revelry Engine',
        screenshot: undefined,
        source: link('./LowPoly', BASE_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./LowPoly/glTF/low-poly.gltf'),
        },
    },
    {
        name: 'ShadowsDirectional',
        group: 'Revelry Engine',
        screenshot: link('./ShadowsDirectional/screenshot.png'),
        source: link('./ShadowsDirectional', BASE_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ShadowsDirectional/glTF/shadows-directional.gltf'),
        },
    },
    {
        name: 'ShadowsSpot',
        group: 'Revelry Engine',
        screenshot: link('./ShadowsSpot/screenshot.png'),
        source: link('./ShadowsSpot', BASE_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ShadowsSpot/glTF/shadows-spot.gltf'),
        },
    },
];