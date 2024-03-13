document.addEventListener("DOMContentLoaded", function () {
    const submitElement = document.getElementById("submit");
    const userInputElement = document.getElementById("user-input");
    const canvasElement = document.getElementById("canvas");
    const reloadElement = document.getElementById("reload");
    let randomText = "";
  
    // Generates a random text containing letters and numbers
    const generateRandomText = () => {
      let generatedText = "";
      for (let i = 0; i < 3; i++) {
        generatedText += getRandomChar(65, 90); // Uppercase letters
        generatedText += getRandomChar(97, 122); // Lowercase letters
        generatedText += getRandomChar(48, 57); // Numbers
      }
      return generatedText;
    };
  
    // Generates a random character based on ASCII values
    const getRandomChar = (min, max) => String.fromCharCode(randomNumber(min, max));
  
    // Generates a random number within a specified range
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  
    // Draws the generated text on the canvas with random colors and positions
    function drawText(textToDraw) {
      const ctx = canvasElement.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const textColors = ["red", "black"];
      const letterSpace = 150 / textToDraw.length;
  
      for (let i = 0; i < textToDraw.length; i++) {
        const xInitialSpace = 20;
        ctx.font = "20px Roboto Mono";
        ctx.fillStyle = textColors[randomNumber(0, 1)];
        ctx.fillText(textToDraw[i], xInitialSpace + i * letterSpace, randomNumber(25, 40), 100);
      }
    }
  
    // Initializes the game by resetting user input, generating a new random text, and drawing it on the canvas
    function initializeGame() {
      userInputElement.value = "";
      randomText = generateRandomText();
      randomText = [...randomText].sort(() => Math.random() - 0.5).join("");
      drawText(randomText);
    }
  
    // Event listener for reload button click
    reloadElement.addEventListener("click", initializeGame);
  
    // Event listener for window load, initializes the game
    window.onload = initializeGame;
  
    // Event listener for submit button click, checks if the user input matches the generated text
    submitElement.addEventListener("click", () => {
      if (userInputElement.value === randomText) {
        alert("Success");
      } else {
        alert("Invalid");
        initializeGame();
      }
    });
  });
  