import React from 'react';
import Language from './Language';

function LanguageList({ languages, handleVote }) {
  return (
    <div>
      {languages.map(language => (
        <Language
          key={language.id}
          language={language}
          handleVote={handleVote}
        />
      ))}
    </div>
  );
}

export default LanguageList;