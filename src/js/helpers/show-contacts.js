export function showContacts() {

	const showContactsBtns = document.querySelectorAll('.show-contacts_btn');

	if (!showContactsBtns) return

	showContactsBtns.forEach(function (showContactsBtn) {
		const showInfoContactsDiv = showContactsBtn.nextElementSibling;

		if (showContactsBtn && showInfoContactsDiv) {
			showContactsBtn.addEventListener('click', function () {
				showContactsBtn.classList.add('hidden');
				showInfoContactsDiv.classList.add('show');
			});
		}
	});

}
