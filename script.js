const btn = document.querySelector('.btn'),
    result = document.querySelector('.result');

    btn.addEventListener('click', palindrome);

    function palindrome() {
        const word = document.querySelector('.input-text').value;
        const reversedWord = word.split('').reverse().join('');
    
        if (word === reversedWord) {
            result.textContent = `${word} is a Palindrome!`
        } else {
            result.textContent = `${word} is not a Palindrome!`
        }
    }
    