import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function sliderReviews() {


	const swiper = new Swiper('.reviews__slider', {
		modules: [Navigation],
		slidesPerView: 3,
		loop: true,
		speed: 800,
		autoHeight: true,
		breakpoints: {

			1080: {
				slidesPerView: 3,
				slidesPerGroup: 1,
			},
			580: {
				slidesPerView: 2,
				slidesPerGroup: 1,
			},
			360: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 15,
			}
		},
		navigation: {
			nextEl: '.reviews__btn-right',
			prevEl: '.reviews__btn-left',
		},

	})
}
