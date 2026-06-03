"use client";

import { useState, useEffect } from "react";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("welcome-seen");
    if (!seen) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("welcome-seen", "1");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={close}
    >
      <div
        className="relative bg-[#14141f] border border-white/10 rounded-2xl p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#f28c4a] rounded-b" />
        <p className="text-[#f28c4a] text-sm font-medium mb-3">Hello! 👋</p>
        <h2 className="text-2xl font-bold mb-3">Hi, I&apos;m Sandip!</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          UI/UX Designer & developer — crafting modern, user-centered digital
          experiences with Figma, Next.js, and React.
        </p>
        <button
          type="button"
          onClick={close}
          className="w-full btn-pill bg-[#f28c4a] text-black font-semibold py-3 hover:opacity-90 transition"
        >
          Explore portfolio →
        </button>
      </div>
    </div>
  );
}
