import Flexbox from 'flexbox-react';
import React from 'react';
import MeImage from '../../assets/meimage.jpg';
import { motion } from "framer-motion";



const InitialLoadingState = () => {

    const pathVariants = {
        hidden: {
            scale: 1,
            rotate: -360,
            pathLength: 0,
        },
        visible: {
            rotate: 0,
            pathLength: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        }
    };

    return (
        <Flexbox
            className='initial-loading-container'
            justifyContent="center"
            alignItems="center"
        >
            <motion.svg className="loading-svg" initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="186" height="186" viewBox="0 0 186 186">
                <motion.path variants={pathVariants} id="Path_9" data-name="Path 9" d="M75,0A75,75,0,1,1,0,75,75,75,0,0,1,75,0Z" fill="none" />
            </motion.svg>
        </Flexbox >
    )
}

export default InitialLoadingState;
