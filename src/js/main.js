import('./helpers/browser-detect.js').then(() => {
	BrowserDetect.init();
});

document.addEventListener("DOMContentLoaded", () => {
	init();
	setSize();
});

function setSize() {
	const windowWidth = window.innerWidth;

	if (windowWidth > 999) return;

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty(`--vh`, `${vh}px`);
}

async function init() {
	if (document.querySelector(`details`)) {
		const { closeDropdown } = await import( /* webpackChunkName: "dropdown" */  './utils/tabs.js');
		closeDropdown();
	}

	if (document.querySelector(".header")) {
		try {
			const { scrollHeader } = await import(/* webpackChunkName: "scroll-header" */ "./utils/scrollHeader.js");
			scrollHeader();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".news")) {
		try {
			const { sliderNews } = await import(/* webpackChunkName: "sliderNews" */ "./sliders/news-slider.js");
			sliderNews();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".reviews")) {
		try {
			const { sliderReviews } = await import(/* webpackChunkName: "sliderReviews" */ "./sliders/reviews-slider.js");
			sliderReviews();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector('.catalog-tabs')) {
		try {
			const { catalogTabs } = await import(/* webpackChunkName: "catalogTabs" */ "./catalog-tabs.js");
			catalogTabs();

		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector('.filters-range')) {
		try {
			const { filtersRange } = await import(/* webpackChunkName: "catalogTabs" */ "./filters-range.js");
			filtersRange();

		} catch (e) {
			console.error("Error loading module", e);
		}
	}

}
