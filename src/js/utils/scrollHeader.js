export function scrollHeader() {
	const header = document.querySelector(".header");
	if (!header) return;

	let lastScrollTop = 0;

	function handleScroll() {

	  if (window.innerWidth <= 999) {

		return;
	  }

	  const currentScroll = window.scrollY || document.documentElement.scrollTop;
	  const headerHeight = header.offsetHeight;

	  if (currentScroll > headerHeight / 2) {
		if (currentScroll > lastScrollTop) {
		  header.classList.add("header-hide");
		  header.classList.remove("scroll-header");

		  document.querySelectorAll(`details[open]`).forEach((item) => {
			item.removeAttribute(`open`);
		  });
		} else {
		  header.classList.remove("header-hide");
		  header.classList.add("scroll-header");
		}
	  } else {
		header.classList.remove("header-hide", "scroll-header");
	  }

	  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
	}

	function updateScrollListener() {
	  if (window.innerWidth > 999) {
		window.addEventListener("scroll", handleScroll);
		handleScroll();
	  } else {
		window.removeEventListener("scroll", handleScroll);
		header.classList.remove("header-hide", "scroll-header");
	  }
	}
	updateScrollListener();
	window.addEventListener("resize", updateScrollListener);
  }
