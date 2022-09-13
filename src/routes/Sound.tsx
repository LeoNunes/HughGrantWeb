import React, { useState, useEffect } from 'react';
import './Sound.css';

type useAudioReturnType = [boolean, () => void]

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle] as useAudioReturnType;
};

export default () => {
  const [playing, toggle] = useAudio('/audio/music.mp3');

  useEffect(() => {
    toggle();
    return () => {
      if (playing) {
        toggle();
      }
    }
  }, []);

  return (
    <div className='Sound-Container'>
      <button onClick={toggle}>{playing ? "PAUSE" : "PLAY"}</button>
    </div>
  );
}