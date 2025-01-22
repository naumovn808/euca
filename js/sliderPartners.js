"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["sliderPartners"],{

/***/ "./sliders/partners.js":
/*!*****************************!*\
  !*** ./sliders/partners.js ***!
  \*****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderPartners: function() { return /* binding */ sliderPartners; }
/* harmony export */ });

function sliderPartners() {
  const sliderTopContainer = document.querySelector(".partner-slider__top .swiper-wrapper");
  const sliderBottomContainer = document.querySelector(".partner-slider__bottom .swiper-wrapper");
  const prevBtn = document.querySelector(".partners-btn__prev");
  const nextBtn = document.querySelector(".partners-btn__next");
  function getMinSlidesCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1980) return 7;
    if (screenWidth >= 1280) return 6;
    if (screenWidth >= 980) return 5;
    if (screenWidth >= 768) return 4;
    return 3;
  }
  let minSlidesCount = getMinSlidesCount();
  let slidesTop = Array.from(sliderTopContainer.children);
  let slidesBottom = Array.from(sliderBottomContainer.children);
  if (slidesTop.length < minSlidesCount || slidesBottom.length < minSlidesCount) {
    console.warn("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u043B\u0430\u0439\u0434\u043E\u0432 \u0434\u043B\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u0430");
    return;
  }
  let slideWidthTop = slidesTop[0].offsetWidth + parseFloat(getComputedStyle(slidesTop[0]).marginRight);
  let slideWidthBottom = slidesBottom[0].offsetWidth + parseFloat(getComputedStyle(slidesBottom[0]).marginRight);
  let isAnimatingTop = false;
  let isAnimatingBottom = false;
  function updateSlider(sliderElement, currentIndex, slideWidth) {
    sliderElement.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
  function cloneSlides(sliderElement, direction, slides) {
    if (direction === "next") {
      const firstClone = slides[0].cloneNode(true);
      sliderElement.appendChild(firstClone);
    } else if (direction === "prev") {
      const lastClone = slides[slides.length - 1].cloneNode(true);
      sliderElement.insertBefore(lastClone, slides[0]);
      const slideWidth = sliderElement === sliderTopContainer ? slideWidthTop : slideWidthBottom;
      sliderElement.style.transform = `translateX(-${slideWidth}px)`;
    }
  }
  function updateSlidesArray(sliderElement) {
    if (sliderElement === sliderTopContainer) {
      slidesTop = Array.from(sliderTopContainer.children);
    } else {
      slidesBottom = Array.from(sliderBottomContainer.children);
    }
  }
  function updateSlideWidth(sliderElement) {
    if (sliderElement === sliderTopContainer) {
      slideWidthTop = slidesTop[0].offsetWidth + parseFloat(getComputedStyle(slidesTop[0]).marginRight);
    } else {
      slideWidthBottom = slidesBottom[0].offsetWidth + parseFloat(getComputedStyle(slidesBottom[0]).marginRight);
    }
  }
  function moveSlider(sliderElement, direction, isAnimatingVariable, slidesVariable, slideWidthVariable, setAnimatingFlag) {
    if (isAnimatingVariable) return;
    setAnimatingFlag(true);
    let currentIndex = 0;
    cloneSlides(sliderElement, direction, slidesVariable);
    updateSlideWidth(sliderElement);
    if (direction === "prev") {
      currentIndex = -1;
    }
    sliderElement.style.transition = "transform 0.5s ease-in-out";
    updateSlider(sliderElement, direction === "next" ? 1 : 0, slideWidthVariable);
    setTimeout(() => {
      if (direction === "next") {
        sliderElement.removeChild(slidesVariable[0]);
      } else if (direction === "prev") {
        sliderElement.removeChild(slidesVariable[slidesVariable.length - 1]);
      }
      updateSlidesArray(sliderElement);
      updateSlideWidth(sliderElement);
      sliderElement.style.transition = "none";
      updateSlider(sliderElement, 0, slideWidthVariable);
      setAnimatingFlag(false);
    }, 500);
  }
  function moveTopSlider(direction) {
    moveSlider(sliderTopContainer, direction, isAnimatingTop, slidesTop, slideWidthTop, (value) => isAnimatingTop = value);
  }
  function moveBottomSlider(direction) {
    moveSlider(sliderBottomContainer, direction, isAnimatingBottom, slidesBottom, slideWidthBottom, (value) => isAnimatingBottom = value);
  }
  function handleSliderMove(direction) {
    moveTopSlider(direction);
    moveBottomSlider(direction === "next" ? "prev" : "next");
  }
  nextBtn.addEventListener("click", () => {
    handleSliderMove("next");
  });
  prevBtn.addEventListener("click", () => {
    handleSliderMove("prev");
  });
  updateSlider(sliderTopContainer, 0, slideWidthTop);
  updateSlider(sliderBottomContainer, 0, slideWidthBottom);
}


/***/ })

}]);
//# sourceMappingURL=sliderPartners.js.map