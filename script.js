const btn = document.querySelector('.btn'),
    result = document.querySelector('.result');

btn.addEventListener('click', palindrome);

function palindrome() {
    const word = document.querySelector('.input-text').value;
    const array = [...word];
    const wordReversed = array.reverse();

    let isPalindrome = true;

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== wordReversed[i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        result.textContent = `${word} is a palindrome!`;
    } else {
        result.textContent = `${word} is not a palindrome.`;
    }
}
