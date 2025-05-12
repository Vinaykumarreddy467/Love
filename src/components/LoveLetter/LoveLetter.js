import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './sekhar.mpeg';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        My dear beautiful love...🖤,<br />
        <p>As I sit down to write this letter, I am overwhelmed with emotions. You are the light in my life, the reason for my smile, and the love of my heart. Every moment spent with you is a treasure that I hold dear.</p>
        <p>From the first time I saw you, I knew there was something special about you. Your smile, your laughter, and your kind heart captured my attention and my soul. You have a way of making everything better, and I am so grateful to have you in my life.</p>
        <p>As we continue this journey together, I want you to know that I will always be here for you. I will support you, love you, and cherish you every day. You are my everything, and I cannot imagine my life without you.</p>
        <p>Thank you for being you, for loving me, and for making my life so much more beautiful. I promise to always be your biggest fan, your confidant, and your partner in crime.</p>
        <p>So here’s to us, to our love, and to the beautiful future that awaits us. I can’t wait to create more memories with you, to laugh with you, and to love you more each day.</p>
        <p>With all my love,</p>
        <p>Idris @Vinay</p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Vinay Kumar Reddy</p>
        <br />
        <br />
        <p>
        <p></p>
        </p>
        <a href="https://www.instagram.com/idris_fortis/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
          <button style={{ background: 'none', border: 'none', padding: '0', font: 'inherit', cursor: 'pointer',color: 'blue' }}>@Vinay Kumar Reddy</button>
        </a>
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
