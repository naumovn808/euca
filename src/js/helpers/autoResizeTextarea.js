export function autoResizeTextarea() {
	const textareas = document.querySelectorAll('textarea');
	if (!textareas) return

	textareas.forEach(textarea => {
		textarea.style.height = 'auto';
		textarea.style.overflow = 'hidden';

		textarea.addEventListener('input', () => {
			textarea.style.height = 'auto';
			textarea.style.height = `${textarea.scrollHeight}px`;
		});
	});
}
