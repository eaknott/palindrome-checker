function palindrome(str) {
    const newArr = [];
    const regex = /[A-Za-z0-9]/;
    for (let i = 0; i < str.length; i++) {
        if (regex.test(str[i])) {
            newArr.push(str[i]);
        }
    }
    let result = newArr.join("");
    let newStr = result.toUpperCase();

    for (let j = 0; j < newStr.length; j++) {
        let endIndex = newStr.length - 1 - j;
        if (newStr[j] !== newStr[endIndex]) {
            return false;
        }
    }
    return true;
}

palindrome("eye");