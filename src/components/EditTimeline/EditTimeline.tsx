import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Шляхи робимо СУТО відносними (без початкового слешу '/')
const IMAGES = [
    'photos/photo1.jpg', 'photos/photo2.jpg', 'photos/photo3.jpg', 'photos/photo4.jpg',
    'photos/photo5.jpg', 'photos/photo6.jpg', 'photos/photo7.jpg', 'photos/photo8.jpg', 'photos/photo9.jpg',
    'photos/photo10.jpg', 'photos/photo11.jpg'
];

const EDIT_TIMINGS = [450, 350, 350, 700, 400, 550];

export default function EditTimeline() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isBeat, setIsBeat] = useState(false);
    const [transitionIndex, setTransitionIndex] = useState(0);

    useEffect(() => {
        let timeoutId: number;

        const triggerTransition = () => {
            setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
            setTransitionIndex(Math.floor(Math.random() * 3));

            setIsBeat(true);
            setTimeout(() => setIsBeat(false), 140);

            const nextDelay = EDIT_TIMINGS[Math.floor(Math.random() * EDIT_TIMINGS.length)];
            timeoutId = window.setTimeout(triggerTransition, nextDelay);
        };

        timeoutId = window.setTimeout(triggerTransition, 600);
        return () => clearTimeout(timeoutId);
    }, []);

    const beatAnimation = {
        bounce: {
            scale: isBeat ? [1.45, 0.96, 1] : 1,
            rotate: isBeat ? [3, -2, 0] : 0,
            x: isBeat ? [0, -10, 8, 0] : 0,
            y: isBeat ? [0, 8, -6, 0] : 0,
            filter: isBeat
                ? [
                    "brightness(2.8) contrast(1.6) blur(2px)",
                    "brightness(1.1) contrast(1.1) blur(0px)",
                    "brightness(1) contrast(1) blur(0px)"
                ]
                : "brightness(1) contrast(1) blur(0px)",
            transition: {
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    // Отримуємо відносний шлях без зайвих доменів
    const currentImgUrl = IMAGES[currentIndex];

    return (
        <div className="edit-container">
            <div className="tiktok-viewport">

                <div className="anime-glow-filter" />
                <div className="vignette" />

                <AnimatePresence>
                    {isBeat && (
                        <motion.div
                            initial={{ opacity: 0.6 }}
                            animate={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="flash-layer"
                        />
                    )}
                </AnimatePresence>

                <motion.div
                    className="glitch-wrapper"
                    variants={beatAnimation}
                    animate="bounce"
                >
                    <div
                        className={`edit-frame rgb-red ${isBeat ? 'rgb-red-trigger' : ''}`}
                        style={{ backgroundImage: `url(${currentImgUrl})` }}
                    />

                    <div
                        className={`edit-frame rgb-blue ${isBeat ? 'rgb-blue-trigger' : ''}`}
                        style={{ backgroundImage: `url(${currentImgUrl})` }}
                    />

                    <div
                        className="edit-frame rgb-main"
                        style={{ backgroundImage: `url(${currentImgUrl})` }}
                    />
                </motion.div>

                <div className="edit-overlay-text">
                    <motion.h2
                        animate={{
                            scale: isBeat ? [1.25, 0.9, 1] : 1,
                            skewX: isBeat ? [15, -10, 0] : 0
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {transitionIndex === 0 && "🎂 З Днем Народження! 🎂"}
                        {transitionIndex === 1 && "❤️ Нехай всі мрії здійсняться ❤️"}
                        {transitionIndex === 2 && "👑 QUEEN 👑"}
                    </motion.h2>
                </div>
            </div>
        </div>
    );
}