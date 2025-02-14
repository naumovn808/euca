import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

export function sliderCatalog() {

	const swiper = new Swiper('.catalog-inner__slider', {
		modules: [Autoplay, Navigation],
		slidesPerView: 'auto',
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 600,

		navigation: {
			nextEl: '.catalog-btn-right',
			prevEl: '.catalog-btn-left',
		},

	})

}
