import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Intro/Intro.tsx
import { motion } from 'framer-motion';
export default function Intro({ onStart }) {
    return (_jsx("div", { className: "intro-screen", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "intro-content", children: [_jsx("p", { className: "intro-tag ", children: "@holi" }), _jsx("h1", { className: "intro-title", children: "\u0422\u043E\u0431\u0456 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043B\u0438 \u043F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F..." }), _jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: onStart, className: "play-btn", children: "\u25B6 \u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C" })] }) }));
}
