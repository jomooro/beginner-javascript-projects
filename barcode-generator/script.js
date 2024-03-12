let input = document.getElementById("input");
let button = document.getElementById("button-barcode-generator");

button.addEventListener("click", () => {
  let inputValue = input.value;

  let barcodeOptions = {
    format: "code128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#000",
  };

  JsBarcode("#barcode", inputValue, barcodeOptions);
});

window.onload = (event) => {
  input.value = "";
};
