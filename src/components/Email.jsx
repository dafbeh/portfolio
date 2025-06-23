import React, { useState } from "react";

export default function Email({ isOpen, onClose }) {
  const email = "dafbehnan@gmail.com";
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-start p-12 z-50 bg-black/30 backdrop-blur-sm "
      onClick={onClose}
      style={{ cursor: "default" }}
    >
      <div
        className="bg-white rounded-lg border p-3 mx-auto max-w-md shadow-lg flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          onClick={copy}
          className="text-black text-lg select-text cursor-pointer hover:text-blue-600"
        >
          {email}
        </span>

        {copied && (
          <span className="text-red-600 mt-2 text-sm font-semibold">
            Copied to clipboard!
          </span>
        )}
      </div>
    </div>
  );
}
