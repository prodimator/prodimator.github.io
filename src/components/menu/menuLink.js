import Flexbox from 'flexbox-react';
import React from 'react';

const MenuLink = ({ title, active }) => {
    return (
        <span className={`menu-link ${active && 'active'} font-size--sm font-weight--bold margin-right--lg`}>
            {title}
        </span>
    )
}

export default MenuLink;