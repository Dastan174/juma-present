"use client";
import { useState } from "react";
import ModalVideo from "../../shared/modalVideo/ModalVideo";
import "./memoryButton.css";

export default function MemoryButton({ onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Кнопка */}
      {!open && (
        <div className="memory-trigger" onClick={() => setOpen(true)}>
          💚✨ Воспоминание
        </div>
      )}

      {/* Модальное окно */}
      {open && (
        <ModalVideo
          visible={open}
          onClose={() => setOpen(false)}
          src="https://drive.google.com/file/d/16so-u3sKEK5biXG_v24-L5JCKrgrk70g/preview"
        />
      )}
    </div>
  );
}
