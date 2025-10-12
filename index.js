/** Revelry Engine Sample Models **/
const BASE_KHRONOS_SAMPLE_URL        = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/e72fc5d/Models/';
const BASE_KHRONOS_SAMPLE_SOURCE_URL = 'https://github.com/KhronosGroup/glTF-Sample-Assets/tree/e72fc5d/Models/';
const BASE_SAMPLE_SOURCE_URL         = 'https://github.com/revelryengine/sample-models/tree/main/';

function link(/** @type {string} */path, root = import.meta.url) { return new URL(path, root).toString(); }

export const index = [
    {
        name: 'ABeautifulGame',
        group: 'Khronos',
        screenshot: link('./ABeautifulGame/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ABeautifulGame', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ABeautifulGame/glTF/ABeautifulGame.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./ABeautifulGame/glTF-Binary/ABeautifulGame.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary-KTX-ETC1S-Draco': link('./ABeautifulGame/glTF-Binary-KTX-ETC1S-Draco/ABeautifulGame.glb', BASE_KHRONOS_SAMPLE_URL),
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
        },
    },
    {
        name: 'AnimatedColorsCube',
        group: 'Khronos',
        screenshot: link('./AnimatedColorsCube/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnimatedColorsCube', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnimatedColorsCube/glTF/AnimatedColorsCube.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AnimatedColorsCube/glTF-Binary/AnimatedColorsCube.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'AnimationPointerUVs',
        group: 'Khronos',
        screenshot: link('./AnimationPointerUVs/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnimationPointerUVs', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnimationPointerUVs/glTF/AnimationPointerUVs.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AnimationPointerUVs/glTF-Binary/AnimationPointerUVs.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AnisotropyBarnLamp',
        group: 'Khronos',
        screenshot: link('./AnisotropyBarnLamp/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnisotropyBarnLamp', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnisotropyBarnLamp/glTF/AnisotropyBarnLamp.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AnisotropyBarnLamp/glTF-Binary/AnisotropyBarnLamp.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-KTX-BasisU': link('./AnisotropyBarnLamp/glTF-KTX-BasisU/AnisotropyBarnLamp.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AnisotropyDiscTest',
        group: 'Khronos',
        screenshot: link('./AnisotropyDiscTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnisotropyDiscTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnisotropyDiscTest/glTF/AnisotropyDiscTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AnisotropyDiscTest/glTF-Binary/AnisotropyDiscTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AnisotropyRotationTest',
        group: 'Khronos',
        screenshot: link('./AnisotropyRotationTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnisotropyRotationTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnisotropyRotationTest/glTF/AnisotropyRotationTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AnisotropyRotationTest/glTF-Binary/AnisotropyRotationTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AnisotropyStrengthTest',
        group: 'Khronos',
        screenshot: link('./AnisotropyStrengthTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./AnisotropyStrengthTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./AnisotropyStrengthTest/glTF/AnisotropyStrengthTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./AnisotropyStrengthTest/glTF-Binary/AnisotropyStrengthTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'AntiqueCamera',
        group: 'Khronos',
        screenshot: link('./AntiqueCamera/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'CarConcept',
        group: 'Khronos',
        screenshot: link('./CarConcept/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CarConcept', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CarConcept/glTF/CarConcept.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CarConcept/glTF-Binary/CarConcept.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-JPG': link('./CarConcept/glTF-JPG/CarConcept.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-KTX-BasisU-Draco': link('./CarConcept/glTF-KTX-BasisU-Draco/CarConcept.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-WEBP': link('./CarConcept/glTF-WEBP/CarConcept.gltf', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CarbonFibre',
        group: 'Khronos',
        screenshot: link('./CarbonFibre/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CarbonFibre', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CarbonFibre/glTF/CarbonFibre.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CarbonFibre/glTF-Binary/CarbonFibre.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'ChairDamaskPurplegold',
        group: 'Khronos',
        screenshot: link('./ChairDamaskPurplegold/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ChairDamaskPurplegold', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ChairDamaskPurplegold/glTF/ChairDamaskPurplegold.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./ChairDamaskPurplegold/glTF-Binary/ChairDamaskPurplegold.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'ChronographWatch',
        group: 'Khronos',
        screenshot: link('./ChronographWatch/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ChronographWatch', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ChronographWatch/glTF/ChronographWatch.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./ChronographWatch/glTF-Binary/ChronographWatch.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-KTX-BasisU': link('./ChronographWatch/glTF-KTX-BasisU/ChronographWatch.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-WEBP': link('./ChronographWatch/glTF-WEBP/ChronographWatch.gltf', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'CommercialRefrigerator',
        group: 'Khronos',
        screenshot: link('./CommercialRefrigerator/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CommercialRefrigerator', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CommercialRefrigerator/glTF/CommercialRefrigerator.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CommercialRefrigerator/glTF-Binary/CommercialRefrigerator.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareAlphaCoverage',
        group: 'Khronos',
        screenshot: link('./CompareAlphaCoverage/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareAlphaCoverage', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareAlphaCoverage/glTF/CompareAlphaCoverage.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareAlphaCoverage/glTF-Binary/CompareAlphaCoverage.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareAmbientOcclusion',
        group: 'Khronos',
        screenshot: link('./CompareAmbientOcclusion/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareAmbientOcclusion', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareAmbientOcclusion/glTF/CompareAmbientOcclusion.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareAmbientOcclusion/glTF-Binary/CompareAmbientOcclusion.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareAnisotropy',
        group: 'Khronos',
        screenshot: link('./CompareAnisotropy/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareAnisotropy', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareAnisotropy/glTF/CompareAnisotropy.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareAnisotropy/glTF-Binary/CompareAnisotropy.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareBaseColor',
        group: 'Khronos',
        screenshot: link('./CompareBaseColor/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareBaseColor', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareBaseColor/glTF/CompareBaseColor.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareBaseColor/glTF-Binary/CompareBaseColor.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareClearcoat',
        group: 'Khronos',
        screenshot: link('./CompareClearcoat/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareClearcoat', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareClearcoat/glTF/CompareClearcoat.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareClearcoat/glTF-Binary/CompareClearcoat.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareDispersion',
        group: 'Khronos',
        screenshot: link('./CompareDispersion/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareDispersion', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareDispersion/glTF/CompareDispersion.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareDispersion/glTF-Binary/CompareDispersion.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareEmissiveStrength',
        group: 'Khronos',
        screenshot: link('./CompareEmissiveStrength/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareEmissiveStrength', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareEmissiveStrength/glTF/CompareEmissiveStrength.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareEmissiveStrength/glTF-Binary/CompareEmissiveStrength.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareIor',
        group: 'Khronos',
        screenshot: link('./CompareIor/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareIor', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareIor/glTF/CompareIor.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareIor/glTF-Binary/CompareIor.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareIridescence',
        group: 'Khronos',
        screenshot: link('./CompareIridescence/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareIridescence', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareIridescence/glTF/CompareIridescence.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareIridescence/glTF-Binary/CompareIridescence.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareMetallic',
        group: 'Khronos',
        screenshot: link('./CompareMetallic/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareMetallic', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareMetallic/glTF/CompareMetallic.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareMetallic/glTF-Binary/CompareMetallic.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareNormal',
        group: 'Khronos',
        screenshot: link('./CompareNormal/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareNormal', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareNormal/glTF/CompareNormal.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareNormal/glTF-Binary/CompareNormal.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareRoughness',
        group: 'Khronos',
        screenshot: link('./CompareRoughness/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareRoughness', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareRoughness/glTF/CompareRoughness.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareRoughness/glTF-Binary/CompareRoughness.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareSheen',
        group: 'Khronos',
        screenshot: link('./CompareSheen/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareSheen', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareSheen/glTF/CompareSheen.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareSheen/glTF-Binary/CompareSheen.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareSpecular',
        group: 'Khronos',
        screenshot: link('./CompareSpecular/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareSpecular', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareSpecular/glTF/CompareSpecular.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareSpecular/glTF-Binary/CompareSpecular.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareTransmission',
        group: 'Khronos',
        screenshot: link('./CompareTransmission/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareTransmission', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareTransmission/glTF/CompareTransmission.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareTransmission/glTF-Binary/CompareTransmission.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'CompareVolume',
        group: 'Khronos',
        screenshot: link('./CompareVolume/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./CompareVolume', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./CompareVolume/glTF/CompareVolume.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./CompareVolume/glTF-Binary/CompareVolume.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'DiffuseTransmissionPlant',
        group: 'Khronos',
        screenshot: link('./DiffuseTransmissionPlant/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./DiffuseTransmissionPlant', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./DiffuseTransmissionPlant/glTF/DiffuseTransmissionPlant.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./DiffuseTransmissionPlant/glTF-Binary/DiffuseTransmissionPlant.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'DiffuseTransmissionTeacup',
        group: 'Khronos',
        screenshot: link('./DiffuseTransmissionTeacup/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./DiffuseTransmissionTeacup', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./DiffuseTransmissionTeacup/glTF/DiffuseTransmissionTeacup.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./DiffuseTransmissionTeacup/glTF-Binary/DiffuseTransmissionTeacup.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'DiffuseTransmissionTest',
        group: 'Khronos',
        screenshot: link('./DiffuseTransmissionTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./DiffuseTransmissionTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./DiffuseTransmissionTest/glTF/DiffuseTransmissionTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./DiffuseTransmissionTest/glTF-Binary/DiffuseTransmissionTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'DirectionalLight',
        group: 'Khronos',
        screenshot: link('./DirectionalLight/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./DirectionalLight', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./DirectionalLight/glTF/DirectionalLight.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./DirectionalLight/glTF-Binary/DirectionalLight.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'DispersionTest',
        group: 'Khronos',
        screenshot: link('./DispersionTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./DispersionTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./DispersionTest/glTF/DispersionTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./DispersionTest/glTF-Binary/DispersionTest.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'DragonDispersion',
        group: 'Khronos',
        screenshot: link('./DragonDispersion/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./DragonDispersion', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./DragonDispersion/glTF/DragonDispersion.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./DragonDispersion/glTF-Binary/DragonDispersion.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'GlassBrokenWindow',
        group: 'Khronos',
        screenshot: link('./GlassBrokenWindow/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./GlassBrokenWindow', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./GlassBrokenWindow/glTF/GlassBrokenWindow.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./GlassBrokenWindow/glTF-Binary/GlassBrokenWindow.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'GlassHurricaneCandleHolder',
        group: 'Khronos',
        screenshot: link('./GlassHurricaneCandleHolder/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./GlassHurricaneCandleHolder', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./GlassHurricaneCandleHolder/glTF/GlassHurricaneCandleHolder.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./GlassHurricaneCandleHolder/glTF-Binary/GlassHurricaneCandleHolder.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'GlassVaseFlowers',
        group: 'Khronos',
        screenshot: link('./GlassVaseFlowers/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./GlassVaseFlowers', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./GlassVaseFlowers/glTF/GlassVaseFlowers.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./GlassVaseFlowers/glTF-Binary/GlassVaseFlowers.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'IORTestGrid',
        group: 'Khronos',
        screenshot: link('./IORTestGrid/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./IORTestGrid', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./IORTestGrid/glTF/IORTestGrid.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./IORTestGrid/glTF-Binary/IORTestGrid.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'IridescenceAbalone',
        group: 'Khronos',
        screenshot: link('./IridescenceAbalone/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./IridescenceAbalone', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./IridescenceAbalone/glTF/IridescenceAbalone.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./IridescenceAbalone/glTF-Binary/IridescenceAbalone.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'MandarinOrange',
        group: 'Khronos',
        screenshot: link('./MandarinOrange/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./MandarinOrange', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./MandarinOrange/glTF/MandarinOrange.gltf', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'NodePerformanceTest',
        group: 'Khronos',
        screenshot: link('./NodePerformanceTest/screenshot/screenshot_large.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./NodePerformanceTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF-Binary': link('./NodePerformanceTest/glTF-Binary/NodePerformanceTest.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'PlaysetLightTest',
        group: 'Khronos',
        screenshot: link('./PlaysetLightTest/screenshot/screenshot_large.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./PlaysetLightTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF-Binary': link('./PlaysetLightTest/glTF-Binary/PlaysetLightTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'PointLightIntensityTest',
        group: 'Khronos',
        screenshot: link('./PointLightIntensityTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./PointLightIntensityTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./PointLightIntensityTest/glTF/PointLightIntensityTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./PointLightIntensityTest/glTF-Binary/PointLightIntensityTest.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'PotOfCoals',
        group: 'Khronos',
        screenshot: link('./PotOfCoals/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./PotOfCoals', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./PotOfCoals/glTF/PotOfCoals.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./PotOfCoals/glTF-Binary/PotOfCoals.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'PotOfCoalsAnimationPointer',
        group: 'Khronos',
        screenshot: link('./PotOfCoalsAnimationPointer/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./PotOfCoalsAnimationPointer', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./PotOfCoalsAnimationPointer/glTF/PotOfCoalsAnimationPointer.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./PotOfCoalsAnimationPointer/glTF-Binary/PotOfCoalsAnimationPointer.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'PrimitiveModeNormalsTest',
        group: 'Khronos',
        screenshot: link('./PrimitiveModeNormalsTest/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./PrimitiveModeNormalsTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./PrimitiveModeNormalsTest/glTF/PrimitiveModeNormalsTest.gltf', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'ScatteringSkull',
        group: 'Khronos',
        screenshot: link('./ScatteringSkull/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./ScatteringSkull', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./ScatteringSkull/glTF/ScatteringSkull.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./ScatteringSkull/glTF-Binary/ScatteringSkull.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'SheenTestGrid',
        group: 'Khronos',
        screenshot: link('./SheenTestGrid/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SheenTestGrid', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SheenTestGrid/glTF/SheenTestGrid.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./SheenTestGrid/glTF-Binary/SheenTestGrid.glb', BASE_KHRONOS_SAMPLE_URL),
        },
    },
    {
        name: 'SheenWoodLeatherSofa',
        group: 'Khronos',
        screenshot: link('./SheenWoodLeatherSofa/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SheenWoodLeatherSofa', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SheenWoodLeatherSofa/glTF/SheenWoodLeatherSofa.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./SheenWoodLeatherSofa/glTF-Binary/SheenWoodLeatherSofa.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'SimpleMaterial',
        group: 'Khronos',
        screenshot: link('./SimpleMaterial/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SimpleMaterial', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SimpleMaterial/glTF/SimpleMaterial.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./SimpleMaterial/glTF-Embedded/SimpleMaterial.gltf', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'SimpleTexture',
        group: 'Khronos',
        screenshot: link('./SimpleTexture/screenshot/screenshot.png', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SimpleTexture', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SimpleTexture/glTF/SimpleTexture.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./SimpleTexture/glTF-Embedded/SimpleTexture.gltf', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'SpecularSilkPouf',
        group: 'Khronos',
        screenshot: link('./SpecularSilkPouf/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SpecularSilkPouf', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SpecularSilkPouf/glTF/SpecularSilkPouf.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./SpecularSilkPouf/glTF-Binary/SpecularSilkPouf.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'SunglassesKhronos',
        group: 'Khronos',
        screenshot: link('./SunglassesKhronos/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./SunglassesKhronos', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SunglassesKhronos/glTF/SunglassesKhronos.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./SunglassesKhronos/glTF-Binary/SunglassesKhronos.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./SunglassesKhronos/glTF-Draco/SunglassesKhronos.gltf', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'TransmissionOrderTest',
        group: 'Khronos',
        screenshot: link('./TransmissionOrderTest/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TransmissionOrderTest', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TransmissionOrderTest/glTF/TransmissionOrderTest.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./TransmissionOrderTest/glTF-Binary/TransmissionOrderTest.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'TransmissionThinwallTestGrid',
        group: 'Khronos',
        screenshot: link('./TransmissionThinwallTestGrid/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./TransmissionThinwallTestGrid', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./TransmissionThinwallTestGrid/glTF/TransmissionThinwallTestGrid.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./TransmissionThinwallTestGrid/glTF-Binary/TransmissionThinwallTestGrid.glb', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'VirtualCity',
        group: 'Khronos',
        screenshot: link('./VirtualCity/screenshot/screenshot.gif', BASE_KHRONOS_SAMPLE_URL),
        source: link('./VirtualCity', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./VirtualCity/glTF/VirtualCity.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./VirtualCity/glTF-Binary/VirtualCity.glb', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Draco': link('./VirtualCity/glTF-Draco/VirtualCity.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Embedded': link('./VirtualCity/glTF-Embedded/VirtualCity.gltf', BASE_KHRONOS_SAMPLE_URL),
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
        name: 'XmpMetadataRoundedCube',
        group: 'Khronos',
        screenshot: link('./XmpMetadataRoundedCube/screenshot/screenshot.jpg', BASE_KHRONOS_SAMPLE_URL),
        source: link('./XmpMetadataRoundedCube', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./XmpMetadataRoundedCube/glTF/XmpMetadataRoundedCube.gltf', BASE_KHRONOS_SAMPLE_URL),
            'glTF-Binary': link('./XmpMetadataRoundedCube/glTF-Binary/XmpMetadataRoundedCube.glb', BASE_KHRONOS_SAMPLE_URL),
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
    {
        name: 'SimpleDolly',
        group: 'Revelry Engine',
        screenshot: undefined,
        source: link('./SimpleDolly', BASE_SAMPLE_SOURCE_URL),
        variants: {
            'glTF': link('./SimpleDolly/glTF/simple-dolly.gltf'),
        },
    },
];