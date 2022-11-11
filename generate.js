import { expandGlobSync } from "https://deno.land/std/fs/mod.ts";

const BASE_KHRONOS_SAMPLE_URL        = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/8e9a5a6/2.0/';
const BASE_KHRONOS_SAMPLE_SOURCE_URL = 'https://github.com/KhronosGroup/glTF-Sample-Models/tree/8e9a5a6/2.0/';
const BASE_SAMPLE_SOURCE_URL         = 'https://github.com/revelryengine/sample-models/tree/main/';

const khronosIndex = await fetch(`${BASE_KHRONOS_SAMPLE_URL}/model-index.json`).then(res => res.json());
const khronosSamples = khronosIndex.map((model) => {
    const variants = Object.fromEntries(Object.entries(model.variants).map(([name, file]) => {
        return [name, `./${model.name}/${name}/${file}`];
    }));

    const screenshot = `./${model.name}/${model.screenshot}`;
    const source = `./${model.name}`;
    return { ...model, screenshot, source, variants };
});

function getDirectories(path) {
    return [...Deno.readDirSync(path)].filter(file => file.isDirectory && !file.name.startsWith('.'))
}

const modelDirs = getDirectories('./');
const samples   = modelDirs.map(dir => {
    const variantDirs = getDirectories(`./${dir.name}`);
    const variants = Object.fromEntries(variantDirs.map(varDir => {
        return [varDir.name, `./${dir.name}/${varDir.name}/${[...expandGlobSync(`./${dir.name}/${varDir.name}/*.gl*`)][0].name}`];
    }));
    const screenfile = [...expandGlobSync(`./${dir.name}/screenshot.*`)][0];
    const screenshot = screenfile ? `./${dir.name}/${screenfile.name}`: undefined;
    const source = `./${dir.name}`;
    return { name: dir.name, screenshot, source, variants };
});

console.log(`Generating ./index.js`);
const index = `/** Revelry Engine Sample Models **/
const BASE_KHRONOS_SAMPLE_URL        = '${BASE_KHRONOS_SAMPLE_URL}';
const BASE_KHRONOS_SAMPLE_SOURCE_URL = '${BASE_KHRONOS_SAMPLE_SOURCE_URL}';
const BASE_SAMPLE_SOURCE_URL         = '${BASE_SAMPLE_SOURCE_URL}';

function link(path, root = import.meta.url) { return new URL(path, root).toString(); }

export default [
${khronosSamples.map(({ name, screenshot, source, variants }) => 
`    { 
        name: '${name}',
        group: 'Khronos',
        screenshot: link('${screenshot}', BASE_KHRONOS_SAMPLE_URL),
        source: link('${source}', BASE_KHRONOS_SAMPLE_SOURCE_URL),
        variants: {
${Object.entries(variants).map(([name, variant]) => 
`            '${name}': link('${variant}', BASE_KHRONOS_SAMPLE_URL),`).join('\n')}
        },
    },`).join('\n')}
${samples.map(({ name, screenshot, source, variants }) => 
`    { 
        name: '${name}',
        group: 'Revelry Engine',
        screenshot: ${screenshot ? `link('${screenshot}')`: 'undefined'},
        source: link('${source}', BASE_SAMPLE_SOURCE_URL),
        variants: {
${Object.entries(variants).map(([name, variant]) => 
`            '${name}': link('${variant}'),`).join('\n')}
        },
    },`).join('\n')}
];`;

await Deno.writeTextFile(`./index.js`, index);
