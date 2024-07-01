import React from 'react';

function Language({ language, handleVote }) {
  return (
    <div>
      <button onClick={() => handleVote(language.id)}>
        {language.name} - Votes: {language.votes}
      </button>
    </div>
  );
}

export default Language;
