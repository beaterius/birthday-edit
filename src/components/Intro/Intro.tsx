// src/components/Intro/Intro.tsx
import { motion } from 'framer-motion';

interface IntroProps {
    onStart: () => void;
}

export default function Intro({ onStart }: IntroProps) {
    return (
        <div className="intro-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="intro-content"
            >
                <p className="intro-tag ">@holi</p>
                <h1 className="intro-title">Тобі надіслали привітання...</h1>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onStart}
                    className="play-btn"
                >
                    ▶ Дивитись
                </motion.button>
            </motion.div>
        </div>
    );
}