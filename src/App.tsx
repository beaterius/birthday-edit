import { useState, useRef } from 'react';
import Intro from './components/Intro/Intro';
import EditTimeline from './components/EditTimeline/EditTimeline';
import BirthdayMessage from './components/BirthdayMessage/BirthdayMessage';

// Імпортуємо аудіо безпосередньо за допомогою Vite
import birthdayAudio from '/music/birthday.mp3';

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

            {/* Передаємо імпортовану аудіодоріжку */}
            <audio ref={audioRef} src={birthdayAudio} loop preload="auto" />
        </>
    );
}