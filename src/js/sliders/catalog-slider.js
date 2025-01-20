import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

export function sliderCatalog() {

	const swiper = new Swiper('.catalog-inner__slider', {
		modules: [Autoplay, Navigation],
		slidesPerView: 1,
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 600,

		// breakpoints: {
		// 	1380: {
		// 		slidesPerView: 4,
		// 		slidesPerGroup: 1,
		// 	},
		// 	1080: {
		// 		slidesPerView: 3,
		// 		slidesPerGroup: 1,
		// 	},
		// 	680: {
		// 		slidesPerView: 2,
		// 		slidesPerGroup: 1,
		// 	},
		// 	360: {
		// 		slidesPerView: 1.1,
		// 		slidesPerGroup: 1,
		// 		spaceBetween: 15,
		// 	}
		// },
		navigation: {
			nextEl: '.catalog-btn-right',
			prevEl: '.catalog-btn-left',
		},

	})

}
