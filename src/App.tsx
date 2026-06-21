import { useState, useRef } from 'react';
import Intro from './components/Intro/Intro';
import EditTimeline from './components/EditTimeline/EditTimeline';
import BirthdayMessage from './components/BirthdayMessage/BirthdayMessage';
import birthdayAudio from './assets/music/birthday.mp3';

// Імпортуємо аудіо безпосередньо. Vite сам розбереться зі шляхами для GitHub Pages!

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
            <audio
                ref={audioRef}
                src={birthdayAudio}
                loop
                preload="auto"
            />
        </>
    );
}