document.addEventListener('DOMContentLoaded', function () {
    const lengthInput = document.getElementById('length');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const specialCheckbox = document.getElementById('special');
    const generateButton = document.getElementById('submit');
    const passwordInput = document.getElementById('password');

    generateButton.addEventListener('click', function () {
        const length = parseInt(lengthInput.value);
        const uppercase = uppercaseCheckbox.checked;
        const lowercase = lowercaseCheckbox.checked;
        const numbers = numbersCheckbox.checked;
        const special = specialCheckbox.checked;

        const generatedPassword = generatePassword(length, uppercase, lowercase, numbers, special);
        passwordInput.value = generatedPassword;
    });

    function generatePassword(length, uppercase, lowercase, numbers, special) {
        let charset = '';

        if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) charset += '0123456789';
        if (special) charset += '!@#$%^&*()-_=+[]{}|;:,.<>?/';

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }

        return password;
    }
});
