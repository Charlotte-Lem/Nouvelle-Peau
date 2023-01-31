var cookieModal = document.getElementById("cookie-modal");
var acceptBtn = document.getElementById("accept-cookie");

// cookieModal.style.display = "block";

// acceptBtn.onclick = function () {
//   cookieModal.style.display = "none";
//   Cookies.set("cookie-consent", "accepted", { expires: 365, sameSite: "none" ,secure:true});};
 

  if (!Cookies.get("cookie-consent")) {
    acceptBtn.onclick = function () {
      cookieModal.style.display = "none";
      Cookies.set("cookie-consent", "accepted", { expires: 365, sameSite: "none", secure: true });
    };
  }
  else {
    
    cookieModal.style.display = "none";
  }
  