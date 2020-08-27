import Flexbox from 'flexbox-react';
import React from 'react';
import MenuLink from './menuLink'

const Menu = () => {
    return (
        <Flexbox className="menu-container margin--lg">
            <MenuLink title="Home" active={true} />
            <MenuLink title="About" />
            <MenuLink title="Work" />
            <MenuLink title="Design" />
            <MenuLink title="Photography" />
        </Flexbox>
    )
}

export default Menu;