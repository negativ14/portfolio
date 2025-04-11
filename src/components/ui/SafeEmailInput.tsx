"use client";
import { useEffect, useState } from "react";

export default function SafeEmailInput() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <input
            type="email"
            placeholder="Email"
            className="w-full border-2 border-purple-500 rounded-lg py-2 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            suppressHydrationWarning
        />
    );
}
