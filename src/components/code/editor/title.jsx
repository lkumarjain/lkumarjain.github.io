import PropTypes from 'prop-types';
import Themes from './theme';
import Languages from './languages';
import "./title.css";

export function Title(props) {
    const { variant = "code", themeName = Themes.Default, fileName = "Program", language = Languages.Default, } = props;

    const { titleBar, titleText } = Themes[themeName];

    return (
        <div className="code-editor-title-bar" style={{ ...titleBar }}>
            {variant === "code" &&
                <>
                    <div className="code-editor-title-buttons">
                        <div className="code-editor-title-button" />
                        <div className="code-editor-title-button" />
                        <div className="code-editor-title-button" />
                    </div>
                    <p className="code-editor-title" style={{
                        ...titleText,
                        boxShadow: "rgba(var(--bsw), var(--bsw), var(--bsw), 0.25) 0px 14px 28px, rgba(var(--bsw), var(--bsw), var(--bsw), 0.22) 0px 10px 10px"
                    }}>
                        {Languages[language].image}
                        <span>{[fileName, Languages[language].extension].join('.')}</span>
                    </p>
                </>
            }
            {variant === "result" &&
                <div className="code-editor-result-title" style={{ ...titleText, ...titleBar }}>
                    {Languages[language].image}
                    <span contentEditable>Execution Result</span>
                </div>
            }
        </div>
    )
}

Title.propTypes = {
    variant: PropTypes.oneOf(["code", "result"]),
    themeName: PropTypes.string.isRequired,
    fileName: PropTypes.string,
    language: PropTypes.string.isRequired,
};