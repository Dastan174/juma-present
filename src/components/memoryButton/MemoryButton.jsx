"use client";
import { useState } from "react";
import ModalVideo from "../../shared/modalVideo/ModalVideo";
import "./memoryButton.css";

export default function MemoryButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">
      {/* Кнопка */}
      <button className="button-green" onClick={() => setOpen(true)}>
        Открыть воспоминание 💚
      </button>

      {/* Модальное окно */}
      <ModalVideo
        visible={open}
        onClose={() => setOpen(false)}
        src="https://drive.google.com/file/d/16so-u3sKEK5biXG_v24-L5JCKrgrk70g/preview"
      />
    </div>
  );
}
