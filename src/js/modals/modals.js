export function setupModals() {
	const modalButtons = document.querySelectorAll('[data-modal-target]');
	const modals = document.querySelectorAll('[data-modal]');
	let activeModal = null;

	modalButtons.forEach(button => {
		button.addEventListener('click', () => {
			const targetModalId = button.dataset.modalTarget;
			const targetModal = document.querySelector(`[data-modal="${targetModalId}"]`);
			console.log('test');

			if (targetModal) {
				modals.forEach(modal => {
					if (modal !== targetModal && modal.classList.contains('open')) {
						modal.classList.remove('open');
					}
				});

				if (activeModal && activeModal !== targetModal) {
					activeModal.classList.remove('open');
				}
				targetModal.classList.toggle('open');

				activeModal = targetModal.classList.contains('open') ? targetModal : null;


				if (activeModal && targetModalId !== 'dropdown') {
					document.body.classList.add('modal-open');
				} else {
					document.body.classList.remove('modal-open');
				}
			} else {
				console.error(`Модальное окно с id "${targetModalId}" не найдено.`);
			}
		});
	});
	modals.forEach(modal => {
		modal.addEventListener('click', (event) => {
			if (event.target.classList.contains('modal-overlay')) {
				modal.classList.remove('open');
				document.body.classList.remove('modal-open');
				activeModal = null;
			}
		});
	});
	const closeButtons = document.querySelectorAll('[data-modal-close]');

	closeButtons.forEach(closeButton => {
		closeButton.addEventListener('click', () => {
			const targetModalId = closeButton.dataset.modalClose;
			const targetModal = document.querySelector(`[data-modal="${targetModalId}"]`);

			if (targetModal) {
				targetModal.classList.remove('open');
				document.body.classList.remove('modal-open');
				activeModal = null;
			} else {
				console.error(`Модальное окно с id "${targetModalId}" не найдено.`);
			}
		});
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			if (activeModal) {
				activeModal.classList.remove('open');
				document.body.classList.remove('modal-open');
				activeModal = null;
			}
		} else if (event.key === 'Tab') {
			const activeModal = document.querySelector('.modal-overlay.open');

			if (activeModal) {
				event.preventDefault();

				const focusableElements = activeModal.querySelectorAll(
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


	})


}
