export function catalogTabs() {
	const tabs = document.querySelectorAll('.catalog-tabs button');
	const inputRows = document.querySelectorAll('.input-row');
	const buttonDecor = document.querySelector('.button-decor');

	if (!tabs || !inputRows || !buttonDecor) return;

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			const target = tab.getAttribute('data-tab');

			inputRows.forEach(row => {
				row.style.display = row.getAttribute('data-input') === target ? 'flex' : 'none';
			});

			tabs.forEach(button => button.classList.remove('active'));
			tab.classList.add('active');


			const tabRect = tab.getBoundingClientRect();
			const tabsRect = tab.parentNode.getBoundingClientRect();

			buttonDecor.style.width = `${tabRect.width}px`;
			buttonDecor.style.transform = `translateX(${tabRect.left - tabsRect.left}px)`;
		});
	});


	inputRows.forEach(row => row.style.display = 'none');
	const firstTab = tabs[0];
	firstTab.classList.add('active');
	document.querySelector(`.input-row[data-input="${firstTab.getAttribute('data-tab')}"]`).style.display = 'flex';

	const firstTabRect = firstTab.getBoundingClientRect();
	const tabsRect = firstTab.parentNode.getBoundingClientRect();
	buttonDecor.style.width = `${firstTabRect.width}px`;
	buttonDecor.style.height = `${firstTabRect.height}px`;
	buttonDecor.style.transform = `translateX(${firstTabRect.left - tabsRect.left}px)`;
}
