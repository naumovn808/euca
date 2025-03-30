export function setupModals() {
	const modalButtons = document.querySelectorAll("[data-modal-target]");
	const modals = document.querySelectorAll("[data-modal]");
	let activeModal = null;

	modalButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const targetModalId = button.dataset.modalTarget;
			const targetModal = document.querySelector(`[data-modal="${targetModalId}"]`);

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

				if (activeModal && targetModalId !== "dropdown") {
					document.body.classList.add("modal-open");
				} else {
					document.body.classList.remove("modal-open");
				}

				if (activeModal) {
					if (activeModal.classList.contains("modal-overlay")) {
						activeModal.addEventListener("mousedown", overlayClickHandler);
					} else {
						document.addEventListener("mousedown", outsideClickHandler);
					}
				}
			} else {
				console.error(`Модальное окно с id "${targetModalId}" не найдено.`);
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
				removeListeners();
			} else {
				console.error(`Модальное окно с id "${targetModalId}" не найдено.`);
			}
		});
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			if (activeModal) {
				activeModal.classList.remove("open");
				document.body.classList.remove("modal-open");
				activeModal = null;
				removeListeners();
			}
		} else if (event.key === "Tab") {
			const activeModal = document.querySelector(".modal-overlay.open, [data-modal].open");

			if (activeModal) {
				event.preventDefault();

				const focusableElements = activeModal.querySelectorAll(
					'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
				);

				let focusedElementIndex = Array.from(focusableElements).indexOf(document.activeElement);

				let nextFocusableElement;
				if (event.shiftKey) {
					nextFocusableElement =
						focusableElements[(focusedElementIndex - 1 + focusableElements.length) % focusableElements.length];
				} else {
					nextFocusableElement = focusableElements[(focusedElementIndex + 1) % focusableElements.length];
				}

				if (nextFocusableElement) {
					nextFocusableElement.focus();
				}
			}
		}
	});

	function outsideClickHandler(event) {
		if (activeModal && !activeModal.contains(event.target)) {
			activeModal.classList.remove("open");
			document.body.classList.remove("modal-open");
			activeModal = null;
			removeListeners();
		}
	}

	function overlayClickHandler(event) {
		if (event.target === activeModal) {
			activeModal.classList.remove("open");
			document.body.classList.remove("modal-open");
			activeModal = null;
			removeListeners();
		}
	}

	function removeListeners() {
		document.removeEventListener("mousedown", outsideClickHandler);
		if (activeModal) {
			activeModal.removeEventListener("mousedown", overlayClickHandler);
		}
	}
}
