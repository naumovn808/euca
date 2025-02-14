export function profileMenu() {
	const btnHeader = document.querySelector('.nav__btn-header');
	const btnProfile = document.querySelector('.nav__btn-profile');
	const sideBar = document.querySelector('.side-bar');

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
