import { useState, useRef } from 'react';
import Intro from './components/Intro/Intro';
import EditTimeline from './components/EditTimeline/EditTimeline';
import BirthdayMessage from './components/BirthdayMessage/BirthdayMessage';

// Імпортуємо аудіо безпосередньо. Vite сам розбереться зі шляхами для GitHub Pages!
const birthdayAudio =
    `${import.meta.env.BASE_URL}music/birthday.mp3`;

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
            {/* Ховаємо інтро після кліку */}
            {!isStarted ? (
                <Intro onStart={handleStart} />
            ) : (
                <>
                    <EditTimeline />
                    <BirthdayMessage />
                </>
            )}

            {/* Використовуємо імпортований аудіо-трек */}
            <audio ref={audioRef} src={birthdayAudio} loop preload="auto" />
        </>
    );
}