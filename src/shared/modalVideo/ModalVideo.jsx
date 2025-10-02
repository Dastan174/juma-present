"use client";
import "./modalVideo.css";

export default function ModalVideo({ visible, onClose, src }) {
  if (!visible) return null; // если не видно, ничего не рендерим

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖️
        </button>
        <iframe
          src={src}
          className="video-player"
          allow="autoplay"
          allowFullScreen
          title="Video"
        ></iframe>
      </div>
    </div>
  );
}
