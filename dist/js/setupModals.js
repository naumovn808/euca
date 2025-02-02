"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["setupModals"],{

/***/ "./modals/modals.js":
/*!**************************!*\
  !*** ./modals/modals.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupModals: function() { return /* binding */ setupModals; }
/* harmony export */ });
function setupModals() {
  const modalButtons = document.querySelectorAll("[data-modal-target]");
  const modals = document.querySelectorAll("[data-modal]");
  let activeModal = null;
  modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetModalId = button.dataset.modalTarget;
      const targetModal = document.querySelector(`[data-modal="${targetModalId}"]`);
      console.log("test");
      if (targetModal) {
        modals.forEach((modal) => {
          if (modal !== targetModal && modal.classList.contains("open")) {
            modal.classList.remove("open");
          }
        });
        if (activeModal && activeModal !== targetModal) {
          activeModal.classList.remove("open");
        }
        targetModal.classList.toggle("open");
        activeModal = targetModal.classList.contains("open") ? targetModal : null;
        if (activeModal) {
          document.body.classList.add("modal-open");
        } else {
          document.body.classList.remove("modal-open");
        }
      } else {
        console.error(`\u041C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u0441 id "${targetModalId}" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.`);
      }
    });
  });
  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        modal.classList.remove("open");
        document.body.classList.remove("modal-open");
        activeModal = null;
      }
    });
  });
  const closeButtons = document.querySelectorAll("[data-modal-close]");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      const targetModalId = closeButton.dataset.modalClose;
      const targetModal = document.querySelector(`[data-modal="${targetModalId}"]`);
      if (targetModal) {
        targetModal.classList.remove("open");
        document.body.classList.remove("modal-open");
        activeModal = null;
      } else {
        console.error(`\u041C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u0441 id "${targetModalId}" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.`);
      }
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (activeModal) {
        activeModal.classList.remove("open");
        document.body.classList.remove("modal-open");
        activeModal = null;
      }
    } else if (event.key === "Tab") {
      const activeModal2 = document.querySelector(".modal-overlay.open");
      if (activeModal2) {
        event.preventDefault();
        const focusableElements = activeModal2.querySelectorAll(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        let focusedElementIndex = Array.from(focusableElements).indexOf(document.activeElement);
        let nextFocusableElement;
        if (event.shiftKey) {
          nextFocusableElement = focusableElements[(focusedElementIndex - 1 + focusableElements.length) % focusableElements.length];
        } else {
          nextFocusableElement = focusableElements[(focusedElementIndex + 1) % focusableElements.length];
        }
        if (nextFocusableElement) {
          nextFocusableElement.focus();
        }
      }
    }
  });
}


/***/ })

}]);
//# sourceMappingURL=setupModals.js.map