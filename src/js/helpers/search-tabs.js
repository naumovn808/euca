export function searchTabs() {
	const tabButtons = document.querySelectorAll('.search-tab__btn');
	const tabContents = document.querySelectorAll('.search-tab');

	if (!tabButtons || !tabContents) return;

	function hideAllTabs() {
		tabContents.forEach(tab => tab.classList.remove('show'));
		tabButtons.forEach(button => button.classList.remove('show'));
	}

	function showTab(tabName) {
		hideAllTabs();

		const selectedTab = document.querySelector(`.search-tab[data-search-tabs="${tabName}"]`);
		if (selectedTab) {
			selectedTab.classList.add('show');
		}

		const selectedButton = document.querySelector(`.search-tab__btn[data-search-tabs="${tabName}"]`);
		if (selectedButton) {
			selectedButton.classList.add('show');
		}
	}

	tabButtons.forEach(button => {
		button.addEventListener('click', function () {
			showTab(button.dataset.searchTabs);
		});
	});

	if (tabButtons.length > 0) {
		showTab(tabButtons[0].dataset.searchTabs);
	}
}
