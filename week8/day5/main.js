// Array 
const quotes = [
    { id: 0, author: 'Albert Einstein', quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.' },
    { id: 1, author: 'Steve Jobs', quote: 'Your time is limited, don\'t waste it living someone else\'s life.' },
    { id: 2, author: 'Oscar Wilde', quote: 'Be yourself; everyone else is already taken.' },
    { id: 3, author: 'Frank Zappa',quote:'So many books, so little time.'},
    { id: 4, author: 'Marcus Tullius Cicero' , quote:'A room without books is like a body without a soul.'},
    { id: 5, author: 'Mae West' , quote:'You only live once, but if you do it right, once is enough.'},
    { id: 6, author: 'Mahatma Gandhi', quote: 'Be the change that you wish to see in the world.'},
    { id: 7, author: 'Robert Frost' , quote: "In three words I can sum up everything I've learned about life: it goes on."},
    { id: 8, author: 'Mark Twain' , quote: "If you tell the truth, you don't have to remember anything."},
    { id: 9, author: 'Elbert Hubbard' , quote: "A friend is someone who knows all about you and still loves you."},
    { id: 10, author: 'Friedrich Nietzsche', quote: 'Without music, life would be a mistake.'},
    // Add quotes 
];

// let currentQuote = null;

// // Function to generate a random quote
// function generateRandomQuote() {
//     let newQuote = currentQuote;

//     // Ensure the new quote is different from the current one
//     while (newQuote === currentQuote) {
//         newQuote = quotes[Math.floor(Math.random() * quotes.length)];
//     }

//     currentQuote = newQuote;

//     // Display the quote in the DOM
//     const quoteSection = document.getElementById('quoteSection');
//     quoteSection.innerHTML = `<p>"${currentQuote.quote}"</p><p>- ${currentQuote.author}</p>`;
// }

// function addNewQuote() {
//     const quoteInput = document.getElementById('quoteInput').value;
//     const authorInput = document.getElementById('authorInput').value;

//     if (quoteInput && authorInput) {
//         const newQuote = {
//             id: quotes.length,
//             author: authorInput,
//             quote: quoteInput,
//             likes: 0,
//         };

//         quotes.push(newQuote);
//         generateRandomQuote();
//         resetForm();
//     }
// }

// function resetForm() {
//     document.getElementById('quoteInput').value = '';
//     document.getElementById('authorInput').value = '';
// }

// function getCharCount(withSpaces) {
//     const quote = currentQuote.quote;
//     return withSpaces ? quote.length : quote.replace(/\s/g, '').length;
// }

// function getWordCount() {
//     const quote = currentQuote.quote;
//     return quote.split(/\s+/).filter(word => word !== '').length;
// }

// function likeQuote() {
//     currentQuote.likes++;
//     generateRandomQuote();
// }



// // Event listener for the button click
// document.getElementById('generateBtn').addEventListener('click', generateRandomQuote);

// // Initial quote generation
// generateRandomQuote();

let currentQuote = null;
let filteredQuotes = [];
let currentFilteredIndex = 0;

function generateRandomQuote() {
    let newQuote = currentQuote;

    while (newQuote === currentQuote) {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }

    currentQuote = newQuote;

    const quoteSection = document.getElementById('quoteSection');
    quoteSection.innerHTML = `<p>"${currentQuote.quote}"</p><p>- ${currentQuote.author}</p>`;
}

function addNewQuote() {
    const quoteInput = document.getElementById('quoteInput').value;
    const authorInput = document.getElementById('authorInput').value;

    if (quoteInput && authorInput) {
        const newQuote = {
            id: quotes.length,
            author: authorInput,
            quote: quoteInput,
            likes: 0,
        };

        quotes.push(newQuote);
        generateRandomQuote();
        resetForm();
    }
}

function resetForm() {
    document.getElementById('quoteInput').value = '';
    document.getElementById('authorInput').value = '';
}

function getCharCount(withSpaces) {
    const quote = currentQuote.quote;
    return withSpaces ? quote.length : quote.replace(/\s/g, '').length;
}

function getWordCount() {
    const quote = currentQuote.quote;
    return quote.split(/\s+/).filter(word => word !== '').length;
}

function likeQuote() {
    currentQuote.likes++;
    generateRandomQuote();
}

function filterQuotesByAuthor() {
    const authorToFilter = document.getElementById('filterAuthor').value.toLowerCase();
    
    filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === authorToFilter);
    currentFilteredIndex = 0;

    if (filteredQuotes.length > 0) {
        displayFilteredQuote();
    } else {
        alert(`No quotes found for author: ${authorToFilter}`);
    }
}

function displayFilteredQuote() {
    const quoteSection = document.getElementById('quoteSection');
    const filteredQuote = filteredQuotes[currentFilteredIndex];

    if (filteredQuote) {
        quoteSection.innerHTML = `<p>"${filteredQuote.quote}"</p><p>- ${filteredQuote.author}</p>`;
    }
}

function showNextFilteredQuote() {
    currentFilteredIndex = (currentFilteredIndex + 1) % filteredQuotes.length;
    displayFilteredQuote();
}

function showPrevFilteredQuote() {
    currentFilteredIndex = (currentFilteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayFilteredQuote();
}

document.getElementById('generateBtn').addEventListener('click', generateRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click', addNewQuote);
document.getElementById('charCountBtn').addEventListener('click', () => alert(`Character Count (with spaces): ${getCharCount(true)}`));
document.getElementById('charCountNoSpaceBtn').addEventListener('click', () => alert(`Character Count (without spaces): ${getCharCount(false)}`));
document.getElementById('wordCountBtn').addEventListener('click', () => alert(`Word Count: ${getWordCount()}`));
document.getElementById('likeBtn').addEventListener('click', likeQuote);

document.getElementById('filterBtn').addEventListener('click', filterQuotesByAuthor);
document.getElementById('nextBtn').addEventListener('click', showNextFilteredQuote);
document.getElementById('prevBtn').addEventListener('click', showPrevFilteredQuote);

generateRandomQuote();