import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import { useState, useRef, useEffect } from 'react';
import Intro from './components/Intro/Intro';
import EditTimeline from './components/EditTimeline/EditTimeline';
export default function App() {
    const [isStarted, setIsStarted] = useState(false);
    const audioRef = useRef(null);
    const handleStart = () => {
        setIsStarted(true);
        // Запускаємо трек відразу після кліку користувача
        if (audioRef.current) {
            audioRef.current.play().catch((err) => {
                console.error("Браузер заблокував звук:", err);
            });
        }
    };
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1;
        }
    }, []);
    return (_jsxs("div", {
        className: "app-container",
        children: [
            _jsx("audio", {
                ref: audioRef,
                src: `${import.meta.env.BASE_URL}music/birthday.mp3`,
                loop: true,
                preload: "auto"
            }),
            !isStarted
                ? (_jsx(Intro, { onStart: handleStart }))
                : (_jsx(EditTimeline, {}))
        ]
    }));}