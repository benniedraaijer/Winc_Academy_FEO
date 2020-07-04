const passwordVerifier = (password) => {

    score = 0;

    isNotBlank = () => password.length > 0
    isLessThan8Chars = () => password.length < 8
    hasUppercase = () => /[A-Z]/.test(password);
    hasLowercase = () => /[a-z]/.test(password);
    //hasDigit = () => /[0-9]/.test(password);
    hasDigit = () => /[\d]/.test(password);

    if (isNotBlank()) score++;
    if (isLessThan8Chars()) score++;
    if (hasUppercase()) score++;
    if (hasDigit()) score++;
    if (hasLowercase()) score++;

    return {
        score: score,
        valid: score >= 3
    };
}

module.exports = passwordVerifier;