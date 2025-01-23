export function togglePasswordVisibility() {
	const toggleButtons = document.querySelectorAll('.btn-hide');

	if (toggleButtons.length > 0) {
		toggleButtons.forEach(button => {
			button.addEventListener('click', () => {
				const passwordInput = button.closest('label').querySelector('input[type="password"], input[type="text"]');
				const eyeIcon = button.querySelector('.btn-eye');
				const eyeCloseIcon = button.querySelector('.btn-eye-close');

				if (passwordInput) {
					if (passwordInput.type === 'password') {
						passwordInput.type = 'text';
						eyeIcon.style.display = 'none';
						eyeCloseIcon.style.display = 'block';
					} else {
						passwordInput.type = 'password';
						eyeIcon.style.display = 'block';
						eyeCloseIcon.style.display = 'none';
					}
				}
			});
		});
	}
}
