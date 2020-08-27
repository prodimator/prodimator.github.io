import Flexbox from 'flexbox-react';
import React from 'react';
import { TwitterOutlined, InstagramFilled, GithubFilled } from '@ant-design/icons';
import { Divider } from 'antd';

const VerticalIcons = () => {
    return (
        <Flexbox className="vertical-icons-container margin--lg" flexDirection="column" justifyContent="center" flex="1">
            <Divider className="vertical-divider-long" type="vertical" orientation="center" />
            <TwitterOutlined onClick={() => window.open('https://twitter.com/prodimator')} />
            <InstagramFilled onClick={() => window.open('https://instagram.com/prodimator')} />
            <GithubFilled onClick={() => window.open('https://github.com/prodimator')} />
            <Divider className="vertical-divider-long" type="vertical" orientation="center" />

        </Flexbox>
    )
}

export default VerticalIcons;