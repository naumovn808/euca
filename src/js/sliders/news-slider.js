import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';


export function sliderNews() {
	const swiper = new Swiper(".news-slider", {
		modules: [Autoplay],
		loop: true,
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

		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: 3,
		speed: 1500,
	});
}
