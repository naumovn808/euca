export function formFilter() {
	const btnHeader = document.querySelector('.form-btn__filters');
	const btnProfile = document.querySelector('.form-order-close');
	const sideBar = document.querySelector('.form-order-goods');

	if (!btnHeader || !sideBar || !btnProfile) return;

	btnHeader.addEventListener('click', (e) => {
		e.preventDefault();
		sideBar.classList.add('open');
	})

	btnProfile.addEventListener('click', (e) => {
		e.preventDefault();
		sideBar.classList.remove('open');
	})
}
