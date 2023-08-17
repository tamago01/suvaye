import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style.css';

function AudioPlayer({ audioUrl }) {
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();

  const toggleAudio = () => {
    dispatch({ type: 'TOGGLE_PLAY' });
  };

  return (
    <div className="audio-player">
      <audio className="audio" src={audioUrl} controls autoPlay={isPlaying} />
      <button
        className={`play-button ${isPlaying ? 'playing' : ''}`}
        onClick={toggleAudio}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default AudioPlayer;
