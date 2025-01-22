export function togglePasswordVisibility() {
    const passwordInput = document.querySelector('input[type="password"]');
    const toggleButton = document.querySelector('.btn-hide');

    if (passwordInput && toggleButton) {
        toggleButton.addEventListener('click', () => {
            const eyeIcon = toggleButton.querySelector('.btn-eye');
            const eyeCloseIcon = toggleButton.querySelector('.btn-eye-close');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.style.display = 'none';
                eyeCloseIcon.style.display = 'block';
            } else {
                passwordInput.type = 'password';
                eyeIcon.style.display = 'block';
                eyeCloseIcon.style.display = 'none';
            }
        });
    }
}
