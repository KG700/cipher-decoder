import "regenerator-runtime/runtime";

export const getQuotes = async () => {
  const quotes = await fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return quotes;
};

export const updateQuote = (quotes) => {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").innerText = quotes[quoteIndex].text;
  document.getElementById("quote-author").innerText = quotes[quoteIndex].author;

  setTimeout(() => {
    updateQuote(quotes);
  }, 60000);
};
