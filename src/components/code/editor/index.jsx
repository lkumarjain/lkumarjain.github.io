import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import Themes from './theme';
import FontFamily from './font';

import "./index.css";

export function Editor(props) {
    const { elevation = 12, themeName = Themes.Default,
        fileName = "Program", language = "go", fontSize = "20px", fontWeight = 500, fontFamily = FontFamily.Default,
        highlight = false, hasOutput = true } = props;
    const { theme, titleBar, titleText } = Themes[themeName];

    console.log("Editor: ", titleText, " params: ", props, " theme: ", Themes, "Settings", theme);
    return (
        <>
            <Paper elevation={elevation} style={{
                borderRadius: "5px", background: titleText.backgroundColor,
                border: ["5px solid", titleBar.backgroundColor].join(' ')
            }}>
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
                    style={{ fontSize: fontSize, fontWeight: fontWeight, fontFamily: fontFamily }} />
            </Paper>

            {hasOutput &&
                <Paper elevation={elevation} sx={{
                    borderRadius: "5px", margin: "10px auto 0px auto", width: "80%",
                    background: titleText.backgroundColor,
                    border: ["5px solid", titleBar.backgroundColor].join(' ')
                }}>
                    <div className="code-editor-output-title-text" style={{ ...titleText, ...titleBar }}>
                        <span contentEditable>Output</span>
                    </div>
                    <CodeMirror value="console.log('hello world!');" height="auto" width="auto" theme={theme} extensions={[loadLanguage('shell')]}
                        basicSetup={{ highlightActiveLine: highlight, highlightActiveLineGutter: highlight }}
                        style={{ fontSize: fontSize, fontWeight: fontWeight, fontFamily: fontFamily }} />
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
    fontWeight: PropTypes.number,
    highlight: PropTypes.bool,
    hasOutput: PropTypes.bool,
};