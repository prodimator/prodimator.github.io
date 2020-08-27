import Flexbox from 'flexbox-react';
import React from 'react';
import { WarningFilled } from '@ant-design/icons';
import { ReactComponent as WorkingSVG } from '../../assets/BugFix.svg';


const UnderConstruction = () => {
    return (
        <Flexbox className="under-construction-container">
            <Flexbox className="width--half-width" flexDirection="column" justifyContent="center" alignItems="center">
                <WarningFilled className="margin-y--md" style={{ fontSize: '70px' }} />
                <h2>Thanks for stopping by!</h2>
                <h5>This site is currently under construction, check back in a bit.</h5>
            </Flexbox>
            <Flexbox className="working width--half-width">
                <WorkingSVG style={{ width: '500px', height: '350px' }} />
            </Flexbox>
        </Flexbox >
    )
}

export default UnderConstruction;