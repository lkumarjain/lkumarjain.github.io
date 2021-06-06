import React from 'react';
import PropTypes from 'prop-types';
import Oops from '../oops';
import './image.css';

export default function Image(props) {
    const { src, alt, variant = "default", pattern = "", lightbox = false, onClick, onError, className, ...rest } = props;

    const [state, setState] = React.useState({ errored: false, lightbox: false });
    function handleError(event) {
        if (!state.errored) {
            setState({ errored: true, lightbox: false });
            if (onError) { onError(event); }
        }
    }

    function handleClick(event) {
        if (lightbox) { setState({ errored: state.errored, lightbox: !state.lightbox }); }
        else if (onClick) { onClick(event); }
    }

    return <>
        {!state.errored &&
            <img src={src} alt={alt} onError={handleError} onClick={handleClick}
                className={["material-image", variant, pattern, className].join(' ')} {...rest} />
        }
        {state.errored && <Oops className={["material-image", variant, pattern, className].join(' ')} />}

        {state.lightbox &&
            <div className="material-image-lightbox" onClick={handleClick}>
                <img src={src} alt={alt} onError={handleError}
                    className={["material-image", "default"].join(' ')} />
            </div>
        }
    </>
}

Image.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'avatar']),
    pattern: PropTypes.oneOf(['', 'bevel', 'circle', 'decagon', 'ellipse', 'heptagon', 'hexagon', 'message', 'nonagon', 'octagon', 'parallelogram', 'pentagon', 'rabbet', 'rhombus']),
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    lightbox: PropTypes.bool,
    onClick: PropTypes.func,
    onError: PropTypes.func,
};
