import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from "@codemirror/view"
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import Themes from './theme';
import FontFamily from './fontfamily';
import Languages from './languages';

import "./index.css";
import { Title } from './title';

export function Editor(props) {
    const { elevation = 12, themeName = Themes.Default,
        fileName = "Program", language = Languages.Default, fontSize = "20px", fontWeight = 500, fontFamily = FontFamily.Default,
        highlight = false, showResult = true } = props;
    const { theme, titleBar, titleText } = Themes[themeName];

    console.log("Editor: ", titleText, " params: ", props, " theme: ", Themes, "Settings", theme, language, Languages[language]);
    return (
        <>
            <Paper elevation={elevation} style={{
                borderRadius: "5px", background: titleText.backgroundColor,
                border: ["5px solid", titleBar.backgroundColor].join(' ')
            }}>
                <Title themeName={themeName} fileName={fileName} language={language} />
                <CodeMirror value="console.log('hello world!');" height="auto" width="auto" theme={theme}
                    extensions={[loadLanguage(Languages[language].name), EditorView.lineWrapping]}
                    basicSetup={{ highlightActiveLine: highlight, highlightActiveLineGutter: highlight }}
                    style={{ fontSize: fontSize, fontWeight: fontWeight, fontFamily: fontFamily }} />
            </Paper>

            {showResult &&
                <Paper elevation={elevation} sx={{
                    borderRadius: "5px", margin: "10px auto 0px auto", width: "80%",
                    background: titleText.backgroundColor,
                    border: ["5px solid", titleBar.backgroundColor].join(' ')
                }}>
                    <Title variant="result" themeName={themeName} language="Shell" />
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
    showResult: PropTypes.bool,
};