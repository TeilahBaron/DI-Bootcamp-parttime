// src/components/App.js
import React, { useState } from 'react';
import LanguageList from './LanguageList';

function App() {
  const initialLanguages = [
    { id: 1, name: "Python", votes: 0 },
    { id: 2, name: "JavaScript", votes: 0 },
    { id: 3, name: "Java", votes: 0 },
    { id: 4, name: "C++", votes: 0 },
  ];

  const [languages, setLanguages] = useState(initialLanguages);

  const handleVote = (id) => {
    const updatedLanguages = languages.map(lang =>
      lang.id === id ? { ...lang, votes: lang.votes + 1 } : lang
    );
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Programming Language</h1>
      <LanguageList languages={languages} handleVote={handleVote} />
    </div>
  );
}

export default App;
