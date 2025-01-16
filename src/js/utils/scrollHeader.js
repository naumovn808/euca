export function scrollHeader() {
	const header = document.querySelector(".header");
	if (!header) return;

	let lastScrollTop = 0;

	function handleScroll() {
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

	window.addEventListener("scroll", handleScroll);
	handleScroll();
  }
