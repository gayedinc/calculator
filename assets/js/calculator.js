// Tüm inputların seçilmesi
const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const peopleInput = document.getElementById("peopleInput");
const inputs = [billInput, tipInput, peopleInput];

// Tüm error mesajlarının seçilmesi
const errorMsgs = document.querySelectorAll(".error-msg");

// Tüm buttonların seçilmesi
const calcBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn");

// Atanan event listenerlar
calcBtn.addEventListener("click", handleCalc);
resetBtn.addEventListener("click", handleReset);

// Tüm inputların üzerinde dönüyoruz ve inputa değer girildiği anda fonksiyon çalışıyor
inputs.forEach(input => {
  input.addEventListener("input", validateInput);
});

// Validasyon fonksiyonu
function validateInput(event) {
  const input = event.target;
  const errorMsg = input.nextElementSibling; // span elementi
  const value = input.value.trim();

  if (value === "") { // Eğer input değeri boşsa
    input.classList.add("user-invalid"); // hata stilleri yüklenir
    input.classList.remove("user-valid"); // geçerli stilleri kaldırılır
    errorMsg.innerHTML = "Can't be blank"; // Boş ise mesajı göster
    errorMsg.style.display = "inline"; // Error mesajını göster

  } else if (value === "0") { // Eğer input değeri 0 ise
    input.classList.add("user-invalid"); // hata stilleri yüklenir
    input.classList.remove("user-valid");  // geçerli stilleri kaldırılır
    errorMsg.innerHTML = "Can't be zero"; // 0 ise mesajı göster
    errorMsg.style.display = "inline"; // Error mesajını göster

  } else { // Eğer değer girildiyse
    input.classList.remove("user-invalid");
    input.classList.add("user-valid");
    errorMsg.style.display = "none"; // Error mesajını gizlemek
  }
}

// Hesapla fonksiyonu
function handleCalc() {
  // Eğer boşsa veya 0 ise kullanıcıya uyarı ver
  // Tüm inputların üzerinde dönüyoruz
  inputs.forEach(input => {
    if (input.value.trim() === "" || input.value.trim() === "0") {
      validateInput({ target: input }); // Hata mesajı tekrar tetiklenir
      // target hangi input alanına ait olduğunu gösterir, input ise tek tek dönen inputtur
      // event nesnesi oluşturup event nesnesinin target özelliğine input elemanları atılır
    }
  });

  if (billInput.value === "" || tipInput.value === "" || peopleInput.value === "" || billInput.value === "0" || tipInput.value === "0" || peopleInput.value === "0") {
    return; // Hesaplama yapılmaz
  }

  const billValue = Number(billInput.value);
  const tipValue = Number(tipInput.value);
  const peopleValue = Number(peopleInput.value);

  // Hesaplama
  const tipPercent = (billValue * tipValue) / 100;
  const amountTip = tipPercent / peopleValue;
  const total = (billValue + tipPercent) / peopleValue;

  // Sonuçları gösterme
  totalPriceTxt.innerHTML = total.toFixed(2);
  amountPriceTxt.innerHTML = amountTip.toFixed(2);
}

// Reset fonksiyonu
function handleReset() {
  billInput.value = "";
  tipInput.value = "";
  peopleInput.value = "";
  totalPriceTxt.innerHTML = "$0.00";
  amountPriceTxt.innerHTML = "$0.00";

  // Validasyonları sıfırlamak için
  inputs.forEach(input => {
    input.classList.remove("user-invalid", "user-valid");
    input.nextElementSibling.style.display = "none"; // Error mesajını gizlemek
  });
}
