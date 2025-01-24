import GoOriginalWordmark from 'devicons-react/lib/icons/GoOriginalWordmark';
import PowershellOriginal from 'devicons-react/lib/icons/PowershellOriginal';

import "./index.css";

const Languages = {
    "Golang": {
        name: "go",
        extension: "go",
        image: <GoOriginalWordmark className="code-editor-title-language-logo" size={30} />,
    },
    "Shell": {
        name: "shell",
        extension: "sh",
        image: <PowershellOriginal className="code-editor-title-language-logo" size={30} />,
    },
    Values: [
        "Golang", "Shell",
    ],
    Default: "Golang",
}

export default Languages;