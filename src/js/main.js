import("./helpers/browser-detect.js").then(() => {
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
		const { closeDropdown } = await import(/* webpackChunkName: "dropdown" */ "./utils/tabs.js");
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

	if (document.querySelector(".catalog-tabs")) {
		try {
			const { catalogTabs } = await import(/* webpackChunkName: "catalogTabs" */ "./catalog-tabs.js");
			catalogTabs();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".filters")) {
		try {
			const { filtersRange } = await import(/* webpackChunkName: "catalogTabs" */ "./filters-range.js");
			filtersRange();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".catalog-inner__info")) {
		try {
			const { sliderCatalog } = await import(/* webpackChunkName: "sliderCatalog" */ "./sliders/catalog-slider.js");
			sliderCatalog();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".accordions")) {
		try {
			const { accordions } = await import(/* webpackChunkName: "accordions" */ "./helpers/accordeons.js");
			accordions();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.getElementById("myMap")) {
		try {
			const { Map } = await import(/* webpackChunkName: "map" */ "./map/map.js");
			const map = new Map({
				container: document.getElementById("myMap"),
				center: COORDINATES,
				zoom: 15,
				marker: urlPin,
			});

			setTimeout(() => {
				map.init();
			}, 500);
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector('input[type="password"]')) {
		try {
			const { togglePasswordVisibility } = await import(
				/* webpackChunkName: "togglePasswordVisibility" */ "./helpers/toggleVisability.js"
			);
			togglePasswordVisibility();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".modal")) {
		try {
			const { setupModals } = await import(/* webpackChunkName: "setupModals" */ "./modals/modals.js");
			setupModals();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".side-bar")) {
		try {
			const { sideBarLinks } = await import(/* webpackChunkName: "sideBarLinks" */ "./helpers/side-bar-links.js");
			sideBarLinks();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".profile-notifications")) {
		try {
			const { modalNotification } = await import(/* webpackChunkName: "modalNotification" */ "./helpers/modal-notifications.js");
			modalNotification();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector("textarea")) {
		try {
			const { autoResizeTextarea } = await import(/* webpackChunkName: "autoResizeTextarea" */ "./helpers/autoResizeTextarea.js");
			autoResizeTextarea();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".chat-window")) {
		try {
			const { chatScroll } = await import(/* webpackChunkName: "chatScroll" */ "./helpers/chat-scroll.js");
			chatScroll();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".order-info-content")) {
		try {
			const buttonOpen = document.querySelector(".cansel-order-card");
			const buttonClose = document.querySelector(".order-close-btn");
			const buttonCansel = document.querySelector(".order-cansel");
			const modal = document.querySelector(".order-cansel-modal");

			if (buttonOpen && modal) {
				buttonOpen.addEventListener("click", () => {
					modal.classList.add("open");
				});
			}

			if (buttonClose && modal) {
				buttonClose.addEventListener("click", () => {
					modal.classList.remove("open");
				});
			}

			if (buttonCansel && modal) {
				buttonCansel.addEventListener("click", () => {
					modal.classList.remove("open");
				});
			}
		} catch (e) {
			console.error(e);
		}
	}

	if (document.querySelector(".show-info-contacts")) {
		try {
			const { showContacts } = await import(/* webpackChunkName: "showContacts" */ "./helpers/show-contacts.js");
			showContacts();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".search-transport__inner-tabs")) {
		try {
			const { searchTabs } = await import(/* webpackChunkName: "searchTabs" */ "./helpers/search-tabs.js");
			searchTabs();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".nav-menu")) {
		try {
			const { navMenu } = await import(/* webpackChunkName: "navMenu" */ "./helpers/burger-menu.js");
			navMenu();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".catalog-new-members")) {
		try {
			const { membersCard } = await import(/* webpackChunkName: "membersCard" */ "./helpers/members.js");
			membersCard();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".filters")) {
		try {
			const { filtersCard } = await import(/* webpackChunkName: "filtersCard" */ "./helpers/members.js");
			filtersCard();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".side-bar")) {
		try {
			const { profileMenu } = await import(/* webpackChunkName: "profileMenu" */ "./helpers/profile-menu.js");
			profileMenu();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".form-order")) {
		try {
			const { formFilter } = await import(/* webpackChunkName: "formFilter" */ "./helpers/form-filters.js");
			formFilter();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".go-back")) {
		document.querySelector(".go-back").addEventListener("click", (e) => {
			e.preventDefault();
			window.history.back();
		});
	}
	if (document.querySelector("#phone")) {
		const intlTelInput = (await import("intl-tel-input")).default;
		const { ru, en } = await import("intl-tel-input/i18n");
		const input = document.querySelector("#phone");
		const userCountryLang = navigator.language.split("-")[0];
		console.log(navigator);
		intlTelInput(input, {
			loadUtils: async () => await import("intl-tel-input/utils"),
			initialCountry: userCountryLang,
			showSearchBox: false,
			i18n: userCountryLang === "ru" ? ru : en,
		});
	}
}
