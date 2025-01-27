import { consoleLight, consoleDark, eclipse, githubLight, githubDark, vscodeLight, vscodeDark } from '@uiw/codemirror-themes-all';

const Themes = {
    "Console Light": {
        theme: consoleLight,
        titleBar: { backgroundColor: "#f5f5f5" },
        titleText: { "--bsw": 0, backgroundColor: "#FFF", color: "#808080" },
        background: "#808080"
    },
    "Console Dark": {
        theme: consoleDark,
        titleBar: { backgroundColor: "#333338" },
        titleText: { "--bsw": 255, backgroundColor: "#0d1117", color: "#ccc" },
        background: "#ccc"
    },
    "Eclipse": {
        theme: eclipse,
        titleBar: { backgroundColor: "#f5f5f5" },
        titleText: { "--bsw": 0, backgroundColor: "#FFF", color: "#808080" },
        background: "#808080"
    },
    "Github Light": {
        theme: githubLight,
        titleBar: { backgroundColor: "#f5f5f5" },
        titleText: { "--bsw": 0, backgroundColor: "#FFF", color: "#808080" },
        background: "#808080"
    },
    "Github Dark": {
        theme: githubDark,
        titleBar: { backgroundColor: "#333338" },
        titleText: { "--bsw": 255, backgroundColor: "#0d1117", color: "#ccc" },
        background: "#ccc"
    },
    "VSCode Light": {
        theme: vscodeLight,
        titleBar: { backgroundColor: "#f5f5f5" },
        titleText: { "--bsw": 0, backgroundColor: "#FFF", color: "#808080" },
        background: "#808080"
    },
    "VSCode Dark": {
        theme: vscodeDark,
        titleBar: { backgroundColor: "#333338" },
        titleText: { "--bsw": 255, backgroundColor: "#0d1117", color: "#ccc" },
        background: "#ccc"
    },
    Values: [
        "Console Light", "Console Dark", "Eclipse", "Github Light", "Github Dark", "VSCode Light", "VSCode Dark",
    ],
    Default: "Github Light",
}

export default Themes;