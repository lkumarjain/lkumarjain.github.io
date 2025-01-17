import { githubLight, githubDark, } from '@uiw/codemirror-themes-all';

const Themes = {
    githubLight: {
        theme: githubLight,
        titleBar: { backgroundColor: "#f5f5f5" },
        titleText: { backgroundColor: "#FFF", color: "#808080" }
    },
    githubDark: {
        theme: githubDark,
        titleBar: { backgroundColor: "#333338" },
        titleText: { backgroundColor: "#0d1117", color: "#ccc" }
    },
    Values: [
        "githubLight", "githubDark"
    ],
}

export default Themes;