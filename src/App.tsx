// src/App.tsx
import {useState, useRef, useEffect} from 'react';
import Intro from './components/Intro/Intro';
import EditTimeline from './components/EditTimeline/EditTimeline';

export default function App() {
    const [isStarted, setIsStarted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

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

    return (
        <div className="app-container">
            {/* Фоновий трек, який тепер живе постійно і не зникає */}
            <audio ref={audioRef} src="/music/birthday.mp3" loop preload="auto" />

            {!isStarted ? (
                <Intro onStart={handleStart} />
            ) : (
                <EditTimeline />
            )}
        </div>
    );
}