// src/App.tsx
import { useState, useRef } from 'react';
import Intro from './components/Intro/Intro';
import EditTimeline from './components/EditTimeline/EditTimeline';
import BirthdayMessage from './components/BirthdayMessage/BirthdayMessage';

// Створюємо динамічний шлях, який підлаштовується і під локальний сервер, і під GitHub Pages
const audioSrc = `${import.meta.env.BASE_URL}music/birthday.mp3`;

export default function App() {
    const [isStarted, setIsStarted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleStart = () => {
        setIsStarted(true);
        if (audioRef.current) {
            audioRef.current.play().catch(err => {
                console.log("Браузер заблокував звук:", err);
            });
        }
    };

    return (
        <>
            {!isStarted ? (
                <Intro onStart={handleStart} />
            ) : (
                <>
                    <EditTimeline />
                    <BirthdayMessage />
                </>
            )}

            {/* Передаємо нашу константу в src */}
            <audio ref={audioRef} src={audioSrc} loop preload="auto" />
        </>
    );
}