export function accordions() {
	const accordionsContainer = document.querySelector('.accordions');
	if (!accordionsContainer) return;

	const accordionCards = Array.from(accordionsContainer.querySelectorAll('.accordions-card'));

	function closeAllAccordions(currentCard) {
		accordionCards.forEach(card => {
			if (card !== currentCard && card.classList.contains('open')) {
				card.classList.remove('open');
			}
		});
	}

	function toggleAccordion(card) {
		closeAllAccordions(card);
		if (card.classList.contains('open')) {
			card.classList.remove('open');
		} else {
			card.classList.add('open');
		}
	}

	accordionCards.forEach(card => {
		card.addEventListener('click', () => toggleAccordion(card));
	});
}
