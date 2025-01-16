import PropTypes from 'prop-types';
import { Divider, Paper } from '@material-ui/core';
import CodeMirror from '@uiw/react-codemirror';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import Themes from './theme';

import "./index.css";

export function Editor(props) {
    const { elevation = 12, themeName = "githubLight",
        fileName = "Program", language = "go", fontSize = "20px",
        highlight = false, hasOutput = true } = props;
    const { theme, titleBar, titleText } = Themes[themeName];

    console.log("Editor: ", titleText, " params: ", props, " theme: ", Themes);
    return (
        <>
            <Paper elevation={elevation} style={{ paddingBottom: "10px ", borderRadius: "5px" }}>
                <div className="code-editor-title-bar" style={{ ...titleBar }}>
                    <div className="code-editor-title-buttons">
                        <div className="code-editor-title-button" />
                        <div className="code-editor-title-button" />
                        <div className="code-editor-title-button" />
                    </div>
                    <p className="code-editor-title-text" style={{ ...titleText }}>
                        {/* <img src={language.image} alt="" className="code-editor-language-icon" /> */}
                        <span contentEditable>{[fileName, language].join('.')}</span>
                    </p>
                </div>
                <CodeMirror value="console.log('hello world!');" height="auto" width="auto" theme={theme} extensions={[loadLanguage(language)]}
                    basicSetup={{ highlightActiveLine: highlight, highlightActiveLineGutter: highlight }}
                    style={{ fontSize: fontSize }} />
            </Paper>

            {hasOutput &&
                <Paper elevation={elevation} style={{ paddingBottom: "10px ", borderRadius: "5px", margin: "10px auto 0px auto", width: "80%" }}>
                    <div className="code-editor-output-title-text" style={{ ...titleText }}>
                        <span contentEditable>Output</span>
                    </div>
                    <Divider />
                    <CodeMirror value="console.log('hello world!');" height="auto" width="auto" theme={theme} extensions={[loadLanguage('shell')]}
                        basicSetup={{ highlightActiveLine: false, highlightActiveLineGutter: false }}
                        style={{ fontSize: fontSize }} />
                </Paper>
            }
        </>
    )
}

Editor.propTypes = {
    elevation: PropTypes.number,
    themeName: PropTypes.string.isRequired,
    fileName: PropTypes.string,
    language: PropTypes.string.isRequired,
    fontSize: PropTypes.string,
    highlight: PropTypes.bool,
    hasOutput: PropTypes.bool,
};