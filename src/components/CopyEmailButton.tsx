"use client";

import { useState } from "react";

const EMAIL = "boodapro540@gmail.com";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable; ignore silently
    }
  };

  return (
    <button
      onClick={handleCopy}
      data-cursor-hover
      className="mono-label border border-line rounded-full px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
    >
      {copied ? "Copied to clipboard" : EMAIL}
    </button>
  );
}