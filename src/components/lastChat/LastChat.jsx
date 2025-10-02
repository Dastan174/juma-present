"use client";
import { useState } from "react";
import ChatAnswer from "../../shared/chatAnswer/ChatAnswer";

export default function LastChat() {
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <div>
      <div className="mainbek">
        <button className="btn" onClick={() => setChatVisible(true)}>
          Ответить 💌
        </button>
      </div>
      <ChatAnswer visible={chatVisible} onClose={() => setChatVisible(false)} />
    </div>
  );
}
