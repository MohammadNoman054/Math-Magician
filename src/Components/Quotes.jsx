import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();
        setQuoteData({ quote: data.quote, author: data.author });
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Quotes Page</h2>
      <p>{quoteData.quote}</p>
      <p>- {quoteData.author}</p>
    </div>
  );
};

export default Quotes;

