
var cookieModal = document.getElementById("cookie-modal");
var acceptBtn = document.getElementById("accept-cookie");

if (!Cookies.get("cookie-consent")) {
  acceptBtn.onclick = function () {
    cookieModal.style.display = "none";
    Cookies.set("cookie-consent", "accepted", { expires: 365, sameSite: "None" });
    location.reload();
  };
}
else {
  cookieModal.style.display = "none";
}
