document.addEventListener('DOMContentLoaded', function () {
    function generateOTP() {
      const otpLength = 6;
      const otpCharacters = '0123456789';
      let otp = '';
  
      for (let i = 0; i < otpLength; i++) {
        const randomIndex = Math.floor(Math.random() * otpCharacters.length);
        otp += otpCharacters.charAt(randomIndex);
      }
  
      return otp;
    }
  
    function updateOTPDisplay() {
      document.getElementById('OTP').textContent = generateOTP();
    }
  
    document.getElementById('generateButton').addEventListener('click', updateOTPDisplay);
  });
  