import Flexbox from 'flexbox-react';
import React from 'react';
import { motion } from "framer-motion";

const NameAnimation = () => {
    const firstVariants = {
        initial: {
            pathLength: 0,
        },
        animate: {
            pathLength: 1,
            transition: {
                duration: 3,
                ease: "easeInOut",
            },
        }
    };
    const dashVariants = {
        initial: {
            pathLength: 0,
        },
        animate: {
            pathLength: 1,
            transition: {
                delay: .5,
                duration: 1,
                ease: "easeInOut",
            },
        }
    };

    const lastVariants = {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1,
            y: -20,
            transition: {
                delay: 1,
                duration: .5,
                ease: "easeInOut",
            },
        }
    };
    return (
        <Flexbox flexDirection="column">
            <motion.svg className="name-svg" initial="initial" animate="animate" xmlns="http://www.w3.org/2000/svg" width="245.088" height="96.96" viewBox="0 0 245.088 96.96">
                <motion.path variants={firstVariants} id="Path_11" data-name="Path 11" d="M43.584,73.336,66.336,103H42.912L25.152,75.16H24.96V103H6.144V30.616H34.272q10.752.1,17.952,5.424t7.2,16.944a22.559,22.559,0,0,1-4.08,13.3,17.362,17.362,0,0,1-11.76,7.152ZM24.96,45.016V63.064h1.824a4.884,4.884,0,0,0,.96.1h.864a18.773,18.773,0,0,0,7.728-1.968q3.5-1.776,3.5-7.056,0-5.336-3.5-7.131a18.6,18.6,0,0,0-7.728-1.989H24.96ZM87.648,96.28,63.84,53.752H84L97.152,79l12.864-25.248h19.872L90.432,127.576H70.848ZM187.68,53.752V103H170.208V97.528h-.192a12.977,12.977,0,0,1-5.76,5.136,20.346,20.346,0,0,1-7.584,1.872,3.156,3.156,0,0,1-.768.1h-.768a22.871,22.871,0,0,1-17.9-7.824,27.9,27.9,0,0,1-.1-36.768,22.582,22.582,0,0,1,17.808-7.824h.96a4.884,4.884,0,0,1,.96.1,22.4,22.4,0,0,1,7.344,1.872,16.141,16.141,0,0,1,6,4.464v-4.9ZM159.552,67.288A10.813,10.813,0,0,0,151.3,70.7a11.322,11.322,0,0,0-2.976,7.824,11.055,11.055,0,0,0,2.976,7.872q2.976,3.168,8.256,3.168,5.376,0,8.3-3.181a11.234,11.234,0,0,0,2.928-7.907,11.505,11.505,0,0,0-2.928-7.858Q164.928,67.288,159.552,67.288Zm57.216-13.536v6.336h.192a17.322,17.322,0,0,1,6.864-6.144,21.24,21.24,0,0,1,8.88-1.728q9.984,0,14.256,5.664t4.272,14.784V103H233.76V76.12q0-.96-.1-1.92a12.026,12.026,0,0,0-1.728-5.52q-1.536-2.544-6.048-2.544-5.28,0-7.2,3.408a16.064,16.064,0,0,0-1.92,8.016V103H199.3V53.752Z" transform="translate(-6.144 -30.616)" fill="none" />
            </motion.svg>
            <Flexbox alignItems="center">
                <motion.svg className="name-svg margin-top--md" initial="initial" animate="animate" xmlns="http://www.w3.org/2000/svg" width="93" height="3" viewBox="0 0 93 3">
                    <motion.path variants={dashVariants} id="Path_13" data-name="Path 13" d="M0,0H93" transform="translate(0 1.5)" fill="none" stroke="#f3f3f3" stroke-width="3" />
                </motion.svg>
                <span className="margin-x--md" />
                <motion.svg className="name-svg" initial="initial" animate="animate" xmlns="http://www.w3.org/2000/svg" width="294.816" height="82.176" viewBox="0 0 294.816 82.176">
                    <motion.path variants={lastVariants} id="Path_12" data-name="Path 12" d="M18.144,30.616,30.72,77.368h.192L46.08,30.616H61.056L75.264,77.368h.192L89.088,30.616h19.584L85.536,103h-19.2L53.664,61.048h-.192L39.264,103H20.16L-1.44,30.616Zm120.864,21.5a33.472,33.472,0,0,1,20.784,6.96q8.88,6.864,8.88,19.44,0,12.48-8.88,19.3a35.123,35.123,0,0,1-41.52.048q-8.928-6.768-8.928-19.344t8.88-19.44a33.01,33.01,0,0,1,20.784-6.864Zm0,15.168a10.813,10.813,0,0,0-8.256,3.408,11.322,11.322,0,0,0-2.976,7.824,11.055,11.055,0,0,0,2.976,7.872q2.976,3.168,8.256,3.168,5.376,0,8.3-3.181a11.234,11.234,0,0,0,2.928-7.907,11.505,11.505,0,0,0-2.928-7.858Q144.384,67.288,139.008,67.288ZM194.016,23.32V103H176.544V23.32Zm30.72,44.832V103H207.264V68.152H201.12v-14.4h6.144v-6.24a64.467,64.467,0,0,1,.384-7.3,16.828,16.828,0,0,1,2.208-6.528,18.443,18.443,0,0,1,1.056-1.68,19.288,19.288,0,0,1,1.344-1.68,21.849,21.849,0,0,1,7.728-5.856,22.712,22.712,0,0,1,9.456-2.016,18.6,18.6,0,0,1,3.84.384,14.041,14.041,0,0,1,3.648,1.344V39.16a5.021,5.021,0,0,1-.816-.288,4.329,4.329,0,0,0-.912-.288,10.985,10.985,0,0,0-2.112-.72,10.394,10.394,0,0,0-2.3-.24q-3.36,0-4.7,2.016t-1.344,6.24v7.872h12.192v14.4Zm68.64,11.328V81.3H256.608q0,5.376,2.784,8.208t8.16,2.832a10.512,10.512,0,0,0,4.848-1.056,8.834,8.834,0,0,0,3.5-3.456h16.8q-2.112,8.783-9.36,12.791a31.906,31.906,0,0,1-15.7,4.009q-12.192,0-20.352-6.672t-8.16-19.44q0-12.288,7.632-19.3T266.4,52.216q12.864,0,19.92,7.392t7.056,19.968ZM256.9,71.224h20.256a8.824,8.824,0,0,0-3.5-5.568,10.411,10.411,0,0,0-6.384-2.112,11.724,11.724,0,0,0-6.72,1.944A8.669,8.669,0,0,0,256.9,71.224Z" transform="translate(1.44 -22.456)" fill="#f3f3f3" />
                </motion.svg>
            </Flexbox>
        </Flexbox >
    )
}

export default NameAnimation;