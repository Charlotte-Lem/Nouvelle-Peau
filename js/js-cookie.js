var cookieModal = document.getElementById("cookie-modal");
var acceptBtn = document.getElementById("accept-cookie");
// Check if the cookie has already been accepted
if (Cookies.get("cookie-consent")) {
  cookieModal.style.display = "none";
}
else {
  acceptBtn.onclick = function () {
    if ("cookie-consent" == "accepted") {
      cookieModal.style.display = 'none';
    }
    cookieModal.style.display = "none";
    Cookies.set("cookie-consent", "accepted", { expires: 365, sameSite: "none", secure: true });
  };
}



