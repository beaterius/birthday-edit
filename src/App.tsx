// src/App.tsx
import { useState, useRef } from 'react';
import Intro from './components/Intro/Intro';
import EditTimeline from './components/EditTimeline/EditTimeline';
import BirthdayMessage from './components/BirthdayMessage/BirthdayMessage';

// Получаем базовый путь из Vite окружения
const base = import.meta.env.BASE_URL || '';

// ЖЕЛЕЗОБЕТОННОЕ ФОРМИРОВАНИЕ ПУТИ:
// Если base заканчивается на "/", то просто прибавляем "music/birthday.mp3"
// Если base НЕ заканчивается на "/" (как у вас локально из-за vite.config.js), принудительно добавляем "/"
const birthdayAudio = base.endsWith('/')
    ? `${base}music/birthday.mp3`
    : `${base}/music/birthday.mp3`;

export default function App() {
    const [isStarted, setIsStarted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleStart = () => {
        setIsStarted(true);
        if (audioRef.current) {
            audioRef.current.play().catch(err => {
                console.log("Браузер заблокировал звук:", err);
            });
        }
    };

    return (
        <>
            {/* Экран старта */}
            {!isStarted ? (
                <Intro onStart={handleStart} />
            ) : (
                <>
                    <EditTimeline />
                    <BirthdayMessage />
                </>
            )}

            {/* Аудио плеер с динамическим безопасным путем */}
            <audio
                ref={audioRef}
                src={birthdayAudio}
                loop
                preload="auto"
            />
        </>
    );
}