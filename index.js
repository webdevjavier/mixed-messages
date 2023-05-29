const quotes = [
    {
        name: 'Mark Twain',
        quote: 'The secret to getting ahead is getting started.',
    },
    {
        name: 'Michael Jordan',
        quote: 'I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.',
    },
    {
        name: 'Chinese Proverb',
        quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    },
    {
        name: 'Babe Ruth',
        quote: 'It’s hard to beat a person who never gives up.',
    },
];

const showQuote = () => {
    const blockquote = document.querySelector('blockquote');
    const figcaption = document.querySelector('figcaption');
    
    const randNum = Math.floor(Math.random() * quotes.length)

    blockquote.innerHTML = `<p>${quotes[randNum].quote}</p>`;
    figcaption.innerHTML = `- <i>${quotes[randNum].name}</i>`;    
}

showQuote();