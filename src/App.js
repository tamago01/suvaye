import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import DefinitionTabs from './components/definitionTab';
import DefinitionList from './components/definitionList';
import AudioPlayer from './components/audioPlayer';
import Logo from './suvaye.png';
import { useNavigate, Router, Routes, Route } from 'react-router-dom';
import logo1 from './suv.png';
function App() {
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [audioUrl, setAudioUrl] = useState('');
  const navigate = useNavigate();

  const handleSearch = (searchText) => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array with only one item for simplicity
        const wordData = data[0];
        
        if (wordData) {
          setSelectedPartOfSpeech('noun');
          setDefinitions(wordData.meanings[0]?.definitions || []);
          setAudioUrl(wordData.phonetics[0]?.audio || '');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handlePartOfSpeechSelect = (partOfSpeech) => {
    const wordData = definitions.find(
      (definition) => definition.partOfSpeech === partOfSpeech
    );
    
    if (wordData) {
      setDefinitions([wordData]);
      setAudioUrl(wordData.phonetics[0]?.audio || '');
      setSelectedPartOfSpeech(partOfSpeech);
    }
  };
  const onClickLogo = () => {
  
    navigate('/home');
  };

  return (
     
    <div className="container mx-auto p-4 w-5/6 md:max-w-3xl md:w-4/6 flex flex-col items-center">
      <div className="logo1-container">
            <img src={logo1} alt="Logo" className="logo1"/>
            <p className="p">Suvaye Dictionary</p>
      </div>
      <SearchBar onSearch={handleSearch} />
      <DefinitionTabs
        partOfSpeechOptions={definitions.map((definition) => definition.partOfSpeech)}
        selectedPartOfSpeech={selectedPartOfSpeech}
        onSelect={handlePartOfSpeechSelect}
      />
      <DefinitionList definitions={definitions.map((definition) => definition.definition)} />
      <AudioPlayer audioUrl={audioUrl} />
      <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo" onClick={onClickLogo}/> 
      </div> 
    </div>
  );
}

export default App;
