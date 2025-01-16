import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function sliderReviews() {


	const swiper = new Swiper('.reviews__slider', {
		modules: [Navigation],
		slidesPerView: 3,
		loop: true,
		speed: 800,
		navigation: {
			nextEl: '.reviews__btn-right',
			prevEl: '.reviews__btn-left',
		},

	})
}
