import Flexbox from 'flexbox-react';
import React from 'react';

const Button = ({
    primary,
    secondary,
    label,
    onClick,
    className,
}) => {
    return (
        <Flexbox className={`button-container ${className}`}>
            <button className={`font-weight--bold font-size--sm ${primary && 'primary'} ${secondary && 'secondary'}`}>
                {label}
            </button>
        </Flexbox>
    )
}

export default Button;