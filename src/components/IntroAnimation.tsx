import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const IntroAnimation: React.FC<{ onAnimationComplete: () => void }> = ({ onAnimationComplete }) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
            onAnimationComplete();
        }, 5200); // Enough time for 3 animations + smooth transition

        return () => clearTimeout(timer);
    }, [onAnimationComplete]);

    return (
        <>
            {!showContent && (
                <StyledWrapper>
                    <motion.div
                        className="loader"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 0.8, 1.2, 1] }}
                        transition={{
                            duration: 5, // Total animation time
                            ease: "easeInOut",
                            repeat: 2 // Repeat shrink-expand 3 times total
                        }}
                        exit={{ opacity: 0 }}
                    >
                        
                        <span>INTELION.COM</span>
                        
                    </motion.div>
                </StyledWrapper>
            )}
        </>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1A1A1A;
    padding: 20px;

    .loader {
    font-style: italic;
        font-size: 6vw;
        font-weight: 900;
        text-align: center;
        white-space: nowrap;
    }

    .loader > * {
        color: #e18904;
    }

    .loader span {
        display: inline-flex;
    }

    .loader span:nth-child(2) {
        letter-spacing: -1em;
        overflow: hidden;
        animation: reveal 2.5s cubic-bezier(0.645, 0.045, 0.355, 1) infinite alternate;
    }

    @keyframes reveal {
        0%, 100% {
            opacity: 0.5;
            letter-spacing: -1em;
        }
        50% {
            opacity: 1;
            letter-spacing: 0em;
        }
    }

    @media (max-width: 768px) {
        .loader {
            font-size: 8vw;
        }
    }

    @media (max-width: 480px) {
        .loader {
            font-size: 10vw;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export default IntroAnimation;
