import React from 'react';
import '../style.css';

function DefinitionTab({ partOfSpeechOptions, selectedPartOfSpeech, onSelect }) {
  return (
    <div className="tabs">
      {partOfSpeechOptions.map((partOfSpeech) => (
        <div
          key={partOfSpeech}
          className={`tab ${partOfSpeech === selectedPartOfSpeech ? 'active' : ''}`}
          onClick={() => onSelect(partOfSpeech)}
        >
          {partOfSpeech}
        </div>
      ))}
    </div>
  );
}

export default DefinitionTab;
