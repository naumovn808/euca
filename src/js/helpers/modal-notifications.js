export function modalNotification() {
	const profileNotifications = document.querySelector('.profile-notifications');
	const notificationsModal = document.querySelector('.notifications-modal');
	const notificationsModalBtn = document.querySelector('.notifications-modal__btn');

	if (!profileNotifications || !notificationsModal || !notificationsModalBtn) return

	function openModal() {
		profileNotifications.classList.add('open');
		notificationsModal.classList.add('open');
	}

	function closeModal() {
		profileNotifications.classList.remove('open');
		notificationsModal.classList.remove('open');
	}

	profileNotifications.addEventListener('click', openModal);

	notificationsModalBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		closeModal();
	  });

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && profileNotifications.classList.contains('open')) {
			closeModal();
		}
	});

	document.addEventListener('click', (event) => {
		if (profileNotifications.classList.contains('open') && !profileNotifications.contains(event.target) && !notificationsModal.contains(event.target)) {
			closeModal();
		}
	});




}
