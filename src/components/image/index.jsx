import React from 'react';
import PropTypes from 'prop-types';
import Oops from '../oops';
import './image.css';

export default function Image(props) {
    const { src, alt, variant = "default", pattern = "", credit, lightbox = false,
        onClick, onError, className, ...rest } = props;

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

    return <div className="jn-image-wrapper">
        
        {!state.errored &&
            <img src={src} alt={alt} onError={handleError} onClick={handleClick}
                className={["jn-image", variant, pattern, className].join(' ')} {...rest} />
        }
        {state.errored && <Oops className={["jn-image", variant, pattern, className].join(' ')} />}

        {credit && <div className="jn-image-credit">{credit}</div>}

        {state.lightbox &&
            <div className="jn-image-lightbox" onClick={handleClick}>
                <img src={src} alt={alt} onError={handleError}
                    className={["jn-image", "default"].join(' ')} />
            </div>
        }
    </div>
}

Image.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'avatar']),
    pattern: PropTypes.oneOf(['', 'bevel', 'circle', 'decagon', 'ellipse', 'heptagon', 'hexagon', 'message', 'nonagon', 'octagon', 'parallelogram', 'pentagon', 'rabbet', 'rhombus']),
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    credit: PropTypes.node,
    lightbox: PropTypes.bool,
    onClick: PropTypes.func,
    onError: PropTypes.func,
};
