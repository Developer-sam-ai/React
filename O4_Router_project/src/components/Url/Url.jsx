import React from "react";
import { useParams } from "react-router-dom";

function Url() {
    const {Urlid}=useParams();
    
    const palettes = [
    "from-pink-500 via-red-500 to-yellow-500",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-green-400 via-teal-500 to-blue-500",
    "from-orange-400 via-amber-500 to-red-500",
];
const pick = palettes[Math.abs(Urlid.length) % palettes.length];

    return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${pick}`}>
        <div className="text-center p-10 bg-black/40 backdrop-blur rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
        {Urlid}
        </h1>
    
        <div className="mt-6 flex flex-wrap justify-center gap-3">
        {["✨", "🔥", "🌈", "🚀", "💎"].map((emoji, i) => (
            <span
            key={i}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-2xl"
            >
            {emoji}
            </span>
        ))}
        </div>
    </div>
    </div>
);
}

export default Url;