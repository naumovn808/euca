import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';


export function sliderNews() {
	const swiper = new Swiper(".news-slider", {
		modules: [Autoplay],
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: 3,
		speed: 1500,
	});
}
