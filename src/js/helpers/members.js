export function membersCard() {

	const catalogNewMembers = document.querySelector('.catalog-new-members');
	const membersTitle = document.querySelector('.members-title');
	const filtersWrapper = document.querySelector('.filters-wrapper');

	if (catalogNewMembers && membersTitle && filtersWrapper) {
	  membersTitle.addEventListener('click', () => {
		catalogNewMembers.classList.toggle('open');

		if (filtersWrapper.classList.contains('open')) {
		  filtersWrapper.classList.remove('open');
		}
	  });
	}
  }

  export function filtersCard() {

	const filtersWrapper = document.querySelector('.filters-wrapper');
	const filtersTitle = document.querySelector('.filters-title');
	const catalogNewMembers = document.querySelector('.catalog-new-members');

	if (filtersWrapper && filtersTitle && catalogNewMembers) {
	  filtersTitle.addEventListener('click', () => {
		filtersWrapper.classList.toggle('open');

		if (catalogNewMembers.classList.contains('open')) {
		  catalogNewMembers.classList.remove('open');
		}
	  });
	}
  }
