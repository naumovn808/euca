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
	if (document.querySelector(".main-head__slider")) {
		try {
			const { mainHeadSlider } = await import(/* webpackChunkName: "main-head-slider" */ "./sliders/main-head__slider.js");
			window.addEventListener("load", () => {
				mainHeadSlider();
			});
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".header")) {
		try {
			const { scrollHeader } = await import(/* webpackChunkName: "scroll-header" */ "./utils/scroll-header.js");
			scrollHeader();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".header")) {
		try {
			const { navMenu } = await import(/* webpackChunkName: "navMenu" */ "./animations/nav-menu.js");
			navMenu();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".catalog")) {
		try {
			const { catalogSlides } = await import(/* webpackChunkName: "catalogSlides" */ "./animations/catalog.js");
			catalogSlides();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".service")) {
		try {
			const { animateService } = await import(/* webpackChunkName: "animateService" */ "./animations/service.js");
			animateService();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".interior")) {
		try {
			const { interiorSlider } = await import(/* webpackChunkName: "interiorSlider" */ "./sliders/interiors.js");
			interiorSlider();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector("form")) {
		try {
			const { setSizeArea } = await import(/* webpackChunkName: "setSizeArea" */ "./helpers/textarea-size.js");
			setSizeArea();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}


	if (document.querySelector(".product-slide-desc")) {
		try {
			const { productSlider } = await import(/* webpackChunkName: "productSlider" */ "./sliders/product__slider.js");
			productSlider();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".product-slide-mobile")) {
		try {
			const { productSliderMobile } = await import(/* webpackChunkName: "productSliderMobile" */ "./sliders/product__slider.js");
			productSliderMobile();
		} catch (e) {
			console.error("Error loading module", e);
		}

		try {
			const { Fancybox } = await import(/* webpackChunkName: "Fancybox" */ "@fancyapps/ui");

			Fancybox.bind(document.getElementById("slides-gallery"), "[data-fancybox]", {
				wheel: "wheel",
				on: {
					done: (fancybox) => {
					  document.querySelector(".fancybox__container").style.backgroundColor = "gray";
					},
				  },
			});


		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".product-tabs")) {
		try {
			const { productTabs } = await import(/* webpackChunkName: "productTabs" */ "./utils/tabs.js");
			productTabs();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".product-video")) {
		try {
			const { videoModal } = await import(/* webpackChunkName: "videoModal" */ "./utils/video-modal.js");
			videoModal();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}

	if (document.querySelector(".advantages-video-container")) {
		try {
			const { playVideo } = await import(/* webpackChunkName: "playVideo" */ "./utils/video-modal.js");
			playVideo();
		} catch (e) {
			console.error("Error loading module", e);
		}
	}
}
