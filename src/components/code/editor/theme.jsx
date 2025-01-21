import { githubLight, githubDark, } from '@uiw/codemirror-themes-all';

const Themes = {
    "Github Light": {
        theme: githubLight,
        titleBar: { backgroundColor: "#f5f5f5" },
        titleText: { backgroundColor: "#FFF", color: "#808080" },
        background: "#808080"
    },
    "Github Dark": {
        theme: githubDark,
        titleBar: { backgroundColor: "#333338" },
        titleText: { backgroundColor: "#0d1117", color: "#ccc" },
        background: "#ccc"
    },
    Values: [
        "Github Light", "Github Dark"
    ],
    Default: "Github Light",
}

export default Themes;