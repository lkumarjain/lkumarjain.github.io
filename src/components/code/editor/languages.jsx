import AzuresqldatabaseOriginal from 'devicons-react/lib/icons/AzuresqldatabaseOriginal';
import COriginal from 'devicons-react/lib/icons/COriginal';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import DockerOriginal from 'devicons-react/lib/icons/DockerOriginal';
import GoOriginalWordmark from 'devicons-react/lib/icons/GoOriginalWordmark';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import JavaOriginal from 'devicons-react/lib/icons/JavaOriginal';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import JsonOriginal from 'devicons-react/lib/icons/JsonOriginal';
import MarkdownOriginal from 'devicons-react/lib/icons/MarkdownOriginal';
import PowershellOriginal from 'devicons-react/lib/icons/PowershellOriginal';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import ScalaOriginal from 'devicons-react/lib/icons/ScalaOriginal';
import XmlOriginal from 'devicons-react/lib/icons/XmlOriginal';
import YamlOriginal from 'devicons-react/lib/icons/YamlOriginal';

import "./index.css";

const Languages = {
    "C": {
        name: "c",
        extension: "c",
        image: <COriginal className="code-editor-title-language-logo" size={30} />,
    },
    "CSS": {
        name: "css",
        extension: "css",
        image: <Css3Original className="code-editor-title-language-logo" size={30} />,
    },
    "Docker File": {
        name: "dockerfile",
        extension: "dockerfile",
        image: <DockerOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "Golang": {
        name: "go",
        extension: "go",
        image: <GoOriginalWordmark className="code-editor-title-language-logo" size={30} />,
    },
    "HTML": {
        name: "html",
        extension: "html",
        image: <Html5Original className="code-editor-title-language-logo" size={30} />,
    },
    "Java": {
        name: "java",
        extension: "java",
        image: <JavaOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "Java Script": {
        name: "javascript",
        extension: "js",
        image: <JavascriptOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "JSON": {
        name: "json",
        extension: "json",
        image: <JsonOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "Markdown": {
        name: "markdown",
        extension: "md",
        image: <MarkdownOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "Python": {
        name: "python",
        extension: "py",
        image: <PythonOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "Scala": {
        name: "scala",
        extension: "scala",
        image: <ScalaOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "Shell": {
        name: "shell",
        extension: "sh",
        image: <PowershellOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "SQL": {
        name: "sql",
        extension: "sql",
        image: <AzuresqldatabaseOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "XML": {
        name: "xml",
        extension: "xml",
        image: <XmlOriginal className="code-editor-title-language-logo" size={30} />,
    },
    "YAML": {
        name: "yaml",
        extension: "yaml",
        image: <YamlOriginal className="code-editor-title-language-logo" size={30} />,
    },
    Values: [
        "C", "CSS", "Docker File", "HTML", "Golang", "Java", "Java Script", "JSON",
        "Markdown", "Python", "Scala", "Shell", "SQL", "XML", "YAML"
    ],
    Default: "Golang",
}

export default Languages;