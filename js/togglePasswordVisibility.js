"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["togglePasswordVisibility"],{

/***/ "./helpers/toggleVisability.js":
/*!*************************************!*\
  !*** ./helpers/toggleVisability.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   togglePasswordVisibility: function() { return /* binding */ togglePasswordVisibility; }
/* harmony export */ });
function togglePasswordVisibility() {
  const passwordInput = document.querySelector('input[type="password"]');
  const toggleButton = document.querySelector(".btn-hide");
  if (passwordInput && toggleButton) {
    toggleButton.addEventListener("click", () => {
      const eyeIcon = toggleButton.querySelector(".btn-eye");
      const eyeCloseIcon = toggleButton.querySelector(".btn-eye-close");
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.style.display = "none";
        eyeCloseIcon.style.display = "block";
      } else {
        passwordInput.type = "password";
        eyeIcon.style.display = "block";
        eyeCloseIcon.style.display = "none";
      }
    });
  }
}


/***/ })

}]);
//# sourceMappingURL=togglePasswordVisibility.js.map