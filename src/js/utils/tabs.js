export const closeDropdown = () => {
    window.addEventListener(`click`, (e) => {
        if (document.querySelector(`details[open]`)) {
            let target = e.target.closest(`details[open]`);

            if (!target && e.target.tagName !== `BUTTON`) {
                document.querySelectorAll(`details[open]`).forEach((item) => {
                    item.removeAttribute(`open`);
                });
            }
        }
    });
};
