import Flexbox from 'flexbox-react';
import React from 'react';
import Jarvis from '../../components/jarvis';
//import Button from '../../components/button';
import { Button, Tooltip } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import NameAnimation from './nameAnimation';


const Home = () => {

    const sendMail = () => {
        window.location = "mailto:rwolfe22@gmail.com";
    }
    return (
        <Flexbox className="home-container margin--lg width--full-width">
            <Flexbox className="home-content" justifyContent="space-between" alignItems="center">
                <Flexbox flexDirection="column" className="width--half-width">
                    <Flexbox className="margin-y--sm">
                        <NameAnimation />
                    </Flexbox>
                    <h3 className="margin-y--sm">Software Developer | Designer | Photographer</h3>
                    <h4 className="margin-y--sm">Hello! I am a developer and designer with years of experience creating and designing websites. I occasionally find myself behind the lens of a camera too. Check out my work or say hi!</h4>
                    {/* <Button className="margin-y--lg" label={'contact me'} secondary={true} /> */}
                    <Button type="primary" onClick={sendMail} className="margin-y--lg" size="middle" style={{ width: '150px', borderRadius: '6px' }} icon={<MailOutlined />}>
                        Contact Me
                    </Button>
                </Flexbox>
                <div className="padding--lg" />
                {/* <Jarvis /> */}
            </Flexbox>
        </Flexbox >
    )
}

export default Home;