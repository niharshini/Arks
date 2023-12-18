import React, { useState, useEffect } from 'react';
import styles from "./root-styles/Carousel.module.css"
import PropTypes from "prop-types";

const CarouselCommon = ({ items, autoPlay, autoplayInterval, light = true, buttonPosition = "center" }) => {
    const getWindowSize = () => {
        if (window.innerWidth >= 1000) {
            return 3; // Desktop
        } else if (window.innerWidth >= 769) {
            return 2; // Tablet
        } else {
            return 1; // Mobile
        }
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        let intervalId;

        const handleResize = () => {
            setWindowSize(getWindowSize());
        };

        window.addEventListener('resize', handleResize);

        if (autoPlay) {
            intervalId = setInterval(() => {
                nextItem();
            }, autoplayInterval ? autoplayInterval : 3000);
        }

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', handleResize);
        };
    }, [autoPlay, currentIndex]);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const getVisibleItems = () => {
        const visibleItems = [];
        const maxVisibleItems = Math.min(windowSize, items.length);

        for (let i = 0; i < maxVisibleItems; i++) {
            const index = (currentIndex + i) % items.length;
            visibleItems.push(items[index]);
        }

        return visibleItems;
    };


    const shouldShowButtons = windowSize < items.length;

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <div
                style={{
                    display: 'flex',
                    overflow: 'hidden',
                    width: '100%',
                    justifyContent: "center"
                }}
            >
                {getVisibleItems().map((item, index) => (
                    <div
                        key={index}
                        style={{
                            flex: `0 0 ${100 / windowSize}%`,
                            boxSizing: 'border-box',
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
            {shouldShowButtons && (
                <div style={{ margin: "20px 30px", display: "flex", justifyContent: buttonPosition }}>
                    <button
                        className={styles.button}
                        style={{
                            color: `${light ? "#ffffff" : "#777676"}`,
                            border: `${light ? "1px solid #ffffff" : "1px solid #777676"}`,
                            marginRight: "20px"
                        }}
                        onClick={prevItem}
                    >
                        &lt;
                    </button>
                    <button
                        className={styles.button}

                        style={{
                            color: `${light ? "#ffffff" : "#777676"}`,
                            border: `${light ? "1px solid #ffffff" : "1px solid #777676"}`
                        }}
                        onClick={nextItem}
                    >
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
};

CarouselCommon.propTypes = {
    buttonPosition: PropTypes.oneOf(["center", "flex-start", "flex-end"])
};
export default CarouselCommon;
