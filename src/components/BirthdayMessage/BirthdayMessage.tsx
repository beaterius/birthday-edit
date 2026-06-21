import {motion} from 'framer-motion';

export default function BirthdayMessage() {
    return <motion.section initial={{scale: 0.8}} whileInView={{scale: 1}} className='final'>
        <h1>🎂 З Днем Народження!</h1><p>Нехай всі мрії здійсняться ❤️</p>
    </motion.section>
}