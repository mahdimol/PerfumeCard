document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  const priceElement = document.querySelector("p strong");
  const usdPriceText = priceElement.textContent.trim().replace("$", "");
  const usdPrice = parseFloat(usdPriceText);
  const euroPrice = (usdPrice * 0.92).toFixed(2);

  // تابع نمایش پیام خوشگل
  function showPopup(message) {
    // ساخت المان
    const popup = document.createElement("div");
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.backgroundColor = "hsl(158, 36%, 37%)";
    popup.style.color = "white";
    popup.style.padding = "15px 25px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    popup.style.fontWeight = "bold";
    popup.style.zIndex = 1000;
    popup.style.opacity = 0;
    popup.style.transition = "opacity 0.3s ease";

    document.body.appendChild(popup);

    // انیمیشن ورود
    setTimeout(() => {
      popup.style.opacity = 1;
    }, 50);

    // حذف بعد از 3 ثانیه
    setTimeout(() => {
      popup.style.opacity = 0;
      setTimeout(() => {
        popup.remove();
      }, 300);
    }, 3000);
  }

  // دکمه
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showPopup("This perfume is one of the best sellers of 2025!");
  });

  // تغییر قیمت به یورو هنگام هاور
  priceElement.addEventListener("mouseover", () => {
    priceElement.textContent = `€${euroPrice}`;
  });

  priceElement.addEventListener("mouseout", () => {
    priceElement.textContent = `$${usdPrice}`;
  });
});
