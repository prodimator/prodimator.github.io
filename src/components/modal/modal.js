import Flexbox from 'flexbox-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({
    children,
    toggleModal,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(true);
    }, [])

    const modalVariants = {
        closed: {
            scale: 0,
        },
        open: {
            scale: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                type: "spring",
                stiffness: 500,
                damping: 30
            },
        },
    };

    return (
        <Flexbox className='modal-container' alignItems="center" justifyContent="center">
            <AnimatePresence initial={false} onExitComplete={toggleModal}>
                {isOpen && (
                    <motion.div
                        key="modal"
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 1.5,
                                ease: "easeInOut",
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            }
                        }}
                        exit={{ scale: 0 }}
                        className="modal-content padding--lg" flexDirection="column">
                        <svg onClick={() => setIsOpen(false)} className="close-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4049 12.0025L18.6949 6.7125C19.0849 6.3225 19.0849 5.6925 18.6949 5.3025C18.3049 4.9125 17.6749 4.9125 17.2849 5.3025L11.9949 10.5925L6.70494 5.2925C6.31494 4.9025 5.68494 4.9025 5.29494 5.2925C4.90494 5.6825 4.90494 6.3125 5.29494 6.7025L10.5849 12.0025L5.29494 17.2925C4.90494 17.6825 4.90494 18.3125 5.29494 18.7025C5.48494 18.9025 5.73494 19.0025 5.99494 19.0025C6.25494 19.0025 6.50494 18.9025 6.70494 18.7125L11.9949 13.4125L17.2849 18.7025C17.4849 18.9025 17.7349 19.0025 17.9949 19.0025C18.2549 19.0025 18.5049 18.9025 18.7049 18.7125C19.0949 18.3225 19.0949 17.6925 18.7049 17.3025L13.4049 12.0025Z" fill="#f3f3f3" />
                        </svg>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </Flexbox>
    )
}

export default Modal;