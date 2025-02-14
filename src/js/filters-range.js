export function filtersRange() {
    const minValueInput = document.getElementById('minValue');
    const maxValueInput = document.getElementById('maxValue');
    const minHandler = document.querySelector('.min-hanler');
    const maxHandler = document.querySelector('.max-handler');
    const rangeWrapper = document.querySelector('.range-wrapper');

    const maxLimit = parseInt(maxValueInput.max) + 1;
    const rangeWidth = rangeWrapper.offsetWidth;
    const handlerWidth = minHandler.offsetWidth;

    function updateInputValue(input, handler) {
        const percentage = (handler.offsetLeft / rangeWidth);
        const value = Math.round(percentage * maxLimit);
        input.value = value;

        const changeEvent = new Event('change');
        input.dispatchEvent(changeEvent);
    }


    function setInitialHandlerPositions() {

        const minValue = parseInt(minValueInput.value);
        const maxValue = parseInt(maxValueInput.value);

        const minPosition = (minValue / maxLimit) * rangeWidth;
        minHandler.style.left = `${minPosition}px`;
        updateInputValue(minValueInput, minHandler);

        const maxPosition = (maxValue / maxLimit) * rangeWidth;
        maxHandler.style.left = `${maxPosition}px`;
        updateInputValue(maxValueInput, maxHandler);
    }

    minHandler.addEventListener('pointerdown', (e) => {
        document.addEventListener('pointermove', onMouseMoveMin);
        document.addEventListener('pointerup', onMouseUp);
        minHandler.setPointerCapture(e.pointerId);
    });

    maxHandler.addEventListener('pointerdown', (e) => {
        document.addEventListener('pointermove', onMouseMoveMax);
        document.addEventListener('pointerup', onMouseUp);
        maxHandler.setPointerCapture(e.pointerId);
    });

    function onMouseMoveMin(e) {
        let newLeft = e.clientX - rangeWrapper.getBoundingClientRect().left - handlerWidth * 0.4;
        newLeft = Math.min(maxHandler.offsetLeft - handlerWidth * 0.4, Math.max(0, newLeft));
        minHandler.style.left = `${newLeft}px`;
        updateInputValue(minValueInput, minHandler);
    }

    function onMouseMoveMax(e) {
        let newLeft = e.clientX - rangeWrapper.getBoundingClientRect().left - handlerWidth * 0.4;
        newLeft = Math.max(minHandler.offsetLeft + handlerWidth * 0.4, Math.min(rangeWidth - handlerWidth * 0.6, newLeft));
        maxHandler.style.left = `${newLeft}px`;
        updateInputValue(maxValueInput, maxHandler);
    }


    function onMouseUp(e) {
        document.removeEventListener('pointermove', onMouseMoveMin);
        document.removeEventListener('pointermove', onMouseMoveMax);
        document.removeEventListener('pointerup', onMouseUp);
    }

    setInitialHandlerPositions();
}

