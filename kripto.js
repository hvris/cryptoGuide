function convertCrypto() {
    const amount = document.getElementById('amount').value;
    const selectedCrypto = document.getElementById('crypto-select').value;
    const resultElement = document.getElementById('result');

    // You can add your conversion logic here
    // For simplicity, let's just display the selected crypto and amount
    resultElement.textContent = `Converted ${amount} to ${selectedCrypto}`;
}

// Dummy data for the news list
const newsList = document.getElementById('news-list');
const newsData = [
    'Bitcoin reaches all-time high',
    'Ethereum upgrades to proof-of-stake',
    'New cryptocurrency regulations announced',
];

newsData.forEach(news => {
    const listItem = document.createElement('li');
    listItem.textContent = news;
    newsList.appendChild(listItem);
});

